<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BudgetController extends Controller
{
     public function __construct()
    {
        $this->middleware('auth');
    }
   public function index()
    {
      echo "abc" ; 
//return view('home');
    }
}
