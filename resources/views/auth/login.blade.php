<?php

$url = url('/');
// echo '<pre>';
// callAPI('','http://192.168.103.102/api_gateway/api/console/getOrganization','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOjEsImF1ZCI6Ikl2b3JvdXMiLCJpYXQiOjE1NDUwMjA1MDMsImV4cCI6MTU0NTAyNDEwM30.WrCINaYyi_Njav8WSAA7K1ue0ooC6cOOIJBXN1S-37c');
?>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>API Gateway</title>
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon">
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/sc.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sc-icons.min.css') }}" rel="stylesheet">
    <style>
        /* .form-control {height: 40px;} 
        .panel-body{padding: 15px 20px 30px;} */

        @import url('https://fonts.googleapis.com/css?family=Poppins');

        
        body {
            font-family: "Poppins", sans-serif;
            height: 100vh;
        }

        a {
            color: #92badd;
            display: inline-block;
            text-decoration: none;
            font-weight: 400;
        }

        h2 {
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            display: inline-block;
            margin: 40px 8px 10px 8px;
            color: #cccccc;
        }
        .wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            padding: 20px;
        }

        #formContent {
            -webkit-border-radius: 10px 10px 10px 10px;
            border-radius: 10px 10px 10px 10px;
            background: #d5d7d7;
            padding: 50px;
            width: 90%;
            max-width: 450px;
            position: relative;
            padding: 0px;
            border: 1px solid black;
            -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
            box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
            text-align: center;
        }



        input[type=button],
        input[type=submit],
        input[type=reset] {
            background-color: #56baed;
            border: none;
            color: white;
            padding: 15px 80px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            text-transform: uppercase;
            font-size: 13px;
            -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
            box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
            -webkit-border-radius: 5px 5px 5px 5px;
            border-radius: 5px 5px 5px 5px;
            margin: 5px 20px 40px 20px;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }

        input[type=button]:hover,
        input[type=submit]:hover,
        input[type=reset]:hover {
            background-color: #395ce7;
        }

        input[type=button]:active,
        input[type=submit]:active,
        input[type=reset]:active {
            -moz-transform: scale(0.95);
            -webkit-transform: scale(0.95);
            -o-transform: scale(0.95);
            -ms-transform: scale(0.95);
            transform: scale(0.95);
        }

        input[type=text],input[type=password] {
            background-color: #f6f6f6;
            border: none;
            color: #0d0d0d;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 5px;
            width: 85%;
            border: 2px solid #f6f6f6;
            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -ms-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
            -webkit-border-radius: 5px 5px 5px 5px;
            border-radius: 5px 5px 5px 5px;
        }

        #email,#password:focus {
            background-color: #fff;
            border-bottom: 2px solid #5fbae9;
        }

        #email,#password:placeholder {
            color: #cccccc;
        }



        
        .fadeInDown {
            -webkit-animation-name: fadeInDown;
            animation-name: fadeInDown;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }

        @-webkit-keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(0, -100%, 0);
                transform: translate3d(0, -100%, 0);
            }

            100% {
                opacity: 1;
                -webkit-transform: none;
                transform: none;
            }
        }

        @keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translate3d(0, -100%, 0);
                transform: translate3d(0, -100%, 0);
            }

            100% {
                opacity: 1;
                -webkit-transform: none;
                transform: none;
            }
        }

       
        @-webkit-keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @-moz-keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .fadeIn {
            opacity: 0;
            -webkit-animation: fadeIn ease-in 1;
            -moz-animation: fadeIn ease-in 1;
            animation: fadeIn ease-in 1;

            -webkit-animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            animation-fill-mode: forwards;

            -webkit-animation-duration: 1s;
            -moz-animation-duration: 1s;
            animation-duration: 1s;
        }

        .fadeIn.first {
            -webkit-animation-delay: 0.4s;
            -moz-animation-delay: 0.4s;
            animation-delay: 0.4s;
        }

        .fadeIn.second {
            -webkit-animation-delay: 0.6s;
            -moz-animation-delay: 0.6s;
            animation-delay: 0.6s;
        }

        .fadeIn.third {
            -webkit-animation-delay: 0.8s;
            -moz-animation-delay: 0.8s;
            animation-delay: 0.8s;
        }

        .fadeIn.fourth {
            -webkit-animation-delay: 1s;
            -moz-animation-delay: 1s;
            animation-delay: 1s;
        }

        /* Simple CSS3 Fade-in Animation */
        .underlineHover:after {
            display: block;
            margin-left: 110px;
            bottom: -10px;
            width: 0;
            height: 2px;
            background-color: #56baed;
            content: "";
            transition: width 0.2s;
        }

        .underlineHover:hover {
            color: #0d0d0d;
        }

        .underlineHover:hover:after {
            width: 50%;
            
        }



        *:focus {
            outline: none;
        }

        #icon {
            width: 80%;
            padding: 20px;
        }
        #icon:hover{
            transform:scale(1.2);
            transition: .1s;
        }

        * {
            box-sizing: border-box;
        }
    </style>
