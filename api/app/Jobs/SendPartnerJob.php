<?php

namespace App\Jobs;

use App\Mail\Partner;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;

class SendPartnerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $name;
    protected $contacts;
    protected $attachments;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($name, $contacts, $attachments)
    {
        $this->name = $name;
        $this->contacts = $contacts;
        $this->attachments = $attachments;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $emails = array('prokopchik@fcb.by', 'gutkovski@fcb.by');
        Mail::to($emails)->send(new Partner($this->name, $this->contacts, $this->attachments));
    }
}
