// for updating the time dynamically
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    function updateTime() {
      timeEl.textContent = `Current Time: ${Date.now()} ms`;
    }
    updateTime();
    // updates the time every second
    setInterval(updateTime, 1000);

    // This changes the theme from light to dark and vice versa
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark')
        ? 'Dark'
        : 'Light';
    });

    // Uploading the avatar image preview
    const avatarInput = document.getElementById('avatarInput');
    const avatarImg = document.getElementById('avatar');

    avatarInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          avatarImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });