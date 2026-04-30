const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const coursePreviews = {
  system: {
    label: "Signature course",
    title: "The AI Content System",
    text: "The full method for creating a month of content in a weekend: AI tools, workflows, prompts, organization, and the actual order to use them in. For anyone who wants someone to show them how it all fits together."
  },
  reels: {
    label: "Course",
    title: "Reels Mastery",
    text: "Hooks, pacing, retention, posting strategy, repurposing, and the tiny edits that keep people watching. Everything I would teach a friend over coffee, packaged into a course."
  },
  brand: {
    label: "Course",
    title: "Build Your Brand with AI",
    text: "For creators and small business owners who want a brand that actually looks like a brand. No designer required, no taste required, just follow the steps."
  },
  webinars: {
    label: "Live education",
    title: "Academy Webinars",
    text: "Focused live sessions for creators who want a guided walkthrough: hooks, AI tools, content systems, brand visuals, planning, repurposing, and what to post next."
  }
};

const promptLabel = document.querySelector("#promptLabel");
const promptTitle = document.querySelector("#promptTitle");
const promptText = document.querySelector("#promptText");
const copyPrompt = document.querySelector("#copyPrompt");
const tabs = document.querySelectorAll(".format-tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const format = tab.dataset.format;
    const next = coursePreviews[format] || coursePreviews.system;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    promptLabel.textContent = next.label;
    promptTitle.textContent = next.title;
    promptText.textContent = next.text;
    copyPrompt.textContent = "Get course updates";
  });
});

const heroCarousel = document.querySelector("[data-hero-carousel]");

if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll("[data-carousel-slide]")];
  const dots = [...heroCarousel.querySelectorAll("[data-carousel-dot]")];
  const previousButton = heroCarousel.querySelector("[data-carousel-prev]");
  const nextButton = heroCarousel.querySelector("[data-carousel-next]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentSlide = 0;
  let carouselTimer = null;

  const showSlide = (nextIndex) => {
    if (!slides.length) {
      return;
    }

    currentSlide = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const isActive = index === currentSlide;
      slide.classList.toggle("is-active", isActive);
      slide.hidden = !isActive;
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, index) => {
      const isActive = index === currentSlide;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const stopCarousel = () => {
    if (carouselTimer) {
      window.clearInterval(carouselTimer);
      carouselTimer = null;
    }
  };

  const startCarousel = () => {
    if (reduceMotion || slides.length < 2) {
      return;
    }

    stopCarousel();
    carouselTimer = window.setInterval(() => {
      showSlide(currentSlide + 1);
    }, 6000);
  };

  previousButton?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startCarousel();
  });

  nextButton?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startCarousel();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slideIndex || 0));
      startCarousel();
    });
  });

  heroCarousel.addEventListener("mouseenter", stopCarousel);
  heroCarousel.addEventListener("mouseleave", startCarousel);
  heroCarousel.addEventListener("focusin", stopCarousel);
  heroCarousel.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!heroCarousel.contains(document.activeElement)) {
        startCarousel();
      }
    }, 0);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopCarousel();
    } else {
      startCarousel();
    }
  });

  showSlide(0);
  startCarousel();
}

const revealTargets = [
  document.querySelector(".club-hero-card"),
  document.querySelector(".canopy-explainer"),
  ...document.querySelectorAll(".start-card"),
  document.querySelector(".guide-room"),
  ...document.querySelectorAll(".guide-card"),
  document.querySelector(".featured-cabinets"),
  ...document.querySelectorAll(".drop-cabinet"),
  document.querySelector(".landing-guest")
].filter(Boolean);

if (revealTargets.length) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("in-view"));
  } else {
    revealTargets.forEach((target, index) => {
      target.classList.add("revealable");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    revealTargets.forEach((target) => revealObserver.observe(target));
  }
}

document.querySelectorAll(".drop-cabinet").forEach((cabinet) => {
  cabinet.addEventListener("click", () => {
    cabinet.classList.remove("is-tapped");
    void cabinet.offsetWidth;
    cabinet.classList.add("is-tapped");
  });

  cabinet.addEventListener("animationend", () => {
    cabinet.classList.remove("is-tapped");
  });
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const formStatus = contactForm.querySelector("[data-form-status]");
  const submitButton = contactForm.querySelector("button[type='submit']");
  const defaultButtonText = submitButton ? submitButton.textContent : "";

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (formStatus) {
      formStatus.hidden = true;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const formData = new FormData(contactForm);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      contactForm.reset();

      if (formStatus) {
        formStatus.textContent = "Message sent. We'll get back to you soon.";
        formStatus.hidden = false;
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = "Something went wrong. Please email meetcanopy@gmail.com.";
        formStatus.hidden = false;
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}
