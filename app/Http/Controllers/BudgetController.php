<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BudgetController extends Controller {

    public function __construct() {
      //  $this->middleware('auth');
    }

    public function index() {
       return response()
            ->json(array(
            'token'=>csrf_token(),    
            'page' => 1,
            'per_page' => 3,
            'total' => 12,
            'total_pages' => 4,
            'data' =>
            array(
                0 =>
                array(
                    'id' => 1,
                    'first_name' => 'George',
                    'last_name' => 'Bluth',
                    'avatar' => 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
                ),
                1 =>
                array(
                    'id' => 2,
                    'first_name' => 'Janet',
                    'last_name' => 'Weaver',
                    'avatar' => 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
                ),
                2 =>
                array(
                    'id' => 3,
                    'first_name' => 'Emma',
                    'last_name' => 'Wong',
                    'avatar' => 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
                ),
            ),
        ));
//return view('home');
    }

}
