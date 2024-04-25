<?php


use Company\Jobs\Controllers\JobController;
use Company\Auth\Controllers\AuthController;
use App\Events\NewThingAvailable;
use Carbon\Carbon;
use Company\Organizations\Controllers\OrganizationController;
use Company\Profile\Controllers\ProfileController;
use Company\Profile\Controllers\ProfileInvitationController;
use Company\RolesAndPermissions\Controllers\PermissionGroupController;
use Company\RolesAndPermissions\Controllers\RoleController;
use Company\Users\Controllers\UserController;
use Company\Users\Controllers\UserInviteController;
use Domain\Admin\Controllers\SignedStorageUrlController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('/login',[AuthController::class,'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {




});

Route::middleware(['auth:sanctum', 'password.confirm'])
    ->post('/test-password-confirm', function (Request $request) {
        response();
    });

Route::get('/broadcast', function () {
    NewThingAvailable::dispatch('works');
});

Route::post('/signed-storage-url ', [SignedStorageUrlController::class, 'store']);
Route::middleware(['auth:user'])->post('/test-upload', function () {
    return response()->json(['message' => 'upload successful']);
});




