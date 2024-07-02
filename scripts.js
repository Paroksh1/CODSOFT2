document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add code to actually send the message, e.g., using an AJAX request.
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("header h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power4.out"
});

gsap.from(".subtitle", {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    y: 20,
    ease: "power4.out"
});

gsap.from("nav ul li", {
    duration: 1,
    opacity: 0,
    delay: 0.8,
    y: 20,
    stagger: 0.2,
    ease: "power4.out"
});

gsap.from("#about img", {
    scrollTrigger: {
        trigger: "#about img",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "power4.out"
});

gsap.from("#about p", {
    scrollTrigger: {
        trigger: "#about p",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power4.out"
});

AOS.init();
