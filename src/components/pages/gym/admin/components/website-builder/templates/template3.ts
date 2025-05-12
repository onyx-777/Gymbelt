export const Template3 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gym management system</title>
    <!-- CSS -->
    <link rel="stylesheet" href="style.css" />
   
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;700&display=swap");
/* Base */
:root {
  --clr-primary: #29a396;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #ffffff;
  overflow-x: hidden;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header,
.section {
  width: 100%;
  padding: 40px 0;
  overflow: hidden;
  background-color: white;
}

.header::after,
.header::before,
.section::after,
.section::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0;
}

.header::after {
  left: -200px;
}

.header::before {
  right: -200px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mb {
  margin-bottom: 30px;
}

.mt {
  margin-top: 20px;
}

.section {
  background: #ffffff;
  position: relative;
  padding: 80px 0;
}

.section::after {
  left: -200px;
}

.section::before {
  width: 600px;
  right: -200px;
}

.section:nth-child(even) {
  background: #ffffff;
}

.section:nth-child(even)::after,
.section:nth-child(even)::before {
  display: none;
}

.section:nth-child(even) .text {
  margin-left: 30px;
}

.primary {
  font-size: 35px;
  font-weight: 700;
}

.secondary {
  font-size: 25px;
  font-weight: 700;
}

.tertiary {
  font-size: 15px;
}

/* Menu */
.menu {
  width: 100%;
  background: linear-gradient(to right, #0e0e0e 70%, #142d2a);
  padding: 12px 0;
}

.menu .container {
  justify-content: space-between;
}

.mobile-btn {
  display: none;
}

.logo {
  cursor: pointer;
}

.logo img {
  width: 80px;
  height: auto;
}

.nav {
  list-style: none;
}

.nav-item {
  display: inline-block;
  margin-right: 30px;
  font-size: 18px;
  font-weight: 400;
}

.nav-item:hover a {
  color: #29a396;
  transition: 0.3s linear;
}

.nav-item:last-of-type {
  margin-right: 0;
}

.nav-item a {
  text-decoration: none;
  color: #fff;
}

/* End Menu */

/* Buttons */
.btn {
  padding: 10px 28px;
  background: var(--clr-primary);
  border-radius: 40px;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}

.btn:hover {
  background: #165f56;
  transition: 0.3s linear;
}

.btn-2 {
  font-size: 35px;
  text-decoration: none;
  color: #ccc;
  transition: 0.3s linear;
}

.btn-2:hover {
  color: #29a396;
}

/* End Buttons */

/* Header */
.text {
  width: 60%;
}

.visual {
  width: 40%;
}

.visual img {
  width: 100%;
}

.header h1 {
  font-size: 70px;
  font-weight: 700;
}

.header h1 span {
  color: #29a396;
}
/* End Header */

/* Trainers */
#trainers {
  text-align: center;
}

.trainer img {
  border-top-left-radius: 80px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 8px;
  margin-bottom: 10px;
  outline: 2px solid #fff;
  padding: 14px;
}

.trainer .mb {
  margin-bottom: 10px;
}

/* End Trainers */

/* Testimonial */

#testimonial .visual img {
  width: 90%;
  display: block;
  margin-left: auto;
}

.client {
  background: #fff;
  color: #000;
  padding: 20px 10px;
  margin-right: 20px;
  text-align: center;
  border-radius: 20px;
  position: relative;
  margin-top: 20px;
}

.client img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: calc(50% - 40px);
}

.client h2 {
  margin: 20px 0 10px 0;
}
/* End Testimonial */

/* Discount */
#discount {
  padding: 40px 0;
}
/* End Discount */

/* Footer */
.footer {
  padding: 30px 0;
  border-top: 1px solid #fff;
  text-align: center;
}
/* End Footer */

/* Responsive */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
    text-align: center;
  }

  .mobile-btn {
    display: block;
    font-size: 35px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 12px;
  }

  .menu.active .nav-item {
    display: block;
    margin: 30px 0;
  }

  .nav,
  .menu .btn {
    display: none;
  }

  .menu.active .nav,
  .menu.active .btn {
    display: block;
  }

  .menu.active {
    padding: 30px 0;
    width: 100%;
    transition: all 0.8s ease;
  }

  .text,
  .visual {
    width: 100%;
  }

  .text h1 {
    font-size: 45px;
  }

  .primary {
    font-size: 28px;
  }

  .secondary {
    font-size: 22px;
  }

  .tertiary {
    font-size: 14px;
  }

  .trainer {
    margin-bottom: 20px;
  }

  .client {
    margin-bottom: 50px;
  }

  #discount .visual img {
    width: 70%;
    margin-bottom: 30px;
  }
}

