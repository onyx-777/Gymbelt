export const template1 = `<!DOCTYPE html>
<html>
<head>
	<title>Gym Website Template</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
  <style>
    .wow:first-child {
      visibility: hidden;
    }

    @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body{
	margin:0;
	padding:0;
	overflow-x: hidden;
    background-color: black;
}

*{
	box-sizing: border-box;
	margin:0;
	padding:0;
	font-family: 'Oswald', sans-serif;
}

/*Header*/

header{
	position:fixed;
	left: 0px;
	top:0px;
	width: 100%;
	z-index: 10;
	background-color: #000000;
	padding:15px 15px;
}
header .container{
	-webkit-display: flex;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header .logo a{
	font-size: 30px;
	text-decoration: none;
	color:#ffffff;
	font-weight: 700;
}
header .logo a span{
	color:#c11325;
}
header .nav{
	position: fixed;
	background-color: #c11325;
	width: 280px;
	top:0;
	right:0;
	height: 100%;
	z-index: 99;
	padding:100px 0px 15px; 
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
	-webkit-transition: transform .5s ease;
    transition: transform .5s ease;
}
header .nav.open{
	-webkit-transform: translateX(0);
	transform: translateX(0);
}
header .nav ul{
	list-style: none;
	margin:0;
	padding:0px;
}
header .nav ul li{
display: block;
}
header .nav ul li a{
	text-decoration: none;
	font-size: 30px;
	font-weight: 400;
    color:#ffffff;
    display: block;
    position: relative;
    padding:10px 30px;
}
header .nav ul li a.active::before{
	content: '';
	position: absolute;
	left:0px;
	top:0px;
	height: 100%;
	width:100%;
	background-color:#000000;
	opacity:.2;
	-webkit-transition: width .5s ease;
	transition: width .5s ease;
	z-index: -1;
}
header .nav ul li a::before{
	content: '';
	position: absolute;
	left:0px;
	top:0px;
	height: 100%;
	width:0px;
	background-color:#000000;
	opacity:.2;
	-webkit-transition: width .5s ease;
	transition: width .5s ease;
	z-index: -1;
}
header .nav ul li a:hover::before{
	width: 100%;
}
header .ham-burger{
	display: inline-block;
	position: relative;
	z-index: 100;
}
header .ham-burger span{
	height: 3px;
	margin-bottom:8px;
	display: block;
	background-color:#ffffff;
	width:30px;
	-webkit-transition: transform .5s ease;
	transition: transform .5s ease;
}
header .ham-burger span:nth-child(1){
	transform-origin: left top;
}
header .ham-burger span:nth-child(2){
	transform-origin: left bottom;
}

header .ham-burger.active span:nth-child(1){
	-webkit-transform: rotate(45deg) translateY(-6px);
	transform: rotate(45deg) translateY(-6px);
}
header .ham-burger.active span:nth-child(2){
	-webkit-transform: rotate(-45deg) translateY(6px);
	transform: rotate(-45deg) translateY(6px)
}

.container{
	max-width: 1170px;
	margin: auto;
}

/*Home section*/
.home{
	height: 100vh;
	background: black;
	background-size: cover;
	padding:15px;
	-webkit-display: flex;
	display: flex;
	position: relative;
}
.home .go-down{
  position: absolute;
  bottom: 50px;
  width: 26px;
  height:40px;
  border:1px solid #ffffff;
  display: block;
  border-radius:4px;
  text-align: center;
  left:50%;
  margin-left: -13px;
}
.home .go-down .fa{
	color:#ffffff;
	-webkit-animation: goDown 1s ease infinite;
	animation: goDown 1s ease infinite;
}
@-webkit-keyframes goDown{
	0%{transform: translateY(0);opacity:.5}
	100%{transform: translateY(10px);}
}
@keyframes goDown{
	0%{transform: translateY(0);opacity:.5}
	100%{transform: translateY(10px);}
}
.home .container{
  -webkit-display: flex;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.home h1{
	color:#ffffff;
	font-size: 60px;
	font-weight: 700;
	text-transform: uppercase;
	margin:0;
}

.home h1 span{
	color:#c11325;;
}


/*About section*/

.about{
	padding:80px 0px;
	background-color:#ffffff;
}

.about .content{ 
 -webkit-display: flex;
 display: flex;
}
.about .content .box{
	flex:0 0 33.33%;
	max-width: 33.33%;
	padding:15px;
}
.about .content .box .inner{
	background-color:#222222;
}
.about .content .box:nth-child(2) .inner{
	background-color: #c11325;
}
.about .content .box .inner .img img{
	width: 100%;
}
.about .content .box .inner .text{
	padding:30px;
}

.about .content .box .inner .text h4{
  font-size: 20px;
  margin:0;
  padding: 0px 0px 15px;
  font-weight: 500;
  color:#ffffff;
 text-transform: capitalize;
  text-align: center;
}
.about .content .box .inner .text p{
	font-size: 15px;
	line-height:20px;
	color:#ffffff;
	text-align: center;
	margin:0;
	font-family: 'Open Sans', sans-serif;
}


/*Service Section*/
.service{
	padding:80px 0px;
	background-color: #c11325;
}

.service .content{
	-webkit-display:flex;
	display:flex;
}

.service .content .box{
	flex:0 0 50%;
	max-width: 50%;
	padding:15px;
}

.service .content .text h2{
	font-size: 30px;
	font-weight: 500;
	color:#ffffff;
	padding:0px 0px 20px;
}

.service .content .text p{
    font-size: 15px;
	line-height:20px;
	color:#ffffff;
	margin:0;
	padding:0px 0px 20px;
	font-family: 'Open Sans', sans-serif;
}

.service .content .text .btn{
	padding:8px 30px;
	background-color: #222222;
	color:#ffffff;
	text-decoration: none;
	display: inline-block;
	border:1px solid transparent;
	cursor: pointer;
	-webkit-transition: all .5s ease;
	transition: all .5s ease;
}

.service .content .text .btn:hover{
	border:1px solid #ffffff;
	color:#ffffff;
	background-color: transparent;
}
.service .content .accordian-container{
	margin-bottom: 5px;
}
.service .content .accordian-container .head{
	background-color:rgba(0,0,0,0.2);
	position: relative;
	padding:12px 15px;
	cursor: pointer;
}
.service .content .accordian-container .head .fa{
	position: absolute;
	right: 10px;
	top:13px;
	color:#ffffff;
	height:30px;
	width: 30px;
	text-align: center;
	line-height: 30px;
	color:#ffffff;
	border-radius: 50%;
}
.service .content .accordian-container .head h4{
  font-size: 20px;
  margin:0;
  padding:0;
  font-weight: 500;
  color: #ffffff;
  text-transform: capitalize;
}
.service .content .accordian-container.active .head{
  background-color: #222222;	
}
.service .content .accordian-container .body{
	display: none;
	padding:15px;
	background-color: #222222;
	border-top:1px solid #333333;
}

.service .content .accordian-container:nth-child(1) .body{
	display: block;
}
.service .content .accordian-container .body p{
    font-size: 15px;
	line-height:20px;
	color:#ffffff;
	margin:0;
	padding:0;
	font-family: 'Open Sans', sans-serif;	
}


/*Classes Section*/

.classes{
	padding:80px 0px 50px;
	background-color: #ffffff;
}

.classes .content{
	-webkit-display: flex;
	display: flex;
}

.classes .content .box{
	padding:15px;
	flex:0 0 50%;
	max-width: 50%;
}

.classes .content .img img{
	width: 100%;
	-webkit-transform: rotateY(180deg);
	transform: rotateY(180deg);
}

.classes .content .text h2{
    font-size: 30px;
    font-weight: 500;
    color: #000000;
    padding: 0px 0px 20px;
}

.classes .content .text p{
	font-size: 15px;
    line-height: 20px;
    color: #000000;
    margin: 0;
    padding: 0px 0px 30px;
    font-family: 'Open Sans', sans-serif;
}


.classes .content .class-items .item{
	margin-bottom: 30px;
	display: flex;
}
.classes .content .class-items .item:nth-child(1){
 background-color: #222222;
}
.classes .content .class-items .item:nth-child(2){
 background-color: #c11325;
}
.classes .content .class-items .item .item-text{
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.classes .content .class-items .item .item-text,
.classes .content .class-items .item .item-img{
	flex:0 0 50%;
	max-width: 50%;
	position: relative;
}

.classes .content .class-items .item .item-img img{
 width: 100%;
 display: block;
}
.classes .content .class-items .item .item-img .price{
	position: absolute;
	height: 50px;
	width: 60px;
	font-size:20px;
	font-weight: 500; 
	color:#ffffff;
	text-align: center;
	line-height: 50px;
}
.classes .content .class-items .item:nth-child(1) .item-img .price{
 background-color: #c11325;
 left:0;
 top:0;
}
.classes .content .class-items .item:nth-child(2) .item-img .price{
 background-color: #222222;
 right:0;
 top:0;
}
.classes .content .class-items .item .item-text h4{
	font-size: 20px;
    margin: 0;
    padding: 0px 0px 15px;
    font-weight: 500;
    color: #ffffff;
    text-transform: capitalize;
    text-align: left;
}

.classes .content .class-items .item .item-text p{
	font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    text-align:left;
    margin: 0;
    padding:0 0 20px;
    font-family: 'Open Sans', sans-serif;
}
.classes .content .class-items .item .item-text a{
 font-size: 16px;
 text-decoration: none;
 display: inline-block;
}

.classes .content .class-items .item .item-text a{
	color:#ffffff;
}




/*Start Today Section*/
.start-today{
	background-color: #222222;
}

.start-today .content{
	-webkit-display: flex;
	display: flex;
	align-items: center;
}

.start-today .content .box{
	flex:0 0 50%;
	max-width: 50%;
	padding:0px 15px;
}

.start-today .content .img img{
	width: 100%;
	display: block;
}

.start-today .content .text h2{
	font-size: 30px;
    font-weight: 500;
    color: #ffffff;
    padding: 0px 0px 20px;
}

.start-today .content .text p{
	font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    margin: 0;
    padding: 0px 0px 20px;
    font-family: 'Open Sans', sans-serif;
}

.start-today .content .text .btn{
	padding: 8px 30px;
    background-color: #c11325;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    border: 1px solid transparent;
    cursor: pointer;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

.start-today .content .text .btn:hover{
	color:#ffffff;
	border-color: #ffffff;
	background-color: transparent;
}




/*Class Schedule Section*/
.schedule{
	padding:80px 0px;
}

.schedule .content{
	-webkit-display: flex;
	display: flex;
}

.schedule .content .box{
	flex:0 0 50%;
	max-width: 100%;
	padding:15px;
}

.schedule .content .text h2{
   font-size: 30px;
    font-weight: 500;
    color: #000000;
    padding: 0px 0px 20px;
}

.schedule .content .text p{
	font-size: 15px;
    line-height: 20px;
    color: #222222;
    margin: 0;
    padding: 0px 0px 20px;
    font-family: 'Open Sans', sans-serif;
}
.schedule .content .text img{
	width: 100%;
	transform: rotateY(180deg);
}

.schedule .content .timing .table{
	width: 100%;
	border-collapse: collapse;
}

.schedule .content .timing .table td{
	border:1px solid #dfdfdf;
	padding: 8px;
	font-size: 15px;
	text-align: center;
	color:#222222;
}

.schedule .content .timing .table tr:nth-child(even) td.day{
	background-color: #222222;
}
.schedule .content .timing .table tr:nth-child(odd) td.day{
	background-color: #444444;
}
.schedule .content .timing .table tr:nth-child(1) td.day{
	background-color: #c11325;
}
.schedule .content .timing .table tr td.day{
	color:#ffffff;
	border-color:transparent;
}


/*Gallery Section*/

.gallery .content{
	-webkit-display: flex;
	display: flex;
	flex-wrap: wrap;
}

.gallery .content .box{
	flex:0 0 50%;
	max-width: 50%;	
}
.gallery .content .box img{
	display: block;
	width: 100%;
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: all .5s ease;
	transition: all .5s ease;
}
.gallery .content .box img:hover{
	-webkit-filter: grayscale(0%);
	filter: grayscale(0%);
}

.gallery h2{
	font-size: 30px;
    font-weight: 500;
    color: #000000;
    padding: 0px 0px 20px;
    text-align: center;
}


/*Price Section*/

.price-package{
	padding: 80px 0px;
	background-color: #ffffff;
}
.price-package h2{
	font-size: 30px;
	font-weight: 500;
	color:#000000;
	padding: 0px 0px 20px;
	text-align: center;
}

.price-package .title-p{
 font-size: 15px;
 line-height: 20px;
 color:#222222;
 margin:0;
 text-align: center;
 padding:0 20% 50px;
 font-family: 'Open-sans', sans-serif;
}

.price-package .content{
	-webkit-display: flex;
	display: flex;
}
.price-package .content .box{
	flex:0 0 33.33%;
	max-width: 33.33%;
	padding: 15px;
}
.price-package .content .box .inner{
	background-color: #f0f0f0;
}
.price-package .content .box .inner .price-tag{
	padding: 15px;
	font-size: 20px;
	background-color: #c11325;
	color:#ffffff;
	text-align: center;
	font-weight: 700;
}
.price-package .content .box .inner .text{
	padding:30px 15px;
	text-align: center;
}
.price-package .content .box .inner .text h3{
	font-size: 24px;
	color:#222222;
	margin:0;
	padding:0px 0px 20px;
	font-weight: 700;
}
.price-package .content .box .inner .text p{
 font-size: 15px;
 line-height: 20px;
 color:#222222;
 margin:0;
 text-align: center;
 padding:0 0 5px;
 font-family: 'Open-sans', sans-serif;	
}
.price-package .content .box .inner .text .btn{
    padding: 8px 30px;
    background-color: #c11325;
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    border: 1px solid transparent;
    cursor: pointer;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    margin-top: 10px;
}
.price-package .content .box .inner .text .btn:hover{
	border-color:#222222;
	color:#222222;
	background-color: transparent;
}
.price-package .content .box .inner .img img{
	width: 100%;
}



/*Contact Section*/

.contact{
	padding:80px 0px;
	background-color: #222222;
}

.contact .content{
	-webkit-display: flex;
	display: flex;
}

.contact .content .box{
	flex:0 0 50%;
	max-width: 50%;
	padding: 15px;
}

.contact .content .form input,
.contact .content .form textarea{
 height: 45px;
 width: 100%;
 padding:6px 12px;
 margin-bottom: 25px;
 background-color: transparent;
 border:1px solid #ffffff;
 font-family: 'Open-sans',sans-serif;
 color:#ffffff;
}
.contact .content .form input:focus,
.contact .content .form textarea:focus{
 outline: none;
}
.contact .content .form input::placeholder,
.contact .content .form textarea::placeholder{
	color:#ffffff;
}
.contact .content .form textarea{
	height: 100px;
}

.contact .content .form button{
	border:none;
	outline: none;
	box-shadow: none;
	height: 45px;
	padding:0px 50px;
	border:1px solid transparent;
	background-color: #c11325;
	color:#ffffff;
	font-size: 15px;
	transition: all .5s ease;
	cursor: pointer;
}
.contact .content .form button:hover{
	background-color:transparent;
	color:#ffffff; 
    border-color:#ffffff;
}

.contact .content .text h2{
	font-size: 30px;
    font-weight: 500;
    color: #c11325;
    padding: 0px 0px 20px;
}
.contact .content .text p{
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    margin: 0;
    padding: 0px 0px 30px;
    font-family: 'Open-sans', sans-serif;
}

.contact .content .text .info ul{
	list-style: none;
	padding:0;
	margin:0;
}

.contact .content .text .info li{
	display: block;
	margin-bottom: 15px;
	color:#ffffff;
	font-size: 15px;
	letter-spacing: 1px;
	position: relative;
	padding-left: 40px;
	font-family: 'Open-Sans',sans-serif;
}
.contact .content .text .info li span{
	display: inline-block;
	position: absolute;
	left:0px;
	top:0px;
	font-size: 20px;
	color:#c11325;
}
.contact .content .text .social {
	padding-top: 30px;
}
.contact .content .text .social a{
	height: 40px;
	width: 40px;
	line-height: 40px;
	text-align: center;
	background-color: #c11325;
    text-decoration: none;	
    display: inline-block;
    margin-right: 10px;
    transition: all .5s ease;
    border:1px solid transparent;
} 

.contact .content .text .social a:hover{
	background-color: transparent;
    border-color: #ffffff;
}

.contact .content .text .social a span{
	color:#ffffff;
	font-size: 20px;
}

.contact .content .text .copy{
	border-top:1px solid #333333;
	margin-top: 30px;
	padding-top: 20px;
	color:#c5c5c5;
	font-size: 15px;
}




/*Responsive*/

/*if screen width is less than or equal to 991px then*/
@media(max-width: 991px){
   .home{
   	background-position: center;
   }
  .classes .content{
  	flex-wrap: wrap;
  }
 .classes .content .box {
    flex: 0 0 100%;
    max-width: 100%;
}
.classes .content .img{
	display: none;
}
.start-today .content .box{
	padding:15px;
}
}

/*if screen width is less than or equal to 767px then*/
@media(max-width: 767px){
  .home h1{
      font-size: 40px;
  }
  .about .content{
  	 flex-wrap: wrap;
  }
  .about .content .box {
    flex: 0 0 100%;
    max-width: 100%;
}
.service .content{
	flex-wrap: wrap;
}
.service .content .box {
    flex: 0 0 100%;
    max-width: 100%;
}
.classes .content .class-items .item{
	flex-wrap: wrap;
}
.classes .content .class-items .item .item-text, 
.classes .content .class-items .item .item-img {
    flex: 0 0 100%;
    max-width: 100%;
}
.schedule .content{
	flex-wrap: wrap;
}
.schedule .content .box{
flex: 0 0 100%;
    max-width: 100%;	
}
.start-today .content{
	flex-wrap: wrap;
}
.start-today .content .box {
    flex: 0 0 100%;
    max-width: 100%;
  }
 .gallery .content{
  flex-wrap: wrap;
 }
.gallery .content .box {
    flex: 0 0 100%;
    max-width: 100%;
}
.price-package .content{
	flex-wrap: wrap;
}
.price-package .content .box {
    flex: 0 0 100%;
    max-width: 100%;
}
.contact .content{
	flex-wrap: wrap;
}
.contact .content .box {
    flex: 0 0 100%;
    max-width: 100%;
}
}

/*if screen width is less than or equal to 550px then*/
@media(max-width: 550px){
  .home h1{
      font-size: 30px;
  }
}

/*!
Animate.css - http://daneden.me/animate
Licensed under the MIT license

Copyright (c) 2013 Daniel Eden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
}

@-webkit-keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}

@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  60% {
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  80% {
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes swing {
  20% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  60% {
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  80% {
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.swing {
  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -ms-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%, 50%, 70%, 90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -ms-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%, 60%, 80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -ms-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }

  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@keyframes wobble {
  0% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
  }

  15% {
    -webkit-transform: translateX(-25%) rotate(-5deg);
    -ms-transform: translateX(-25%) rotate(-5deg);
    transform: translateX(-25%) rotate(-5deg);
  }

  30% {
    -webkit-transform: translateX(20%) rotate(3deg);
    -ms-transform: translateX(20%) rotate(3deg);
    transform: translateX(20%) rotate(3deg);
  }

  45% {
    -webkit-transform: translateX(-15%) rotate(-3deg);
    -ms-transform: translateX(-15%) rotate(-3deg);
    transform: translateX(-15%) rotate(-3deg);
  }

  60% {
    -webkit-transform: translateX(10%) rotate(2deg);
    -ms-transform: translateX(10%) rotate(2deg);
    transform: translateX(10%) rotate(2deg);
  }

  75% {
    -webkit-transform: translateX(-5%) rotate(-1deg);
    -ms-transform: translateX(-5%) rotate(-1deg);
    transform: translateX(-5%) rotate(-1deg);
  }

  100% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}

@-webkit-keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
    transform: scale(.9);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
    -ms-transform: scale(.3);
    transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9);
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

@-webkit-keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounceInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@-webkit-keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }

  80% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }

  80% {
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }

  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    transform: translateX(-30px);
  }

  80% {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  80% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  80% {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    transform: translateY(10px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}

@-webkit-keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(.95);
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.3);
    transform: scale(.3);
  }
}

@keyframes bounceOut {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  25% {
    -webkit-transform: scale(.95);
    -ms-transform: scale(.95);
    transform: scale(.95);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(.3);
    -ms-transform: scale(.3);
    transform: scale(.3);
  }
}

.bounceOut {
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}

@-webkit-keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

@keyframes bounceOutDown {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}

@-webkit-keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes bounceOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

@-webkit-keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes bounceOutRight {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}

@-webkit-keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes bounceOutUp {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

@-webkit-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

@keyframes fadeOutDownBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(2000px);
    -ms-transform: translateY(2000px);
    transform: translateY(2000px);
  }
}

.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
  }
}

.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

@-webkit-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
}

@keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}

@-webkit-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes fadeOutRightBig {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}

.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}

@-webkit-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes fadeOutUpBig {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}

@-webkit-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes flip {
  0% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(.95);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.animated.flip {
  -webkit-backface-visibility: visible;
  -ms-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateY(-10deg);
    -ms-transform: perspective(400px) rotateY(-10deg);
    transform: perspective(400px) rotateY(-10deg);
  }

  70% {
    -webkit-transform: perspective(400px) rotateY(10deg);
    -ms-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@-webkit-keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px) rotateX(0deg);
    -ms-transform: perspective(400px) rotateX(0deg);
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
}

@-webkit-keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

@keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px) rotateY(0deg);
    -ms-transform: perspective(400px) rotateY(0deg);
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: perspective(400px) rotateY(90deg);
    -ms-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

.flipOutY {
  -webkit-backface-visibility: visible !important;
  -ms-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

@-webkit-keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: translateX(-20%) skewX(30deg);
    -ms-transform: translateX(-20%) skewX(30deg);
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}

.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

@-webkit-keyframes lightSpeedOut {
  0% {
    -webkit-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
}

@keyframes lightSpeedOut {
  0% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
}

.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}

@-webkit-keyframes rotateIn {
  0% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(-200deg);
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateIn {
  0% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(-200deg);
    -ms-transform: rotate(-200deg);
    transform: rotate(-200deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}

@-webkit-keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}

@-webkit-keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}

@-webkit-keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}

@-webkit-keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

@keyframes rotateInUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
}

.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}

@-webkit-keyframes rotateOut {
  0% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(200deg);
    transform: rotate(200deg);
    opacity: 0;
  }
}

@keyframes rotateOut {
  0% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotate(200deg);
    -ms-transform: rotate(200deg);
    transform: rotate(200deg);
    opacity: 0;
  }
}

.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}

@-webkit-keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}

@-webkit-keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

@keyframes rotateOutDownRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}

@-webkit-keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpLeft {
  0% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    opacity: 0;
  }
}

.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}

@-webkit-keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes rotateOutUpRight {
  0% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }

  100% {
    -webkit-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
  }
}

.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}

@-webkit-keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@-webkit-keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}

@-webkit-keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }

  100% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

@keyframes slideOutLeft {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(-2000px);
    -ms-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}

.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}

@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

@keyframes slideOutRight {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
    -ms-transform: translateX(2000px);
    transform: translateX(2000px);
  }
}

.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}

@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

@keyframes slideOutUp {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-2000px);
    -ms-transform: translateY(-2000px);
    transform: translateY(-2000px);
  }
}

.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}

@-webkit-keyframes hinge {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40% {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  80% {
    -webkit-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    opacity: 1;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  100% {
    -webkit-transform: translateY(700px);
    transform: translateY(700px);
    opacity: 0;
  }
}

@keyframes hinge {
  0% {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    -webkit-transform: rotate(80deg);
    -ms-transform: rotate(80deg);
    transform: rotate(80deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40% {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  80% {
    -webkit-transform: rotate(60deg) translateY(0);
    -ms-transform: rotate(60deg) translateY(0);
    transform: rotate(60deg) translateY(0);
    opacity: 1;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  100% {
    -webkit-transform: translateY(700px);
    -ms-transform: translateY(700px);
    transform: translateY(700px);
    opacity: 0;
  }
}

.hinge {
  -webkit-animation-name: hinge;
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%) rotate(-120deg);
    -ms-transform: translateX(-100%) rotate(-120deg);
    transform: translateX(-100%) rotate(-120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}

@keyframes rollOut {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
    -ms-transform: translateX(0px) rotate(0deg);
    transform: translateX(0px) rotate(0deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateX(100%) rotate(120deg);
    -ms-transform: translateX(100%) rotate(120deg);
    transform: translateX(100%) rotate(120deg);
  }
}

.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}
  </style>
  
</head>
<body>
 
 <!-- Start Header  -->
 <header>
 	 <div class="container">
 	 	<div class="logo">
 	 		 <a href="">Fitness <span>Club</span></a>
 	 	</div>
 	 	<a href="javascript:void(0)" class="ham-burger">
 	       <span></span>	
 	       <span></span>
 	 	</a>
 	 	<div class="nav">
 	 		<ul>
 	 			<li><a href="#home">Home</a></li>
 	 			<li><a href="#about">About</a></li>
 	 			<li><a href="#service">Services</a></li>
 	 			<li><a href="#classes">Classes</a></li>
 	 			<li><a href="#schedule">Schedule</a></li>
 	 			<li><a href="#price">Price</a></li>
 	 			<li><a href="#contact">Contact</a></li>
 	 		</ul>
 	 	</div>
 	 </div>
 </header>
 <!-- End Header  -->

  <!-- Start Home -->
  <section class="home wow flash" id="home">
  	 <div class="container">
  	 	  <h1 class="wow slideInLeft" data-wow-delay="1s">It's <span>gym</span> time. Let's go</h1>
  	 	  <h1 class="wow slideInRight" data-wow-delay="1s">We are ready to <span>fit you</span></h1>
  	 </div>
  	  <!-- go down -->
  	      <a href="#about" class="go-down">
  	      	  <i class="fa fa-angle-down" aria-hidden="true"></i>
  	      </a>
  	  <!-- go down -->

  </section>
  <!-- End Home -->


 <!-- Start About -->
  <section class="about" id="about">
  	  <div class="container">
  	  	  <div class="content">
  	  	  	   <div class="box wow bounceInUp">
  	  	  	   	   <div class="inner">
  	  	  	   	   	   <div class="img">
  	  	  	   	   	   	  <img src="images/about1.jpg" alt="about" />
  	  	  	   	   	   </div>
                       <div class="text">
                       	   <h4>Free Consultation</h4>
                       	   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                       </div>
  	  	  	   	   </div>
  	  	  	   </div>
  	  	  	   	<div class="box wow bounceInUp" data-wow-delay="0.2s">
  	  	  	   	   <div class="inner">
  	  	  	   	   	   <div class="img">
  	  	  	   	   	   	  <img src="images/about2.jpg" alt="about" />
  	  	  	   	   	   </div>
                       <div class="text">
                       	   <h4>Best Training</h4>
                       	   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                       </div>
  	  	  	   	   </div>
  	  	  	   </div>
  	  	  	   <div class="box wow bounceInUp" data-wow-delay="0.4s">
  	  	  	   	   <div class="inner">
  	  	  	   	   	   <div class="img">
  	  	  	   	   	   	  <img src="images/about3.jpg" alt="about" />
  	  	  	   	   	   </div>
                       <div class="text">
                       	   <h4>Build Perfect Body</h4>
                       	   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                       </div>
  	  	  	   	   </div>
  	  	  	   </div>
  	  	  </div>
  	  </div>
  </section>
 <!-- End About -->


 <!-- Start Service -->
 <section class="service" id="service">
 	<div class="container">
 		 <div class="content">
 		 	  <div class="text box wow slideInLeft">
                  <h2>Services</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <a href="" class="btn">Start Now</a>
 		 	  </div>
 		 	  <div class="accordian box wow slideInRight">
 		 	  	    <div class="accordian-container active">
 		 	  	    	<div class="head">
 		 	  	    		<h4>Cardiovascular Equipment</h4>
 		 	  	    		<span class="fa fa-angle-down"></span>
 		 	  	    	</div>
 		 	  	    	<div class="body">
 		 	  	    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
 		 	  	    	</div>
 		 	  	    </div>
 		 	  	    <div class="accordian-container">
 		 	  	    	<div class="head">
 		 	  	    		<h4>Strength Training Equipment</h4>
 		 	  	    		<span class="fa fa-angle-up"></span>
 		 	  	    	</div>
 		 	  	    	<div class="body">
 		 	  	    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
 		 	  	    	</div>
 		 	  	    </div>
 		 	  	    <div class="accordian-container">
 		 	  	    	<div class="head">
 		 	  	    		<h4>Group Fitness Class</h4>
 		 	  	    		<span class="fa fa-angle-up"></span>
 		 	  	    	</div>
 		 	  	    	<div class="body">
 		 	  	    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
 		 	  	    	</div>
 		 	  	    </div>
 		 	  	    <div class="accordian-container">
 		 	  	    	<div class="head">
 		 	  	    		<h4>Other Services</h4>
 		 	  	    		<span class="fa fa-angle-up"></span>
 		 	  	    	</div>
 		 	  	    	<div class="body">
 		 	  	    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
 		 	  	    	</div>
 		 	  	    </div>
 		 	  </div>
 		 </div>
 	</div>
 </section>
 <!-- End Service -->

<!-- Start Classes -->
<section class="classes" id="classes">
	<div class="container">
		 <div class="content">
		 	  <div class="box img wow slideInLeft">
		 	  	 <img src="images/class2.png" alt="classes" />
		 	  </div>
		 	  <div class="box text wow slideInRight">
		 	  	 <h2>Our Classes</h2>
		 	  	 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
		 	  	<div class="class-items">
		 	  	 <div class="item wow bounceInUp">
                     <div class="item-img">
                     	 <img src="images/class1.jpg" alt="classes" />
                     	 <div class="price">
                     	 	 $99
                     	 </div>
                     </div>
                     <div class="item-text">
                     	  <h4>Stretching Training</h4>
                     	  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     	  <a href="">Get Details</a>
                     </div>
		 	  	 </div>
		 	  	 <div class="item wow bounceInUp">
                     <div class="item-text">
                     	  <h4>Stretching Training</h4>
                     	  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     	  <a href="">Get Details</a>
                     </div>
                     <div class="item-img">
                     	 <img src="images/class1.jpg" alt="classes" />
                     	 <div class="price">
                     	 	 $99
                     	 </div>
                     </div>
		 	  	 </div>
		 	  	</div>
		 	  </div>
		 </div>
	</div>
</section>
<!-- End Classes -->

<!-- Start Today -->
 <section class="start-today">
 	<div class="container">
 		 <div class="content">
 		 	  <div class="box text wow slideInLeft">
 		 	  	 <h2>Start Your Training Today</h2>
 		 	  	 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
 		 	  	 <a href="" class="btn">Start Now</a>
 		 	  </div>
 		 	  <div class="box img wow slideInRight">
 		 	  	 <img src="images/gallery4.jpg" alt="start today" />
 		 	  </div>

 		 </div>
 	</div>
 </section>
<!-- End Start Today -->

<!-- Start Schedule -->
  <section class="schedule" id="schedule">
  	 <div class="container">
  	 	  <div class="content">
  	 	  	   <div class="box text wow slideInLeft">
  	 	  	   	   <h2>Classes Schedule</h2>
  	 	  	   	   <p>
  	 	  	   	   	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
  	 	  	   	   </p>
  	 	  	   	   <img src="images/schedule1.png" alt="schedule" />
  	 	  	   </div>
  	 	  	   <div class="box timing wow slideInRight">
                   <table class="table">
                   	 <tbody>
                   	 	<tr>
                   	 		<td class="day">Monday</td>
                   	 		<td><strong>9:00 AM</strong></td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td class="day">Tuesday</td>
                   	 		<td><strong>9:00 AM</strong></td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td class="day">Wednesday</td>
                   	 		<td><strong>9:00 AM</strong></td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td class="day">Thursday</td>
                   	 		<td><strong>9:00 AM</strong></td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td class="day">Friday</td>
                   	 		<td><strong>9:00 AM</strong></td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 	<tr>
                   	 		<td class="day">Saturday</td>
                   	 		<td><strong>9:00 AM</strong></td>
                   	 		<td>Body Building <br/> 9:00 to 10:00 AM</td>
                   	 		<td>Room No:210</td>
                   	 	</tr>
                   	 </tbody>
                   </table>
  	 	  	   </div>
  	 	  </div>
  	 </div>
  </section>
<!-- End Schedule -->

<!-- Start Gallery -->
  <section class="gallery" id="gallery">
  	 <h2>Workout Gallery</h2>
  	<div class="content">
  		 <div class="box wow slideInLeft">
  		 	 <img src="images/gallery1.jpg" alt="gallery" />
  		 </div>
  		 <div class="box wow slideInRight">
  		 	 <img src="images/gallery2.jpg" alt="gallery" />
  		 </div>
  		 <div class="box wow slideInLeft">
  		 	 <img src="images/gallery3.jpg" alt="gallery" />
  		 </div>
  		 <div class="box wow slideInRight">
  		 	 <img src="images/gallery4.jpg" alt="gallery" />
  		 </div>
  	</div>
  </section>
<!-- End Gallery -->

 <!-- Start Price -->
  <section class="price-package" id="price">
  	 <div class="container">
  	 	  <h2>Choose Your Package</h2>
  	 	  <p class="title-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  	 	  <div class="content">
  	 	  	  <div class="box wow bounceInUp">
  	 	  	  	  <div class="inner">
  	 	  	  	  	   <div class="price-tag">
  	 	  	  	  	   	  $59/Month
  	 	  	  	  	   </div>
  	 	  	  	  	   <div class="img">
  	 	  	  	  	   	 <img src="images/price1.jpg" alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div class="text">
  	 	  	  	  	   	  <h3>Body Building Training</h3>
  	 	  	  	  	   	  <p>Get Free WiFi</p>
  	 	  	  	  	   	  <p>Month to Month</p>
  	 	  	  	  	   	  <p>No Time Restrictions</p>
  	 	  	  	  	   	  <p>Gym and Cardio</p>
  	 	  	  	  	   	  <p>Service Locker Rooms</p>
  	 	  	  	  	   	  <a href="" class="btn">Join Now</a>
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div class="box wow bounceInUp" data-wow-delay="0.2s">
  	 	  	  	  <div class="inner">
  	 	  	  	  	   <div class="price-tag">
  	 	  	  	  	   	  $69/Month
  	 	  	  	  	   </div>
  	 	  	  	  	   <div class="img">
  	 	  	  	  	   	 <img src="images/price2.jpg" alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div class="text">
  	 	  	  	  	   	  <h3>Body Building Training</h3>
  	 	  	  	  	   	  <p>Get Free WiFi</p>
  	 	  	  	  	   	  <p>Month to Month</p>
  	 	  	  	  	   	  <p>No Time Restrictions</p>
  	 	  	  	  	   	  <p>Gym and Cardio</p>
  	 	  	  	  	   	  <p>Service Locker Rooms</p>
  	 	  	  	  	   	  <a href="" class="btn">Join Now</a>
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  	  <div class="box wow bounceInUp" data-wow-delay="0.4s">
  	 	  	  	  <div class="inner">
  	 	  	  	  	   <div class="price-tag">
  	 	  	  	  	   	  $99/Month
  	 	  	  	  	   </div>
  	 	  	  	  	   <div class="img">
  	 	  	  	  	   	 <img src="images/price3.jpg" alt="price" />
  	 	  	  	  	   </div>
  	 	  	  	  	   <div class="text">
  	 	  	  	  	   	  <h3>Body Building Training</h3>
  	 	  	  	  	   	  <p>Get Free WiFi</p>
  	 	  	  	  	   	  <p>Month to Month</p>
  	 	  	  	  	   	  <p>No Time Restrictions</p>
  	 	  	  	  	   	  <p>Gym and Cardio</p>
  	 	  	  	  	   	  <p>Service Locker Rooms</p>
  	 	  	  	  	   	  <a href="" class="btn">Join Now</a>
  	 	  	  	  	   </div>
  	 	  	  	  </div>
  	 	  	  </div>
  	 	  </div>
  	 </div>
  </section>
 <!-- End Price -->

 <!-- Start Contact -->
  <section class="contact" id="contact">
     <div class="container">
        <div class="content">
            <div class="box form wow slideInLeft">
               <form>
                  <input type="text" placeholder="Enter Name">
                  <input type="text" placeholder="Enter Email">
                  <input type="text" placeholder="Enter Mobile">
                  <textarea placeholder="Enter Message"></textarea>
                  <button type="submit">Send Message</button>
               </form>
            </div>
            <div class="box text wow slideInRight">
                 <h2>Get Connected with Gym</h2>
                  <p class="title-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div class="info">
                      <ul>
                          <li><span class="fa fa-map-marker"></span> Gali no 11, House no 11, Lahore</li>
                          <li><span class="fa fa-phone"></span> 92 9999999999</li>
                          <li><span class="fa fa-envelope"></span> info@gym.com</li>
                      </ul>
                  </div>
                  <div class="social">
                       <a href=""><span class="fa fa-facebook"></span></a>
                       <a href=""><span class="fa fa-linkedin"></span></a>
                       <a href=""><span class="fa fa-skype"></span></a>
                       <a href=""><span class="fa fa-youtube-play"></span></a>
                  </div>

                  <div class="copy">
                      PowerBy &copy; Ali Ahmad
                  </div>
            </div>
        </div>
     </div>
  </section>
 <!-- End Contact -->



 <!-- jquery -->

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
	$(document).ready(function(){

      $(".ham-burger, .nav ul li a").click(function(){
       
        $(".nav").toggleClass("open")

        $(".ham-burger").toggleClass("active");
      })      
      $(".accordian-container").click(function(){
      	$(".accordian-container").children(".body").slideUp();
      	$(".accordian-container").removeClass("active")
      	$(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
      	$(this).children(".body").slideDown();
      	$(this).addClass("active")
      	$(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
      })

       $(".nav ul li a, .go-down").click(function(event){
         if(this.hash !== ""){

              event.preventDefault();

              var hash=this.hash; 

              $('html,body').animate({
                scrollTop:$(hash).offset().top
              },800 , function(){
                 window.location.hash=hash;
              });

              // add active class in navigation
              $(".nav ul li a").removeClass("active")
              $(this).addClass("active")
         }
      })
})

</script>
<script src="js/wow.min.js"></script>
<script>
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       0,
      }
    );
    wow.init();
  </script>
</body>
</html>





`;
