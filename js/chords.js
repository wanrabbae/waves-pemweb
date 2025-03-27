document.addEventListener('DOMContentLoaded', function () {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const chordItems = document.querySelectorAll('.chord-item');
  const loadMoreBtn = document.querySelector('.load-more .btn');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      categoryBtns.forEach(btn => btn.classList.remove('active'));

      this.classList.add('active');

      const category = this.textContent.toLowerCase();

      chordItems.forEach(item => {
        if (category === 'semua' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      alert('Fitur ini akan memuat lebih banyak chord dalam implementasi nyata');
    });
  }
});