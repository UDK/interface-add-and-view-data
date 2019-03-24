<?php

class work_with_db
{
    private $config;
    private $db_connect;

    public function __construct()
    {

        if (!@include_once('./config/config.php'))
        {
            die('File with config not found');
        }
        else
        {
            $this->config = @include('./config/config.php');
            $this->Connect();
        }
    }

    private function Connect()
    {
        try
        {
            $dns = 'mysql:host=' . $this->config['host'] . ';dbname=' . $this->config['db_name'];
            $this->db_connect = new PDO($dns, $this->config['username'], $this->config['password']);
        }
        catch (PDOException $e)
        {
            echo "Невозможно подключиться к серверу";
            die();
        }
    }

    public function Get_db()
    {
        $request = 'SELECT * FROM country';
        $data = $this->db_connect->query($request);
        return $data->fetchAll();
    }

    public function Set_db($country)
    {
        $state_handle = $this->db_connect->prepare("INSERT INTO country (Country) VALUES (:country)");
        $state_handle->bindParam(':country', $country);
        $state_handle->execute();
        return 'Страна добавлена';
    }
}

?>