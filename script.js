// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = this.querySelector('input[type="text"]').value.trim();
  const phone = this.querySelector('input[type="tel"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  
  if (!name || !phone || !email) {
    alert('Please fill in all fields.');
    e.preventDefault();
  } else if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit mobile number.');
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  } else {
    alert('Appointment request submitted successfully!');
  }
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.classList.add('scroll-top');
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
