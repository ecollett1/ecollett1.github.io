<!DOCTYPE html>
<html>
  <body>
    <p><font size="5">
      <?php 
        $input = $_POST["input6"];
        $strings = explode(", ", $input);
        sort($strings);
        for ($i = 0; $i < count($strings); $i++)
        {
          echo $strings["$i"] . "<br>";
        }
      ?>
      </font>
    </p>
  </body>
</html>