<?php

    $url = 'https://reqres.in/api/users';
    $curl = curl_init();

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $res = curl_exec($curl);
    
    $jsonData = json_decode($res);
    
    foreach($jsonData->data as $user){
        
        /* echo "<pre>";
        var_dump($user);
        echo '</pre>'; */

        echo "<h3>$user->email</h3>";
    }




?>