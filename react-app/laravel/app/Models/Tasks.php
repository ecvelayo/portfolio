<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    // Table Name
    protected $table = 'timestamps';

    public $tasks = 'tasks';

    public $createdAt = 'createdAt';
}
