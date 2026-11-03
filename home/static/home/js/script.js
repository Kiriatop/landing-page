const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");

document.addEventListener("click", (e) => {
  const target = e.target;

  // відкриття
  if (target.classList.contains("zoomable")) {
    modal.style.display = "flex";
    modalImg.src = target.src;
    return;
  }

  // закриття
  if (target.classList.contains("modal")) {
    modal.style.display = "none";
    modalImg.src = "";
  }
});

// закриття через ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    modalImg.src = "";
  }
});

const ANIM_DELAY = 150; // ← крутиш тут
const elements = document.querySelectorAll(".container, .card, img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * ANIM_DELAY);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

elements.forEach(el => {
  el.classList.add("fade-up");
  observer.observe(el);
});


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", (e.clientX - rect.left) + "px");
    card.style.setProperty("--y", (e.clientY - rect.top) + "px");
  });
});

const bg = document.querySelector(".header-bg");

let current = 0;
let target = 0;

window.addEventListener("scroll", () => {
  target = window.scrollY * 0.35; // сила ефекту (крутиш тут)
});

function animate() {
  current += (target - current) * 0.08; // плавність (easing)

  if (bg) {
    bg.style.transform = `translateY(${current}px)`;
  }

  requestAnimationFrame(animate);
}

animate();

