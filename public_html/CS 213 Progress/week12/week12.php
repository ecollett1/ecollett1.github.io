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
        <form action="continue.php" id="form2" method="get">
          <?php
            $firstName = $_GET["firstName"];
            $lastName = $_GET["lastName"];
            $phone = $_GET["phoneNumber"];
            $address = $_GET["Address"];
            $apartment = $_GET["Apartment"];
            $city = $_GET["City"];
            $state = $_GET["State"];
            $zip = $_GET["zip"];
            $type = $_GET["credType"];
            $card = $_GET["card"];
            $code = $_GET["security"];
            $month = $_GET["month"];
            $year = $_GET["year"];
            $total = $_GET["total"];
            
            $taser = $_GET["qty1"];
            $lightbulb = $_GET["qty2"];
            $toaster = $_GET["qty3"];
            $computer = $_GET["qty4"];
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
