<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Tasks;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function helloWorld(Request $request){ 
        $fullName = $request->input('name');
        $arrayOfNames = explode(" ", $fullName);
        $fullNameFromArray = implode(" ", $arrayOfNames);
        return $fullNameFromArray;
    }

    public function getTasks(){
        $tasks = Tasks::all();
        return $tasks;
    }


}
