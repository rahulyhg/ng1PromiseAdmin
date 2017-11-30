<?php
/**
 * Created by PhpStorm.
 * User: mr.whg
 * Date: 2017/6/16
 * Time: 9:00
 */



$data = $_GET['APPLY'];

$applyDetail = fopen("./data/applyDetail22.json", "w") or die("Unable to open file!");

fwrite($applyDetail, $data);
echo 'ok';
fclose($applyDetail);

?>