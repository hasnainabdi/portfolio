// LOADER
window.onload=()=>document.getElementById("loader").style.display="none";

// PROGRESS BAR
window.onscroll=()=>{
let winScroll=document.body.scrollTop||document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.getElementById("progress").style.width=(winScroll/height)*100+"%";
};

// CURSOR
document.addEventListener("mousemove",(e)=>{
let c=document.querySelector(".cursor");
c.style.left=e.clientX+"px";
c.style.top=e.clientY+"px";
});

// MENU
function toggleMenu(){
document.getElementById("nav-links").classList.toggle("active");
}

// DOWNLOAD RESUME
function downloadResume(){
// Create a temporary link element
const link = document.createElement('a');
link.href = 'assets/documents/resume.pdf'; // Update this with your actual resume file path
link.download = 'Muhammad_Hasnain_Resume.pdf';
link.target = '_blank';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById("nav-links").classList.remove("active");
        }
    });
});

// SCROLL ANIMATION
let el=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
el.forEach(e=>{
if(e.getBoundingClientRect().top<window.innerHeight-100){
e.classList.add("show");
}
});
});

// TYPING
let text="Frontend Developer & Digital Marketer";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,40);
}}
typing();

// SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
slides.forEach(slide => slide.classList.remove('active'));
currentSlide = (index + totalSlides) % totalSlides;
slides[currentSlide].classList.add('active');
updateDots();
}

function changeSlide(direction) {
showSlide(currentSlide + direction);
}

function updateDots() {
const dotsContainer = document.querySelector('.slider-dots');
dotsContainer.innerHTML = '';
for (let i = 0; i < totalSlides; i++) {
const dot = document.createElement('span');
dot.className = 'dot' + (i === currentSlide ? ' active' : '');
dot.onclick = () => showSlide(i);
dotsContainer.appendChild(dot);
}
}

// Initialize slider
showSlide(0);

// Auto-play slider
setInterval(() => changeSlide(1), 5000);

// PARTICLES
tsParticles.load("particles-js", {
particles:{
number:{value:60},
color:{value:"#c084fc"},
links:{enable:true,color:"#c084fc"},
move:{enable:true,speed:1},
opacity:{value:0.3},
size:{value:2}
}});
