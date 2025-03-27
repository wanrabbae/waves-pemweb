document.addEventListener('DOMContentLoaded', function () {
  const wikiTabBtns = document.querySelectorAll('.wiki-tab-btn');
  const wikiContents = document.querySelectorAll('.wiki-content');

  wikiTabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      wikiTabBtns.forEach(btn => btn.classList.remove('active'));
      wikiContents.forEach(content => content.classList.remove('active'));

      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleCards = document.querySelectorAll('.article-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(btn => btn.classList.remove('active'));

      this.classList.add('active');

      const filter = this.textContent.toLowerCase();

      articleCards.forEach(card => {
        if (filter === 'semua' || card.dataset.category.includes(filter.replace(' ', ''))) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const loadMoreBtn = document.querySelector('.load-more .btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      alert('Fitur ini akan memuat lebih banyak artikel dalam implementasi nyata');
    });
  }

  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLink = document.getElementById('nav-link');

  hamburgerMenu.addEventListener('click', function () {
    navLink.style.display = navLink.style.display === 'block' ? 'none' : 'block';
  });
});