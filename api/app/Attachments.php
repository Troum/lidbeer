<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachments extends Model
{
    protected $fillable = [
        'partner_id',
        'band_id',
        'food_id',
        'craft_id',
        'game_id',
        'partner_attachment',
        'band_attachment',
        'craft_attachment',
        'food_attachment',
        'game_attachment'
    ];

    protected function partner()
    {
        return $this->belongsTo(Partner::class);
    }
}
