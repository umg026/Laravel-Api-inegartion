<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  public function signup(Request $request)
  {
    $validateUser = Validator::make(
      $request->all(),
      [
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required',
      ]
    );

    if ($validateUser->fails()) {
      return response()->json([
        'status' => false,
        'message' => 'validation error',
        'errors' => $validateUser->errors()->all()
      ], 401);
    } else {
      $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);
      // if sucess to store data in db then show this status
      return response()->json([
        'status' => true,
        'message' => 'User created successfully',
        'user' => $user,
      ], 201);
    }
  }

  public function Login(Request $request)
  {
    $validateUser = Validator::make(
      $request->all(),
      [
        'email' => 'required|email',  // No need for 'unique' check during login
        'password' => 'required',
      ]
    );

    if ($validateUser->fails()) {
      return response()->json([
        'status' => false,
        'message' => 'Validation error',
        'errors' => $validateUser->errors()->all(),
      ], 400);  // 400 Bad Request for validation errors
    }

    // Check user credentials
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
      $authUser = Auth::user();

      // Generate token
      return response()->json([
        'status' => true,
        'message' => 'Login successful',
        'token' => $authUser->createToken('Api Token')->plainTextToken,
        'token_type' => 'bearer',
      ], 200);  // 200 OK for success
    } else {
      // Invalid credentials response
      return response()->json([
        'status' => false,
        'message' => 'Email or Password is incorrect',
      ], 401);  // 401 Unauthorized for incorrect credentials
    }
  }

  public function Logout(Request $request)
  {
    $user = $request->user();
    $user->tokens()->delete();

    return response()->json([
      'status' => true,
      'message' => 'logout success',
    ], 200);
  }
}
