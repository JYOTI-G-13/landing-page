// Smooth scrolling for the 'Start Cooking' button
document.querySelector('.cta-button').addEventListener('click', function() {
    document.getElementById('ingredients').scrollIntoView({ behavior: 'smooth' });
});