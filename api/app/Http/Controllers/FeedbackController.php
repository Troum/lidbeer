<?php

namespace App\Http\Controllers;

use App\Jobs\SendMessageJob;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Traits\Storing;
class FeedbackController extends Controller
{
    use Storing;

    public function feedbackMessage(Request $request)
    {
        $job = (new SendMessageJob($request->name, $request->email, $request->phone, $request->message))->delay(Carbon::now()->addSeconds(3));
        dispatch($job);
        return response()
          ->json(['success' => 'Вашае паведамленне паспяхова адпраўлена'], Response::HTTP_OK);
    }

    public function feedbackPartner(Request $request)
    {
        try {
            $this->savePartner($request);
            return response()
                ->json(['success' => 'Вашае паведамленне паспяхова адпраўлена'], Response::HTTP_OK);
        } catch (\Exception $exception) {
            return response()->json(['error' => 'На сэрвэры адбылася памылка. Мы вырашым яе у бліжэйшы час'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }


}
