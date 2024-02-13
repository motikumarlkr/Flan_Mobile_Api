<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ClientlistController;
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
    return redirect('/login');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'] )->name('home');
Route::get('/dashboard', [HomeController::class, 'dashboard'] );
Route::get('/clintlist', [ClientlistController::class, 'index'] );

// Route::get('logs', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index'])->middleware('authuser');
Route::match(['get', 'post'], '/{controller}/{action?}/{params?}', function ($controller, $action = 'index', $params = '') {
   
    $params     = explode('/', $params);
    $app        = app();
    $controller = $app->make("\App\Http\Controllers\\" . ucwords($controller) . 'Controller');
    return $controller->callAction($action, $params);
})->where('params', '[A-Za-z0-9./]+')->middleware('authuser'); 


 Route::match(['get','post'],'/ajax/{action}', function ($action) {
    
        $app = app();
        $controller = $app->make("\App\Http\Controllers\AjaxController" );
        return $controller->callAction($action, []);

    })->where('params', '[A-Za-z0-9/]+')->middleware('authuser');


