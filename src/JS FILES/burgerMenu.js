document.addEventListener("DOMContentLoaded", () => {
  const burgerToggle = document.getElementById("burgerToggle");
  const mobileLinks = document.getElementById("mobileLinks");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenuLinks = mobileLinks.querySelectorAll("p");

  let isOpen = false;

  function openMenu() {
    mobileLinks.classList.remove("hidden", "translate-x-[100%]");
    mobileLinks.classList.add("translate-x-0");
    isOpen = true;
  }

  function closeMenu() {
    mobileLinks.classList.remove("translate-x-0");
    mobileLinks.classList.add("translate-x-[100%]");
    isOpen = false;

    // Hide after transition
    setTimeout(() => {
      mobileLinks.classList.add("hidden");
    }, 300);
  }

  // Toggle via ☰ button
  burgerToggle.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Close via X button
  closeBtn.addEventListener("click", () => {
    closeMenu();
  });

  // Close when a nav link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (e) => {
    if (
      isOpen &&
      !mobileLinks.contains(e.target) &&
      !burgerToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
});

const navLinks = mobileLinks.querySelectorAll("p");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileLinks.classList.add("hidden");
    mobileLinks.classList.remove("slide-in");
    isOpen = false;
  });
});
