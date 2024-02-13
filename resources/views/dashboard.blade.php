@extends('layouts.portal')

@section('content')
<br /><br /><br />
<div class="container">
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Centered Links</title>
<style>
  ul {
    text-align: center; /* Center the content horizontally */
    padding: 0; /* Remove default padding */
  }

  li {
    display: inline-block;
    margin-right: 10px;
    list-style: none; /* Remove default list style */
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4CAF50;
    border: 1px solid #4CAF50;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
</style>
</head>
<body>

<ul>
  <li>
    <a href="/clintlist">Register Consumers</a>
  </li>
  
</ul>






</body>
</html>


</div>
@endsection


