document.addEventListener('DOMContentLoaded', () => {

    /* --- Custom Cursor --- */
    const cursor = document.getElementById('custom-cursor');
    const hoverTargets = document.querySelectorAll('.hover-target');

    // Mover el cursor personalizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Añadir efecto al pasar sobre elementos clickeables
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });

    /* --- Magnetic Button Effect --- */
    const magneticBtns = document.querySelectorAll('.magnetic-target');
    
    magneticBtns.forEach(btn => {
        const text = btn.querySelector('.magnetic-text');
        
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const h = rect.width / 2;
            
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - h;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            if(text) text.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
            if(text) text.style.transform = `translate(0px, 0px)`;
        });
    });

    /* --- Hero Image Parallax (Slight movement based on mouse) --- */
    const heroSection = document.getElementById('home');
    const img1 = document.querySelector('.hero-img-1');
    const img2 = document.querySelector('.hero-img-2');

    if(heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;

            if(img1) img1.style.transform = `translate(${x}px, ${y}px)`;
            if(img2) img2.style.transform = `translate(${-x * 1.5}px, ${-y * 1.5}px)`;
        });
    }

    /* --- WhatsApp Form Logic --- */
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const treatment = document.getElementById('treatment').value;
            
            const phoneNumber = '5491136311016';
            const whatsappMessage = `Hola Dra. Mercedes Ursi, mi nombre es ${name}. Estoy interesado/a en: *${treatment}*.`;
            
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            whatsappForm.reset();
        });
    }

    /* --- Pill Navigation Active State --- */
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