@media (max-width: 530px) {
  .header::after,
  .header::before,
  .section::after,
  .section::before {
    display: none;
  }

  .primary {
    font-size: 25px;
  }

  .secondary {
    font-size: 20px;
  }

  .tertiary {
    font-size: 12px;
  }

  .text h1 {
    font-size: 34px;
  }

  .btn,
  .btn-2 {
    font-size: 16px;
  }
}
/* End Responsive */

/*=========================About Us=========================*/
.about {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 150px;
}

.about-img {
  flex: 1;
}

.about-img img {
  width: 500px;
  height: 700px;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
}

.about-text {
  flex: 1;
  /*width: 100px;*/
  display: flex;
  flex-flow: column wrap;
}

.about-text small,
.about-text p,
.about-text input,
.about-text a {
  flex: 1;
  font-family: Roboto;
}

.about-text small {
  color: #29a396;
  font-size: 18px;
}

.about-text h2 {
  flex: 1;
  font-family: Barlow Condensed;
  font-size: 60px;
  color: #2a3419;
  width: 450px;
}

.about-text label {
  padding-bottom: 10px;
  color: #506172;
  font-weight: bolder;
  font-family: Roboto;
  letter-spacing: 1px;
}

.about-text p {
  width: 500px;
  line-height: 30px;
  color: #506172;
  font-weight: bolder;
  padding: 50px 0;
}

.about-text a {
  background-color: #fff;
  border: 2px solid #014b85;
  text-decoration: none;
  border-radius: 5px;
  width: 180px;
  padding: 20px;
  text-align: center;
  margin-top: 50px;
  color: #014b85;
  font-weight: bolder;
  font-size: 14px;
}

