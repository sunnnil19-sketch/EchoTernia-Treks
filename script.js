// Detail page image modal
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".detail-gallery img");

  if (galleryImages.length) {
    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
      <div class="image-modal-backdrop"></div>
      <div class="image-modal-content">
        <button class="image-modal-close">&times;</button>
        <img src="" alt="Gallery image" />
      </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const closeButton = modal.querySelector(".image-modal-close");
    const backdrop = modal.querySelector(".image-modal-backdrop");

    function openModal(src, alt) {
      modalImg.src = src;
      modalImg.alt = alt;
      modal.classList.add("open");
    }

    function closeModal() {
      modal.classList.remove("open");
      modalImg.src = "";
    }

    galleryImages.forEach((img) => {
      img.addEventListener("click", function () {
        openModal(this.src, this.alt);
      });
    });

    closeButton.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
  }

  const bookLinks = document.querySelectorAll('a[href="#booking"], button.book, button.explore');
  const bookingSection = document.querySelector("#booking");

  if (bookingSection) {
    bookLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        if (this.tagName.toLowerCase() === "a") return;
        event.preventDefault();
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
});const menuBtn=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{
navbar.classList.toggle("active");
});