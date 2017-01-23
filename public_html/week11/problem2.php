<!DOCTYPE html>
<html>
  <body>
    <h1>
      <?php 
        date_default_timezone_set("America/Rexburg");
        echo "The date today is: " . date("M") . " " . date("d") . ", " . date("Y") . "(" . date("l") . ") ". "<br>";
        echo "The time is: " . date("h:i:sa");
      ?>
    </h1>
  </body>
</html>