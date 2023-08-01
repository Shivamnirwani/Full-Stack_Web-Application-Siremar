<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\adminController;
use App\Http\Controllers\contactController;
use App\Http\Controllers\inspectorController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\residentController;
use App\Http\Controllers\registerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login',[loginController::class, 'login']);
Route::post('register_emp',[registerController::class, 'register']);
Route::post('register_res',[registerController::class, 'register']);
Route::post('contact_us',[contactController::class, 'contact_us']);
Route::post('update_register_res',[inspectorController::class, 'inspector']);
Route::post('update_register_emp',[adminController::class, 'admin']);
Route::get('login',[loginController::class, 'login']);
Route::get('load_table_events',[inspectorController::class, 'inspector']);
Route::get('load_table_family',[adminController::class, 'admin']);
Route::get('load_table_events',[adminController::class, 'admin']);
Route::get('load_pie_business',[adminController::class, 'admin']);
Route::get('load_table_business',[adminController::class, 'admin']);
Route::get('load_table_family',[inspectorController::class, 'inspector']);
Route::get('load_pie_family',[adminController::class, 'admin']);
