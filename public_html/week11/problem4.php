<!DOCTYPE html>
<html>
  <body>
    <h1>
      <?php 
        $map = array('one' => 'uno', 'two' => 'dos', 'three' => 'tres', 'four' => 'quatro', 'five' => 'cinco', 'six' => 'seis', 'seven' => 'siete', 
                     'eight' => 'ocho', 'nine' => 'nueve', 'ten' => 'diez', 'eleven' => 'once', 'twelve' => 'doce', 'thirteen' => 'trece', 
                     'fourteen' => 'catorce', 'fifteen' => 'quince', 'sixteen' => 'dieciseis', 'seventeen' => 'diecisiete', 'eighteen' => 'dieciocho', 
                     'nineteen' => 'diecinueve', 'twenty' => 'veinte');
        $name = $_POST['input4'];
        
        if (array_key_exists($name, $map))
        {
          echo "The word ''$name'' in Spanish is ''" . $map["$name"] . "''";
        }
        else
        {
          echo "The English cardinal ''$name'' is not between ''one'' and ''twenty''";
        }
      ?>
    </h1>
  </body>
</html>