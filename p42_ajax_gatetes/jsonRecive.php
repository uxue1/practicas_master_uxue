<?php
    $dataFront = file_get_contents('php://input');


    if($dataFront){
        $jsonObject = json_encode($dataFront);
        echo $jsonObject;
    }

?>
