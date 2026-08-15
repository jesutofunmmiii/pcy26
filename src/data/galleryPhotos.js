// Conference photo gallery — 50 thumbnails from the PCY 2026 floor, in order.
// Files live at public/gallery/2026/t-01.jpg … t-50.jpg.
//
// Ports the reference's `window.PCY_GALLERY` global into repo idiom.
// Home shows the first 15 in its masonry preview; the Gallery page shows all 50.
export const GALLERY_PHOTOS = Array.from(
  { length: 50 },
  (_, i) => `2026/t-${String(i + 1).padStart(2, '0')}.jpg`,
);

export default GALLERY_PHOTOS;
