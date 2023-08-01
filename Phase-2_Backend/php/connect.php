<?php
class Connection{
    public function getConnection(){
        $server = "localhost";

        //$con = new PDO("mysql:host=$server;dbname=abcd","abcd_root","pass");
        $con = new PDO("mysql:host=$server;dbname=abcd","root","");
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $con;
    }
}
?>