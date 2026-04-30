// Club Canopy — homepage interactions

// 1. Page-load shimmer auto-removes after CSS animation completes.
window.addEventListener("load", () => {
  const shimmer = document.querySelector(".shimmer");
  if (shimmer) setTimeout(() => shimmer.remove(), 1800);
});

// 2. Guestlist: graceful local-success state. No fake backend.
const guestlistForm = document.getElementById("guestlist-form");
if (guestlistForm) {
  guestlistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = guestlistForm.querySelector("input[name=email]");
    const email = input.value.trim();
    if (!email || !email.includes("@")) {
      input.style.borderColor = "var(--pink-hot)";
      input.focus();
      return;
    }
    document.querySelector(".guestlist").classList.add("is-success");
  });
}

// 3. Guide lane filter: dim non-matching drops on click. Click again to clear.
const guides = document.querySelectorAll(".guide");
const drops = document.querySelectorAll(".drop");
let activeLane = null;

guides.forEach((g) => {
  g.addEventListener("click", () => {
    const lane = g.dataset.lane;
    if (activeLane === lane) {
      activeLane = null;
      drops.forEach((d) => (d.style.opacity = ""));
      guides.forEach((x) => (x.style.outline = ""));
      return;
    }
    activeLane = lane;
    guides.forEach((x) => (x.style.outline = ""));
    g.style.outline = "2px solid currentColor";
    drops.forEach((d) => {
      const lanes = (d.dataset.lane || "").split(" ");
      d.style.opacity = lanes.includes(lane) ? "1" : "0.32";
    });
    document.getElementById("drops")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
