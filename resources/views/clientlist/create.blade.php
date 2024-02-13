@extends('layouts.portal')

@section('content')

<style>
    /* Custom styles for the form */
    #page-content {
        margin-top: 20px;
    }

    .form-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .radio-label {
        margin-right: 20px;
    }

    .button-container {
        text-align: center;
    }

    .btn {
        padding: 10px 20px;
        margin-right: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .btn-primary {
        background-color: #007bff;
        color: #fff;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .btn-secondary {
        background-color: #6c757d;
        color: #fff;
    }

    .btn-secondary:hover {
        background-color: #5a6268;
    }
</style>

<div id="page-content">
    <div class="container form-container">
        <h2>Add Consumer</h2>
        <form id="add-consumer-form" class="form-horizontal" method="post" action="{{ url('addConsumer') }}">
            <div class="form-group">
                <label for="vchClientName">Consumer Name</label>
                <input type="text" class="form-control" name="vchClientName" id="vchClientName" required>
            </div>

            <div class="form-group">
                <label for="vchClientIP">Consumer IP</label>
                <input type="text" class="form-control" name="vchClientIP" id="vchClientIP" required>
            </div>

            <div class="form-group">
                <label>Token Type</label><br>
                <label class="radio-label"><input type="radio" name="token_type" value="1" checked> Short Term</label>
                <label class="radio-label"><input type="radio" name="token_type" value="2"> Long Term</label>
            </div>

            <div class="form-group button-container">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-secondary">Reset</button>
            </div>
        </form>
    </div>
</div>

@endsection
