<?php
class Connection{
    public function getConnection(){
        $server = "localhost";
        //$con = new PDO("mysql:host=$server;dbname=abcd","root","");
        $con = new PDO("mysql:host=$server;dbname=abcd","abcd","pass");
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $con;
    }
}
?>