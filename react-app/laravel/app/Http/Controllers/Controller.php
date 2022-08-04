<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Tasks;
use Carbon\Carbon;

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

    public function postTask(Request $request){
        $this->validate($request, [
            'task' => 'required',
        ]);

        $task = new Tasks;
        $task->tasks = $request->input('task');
        $task->createdAt = Carbon::now();
        $task->save();
        return response()->json($task, 200);
    }

    public function deleteTask(Request $request){ 
        $data = Tasks::where('tasks', $request->input('tasks'))->delete();
        return response()->json($data);
    }


}
