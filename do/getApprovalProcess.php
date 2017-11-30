<?php
/**
 * Created by PhpStorm.
 * User: mr.whg
 * Date: 2017/6/16
 * Time: 15:29
 */

$approvalProcess = fopen("./data/approvalProcess.json", "r") or die("Unable to open file!");
echo fread($approvalProcess,filesize("./data/approvalProcess.json"));
fclose($approvalProcess);
?>