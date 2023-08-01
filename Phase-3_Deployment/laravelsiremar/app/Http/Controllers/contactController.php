<?php

    require_once("connect.php");

    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $fname = trim($_POST["fname"]);
    $lname = trim($_POST["lname"]);
    $pno = trim($_POST["pno"]);
    $email = trim($_POST["email"]);
    $queries = trim($_POST["queries"]);


    if (empty($fname) || empty($lname) || empty($pno) || empty($email) || empty($queries)) {
        echo json_encode(["sent" => false, "message" => "Some fields are missing!!!"]);
        die();
    }
    try {
        $model = new Connection();
        $db = $model->getConnection();
        // $response  = array();
        $sql = "INSERT INTO `contact_us`(`fname`, `lname`, `pno`, `email`, `queries`) VALUES (?,?,?,?,?)";
        $query = $db->prepare($sql);
        $query->execute([$fname, $lname, $pno, $email, $queries]);
        $inserted_id = $db->lastInsertId();
        // $count = $query->rowCount();
        // $row   = $query->fetch(PDO::FETCH_ASSOC);
         // $query->debugDumpParams();
        // echo($count);
        // if ($count == 1 && !empty($row)) {
        //     $response['user'] = $row['siremar_id'];
            // $role_sql = "select role from tbl_role where role_id = ?";
            // $role_query = $db->prepare($role_sql);
            // $role_query->execute([$row['role_id']]);
            // $role_row   = $role_query->fetch(PDO::FETCH_ASSOC);
            // $response['role'] = $role_row['role'];
            echo json_encode($inserted_id);
        // } else {
        //     echo json_encode(["sent" => false, "message" => "Invalid login credentials!!!"]);
        //     die();
        // }
    } catch (PDOException $error) {
        //catch error
        $row["status"] = $error->getCode();
        $row["message"] = $error->getMessage();
        echo json_encode($row);
    }
?>