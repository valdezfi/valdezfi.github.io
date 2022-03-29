<?php 
    //this will save the wallet address

    ini_set('display_errors', '1'); //this hides error if the value = 0,  1 will display errors 

    $status=0;
    if(isset($_GET['address'])){
        $wallet_address = filter_var($_GET['address'],FILTER_SANITIZE_STRING); //sanitize the string
        if(empty($wallet_address)){
            $status=0;
        }else{
            
            //DB Link
            
            $username = ''; //db username
            $password = ''; //db password
            $host = ''; // db host
            $db = ''; //db name
            
            // create connection

            $con = mysqli_connect($host,$username,$password,$db);

            if($con){

                //check address if already exists
                $check_address = mysqli_query($con, "SELECT * FROM airdrop_wallet WHERE wallet_address='".$wallet_address."'");

                if(mysqli_num_rows($check_address)>=1){
                    $status = 2;
                }else{

                    //save address on database if not exists

                    $address_query = "INSERT INTO airdrop_wallet(wallet_address) VALUES('$wallet_address')";
                    $save_address = mysqli_query($con,$address_query);
                    if($save_address){
                        $status = 1;
                    }else{
                        $status = 0;
                    }
                }
                
            }else{
                $status=0;
            }
            
            $return_array = array();
	 	    $return_array[] = array("status" => $status);
	 	    echo  json_encode($return_array);
        }

    }

?>