document.addEventListener('DOMContentLoaded', () => {
    // Fade in animation for elements
    const elementsToAnimate = [
        '.hospital-context-bar', // Added the new bar to animation
        '.badge', 
        '.main-title', 
        '.sub-title', 
        '.acronym-box', 
        '.description', 
        '.action-buttons', 
        '.features-grid'
    ];

    elementsToAnimate.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if(element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        }
    });
});

function startScreening() {
    const btn = document.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Loading...';
    btn.style.opacity = '0.8';
    
    setTimeout(() => {
        alert("Redirecting to AI Screening Module...");
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
    }, 1000);
}

// Function to simulate a hospital setting their details
function editHospitalDetails() {
    const nameSpan = document.getElementById('hospital-name');
    const locSpan = document.getElementById('hospital-location');
    
    const newName = prompt("Enter Hospital Name:", nameSpan.innerText);
    
    if (newName) {
        const newLoc = prompt("Enter Hospital Location:", locSpan.innerText);
        if (newLoc) {
            nameSpan.innerText = newName;
            locSpan.innerText = newLoc;
        }
    }
}
