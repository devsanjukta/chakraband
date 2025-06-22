window.addEventListener('load', () => {
    // After 5 seconds splash animation
    setTimeout(() => {
      const splash = document.getElementById('splash');
      splash.style.transition = 'opacity 0.5s';
      splash.style.opacity = '0';

      // Show page opening animation
      const pageOpening = document.getElementById('page-opening');
      pageOpening.classList.add('visible');

      setTimeout(() => {
        splash.style.display = 'none';

        // After loading animation (2s), hide page opening and show main content
        setTimeout(() => {
          pageOpening.style.transition = 'opacity 0.5s';
          pageOpening.style.opacity = '0';
          setTimeout(() => {
            pageOpening.style.display = 'none';
            const main = document.getElementById('main-content');
            main.style.display = 'block';
            setTimeout(() => main.classList.add('visible'), 50);
          }, 500);
        }, 2000);
      }, 500); // give a bit of time for opacity to apply
    }, 3000);
  });