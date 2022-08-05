<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    // Table Name
    protected $table = 'timestamps';

    protected $fillable = ['tasks', 'deleted'];

    public $timestamps = true;
}
