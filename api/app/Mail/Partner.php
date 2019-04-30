<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Partner extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $contacts;
    public $documents;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $contacts, $documents)
    {
        $this->name = $name;
        $this->contacts = $contacts;
        $this->documents = $documents;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $documents = $this->documents;
        $message =  $this->markdown('emails/partner')->subject('Заяўка на партнёрства');
        foreach ($documents as $attach) {
            $message->attach($attach);
        }
        return $message;
    }
}
