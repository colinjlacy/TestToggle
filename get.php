<?php

   $data[] = array(
               'published' => "true"
           );


    $result = "{\"success\":true, \"data\": ". json_encode($data) . "}";


    header("Access-Control-Allow-Origin: *");

    echo($result);

?>