.about-text a:hover {
  background-color:  #010101;
  color: #fff;
}
.footer {
  background-image: url("https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293781/pine-tree_mq2sgp.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.footer::before {
  position: absolute;
  content: "";
  display: block;
  background-color: #141715;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.footer .links {
  position: relative;
  color: #fff;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.links ul {
  list-style-type: none;
}

.links h3 {
  font-family: Barlow Condensed;
  font-weight: normal;
  font-size: 23px;
  margin-bottom: 15px;
}

.links li {
  font-family: Roboto;
  cursor: pointer;
  padding: 15px 0;
}

.links li:hover {
  color: #29a396;
}
    </style>
  </head>
  <body>
    <!-- Menu -->
    <div class="menu">
      <div class="container flex">
        <!-- Mobile Button -->
        <div class="mobile-btn">
          <ion-icon name="grid"></ion-icon>
        </div>
        <div class="logo">
          <h2>Fit GYM</h2>
        </div>
        <ul class="nav">
          <li class="nav-item"><a href="#">Home</a></li>
          <li class="nav-item"><a href="#why-us">Features</a></li>
          <li class="nav-item"><a href="#explore">Explore</a></li>
        </ul>

        <a href="login_index.html" class="btn">Register</a>
        
      </div>
    </div>
    <!-- End Menu -->

    <!-- Header -->
    <header class="header">
      <div class="container flex">
        <div class="text">
          <h1 class="mb">
            Complete Daily <br />
            <span>Workout</span> At Home
          </h1>

          <p class="mb">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            saepe quisquam error, dolor dicta tempora excepturi assumenda
            repellendus quo atque.
          </p>

          <a href="#" class="btn mt">Get Started Now</a>
        </div>

        <div class="visual"><img src="img/banner-img.png" alt="" /></div>
      </div>
    </header>
    <!-- End Header -->

    <!-- Why Us -->
    <div class="section" id="why-us">
      <div class="container flex">
        <div class="text">
          <h2 class="primary mb">Why Choose Us?</h2>
          <h3 class="secondary mb"><span></span> Consultation with Expert.</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quae facere eos esse odit hic beatae!
          </p>

          <h3 class="secondary mb mt">
            <span></span> Consultation with Expert.
          </h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            aperiam porro, rerum mollitia ad atque veritatis.
          </p>
        </div>

        <div class="visual"><img src="img/why-us.png" alt="" /></div>
      </div>
    </div>
    <!-- End Why Us -->

    <!-- Explore -->
    <div class="section" id="explore">
      <div class="container flex">
        <div class="visual">
          <img src="img/explore.jpg" alt="" />
        </div>
        <div class="text">
          <h2 class="primary mb">
            Explore Our Fitness <br />
            Studio
          </h2>
          <p class="tertiary mb">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            corrupti obcaecati natus ad laborum repellendus consequuntur. Id
            quam non quisquam molestias quasi blanditiis, animi inventore itaque
            tempore mollitia dolor earum!
          </p>

          <a href="#" class="btn mt">Get Started Now</a>
        </div>
      </div>
    </div>
    <!-- End Explore -->

    <!-- Trainer -->
    <div class="section" id="trainers">
      <h2 class="primary mb">Our Professional Trainers</h2>
      <div class="container flex">
        <div class="trainer">
          <img src="img/trainer1.jpg" alt="" />
          <h3 class="secondary mb">Alan Smith</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <a href="#" class="btn-2"
            ><ion-icon name="arrow-redo-circle-outline"></ion-icon
          ></a>
        </div>

        <div class="trainer">
          <img src="img/trainer2.jpg" alt="" />
          <h3 class="secondary mb">Alan Smith</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <a href="#" class="btn-2"
            ><ion-icon name="arrow-redo-circle-outline"></ion-icon
          ></a>
        </div>

        <div class="trainer">
          <img src="img/trainer3.jpg" alt="" />
          <h3 class="secondary mb">Alan Smith</h3>
          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <a href="#" class="btn-2"
            ><ion-icon name="arrow-redo-circle-outline"></ion-icon
          ></a>
        </div>
      </div>
    </div>
    <!-- End Trainer -->

    <!-- Testimonial -->
    <div class="section" id="testimonial">
      <div class="container flex">
        <div class="text">
          <h2 class="primary">
            That's What Our Super <br />
            Client Says
          </h2>

          <br />
          <br />
          <br />

          <div class="client">
            <img src="img/client1.jpg" alt="" />
            <h2 class="secondary">Exelent Training</h2>
            <p class="tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              dolorem vitae nulla totam dolores assumenda debitis architecto qui
              blanditiis inventore voluptatum deleniti similique, consequatur
              ratione cum? Omnis, ratione itaque nam praesentium vel
              consequatur.
            </p>
          </div>
        </div>

        <div class="visual">
          <img src="img/testimonial.png" alt="" />
        </div>
      </div>
    </div>
    <!-- End Testimonial -->

    <!-- Discount -->
    <div class="section" id="discount">
      <div class="container flex">
        <div class="visual">
          <img src="img/discount.png" alt="" />
        </div>
        <div class="text">
          <h2 class="primary mb">
            Fitness Classes This Summer, Pay Now And Get 25% Discount
          </h2>

          <p class="tertiary mb">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            adipisci provident incidunt rerum quos ea aliquam in. In aliquam a
            non odio recusandae! Dolorem modi facere ducimus ullam?
          </p>

          <a href="#" class="btn mt">Book Now</a>
        </div>
      </div>
    </div>
    <!-- End Discount -->

    
 <!--===========Footer=================-->
 <div class="footer">
  <div class="links">
      <h3>Quick Links</h3>
      <ul>
          <li>Offers & Discounts</li>
          <li>Get Coupon</li>
          <li>Contact Us</li>
          <li>About</li>
      </ul>
  </div>
  <div class="links">
      <h3>Fashion in Area</h3>
      <ul>
          <li>Gym Accessories</li>
          <li>helath tips</li>
          <li>choose your timings</li>
          <li>Rules for Gym</li>
      </ul>
  </div>
  <div class="links">
      <h3>Support</h3>
      <ul>
          <li>Frequently Asked Questions</li>
          <li>Report a Payment Issue</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
      </ul>
  </div>
</div> <br><br>
<footer>
<div class="container flex">
  <p class="tertiary">
    &copy; 2023 Kalyan's GYM. All Rights Reserved
  </p>
</div>

</footer>

    <!-- Ion Icons Js -->
    <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
    ></script>
    <script
      nomodule
      src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
    ></script>
    <!-- JS -->
    <script src="js/script.js"></script>
    <script>//Js
        document.querySelector(".mobile-btn").addEventListener("click", function () {
          document.querySelector(".menu").classList.toggle("active");
        });</script>
  </body>
</html>
`