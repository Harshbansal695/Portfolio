window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skill-items, .portfolio-box, .certi-item, .contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about content", { origin: "right" });

document
  .getElementById("downloadResume")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const link = document.createElement("a");
    link.href = "assets/Harsh_Bansal_Resume.pdf";
    link.download = "Harsh_Bansal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
