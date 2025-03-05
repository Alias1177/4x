

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox');
  const ball = document.querySelector('.ball');
  const iconNight = document.querySelector('.icon-night');
  const iconDay = document.querySelector('.icon-day');
  const body = document.body;

  // Load saved theme from localStorage
  const defaultTheme = localStorage.getItem('theme') || 'light';
  if (defaultTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    checkbox.checked = true;
    iconNight.classList.remove('hidden');
    iconDay.classList.add('hidden');
    ball.style.transform = 'translateX(24px)';
  }

  // Toggle theme
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      iconNight.classList.remove('hidden');
      iconDay.classList.add('hidden');
      ball.style.transform = 'translateX(24px)';
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      iconNight.classList.add('hidden');
      iconDay.classList.remove('hidden');
      ball.style.transform = 'translateX(0)';
    }
  });
});


module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.querySelector('.up-button').classList.add('visible');
    } else {
      document.querySelector('.up-button').classList.remove('visible');
    }
  });


  function updateLabel() {
    const input = document.getElementById("MarketSelector").value;
    const label = document.getElementById("MarketLabel");
    label.textContent = input || "Select Market";
  }


    function setTime(period) {
        console.log("Selected time period:", period);
        // Add your logic to handle time period changes
    }

    function processInput() {
        const selectedPrice = document.getElementById("price_select").value;
        const accepted = document.getElementById("accept").checked;

        if (!accepted) {
            alert("You must accept the terms to continue.");
            return;
        }

        console.log("Processing prediction for price:", selectedPrice);
        // Simulate a response
        document.getElementById("response").textContent = `Prediction for $${selectedPrice} is being processed...`;
    }
