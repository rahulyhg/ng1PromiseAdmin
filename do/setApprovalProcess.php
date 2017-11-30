<?php
/**
 * Created by PhpStorm.
 * User: mr.whg
 * Date: 2017/6/16
 * Time: 15:30
 */

$data = $_GET['params'];

$approvalProcess = fopen("./data/approvalProcess.json", "w") or die("Unable to open file!");

fwrite($approvalProcess, $data);
echo 'set approvalProcess ok';
fclose($approvalProcess);

?>