<!DOCTYPE html>
<html>
  <head>
  <style>
      .normal {                    
         font-size: 12px;
         color: yellow;
         background: blue;
      }
      
      span {
         display: block;
      }
      
      .center {
         text-align: center;
      }
  </style>
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>Purchase Successful</title>
  </head>
    <body>
      <h1>
        <?php
          echo "Purchase Successful!";
        ?>
      </h1>
      <p>
        <?php 
          echo "All that's left for you to do is to just wait for your order.  It should ship in 3-5 business days.  For information on your package call: (123)345-4567<br>";
          echo "<strong>Thank you for shopping with ElectriCITY!</strong> Click here to return to the ";
        ?>
        <a class="normal" href="week12.html">Main Page.</a>
      </p>
    </body>
</html>