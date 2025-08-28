
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faqPlus, .faqMinus");

  faqs.forEach(btn => {
    btn.addEventListener("click", () => {
      const container = btn.closest("div"); // find the parent div of this FAQ
      const answer = container.nextElementSibling; // the <p> after it
      const plus = container.querySelector(".faqPlus");
      const minus = container.querySelector(".faqMinus");

      // toggle
      answer.classList.toggle("hidden");
      plus.classList.toggle("hidden");
      minus.classList.toggle("hidden");
    });
  });
});

