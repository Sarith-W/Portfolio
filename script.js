//Nav Bar
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();


//Typewriter effect
var string = "A passionate tech enthusiast with a desire to have a positive impact on the world!";
var str = string.split("");
var el = document.getElementById('writer-text');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();



//Contact Form
function sendmail(){
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (email == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You haven't entered your Email",
    })
  } else if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Please check the email and enter a valid email address",
    })
  } else if (subject == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You haven't entered a Subject",
    })
  } else if (message == ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You haven't entered a Message",
    })
  } else {
    window.open('mailto:sarith.20210010@iit.ac.lk?subject='+subject+'&body='+message);
    Swal.fire(
      'Thank You!',
      "I'll reach out to you soon!",
      'success'
    )
    document.getElementById("contact-form").reset();
  }
}



//Back to top button
let mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}