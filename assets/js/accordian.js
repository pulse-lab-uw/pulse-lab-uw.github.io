document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const content = item.querySelector(".accordion-content");

    if (item.classList.contains("open")) {
      // ----- CLOSE -----
      
      // Set fixed height (from auto) so we can animate it
      content.style.height = content.scrollHeight + "px";

      // Force reflow (important!)
      content.offsetHeight;

      // Animate to 0
      content.style.height = "0px";

      item.classList.remove("open");

    } else {
      // ----- OPEN -----

      // Measure height
      const fullHeight = content.scrollHeight;

      // Start from 0
      content.style.height = "0px";

      // Force reflow
      content.offsetHeight;

      // Animate to full height
      content.style.height = fullHeight + "px";

      item.classList.add("open");

      // After animation completes, set to auto
      content.addEventListener("transitionend", function handler() {
        content.style.height = "auto";
        content.removeEventListener("transitionend", handler);
      });
    }
  });
});