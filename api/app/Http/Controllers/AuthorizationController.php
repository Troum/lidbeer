<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthorizationController extends Controller
{
    protected function register(Request $request)
    {
        return response()->json(['success' => $request->all()], Response::HTTP_OK);
    }
}
