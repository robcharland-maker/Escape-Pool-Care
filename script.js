document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle expanding cards
    document.querySelectorAll('.toggle-card').forEach(card => {
        const btn = card.querySelector('.expand-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const isExpanded = card.classList.contains('expanded');
                
                if (isExpanded) {
                    card.classList.remove('expanded');
                    btn.innerHTML = 'Read Details <span class="arrow">▼</span>';
                } else {
                    card.classList.add('expanded');
                    btn.innerHTML = 'Show Less <span class="arrow">▼</span>';
                }
            });
        }
    });
});
