<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ClientlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('clientlist.create');
     
        }


}
