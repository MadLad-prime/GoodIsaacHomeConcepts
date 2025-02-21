// Dropdown Menu Functionality
const menuButton = document.querySelector('header button');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown');

// Add dropdown links
dropdownMenu.innerHTML = `
    <a href="tel:+123456789">Contact</a>
    <a href="portfolio.html">Portfolio</a>
`;

// Append dropdown to header
document.querySelector('header').appendChild(dropdownMenu);

// Toggle dropdown visibility
menuButton.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.matches('header button') && !event.target.matches('.dropdown a')) {
        dropdownMenu.style.display = 'none';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animations on Scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

sections.forEach(section => {
    observer.observe(section);
});

// Dynamic Hover Effects for Buttons and Links
const buttons = document.querySelectorAll('button, a');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// 🔄 Dynamically update YouTube thumbnail based on the link
const videoLink = document.getElementById('video-link').href;
const videoID = videoLink.split('/').pop().split('?')[0];
document.getElementById('video-thumbnail').src = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;

function updateThumbnail() {
    const videoLink = document.getElementById('video-link').href;
    const videoID = videoLink.split('/').pop().split('?')[0];
    document.getElementById('video-thumbnail').src = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
}

// Call it once when the page loads
updateThumbnail();

// Example: If the link changes dynamically, just call updateThumbnail() again
