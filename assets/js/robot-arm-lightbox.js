const imageGroups = document.querySelectorAll(".robot-arm-gallery, .robot-arm-assembly");
const dialog = document.querySelector("[data-image-lightbox]");

if (imageGroups.length && dialog instanceof HTMLDialogElement && dialog.showModal) {
  const enlargedImage = dialog.querySelector("[data-lightbox-image]");
  const caption = dialog.querySelector("[data-lightbox-caption]");
  const closeButton = dialog.querySelector("[data-lightbox-close]");

  imageGroups.forEach((group) => {
    group.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-lightbox-trigger]");
      if (!trigger) return;

      event.preventDefault();
      enlargedImage.src = trigger.href;
      enlargedImage.alt = trigger.querySelector("img")?.alt || "";
      caption.textContent = trigger.dataset.lightboxCaption || "";
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}