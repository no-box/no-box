document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.image-link');
    const imageDisplay = document.getElementById('image-display');
    
    // Inicijalno postavljamo stylove za display
    imageDisplay.style.cssText = `
        width: 300px;
        height: 200px;
        margin: 20px auto;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px dashed #ccc;
    `;
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imagePath = this.getAttribute('data-image');
            
            console.log('Putanja slike:', imagePath); // Debug linija
            
            if(imagePath) {
                imageDisplay.style.backgroundImage = `url('${imagePath}')`;
            }
        });
    });
});