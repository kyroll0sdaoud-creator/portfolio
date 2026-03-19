
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'React Enthusiast', 'UI Designer'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,

});
const myWorkBtn = document.getElementById('mywork-btn');
const contactBtn = document.getElementById('contact-btn');
const myWorkSection = document.getElementById('mywork-section');
const contactSection = document.getElementById('contact-section');
const backButtons = document.querySelectorAll('.back-home-btn');
const aboutSection = document.getElementById('about-section');
const work_nav = document.getElementById('work-nav-link');
const contact_nav = document.getElementById('contact-nav-link');
const home_nav = document.getElementById('home-nav-link');


if (window.innerWidth < 1238) {
    document.getElementById("profile-pic").src = "picture/ii2.jpg"


}



function checkAndResize() {
    if (window.innerWidth < 1238) {
        document.getElementById("profile-pic").src = "picture/ii2.jpg"
    } else {
        document.getElementById("profile-pic").src = "picture/lll.jpg"
    }

}
window.addEventListener('resize', checkAndResize);


function showAndLock(target, other) {
    other.style.display = 'none';
    other.classList.remove('active-section');

    target.style.display = 'block';
    target.classList.add('active-section');

    document.body.style.overflow = 'auto';
    target.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        if (window.innerWidth > 768) {
            document.body.style.overflow = 'hidden';
        }
    }, 800);
}

function goHome() {
    window.scrollTo({ top: 0, behavior: "instant" });

    setTimeout(() => {
        myWorkSection.style.display = 'none';
        contactSection.style.display = 'none';
        aboutSection.style.display = 'none';

        if (window.innerWidth > 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, 800);
}




backButtons.forEach(btn => {
    btn.addEventListener('click', goHome);
});
home_nav.addEventListener("click",goHome);



const aboutNavLink = document.getElementById('about-nav-link'); 
aboutNavLink.addEventListener('click', () => {
    showAndLock(aboutSection, myWorkSection); 
    contactSection.style.display = 'none'; 
    overlay.style.height = "0%"; // 
});
myWorkBtn.addEventListener('click', () => showAndLock(myWorkSection, contactSection));
work_nav.addEventListener('click', () => showAndLock(myWorkSection, contactSection));
contactBtn.addEventListener('click', () => showAndLock(contactSection, myWorkSection));
contact_nav.addEventListener('click', () => showAndLock(contactSection, myWorkSection));

// light
const light = document.getElementById("i1")
const image = document.getElementById("profile-pic")
const contaner_imge = document.getElementById("conimg")
console.log(contaner_imge);





    


light.addEventListener('click',()=>{
    document.body.classList.toggle("light-mode")
    contaner_imge.classList.toggle("containerimg")
    contaner_imge.classList.toggle("imagelight")
    
    if (document.body.classList.contains("light-mode") || window.innerWidth < 1238){
        image.src="picture/ii2.jpg"
    }
    else{
        image.src="picture/lll.jpg"
    }

});




// for nav
const openBtn = document.getElementById('openOverlay');
const closeBtn = document.getElementById('closeOverlay');
const overlay = document.getElementById('menuOverlay');

openBtn.onclick = () => {
    overlay.style.height = "100%";
};

closeBtn.onclick = () => {
    overlay.style.height = "0%";
};

document.querySelectorAll('.overlay-links a').forEach(link => {
    link.onclick = () => { overlay.style.height = "0%"; };
});

