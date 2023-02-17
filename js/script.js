const header = document.querySelector('#header');
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data;

    const script = document.createElement('script');
    script.src = 'js/menu.js';

    document.head.appendChild(script);
});
const slideshowSection = document.querySelector('#slideshow');
if(slideshowSection) {
    fetch('/slideshow.html')
    .then(res=>res.text())
    .then(data=>{
        slideshowSection.innerHTML=data;
        new Splide( '.splide', {
            type    : 'loop',
            autoplay: false,
            cover: true,
        }).mount();
    });
}

const servicesSection = document.querySelector('#services');
if(servicesSection) {
    fetch('/services.html')
    .then(res=>res.text())
    .then(data=>{
        servicesSection.innerHTML=data;
    });
}
const customersSection = document.querySelector('#customers');
if(customersSection) {
    fetch('/customers.html')
    .then(res=>res.text())
    .then(data=>{
        customersSection.innerHTML=data;
    });
}
var image = document.getElementsByClassName('about-us-thumb');
if(image) {
    new simpleParallax(image, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 2
    });    
}
