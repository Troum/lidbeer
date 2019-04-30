<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = [
        'name', 'contacts'
    ];

    protected function attachments()
    {
        return $this->hasMany(Attachments::class);
    }
}