</head>

<!--TIPS-->
<!--You may remove all ID or Class names which contain "demo-", they are only used for demonstration. -->

<body>
    <div class="pace  pace-inactive">
        <div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
            <div class="pace-progress-inner"></div>
        </div>
        <div class="pace-activity"></div>
    </div>


    <div id="container" class="cls-container">

        <!-- BACKGROUND IMAGE -->
        <!--===================================================-->
        <div id="bg-overlay" class="bg-img"></div>


        <!-- LOGIN FORM -->
        <!--===================================================-->
        {{-- <div class="cls-content" >
                <div class="cls-content-sm panel">



        <div class="panel-body" style="border-radius:50%">
                        <div class="mar-ver pad-btm" style="margin-bottom: 0;">
                            <center> <img src="{{asset('images/logo2.png')}}" alt="API Gateway" ></center><br>
                            <h1 class="h3">API Gateway</h1>
                            <p>Sign In to your account</p>
                        </div>

                        @if (session()->has('error'))
                        <div class="alert alert-danger">{{ session()->get('error') }}</div>
                        @endif

                        @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                        @endif

                        <form method="POST" action="{{ route('login') }}">
                            {{csrf_field()}}
                            <div class="form-group">
                                <input type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="User ID" value="{{ old('email') }}" required autofocus name="email" id="email" maxlength="50" >
                                 @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
       

                            <div class="login-ctrls">
                                <div class="form-group">
                                    <input type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" required placeholder="Password" name="password" id="password"  maxlength="50">
                                </div>                                    

                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <input class="btn btn-danger btn-lg btn-block" name="btnSubmit" value="Sign In" type="submit">
                            </div>
                        </form>
                    </div>


        </div>
            </div> --}}

        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->


                <!-- Icon -->
                <div class="fadeIn first">
                    <img src="{{ asset('images/logo2.png') }}" alt="API Gateway" id="icon" />
                    <h1  class="inactive underlineHover">API Gateway</h1>
                    <p>Sign In to your account</p>
                </div>
                @if (session()->has('error'))
                <div class="alert alert-danger">{{ session()->get('error') }}</div>
                @endif

                @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif
                <!-- Login Form -->
                <form method="POST" action="{{ route('login') }}">
                    {{csrf_field()}}
                    <input type="text" class="fadeIn second {{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email') }}" required  autofocus name="email" id="email" maxlength="50" placeholder="User ID"><br><br>
                    <input type="password"  class="fadeIn third {{ $errors->has('password') ? ' is-invalid' : '' }}" required placeholder="Password" name="password" id="password"  maxlength="50"><br><br><br>
                    <input type="submit" class="fadeIn fourth " value="Sign In" name="btnSubmit">
                </form>

            </div>
        </div> 
    </div>


    <div class="modal fade in" id="alertModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content text-center">
                <div class="modal-body no-padding">
                    <h4 class="alertMessage"></h4>

                    <div class="form-group">

                        <div class="center"> <a class=" btn btn-danger btn-sm" id="btnAlertOk"
                                style="width:100px; margin-top:30px;">Ok</a> </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
<script src="{{ asset('js/jquery.min.js') }}"></script>
<script>
    var sitePath = "{{ $url }}";
    var publicPath = "{{ $url . '/public/' }}";
</script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
