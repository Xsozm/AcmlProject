<?php
use Illuminate\Support\Facades\Redis ;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/test',function(){
  $redis = Redis::connection();
  $redis->publish('message',json_encode(['notified_id'=>1 ,'notifier_id' =>2 ,'state'=>1]));
  return 'published';

});

Route::get('/activate/{token}','AuthController@activate');
