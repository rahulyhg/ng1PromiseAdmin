<?php
/**
 * Created by PhpStorm.
 * User: mr.whg
 * Date: 2017/6/16
 * Time: 11:53
 */


$users = fopen("./data/users.json", "r") or die("Unable to open file!");
echo fread($users,filesize("./data/users.json"));
fclose($users);
?>