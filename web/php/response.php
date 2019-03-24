<?php
require_once './word_with_db.php';
$work_db = new work_with_db();
if ($_POST['country'] != '')
{
    $answer = $work_db->Set_db($_POST['country']);
    echo $answer;
}
elseif ($_POST['act' == true])
{
    echo "Пустое поле";
}
if ($_GET['switch'] == true)
{
    $bd = $work_db->Get_db();
    $arr_country = array();
    for ($i = 0; $i < count($bd); $i++)
    {
        $arr_country += array($i => $bd[$i]['Country']);
    }
    echo json_encode($arr_country);
}
?>