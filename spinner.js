<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spinner con Logo</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: black;
        }

        .spinner-container {
            display: flex;
            align-items: center;
        }

        .spinner {
            width: 24px;
            height: 24px;
            border: 4px solid transparent;
            border-top: 4px solid #FEA200;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .logo {
            max-width: 100%;
            max-height: 100%;
        }
    </style>
</head>
<body>
    <div class="spinner-container">
        <div class="spinner"></div>
        <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/energie-check-24.appspot.com/o/LogoBlanco_EnergieCheck24.svg?alt=media&token=dab4a948-08f8-4801-83be-082f09d9c093" alt="Logo">
    </div>
</body>
</html>
