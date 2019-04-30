<?php

namespace App\Jobs;

use App\Mail\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;

class SendMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $name;
    protected $email;
    protected $phone;
    protected $feedback;

    /**
     * Create a new job instance.
     *
     * @param $request
     */
    public function __construct($name, $email, $phone, $feedback)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->feedback = $feedback;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $emails = array('nikanovich@fcb.by','zaiceva@fcb.by','gutkovski@fcb.by','boyarovich@fcb.by','pivo@lidskoe.by');
        Mail::to($emails)->send(new Message($this->name, $this->email, $this->phone, $this->feedback));
    }
}
