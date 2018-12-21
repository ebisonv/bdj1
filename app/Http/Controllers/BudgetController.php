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
                            'token' => csrf_token(),
                            'data' =>
                            [
                                0 =>
                                [
                                    'id' => 1,
                                    'name' => 'Credit Card Payments',
                                    'budgeted' => 10,
                                    'activity' => 10,
                                    'available' => 12,
                                    'sub' => []
                                ],
                                1 =>
                                [
                                    'id' => 2,
                                    'name' => 'True Expenses',
                                    'budgeted' => 10,
                                    'activity' => 10,
                                    'available' => 12,
                                    'sub' => [
                                        0 => [
                                            'id' => 3,
                                            'name' => 'Auto Maintanence',
                                            'budgeted' => 10,
                                            'activity' => 10,
                                            'available' => 12
                                        ],
                                        1 => [
                                            'id' => 4,
                                            'name' => 'Home Maintanence',
                                            'budgeted' => 10,
                                            'activity' => 10,
                                            'available' => 12
                                        ]
                                    ]
                                ],
                                2 => ['id' => 5,
                                    'name' => 'Debit Payments',
                                    'budgeted' => 10,
                                    'activity' => 10,
                                    'available' => 12,
                                    'sub' => [
                                        0 => [
                                            'id' => 6,
                                            'name' => 'Auto Maintanence',
                                            'budgeted' => 10,
                                            'activity' => 10,
                                            'available' => 12
                                        ]
                                    ]
                                ]],
        ));
//return view('home');
    }

}
