<?php

Route::group([

    'middleware' => 'api',
    // 'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('registrar', 'AuthController@registrar');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
