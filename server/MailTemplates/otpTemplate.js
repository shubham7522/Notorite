const otpTemplate = (name, otp) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notorite - Verify OTP</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f9f9ff;
            font-family: 'Raleway', sans-serif;
            color: #000;
            text-align: center;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
        }

        svg {
            display: block;
            max-width: 10%;
            height: auto;
            margin: 0 auto;
        }

        h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .otp-code {
            font-size: 25px;
            font-weight: bold;
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            border-radius: 8px;
            border: 1px dashed #007bff;
            color: #007bff;
        }

        a.button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: 700;
            color: #000;
            background-color: #fdb441;
            border-radius: 25px;
            text-decoration: none;
        }

        .contact p {
            font-size: 12px;
            margin: auto 20%;
        }
    </style>
</head>

<body>
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.88 122.88"><defs><style>.cls-1{fill:#4d8bba;}.cls-2{fill:#9fd9f1;}.cls-3,.cls-5{fill:#fff;}.cls-4{fill:#00a912;}.cls-4,.cls-5{fill-rule:evenodd;}</style></defs><title>email-verification</title><path class="cls-1" d="M110.44,41.57a3.59,3.59,0,0,1,2.43-.93,4,4,0,0,1,2.06.6,5.09,5.09,0,0,1,1.26,1.07,7.06,7.06,0,0,1,1.69,4.26v70.64a5.71,5.71,0,0,1-1.66,4h0a5.67,5.67,0,0,1-4,1.66H5.67a5.71,5.71,0,0,1-4-1.66h0a5.62,5.62,0,0,1-1.66-4V46.57a7.1,7.1,0,0,1,1.73-4.32,5.5,5.5,0,0,1,1.26-1,4,4,0,0,1,2-.58,3.59,3.59,0,0,1,2,.57V2.74A2.74,2.74,0,0,1,9.7,0H78.9A2.71,2.71,0,0,1,81,1l28.65,29.59a2.71,2.71,0,0,1,.78,1.9h0v.79c0,.11,0,.22,0,.34s0,.22,0,.33v7.63Z"/><polygon class="cls-2" points="112.39 109.75 112.39 47.12 76.6 78.39 112.39 109.75 112.39 109.75 112.39 109.75"/><polygon class="cls-2" points="40.79 78.69 5.49 47.15 5.49 109.63 40.79 78.69 40.79 78.69 40.79 78.69"/><path class="cls-2" d="M56.52,92.74,44.9,82.36,5.49,116.9v.31a.17.17,0,0,0,0,.13h0a.22.22,0,0,0,.13,0H112.21a.22.22,0,0,0,.13,0h0a.17.17,0,0,0,0-.13V117L72.45,82,60.15,92.76h0a2.73,2.73,0,0,1-3.62,0Z"/><path class="cls-3" d="M102.31,30.86,78,5.74V5.49H12.44V46h0L46.66,76.6l.15.14L58.36,87.06,105,46.36v-10l-2.64-5.49Z"/><path class="cls-4" d="M58.7,13.35A25.26,25.26,0,1,1,33.44,38.61,25.26,25.26,0,0,1,58.7,13.35Z"/><path class="cls-5" d="M50.86,34.6l4.47,4.22L65.91,28.1c.88-.89,1.43-1.6,2.51-.49l3.51,3.59c1.15,1.14,1.09,1.81,0,2.87L57.34,48.43c-2.29,2.25-1.89,2.39-4.22.08L45,40.39a1,1,0,0,1,.1-1.58l4.07-4.22c.62-.65,1.11-.59,1.74,0Z"/></svg>
    <div class="container">
        <h1>Verify Your Email Address</h1>
        <p style="font-size: 20px; font-weight: 550;">Hello, ${name}!</p>
        <p>Thank you for choosing Notorite. Your One-Time Password (OTP) for verification is:</p>
        <div class="otp-code">${otp}</div>
        <p>Please use this OTP to complete your verification. The OTP is valid for the next 30 minutes.</p>
    </div>
    <div class="contact">
        <p>If you continue to have problems please feel free to contact us at <span
                style="text-decoration: underline">helpnotorite@gmail.com</span>.</p>
    </div>
</body>

</html>
    `;
};

export default otpTemplate;