const gallery = document.querySelector(".robot-arm-gallery");
const dialog = document.querySelector("[data-image-lightbox]");
const routeLinks = document.querySelectorAll(".robot-arm-route-nav a");
const routeSections = Array.from(routeLinks, (link) => document.querySelector(link.hash)).filter(Boolean);

if (routeSections.length && "IntersectionObserver" in window) {
  const routeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      routeLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-18% 0px -68% 0px" });

  routeSections.forEach((section) => routeObserver.observe(section));
}

if (gallery) {
  const galleryItems = Array.from(gallery.querySelectorAll("[data-gallery-category]"));
  const filterButtons = document.querySelectorAll("[data-gallery-filter]");
  const countLabel = document.querySelector("[data-gallery-count]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.galleryFilter;
      galleryItems.forEach((item) => {
        const isVisible = category === "all" || item.dataset.galleryCategory === category;
        item.hidden = !isVisible;
        item.classList.remove("is-filtered-in");
        if (isVisible) {
          void item.offsetWidth;
          item.classList.add("is-filtered-in");
        }
      });
      filterButtons.forEach((filter) => {
        filter.setAttribute("aria-pressed", String(filter === button));
      });
      countLabel.textContent = `${String(gallery.querySelectorAll("figure:not([hidden])").length).padStart(2, "0")} piezas`;
    });
  });
}

if (gallery && dialog instanceof HTMLDialogElement && dialog.showModal) {
  const enlargedImage = dialog.querySelector("[data-lightbox-image]");
  const caption = dialog.querySelector("[data-lightbox-caption]");
  const counter = dialog.querySelector("[data-lightbox-count]");
  const closeButton = dialog.querySelector("[data-lightbox-close]");
  const previousButton = dialog.querySelector("[data-lightbox-previous]");
  const nextButton = dialog.querySelector("[data-lightbox-next]");
  let lightboxLinks = [];
  let activeIndex = 0;
  let touchStartX = null;

  const showImage = (index) => {
    activeIndex = (index + lightboxLinks.length) % lightboxLinks.length;
    const trigger = lightboxLinks[activeIndex];
    enlargedImage.classList.remove("is-visible");
    enlargedImage.src = trigger.href;
    enlargedImage.alt = trigger.querySelector("img")?.alt || "";
    caption.textContent = trigger.dataset.lightboxCaption || "";
    counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(lightboxLinks.length).padStart(2, "0")}`;
    void enlargedImage.offsetWidth;
    enlargedImage.classList.add("is-visible");
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-trigger]");
    if (!trigger) return;

    event.preventDefault();
    lightboxLinks = Array.from(document.querySelectorAll(
      ".robot-arm-hero-image [data-lightbox-trigger], .robot-arm-gallery figure:not([hidden]) [data-lightbox-trigger]",
    ));
    activeIndex = lightboxLinks.indexOf(trigger);
    showImage(activeIndex < 0 ? 0 : activeIndex);
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => dialog.close());
  previousButton.addEventListener("click", () => showImage(activeIndex - 1));
  nextButton.addEventListener("click", () => showImage(activeIndex + 1));

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(activeIndex + 1);
    }
  });

  enlargedImage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  enlargedImage.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].screenX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < 45) return;
    showImage(activeIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}