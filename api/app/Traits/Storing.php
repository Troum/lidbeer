<?php


namespace App\Traits;


use App\Attachments;
use App\Jobs\SendPartnerJob;
use App\Partner;
use Carbon\Carbon;
use ElForastero\Transliterate\Facade;

trait Storing
{

    public function saveAttachments($request, $partition, $partitionIdField, $partitionAttachmentField, $rootDirectory, $nestedDirectory,  string ...$files)
    {
        $attachments = [];

        foreach ($request->file($files) as $document)
        {
            $name = uniqid('doc_') . '.' . $document->getClientOriginalExtension();

            $document->move(public_path($rootDirectory . '/' . $nestedDirectory . '/' . Facade::slugify($partition->name)), $name);

            array_push($attachments,public_path($rootDirectory . '/' . $nestedDirectory . '/' . Facade::slugify($partition->name) . '/' . $name));

            Attachments::create([
                $partitionIdField . '_id' => $partition->id,
                $partitionAttachmentField . '_attachment' => $name
            ]);

        }

        return $attachments;
    }

    private function savePartner($request)
    {
        $partner = Partner::create([
            'name' => $request->name,
            'contacts' => $request->contacts
        ]);

        $attachments = $this->saveAttachments($request, $partner, 'partner','partner','documents','partner','documents');

        $job = (new SendPartnerJob($partner->name, $partner->contacts, $attachments))->delay(Carbon::now()->addSeconds(3));

        dispatch($job);
    }

}
