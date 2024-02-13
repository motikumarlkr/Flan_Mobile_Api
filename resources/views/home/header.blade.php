<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <style>
        /* CSS styles for the header */
        .header {
            background-color: #007bff;
            color: #FFF;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header .navbar-links {
            display: flex;
            align-items: center;
        }

        .header .navbar-links li {
            list-style: none;
            margin: 0 10px;
        }

        .header .navbar-links li:last-child {
            margin-right: 0;
        }

        .header .navbar-links .logout-link {
            color: #FFF;
            text-decoration: none;
        }

        .header .navbar-links .logout-link:hover {
            text-decoration: underline;
        }

        .header .user-login {
            font-size: 14px;
        }
    </style>
</head>
<!-- <body> -->
    <!-- Your header -->
    <header class="header">
        <!-- Brand logo & name -->
        <div class="navbar-brand">
            <img src="{{ url('/') }}/images/logo.png" alt="API Gateway" class="brand-icon">
            <div class="brand-title">Flan API Gateway</div>
        </div>
        <!-- End brand logo & name -->

        <!-- Navbar content -->
        <ul class="head-list">

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                            <li>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-sign-out icon-lg icon-fw"></i>  {{ __('Logout') }}</a>
                            </li>
                        </ul>
        <!-- End navbar content -->
    </header>
<!-- </body>
</html> -->