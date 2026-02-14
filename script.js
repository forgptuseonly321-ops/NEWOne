// Typewriter Effect for Hero Subtitle
const heroTexts = [
  "Asmit & Nimmi Forever 💕",
  "My One and Only Urvashi 🥰",
  "You Complete Me Nimmi ❤️",
  "My Forever Valentine 💖"
];

let textIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
  const typeElement = document.querySelector('.hero-subtitle');
  const currentText = heroTexts[textIdx];
  
  if (!isDeleting) {
    typeElement.textContent = currentText.substring(0, charIdx + 1);
    charIdx++;
    
    if (charIdx === currentText.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
    } else {
      typeSpeed = 100;
    }
  } else {
    typeElement.textContent = currentText.substring(0, charIdx - 1);
    charIdx--;
    
    if (charIdx === 0) {
      isDeleting = false;
      textIdx = (textIdx + 1) % heroTexts.length;
      typeSpeed = 500; // Pause before new text
    } else {
      typeSpeed = 50;
    }
  }
  
  setTimeout(typeWriter, typeSpeed);
}

// Start typewriter when page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Love Timer - Update this date to your anniversary!
const anniversaryDate = new Date('2021-01-01T00:00:00'); // Started in 2021

function updateTimer() {
  const now = new Date();
  const diff = now - anniversaryDate;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer();

// Flip Card Function
function flipCard(card) {
  card.classList.toggle('flipped');
}

// Show Special Message
function showSpecialMessage() {
  const specialDiv = document.getElementById('specialMessage');
  specialDiv.classList.remove('hidden');
  
  // Create confetti burst
  createConfettiBurst();
  
  // Fireworks
  createFireworks();
}

// Show Yes Message
function showYesMessage() {
  document.getElementById('yesMessage').classList.remove('hidden');
  
  // Mega celebration
  for(let i = 0; i < 50; i++) {
    setTimeout(() => {
      createFloatingHeart();
    }, i * 100);
  }
  
  // Multiple confetti bursts
  for(let i = 0; i < 5; i++) {
    setTimeout(() => {
      createConfettiBurst();
    }, i * 300);
  }
}

// Move No Button (funny interaction)
function moveNoButton(button) {
  const maxX = window.innerWidth - button.offsetWidth - 50;
  const maxY = window.innerHeight - button.offsetHeight - 50;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  button.style.position = 'fixed';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
  button.style.transition = 'all 0.3s ease';
}

// Continuous Floating Hearts
setInterval(() => {
  createFloatingHeart();
}, 1000);

function createFloatingHeart() {
  const heart = document.createElement('div');
  const hearts = ['💖', '💕', '💗', '💓', '💝', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🩷'];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-50px';
  heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
  heart.style.opacity = 0.9;
  heart.style.zIndex = 9999;
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'floatUp 8s linear';
  
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 8000);
}

// Confetti Burst
function createConfettiBurst() {
  const emojis = ['❤️', '💖', '💕', '💗', '💝', '💓', '🌹', '💐', '🌺', '🌸', '✨', '⭐', '🎉', '🎊'];
  
  for(let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      
      confetti.style.position = 'fixed';
      confetti.style.left = '50%';
      confetti.style.top = '50%';
      confetti.style.fontSize = (Math.random() * 25 + 20) + 'px';
      confetti.style.zIndex = 10000;
      confetti.style.pointerEvents = 'none';
      
      const angle = (Math.PI * 2 * i) / 50;
      const velocity = 200 + Math.random() * 200;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      confetti.style.animation = `burst-${i} 2s ease-out forwards`;
      
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes burst-${i} {
          to {
            transform: translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
      
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
        style.remove();
      }, 2000);
    }, i * 20);
  }
}

// Fireworks Effect
function createFireworks() {
  for(let i = 0; i < 8; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * (window.innerHeight * 0.6);
      launchFirework(x, y);
    }, i * 400);
  }
}

function launchFirework(x, y) {
  const colors = ['#ff1493', '#ff69b4', '#9370db', '#00ff87', '#60efff', '#ffc0cb', '#ff0844'];
  const particles = 30;
  
  for(let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.zIndex = 10000;
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
    
    const angle = (Math.PI * 2 * i) / particles;
    const velocity = 100 + Math.random() * 150;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    particle.style.animation = `firework-${i} 1.5s ease-out forwards`;
    
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes firework-${i} {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(${tx}px, ${ty + 100}px) scale(0);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
      style.remove();
    }, 1500);
  }
}

// Music Toggle
let isMusicPlaying = true;

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const icon = document.getElementById('musicIcon');
  
  if (isMusicPlaying) {
    music.pause();
    icon.textContent = '🔇';
    isMusicPlaying = false;
  } else {
    music.play();
    icon.textContent = '🎵';
    isMusicPlaying = true;
  }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Sparkle Effect on Mouse Move
let sparkleTimeout;

document.addEventListener('mousemove', (e) => {
  clearTimeout(sparkleTimeout);
  
  sparkleTimeout = setTimeout(() => {
    if (Math.random() > 0.7) {
      createSparkle(e.clientX, e.clientY);
    }
  }, 50);
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.innerHTML = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.fontSize = '20px';
  sparkle.style.zIndex = 9998;
  sparkle.style.pointerEvents = 'none';
  sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
  
  document.body.appendChild(sparkle);
  
  setTimeout(() => sparkle.remove(), 1000);
}

// Sparkle Animation
const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
  @keyframes sparkleAnim {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: scale(1.2) rotate(180deg);
      opacity: 0.8;
    }
    100% {
      transform: scale(0) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(sparkleStyle);

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
  });
});

// Fade In Animation
const fadeStyle = document.createElement('style');
fadeStyle.innerHTML = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(fadeStyle);

// Console Easter Egg
console.log('%c💖 Hey There! 💖', 'font-size: 24px; color: #ff1493; font-weight: bold;');
console.log('%cYou found the secret message! 🥰', 'font-size: 18px; color: #ff69b4;');
console.log('%cI love you more than anything! ♾️', 'font-size: 16px; color: #ffc0cb;');
console.log('%c- Your Forever Love 💕', 'font-size: 14px; color: #9370db;');
