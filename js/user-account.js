document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const profileUpload = document.getElementById('profile-upload');
  const changePhotoBtn = document.querySelector('.change-photo-btn');
  const profileImg = document.getElementById('profile-img');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Change Profile Picture
  changePhotoBtn.addEventListener('click', function () {
    profileUpload.click();
  });

  profileUpload.addEventListener('change', function (e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        profileImg.src = event.target.result;
        // In a real app, you would upload the image to your server here
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  });

  // Tab Switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');

      checkEmptyState();
    });
  });

  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLink = document.getElementById('nav-link');

  hamburgerMenu.addEventListener('click', function () {
    navLink.style.display = navLink.style.display === 'block' ? 'none' : 'block';
  });
});