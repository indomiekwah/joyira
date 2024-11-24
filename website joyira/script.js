document.querySelector('.search-bar').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const palettes = document.querySelectorAll('.palette');
  
    palettes.forEach(palette => {
      if (palette.textContent.toLowerCase().includes(searchQuery)) {
        palette.style.display = 'block';
      } else {
        palette.style.display = 'none';
      }
    });
  });
  