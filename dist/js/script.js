// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

function closeAlert() {
  successAlert.classList.add("hidden");
  errorAlert.classList.add("hidden");
}
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
document.addEventListener("DOMContentLoaded", function () {
  const text = "Fadly Febro Surya Pratama"; // Teks yang ingin ditampilkan
  let index = 0;
  const typewriter = document.getElementById("typewriter");

  function typeEffect() {
    if (index < text.length) {
      typewriter.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150); // Kecepatan typing effect (150ms)
    } else {
      // Setelah selesai mengetik, mulai menghapus
      setTimeout(deleteEffect, 1000); // Tunggu 1 detik sebelum mulai menghapus
    }
  }

  function deleteEffect() {
    if (index > 0) {
      typewriter.innerHTML = typewriter.innerHTML.slice(0, -1); // Menghapus karakter terakhir
      index--;
      setTimeout(deleteEffect, 100); // Kecepatan menghapus effect (100ms)
    } else {
      // Setelah menghapus, mulai lagi dari awal
      index = 0;
      setTimeout(typeEffect, 500); // Tunggu sebelum mulai mengetik lagi
    }
  }

  typeEffect(); // Mulai efek typewriter
});
// Hide loading screen after page loads
window.onload = function () {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none"; // Hide loading screen after page loads
};
