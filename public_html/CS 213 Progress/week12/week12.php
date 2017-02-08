<!DOCTYPE html>
<html>
  <style>
      .normal {                    
         font-size: 12px;
         color: black;
         background: white;
      }
      
      span {
         display: block;
      }
      
      .center {
         text-align: center;
      }
  </style>
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>Purchase Review</title>
    <body>
      <h1>
        <?php 
          echo "Purchase Review";
        ?>
      </h1>
      <p id="important">
        <form action="continue.php" id="form2" method="post">
          <?php
            $firstName = $_POST["firstName"];
            $lastName = $_POST["lastName"];
            $phone = $_POST["phoneNumber"];
            $address = $_POST["Address"];
            $apartment = $_POST["Apartment"];
            $city = $_POST["City"];
            $state = $_POST["State"];
            $zip = $_POST["zip"];
            $type = $_POST["credType"];
            $card = $_POST["card"];
            $code = $_POST["security"];
            $month = $_POST["month"];
            $year = $_POST["year"];
            $total = $_POST["total"];
            
            $taser = $_POST["qty1"];
            $lightbulb = $_POST["qty2"];
            $toaster = $_POST["qty3"];
            $computer = $_POST["qty4"];
            echo "<strong>Name:</strong> " . $firstName . " " . $lastName . "<br>";
            echo "<strong>Phone Number:</strong> " . "(" . $phone[0],$phone[1],$phone[2] . ")" . $phone[3],$phone[4],$phone[5] . "-" . $phone[6],$phone[7],$phone[8],$phone[9] . "<br>";
            echo "<strong>Address:</strong><br> " . "<span>" . $address . " " . $apartment . "<br>" . $city . ", " . $state . " " . $zip . "</span><br>";
            echo $taser . " Tasers<br>";
            echo $lightbulb . " Lightbulbs<br>";
            echo $toaster . " Toasters<br>";
            echo $computer . " Computers<br>";
            echo $total . "<br><br>";
            echo "Credit Card type: <strong>" . $type . "</strong><br>";
            echo "Expiration date: <strong>" . $month . " " . $year . "</strong><br><br>";
          ?>
          <input type="submit" name="continue" action="continue.php" value="Continue"/>
        </form>
        <form action="cancel.php" id="form3" method="post">
          <?php 
            echo "<br>"; 
          ?>        
          <input type="submit" name="cancel" action="cancel.php" value="Cancel"/>
        </form>
      </p>
    </body>
</html>