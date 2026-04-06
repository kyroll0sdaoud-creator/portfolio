
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'React Enthusiast', 'UI Designer'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,

});

// for nav
const openBtn = document.getElementById('openOverlay');
const closeBtn = document.getElementById('closeOverlay');
const overlay = document.getElementById('menuOverlay');
const myWorkBtn = document.getElementById('mywork-btn');
const contactBtn = document.getElementById('contact-btn');
const myWorkSection = document.getElementById('mywork-section');
const contactSection = document.getElementById('contact-section');
const backButtons = document.querySelectorAll('.back-home-btn');
const aboutSection = document.getElementById('about-section');
const work_nav = document.getElementById('work-nav-link');
const contact_nav = document.getElementById('contact-nav-link');
const home_nav = document.getElementById('home-nav-link');
const homeSection = document.querySelector('.hero-section');

const image2=document.getElementsByClassName("img-project");
console.log(image2);


function updateProfileImage() {
    const image = document.getElementById("profile-pic");
    if (!image) return;
    if(!image2) return;

    const isSmall = window.innerWidth < 1238;
    const isLight = document.body.classList.contains("light-mode");

    image.src = (isSmall || isLight)
        ? "picture/ii2.jpg" : "picture/lll.jpg";

        for(i of image2){
        i.src =(isSmall || isLight) 
            ? "picture/Java Wallpaper, 37 Java Wallpaper, BFP.jpg" : "picture/download.webp";
        }
    }



updateProfileImage();


function checkAndResize() {
    updateProfileImage();
}
window.addEventListener('resize', checkAndResize);


function showAndLock(target) {
    const sections = [homeSection, myWorkSection, contactSection, aboutSection];
    target.style.display = 'block';
    target.classList.add('active-section');
    document.body.style.overflow = 'auto';
    target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        sections.forEach(sec => {
            if (sec !== target) {
                sec.style.display = 'none';
                sec.classList.remove('active-section');
            }
        });

        if (window.innerWidth > 768) {
            document.body.style.overflow = 'hidden';
        }
    }, 800); 
}

function goHome() {
    [myWorkSection, contactSection, aboutSection].forEach(sec => {
        if (!sec) return;
        sec.style.display = 'none';
        sec.classList.remove('active-section');
    });

    homeSection.style.display = 'flex'; 

    document.body.style.overflow =
        window.innerWidth > 768 ? 'hidden' : 'auto';

    window.scrollTo({ top: 0, behavior: "auto" });
}




backButtons.forEach(btn => {
    btn.addEventListener('click', goHome);
});
home_nav.addEventListener("click",goHome);



const aboutNavLink = document.getElementById('about-nav-link'); 
aboutNavLink.addEventListener('click', () => {
    showAndLock(aboutSection); 
    contactSection.style.display = 'none'; 
    overlay.style.height = "0%"; // 
});
myWorkBtn.addEventListener('click', () => showAndLock(myWorkSection));
work_nav.addEventListener('click', () => showAndLock(myWorkSection));
contactBtn.addEventListener('click', () => showAndLock(contactSection));
contact_nav.addEventListener('click', () => showAndLock(contactSection));

// light
const light = document.getElementById("i1")
const image = document.getElementById("profile-pic")
const contaner_imge = document.getElementById("conimg")

light.addEventListener('click',()=>{
    document.body.classList.toggle("light-mode")
    contaner_imge.classList.toggle("containerimg")
    contaner_imge.classList.toggle("imagelight")
    
updateProfileImage();

});


const allOpenButtons = document.querySelectorAll('.open-menu-btn');

allOpenButtons.forEach(btn => {
    btn.onclick = () => {
        overlay.style.height = "100%";
    };
});



openBtn.onclick = () => {
    overlay.style.height = "100%";
};

closeBtn.onclick = () => {
    overlay.style.height = "0%";
};

document.querySelectorAll('.overlay-links a').forEach(link => {
    link.onclick = () => { overlay.style.height = "0%"; };
});



