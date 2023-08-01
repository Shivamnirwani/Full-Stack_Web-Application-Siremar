<?php
    require_once("connect.php");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $Role = trim($_POST["role"]);
    $SEmpid = trim($_POST["siremar_id"]);    
    $Fname = trim($_POST["fname"]); 
    $Lname = trim($_POST["lname"]);    
    $Email = trim($_POST["email"]);    
    $Resid = trim($_POST["residential_id"]);    
    $Location = trim($_POST["location"]);    
    $password = trim($_POST["password"]);    
    $confirm_password = trim($_POST["confirm_password"]);    
    $Uname = trim($_POST["uname"]);    
    if (empty($Role) || empty($SEmpid) || empty($Fname) || empty($Lname) || empty($Email) || empty($Resid) 
    || empty($Location) || empty($password) || empty($confirm_password) || empty($Uname)) {
        echo json_encode(["sent" => false, "message" => "Some fields are missing!!!"]);
        die();
    }

    if($password != $confirm_password){
        echo json_encode(["sent" => false, "message" => "Passwords do not match!!!"]);
    }

    try {
        $model = new Connection();
        $db = $model->getConnection();
        // $response  = array();
        $sql = "INSERT INTO register_emp(role, siremar_id, fname, lname, email, residential_id, location, password, confirm_password, uname) VALUES (?,?,?,?,?,?,?,?,?,?)";
        $query = $db->prepare($sql);
        $query->execute([$Role, $SEmpid, $Fname,$Lname,$Email,$Resid,$Location,$password,$confirm_password,$Uname]);
        $inserted_id = $db->lastInsertId();
        // $count = $query->rowCount();
        // $row   = $query->fetch(PDO::FETCH_ASSOC);
         // $query->debugDumpParams();
        // if ($count == 1 && !empty($row)) {
        //     $response['user'] = $row['siremar_id'];
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