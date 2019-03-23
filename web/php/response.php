<?php
require_once './word_with_db.php';
$work_db = new work_with_db();
if($_POST['country']!=''){
    $answer = $work_db->Set_db($_POST['country']);
    echo $answer;
}
else{
    echo "Пустое поле";
}
?>