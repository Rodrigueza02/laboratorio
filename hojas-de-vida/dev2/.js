(function () {

  const navbar = document.querySelector(".dev2-navbar");
  const links = document.querySelectorAll(".dev2-link");
  const sections = document.querySelectorAll(".dev2-section");

  // Navbar cambia al hacer scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      navbar.classList.add("dev2-scrolled");
    } else {
      navbar.classList.remove("dev2-scrolled");
    }
  });

  // Detectar sección visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        links.forEach(link => link.classList.remove("dev2-active"));

        const activeLink = document.querySelector(
          `.dev2-link[href="#${entry.target.id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("dev2-active");
        }
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));

})();