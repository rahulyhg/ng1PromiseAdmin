<?php
/**
 * Created by PhpStorm.
 * User: mr.whg
 * Date: 2017/6/16
 * Time: 9:05
 */


$applyDetail = fopen("./data/applyDetail.json", "r") or die("Unable to open file!");
echo fread($applyDetail,filesize("./data/applyDetail.json"));
fclose($applyDetail);

?>