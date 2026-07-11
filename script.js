// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        if(this.getAttribute('href').startsWith('#')){

            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior:'smooth'
            });

        }

    });
});


// Header shadow on scroll
window.addEventListener('scroll',()=>{

    const header=document.querySelector('header');

    if(window.scrollY>50){
        header.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";
    }else{
        header.style.boxShadow="0 5px 15px rgba(0,0,0,.1)";
    }

});


// Contact Form
const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for contacting PRISM English Hub! We will contact you shortly.");

form.reset();

});

}


// Simple fade animation
const cards=document.querySelectorAll(
".course-card,.why-card,.testimonial-card,.faq-item"
);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .6s ease";

observer.observe(card);

});
