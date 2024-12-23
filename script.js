
        // const menuToggle = document.getElementById('menuToggle');
        // const navLinks = document.getElementById('navLinks');

        // menuToggle.addEventListener('click', () => {

        //     // if (navLinks.classList.contains('active')) {
        //         // navLinks.classList.remove('active');
        //         navLinks.classList.toggle('active');
        //     });
    
        //     // Ensure menu closes when resizing back to desktop view
        //     window.addEventListener('resize', () => {
        //         if (window.innerWidth > 768) {
        //             navLinks.classList.remove('active');
        //         }
        //     // } else {
        //     //     navLinks.classList.add('active');
        //     // }

        // });
    
        // const menuToggle = document.getElementById('menuToggle');
        // const navLinks = document.getElementById('navLinks');
        
        // menuToggle.addEventListener('click', () => {
        //     navLinks.classList.toggle('active');
        // });
        
        // window.addEventListener('resize', () => {
        //     if (window.innerWidth > 768) {
        //         navLinks.classList.remove('active');
        //     }
        // });
        const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Ensure menu closes when resizing back to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});
