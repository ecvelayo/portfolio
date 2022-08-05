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
        $tasks = Tasks::where('deleted', 0);
        return $tasks;
    }

    public function postTask(Request $request){
        $this->validate($request, [
            'task' => 'required',
        ]);

        $task = new Tasks;
        $task->tasks = $request->input('task');
        $task->save();
        return response()->json($task, 200);
    }

    public function deleteTask(Request $request){ 
        // $data = Tasks::find($request->input('id'))->delete();
        // return response()->json($data);
        $data = Tasks::find($request->input('id'));
        $data->deleted = 1;
        $data->save();
        return response()->json($data);
    }

    public function updateTask(Request $request){
        $data = Tasks::find($request->input('id'));
        $data->tasks = $request->input('task');
        $data->save();
        return response()->json($data);
    }


}
