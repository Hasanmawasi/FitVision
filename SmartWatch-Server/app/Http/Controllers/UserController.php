<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
   public function getUsers(){
    $user = ["userid"=>1];
    return response()->json([
        'success' => true,
        'user' =>$user ,

    ]);
   }
}
