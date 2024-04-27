// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwsJk-gfVy4dyPhKGLv8Q43JtZIMr4pProy43Hxn0UUQfap-az03SRAhHxXaedUtEJq/exec';
const form = document.forms['fadly-contact-form'];
const successAlert = document.getElementById('success-alert');
const errorAlert = document.getElementById('error-alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true; // Disable submit button
  submitBtn.innerHTML = '<span class="absolute inset-y-0 left-0 flex items-center pl-3"><svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0113.5 1h-3A1.5 1.5 0 019 2.5V4a8 8 0 01-4 6.928V12zm2 0a6 6 0 006 6V21.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 016 21.5V20a6 6 0 006-6v1.072zM6 12a6 6 0 006-6v1.072A6 6 0 006 12zm12 0a6 6 0 00-6-6v1.072A6 6 0 0018 12z"></path></svg></span><span>Loading...</span>'; // Show loading animation

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      submitBtn.innerHTML = 'Kirim'; // Restore button text
      submitBtn.disabled = false; // Enable submit button
      successAlert.classList.remove('hidden'); // Show success alert
      errorAlert.classList.add('hidden'); // Hide error alert
      form.reset(); // Reset form fields
    })
    .catch(error => {
      console.error('Error!', error.message);
      submitBtn.innerHTML = 'Kirim'; // Restore button text
      submitBtn.disabled = false; // Enable submit button
      successAlert.classList.add('hidden'); // Hide success alert
      errorAlert.classList.remove('hidden'); // Show error alert
    });
});

function closeAlert() {
  successAlert.classList.add('hidden');
  errorAlert.classList.add('hidden');
}
