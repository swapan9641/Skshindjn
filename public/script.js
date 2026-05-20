// Fetch Contact Links from Backend
window.addEventListener('DOMContentLoaded', async () => {
    try {
        // Change to your production URL when deployed
        const res = await fetch('http://localhost:5000/api/contact-links');
        const data = await res.json();
        document.getElementById('waLink').href = data.whatsapp;
        document.getElementById('tgLink').href = data.telegram;
    } catch (e) {
        console.error("Could not load contact links from server.");
    }
});

// Scroll Animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(elem => observer.observe(elem));

// Form Submission
document.getElementById('submissionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Encrypting...";
    submitBtn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        category: document.getElementById('category').value,
        message: document.getElementById('message').value
    };

    try {
        // Change to your production URL when deployed
        const response = await fetch('http://localhost:5000/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        if(result.success) {
            alert('Transmission secured. Thank you.');
            e.target.reset();
        } else {
            alert('Notice: ' + result.message);
        }
    } catch (err) {
        alert('Could not reach servers. Check connection.');
    } finally {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    }
});
