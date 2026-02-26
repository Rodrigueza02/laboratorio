(function () {

  const buttons = document.querySelectorAll(".dev4-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {

      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.offsetX - diameter / 2}px`;
      circle.style.top = `${e.offsetY - diameter / 2}px`;
      circle.classList.add("dev4-ripple");

      const ripple = button.getElementsByClassName("dev4-ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    });
  });

})();