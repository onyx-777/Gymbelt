export const Template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gym Template</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }   

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
        }

        /* Navigation Styles */
        nav {
            background: #333;
            color: #fff;
            padding: 1rem 2rem;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        nav ul li a:hover {
            color: #ff6347;
        }

        /* Hero Section */
        .hero {
            background: url('https://via.placeholder.com/1600x800') no-repeat center center/cover;
            color: white;
            text-align: center;
            padding: 80px 20px;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2rem;
        }

        .cta-btn {
            display: inline-block;
            background-color: #ff6347;
            padding: 12px 25px;
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border-radius: 5px;
            margin-top: 20px;
        }

        .cta-btn:hover {
            background-color: #ff4500;
        }

        /* Section Styles */
        section {
            padding: 60px 20px;
            text-align: center;
        }

        section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        section p {
            font-size: 1rem;
            margin-bottom: 20px;
        }

        .services {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
        }

        .service {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 30%;
            transition: transform 0.3s ease;
        }

        .service:hover {
            transform: scale(1.05);
        }

        .service img {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .service h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .about {
            background: #333;
            color: white;
        }

        /* Footer */
        footer {
            background: #222;
            color: white;
            padding: 20px;
            text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .services {
                flex-direction: column;
                align-items: center;
            }

            .service {
                width: 80%;
            }
        }

    </style>
</head>
<body>

    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <h1>Get Fit, Stay Healthy</h1>
        <p>Your fitness journey starts here. Join us now!</p>
        <a href="#contact" class="cta-btn">Join Now</a>
    </section>

    <!-- Services Section -->
    <section id="services">
        <h2>Our Services</h2>
        <div class="services">
            <div class="service">
                <img src="https://via.placeholder.com/300" alt="Personal Training">
                <h3>Personal Training</h3>
                <p>Get one-on-one sessions with our certified trainers.</p>
            </div>
            <div class="service">
                <img src="https://via.placeholder.com/300" alt="Group Classes">
                <h3>Group Classes</h3>
                <p>Join a variety of fun and energizing group fitness classes.</p>
            </div>
            <div class="service">
                <img src="https://via.placeholder.com/300" alt="Nutrition Coaching">
                <h3>Nutrition Coaching</h3>
                <p>Personalized nutrition plans to complement your fitness goals.</p>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <h2>About Us</h2>
        <p>We are committed to helping you achieve your fitness goals with expert guidance and support. Whether you're looking to lose weight, build muscle, or just get healthier, we've got you covered.</p>
    </section>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2025 Gym Name. All Rights Reserved.</p>
    </footer>

</body>
</html>
`;
