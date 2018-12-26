<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/category','Api\CategoryController@index');
Route::post('/save-category','Api\CategoryController@SaveCategory');
Route::get('/delete-category/{category_id}','Api\CategoryController@DeleteCategory');
Route::get('/edit-category/{id}','Api\CategoryController@EditCategory');
Route::put('/update-category/{id}','Api\CategoryController@UpdateCategory');
