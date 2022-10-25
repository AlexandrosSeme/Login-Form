<?php
$username = 'admin';
$password = 'password';


http_response_code(200);
if($username && $password)
        {
            $json =$users ->auth($username,$password);
            if ($json)
                {
                    echo $json;
                }
            else 
                {
                    http_response_code(400);
                    echo json_encode([
                        'error'=>true,
                        'mesage'=>'User not found'
                    ]);

                }
        }
    else
        {
            echo json_encode([
                'error'=>true,
                'mesage'=>'You are missing Info'
            ]);       
        }
exit();
