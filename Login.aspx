<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Manager.Master" CodeBehind="Login.aspx.vb" Inherits="BOXMODEL.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

  <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head >
    <title>Login</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Login page for ResidentsConnect">
    <link rel="icon" type="image/png" sizes="16x16" href="plugins/images/Logo.png">
    <!-- Custom CSS -->
    <link href="Login.css" rel="stylesheet" />
</head>
<body>
    <div class="header">
        <div class="logo-container">
            <img src="plugins/images/Logo.png" alt="Logo" class="logo">
        </div>
        <div class="header-text">PGH Boxed Goods Shop</div>
    </div>
    <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">Help</a>
    </div>
    <div class="login-container">
        <div class="login-form">
            <h1>Manager Login</h1>
            <form action="/login" method="post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Password:</label>
                <div class="password-container">
                    <input type="password" id="password" name="password" required>
                </div>

                <button type="submit">Login</button>

                <div class="account-links">
                    <span class="grey-text">Don't have an account?</span>
                    <a href="#" class="register-now">Register now</a>
                </div>
            </form>
        </div>
    </div>
    
</body>
</html>

</asp:Content>
