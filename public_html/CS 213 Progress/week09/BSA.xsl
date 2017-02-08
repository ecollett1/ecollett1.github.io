<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
  <body>
  <h1>Boy Scouts of America</h1>
    <table border="1">
      <tr bgcolor="#ff9999">
        <th>Council</th>
        <th>Troop</th>
        <th>Scout Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Rank/Merit Badge</th>
      </tr>
      <xsl:for-each select="bsa/council">
      <tr >
        <td colspan="6" bgcolor="#2F8FFF"><font size="30"><xsl:value-of select="@name"/></font></td>
        <xsl:for-each select="troop">
        <tr>
           <td border="0"></td>
           <td bgcolor="#2FFF69"><xsl:value-of select="@number"/> - The <xsl:value-of select="@unit_name"/></td>
              <xsl:for-each select="scout">
              <tr>
                 <td></td>
                 <td></td>
                 <td><xsl:value-of select="lastname/."/>, <xsl:value-of select="firstname/."/></td>
                 <td><xsl:value-of select="address/street/."/> - <xsl:value-of select="address/city/."/>, <xsl:value-of select="address/state/."/></td>
                 <td><xsl:value-of select="phone/."/></td>
                 <td>On <xsl:value-of select="rank/@date_earned"/> rank of <xsl:value-of select="rank/text()"/> earned with a <xsl:value-of select="meritbadge/text()"/> meritbadge.</td>
              </tr>
              </xsl:for-each>
        </tr>
        </xsl:for-each>
      </tr>
      </xsl:for-each>
    </table>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>