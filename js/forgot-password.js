document.addEventListener('DOMContentLoaded', function () {
  const forgotForm = document.querySelector('.forgot-form');

  if (forgotForm) {
    forgotForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      console.log('Reset link would be sent to:', email);

      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Link reset password telah dikirim ke email Anda. Silakan cek inbox Anda.';
      successMessage.style.display = 'block';

      forgotForm.parentNode.insertBefore(successMessage, forgotForm.nextSibling);

      forgotForm.reset();

      setTimeout(() => window.location.href = 'login.html', 3000);
    });
  }

  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLink = document.getElementById('nav-link');

  hamburgerMenu.addEventListener('click', function () {
    navLink.style.display = navLink.style.display === 'block' ? 'none' : 'block';
  });
});