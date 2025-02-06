document.addEventListener('DOMContentLoaded', () => {
    // Add scroll reveal animations
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Add this at the end of the DOMContentLoaded event listener
    const exploreBtn = document.getElementById('explore-btn');
    const welcomeSection = document.getElementById('welcome-section');
    const blocksGrid = document.getElementById('blocks-grid');
    const featureBlocks = document.querySelectorAll('.feature-block');

    exploreBtn.addEventListener('click', () => {
        // Animate explore button
        exploreBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            exploreBtn.style.transform = 'scale(0.95)';
        }, 150);

        // Fade out welcome section
        welcomeSection.style.transition = 'all 0.5s ease';
        welcomeSection.classList.add('fade-out');

        // After welcome section fades out
        setTimeout(() => {
            welcomeSection.style.display = 'none';
            
            // Show blocks grid
            blocksGrid.style.display = 'block';
            blocksGrid.classList.remove('hidden');
            
            // Trigger fade in of blocks grid
            requestAnimationFrame(() => {
                blocksGrid.classList.add('fade-in');
                
                // Animate each block with delay
                featureBlocks.forEach((block, index) => {
                    setTimeout(() => {
                        block.style.opacity = '1';
                        block.style.transform = 'scale(1)';
                    }, index * 100);
                });
            });
        }, 500);
    });
}); 