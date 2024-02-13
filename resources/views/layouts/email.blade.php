<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>E-Vidya Vahini</title>

<style type="text/css">
    body{
        margin:0 auto;
        padding:0;
		font-family:Arial, sans-serif; font:14px; line-height:22px; color:#1d1e20;
    }

   
</style>


</head>

<body topmargin="0" bottommargin="0">
<table width="500" border="0" cellspacing="0" cellpadding="0" align="center" style="border:2px solid #e7e7e7; margin: 0 auto 0;">
  <tbody>
    <tr>
    <td valign="top"><img src="{{url('public/images/mail_header.jpg') }}" alt="" width="500px" /></td>
    </tr>
  
     <tr>
      <td height="10px"></td>
    </tr>
    
    <tr>
      <td>
        @yield('content')
      </td>
    </tr>
  
     <tr>
      <td height="10px"></td>
    </tr>
     <tr>
      <td valign="bottom"><img src="{{url('public/images/mail_footer.jpg') }}" alt="" width="100%" /></td>
    </tr>
  </tbody>
</table> 


<map name="Map">
  <area shape="circle" coords="405,35,14" href="#">
  <area shape="circle" coords="441,34,13" href="#">
  <area shape="circle" coords="476,35,13" href="#">
</map>
</body>
</html>
