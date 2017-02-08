<!DOCTYPE html>
<html>
  <body>
    <table>
      <tr>
        <?php 
          $x = $_POST["x"];
          $n = $_POST["n"];
          echo "<th>N</th><th>$x^n</th>";
          function powers($num, $powers)
          {
            echo "<tr><td>0</td><td>1</td></tr>";
            echo "<tr><td>1</td><td>$num</td></tr>";
            $oldNum = $num;
            for ($i = 2; $i <= $powers; $i++)
            {
              $num *= $oldNum;
              echo "<tr><td>$i</td><td>$num</td></tr>";
            }
          }
          powers($x, $n);
        ?>
      </tr>
    </table>
  </body>
</html>