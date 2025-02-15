const sentences = [
    "Welcome to my portfolio!",
    "I am a developer!",
    "I love coding and building projects.",
    
  ];

  let currentSentence = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Typing speed in ms
  const delayBetweenSentences = 2000; // Delay before the next sentence in ms
  const typingContainer = document.getElementById("typing");

  function typeSentence() {
    if (charIndex < sentences[currentSentence].length) {
      typingContainer.textContent += sentences[currentSentence].charAt(charIndex);
      charIndex++;
      setTimeout(typeSentence, typingSpeed);
    } else {
      setTimeout(deleteSentence, delayBetweenSentences);
    }
  }

  function deleteSentence() {
    if (charIndex > 0) {
      typingContainer.textContent = sentences[currentSentence].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteSentence, typingSpeed / 2);
    } else {
      currentSentence = (currentSentence + 1) % sentences.length; // Loop through sentences
      setTimeout(typeSentence, typingSpeed);
    }
  }

  // Start the typing animation
  typeSentence();

//   // Select all navigation links
// const navLinks = document.querySelectorAll('ul li a');

// // Add a click event listener to each link
// navLinks.forEach(link => {
//   link.addEventListener('click', function () {
//     // Remove "active" class from all links
//     navLinks.forEach(nav => nav.classList.remove('active'));
//     // Add "active" class to the clicked link
//     this.classList.add('active');
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  // Smooth scroll and active class management
  document.querySelector('nav').addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
          e.preventDefault();
          const target = document.querySelector(e.target.hash);
          if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
          }
      }
  });

  // Update active class on scroll
  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.id;
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.hash === `#${current}`) {
              link.classList.add('active');
          }
      });
  });

  // Set initial active state
  window.dispatchEvent(new Event('scroll'));
});

//contact form
      // Handle form submission
   


      document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('contactForm');
        const responseMessage = document.getElementById('responseMessage');
        const loadingBar = document.getElementById('loadingBar');
        let isSubmitting = false; // Flag to prevent multiple submissions
    
        form.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent default form submission
    
          if (isSubmitting) return; // Prevent multiple submissions
    
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();
    
          // Basic form validation
          if (!name || !email || !message) {
            showMessage("Please fill in all fields.", "red");
            return;
          }
    
          isSubmitting = true; // Lock submission
          showLoading(true); // Show loading animation
    
          // Prepare parameters
          const params = { name, email, message };
    
          // Send email using EmailJS
          emailjs.send('service_rq53gkh', 'template_57v2cec', params)
            .then(function(response) {
              showMessage("Message sent successfully!", "green");
              form.reset();
            })
            .catch(function(error) {
              showMessage("Failed to send message. Please try again.", "red");
              console.error('Failed to send email:', error);
            })
            .finally(() => {
              setTimeout(() => {
                isSubmitting = false; // Unlock submission after 5 seconds
              }, 5000);
              showLoading(false); // Hide loading animation
            });
        });
    
        // Function to display and auto-hide response messages
        function showMessage(text, color) {
          responseMessage.textContent = text;
          responseMessage.style.color = color;
          responseMessage.style.display = "block";
    
          setTimeout(() => {
            responseMessage.style.display = "none";
          }, 3000);
        }
    
        // Function to show/hide loading animation
        function showLoading(show) {
          loadingBar.style.display = show ? "block" : "none";
        }
      });

      //nav bar
      document.addEventListener("DOMContentLoaded", function() {
     const burger = document.querySelector('.burger');
     const navLinks = document.querySelector('.nav-links');
     const navLinksItems = document.querySelectorAll('.nav-links a');
     
    //  const readMoreListItem = document.createElement('li');

    //  // Create a new anchor tag
    //  const readMoreLink = document.createElement('a');
    //  readMoreLink.setAttribute('href', 'readmore.html'); // Set the link target
    //  readMoreLink.textContent = 'Read More'; // Set the link text
    //  readMoreLink.classList.add('read-more'); // Add a class for styling (optional)
     
    //  // Append the anchor to the list item
    //  readMoreListItem.appendChild(readMoreLink);
     
    //  // Append the list item to the navigation menu
    //  navLinks.appendChild(readMoreListItem);

     burger.addEventListener('click', () => {
         // Toggle Burger Animation
         burger.classList.toggle('activee');
         // Toggle Menu Visibility
         navLinks.classList.toggle('activee');
     });
     navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
          burger.classList.remove('activee'); // Remove active class from burger
          navLinks.classList.remove('activee'); // Remove active class from menu
      });
  });
     // Close menu when clicking outside
     document.addEventListener('click', (event) => {
         if (!event.target.closest('.navbar') && navLinks.classList.contains('activee')) {
             burger.classList.remove('activee');
             navLinks.classList.remove('activee');
         }
     });
    });

// Get theme toggle button
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Toggle dark mode class
function toggleTheme() {
  body.classList.toggle('dark-mode');

  // Save preference to localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  // Update button text
  themeToggle.textContent = isDarkMode ? '🌞' : '🌚';
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '🌞';
}

// Attach click handler
themeToggle.addEventListener('click', toggleTheme);
        
    
    