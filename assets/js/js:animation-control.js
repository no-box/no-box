document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[data-animation]');
    const container = document.getElementById('animation-container');
    
    // Sakrij sve animacije na početku
    container.style.display = 'none';
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const animationType = this.getAttribute('data-animation');
            const animationPath = `assets/svg/nb-${animationType}.svg`;
            
            // Učitaj animaciju
            container.innerHTML = `
                <object type="image/svg+xml" data="${animationPath}" 
                        id="svg-animation" class="active-animation"></object>
            `;
            
            // Prikaži container
            container.style.display = 'block';
            
            // Restart animacije
            const svgObject = document.getElementById('svg-animation');
            svgObject.addEventListener('load', function() {
                const svgDoc = svgObject.contentDocument;
                const animationElements = svgDoc.querySelectorAll('animate, animateTransform');
                
                animationElements.forEach(anim => {
                    anim.beginElement();
                });
            });
        });
    });
});