<?php
    //database credencials
    $db_server_name="localhost";
    $db_username=getenv('DB_USER');
    $db_password=getenv('DB_PASSWORD');
    $db_name="webdvxms_WebDevChat";

    $mysqli = new mysqli($db_server_name, $db_username, $db_password, $db_name);

    if($mysqli -> connect_errno) {
        $response['db_err'] = "Could not connect to database at the moment.<br>Please try again later.";
        echo json_encode($response);
        exit();
    }
?>