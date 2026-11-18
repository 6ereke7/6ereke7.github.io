export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
};

export const setPendingScrollTarget = (id: string) => {
  sessionStorage.setItem("pending-scroll-target", id);
};

export const consumePendingScrollTarget = (): string | null => {
  const target = sessionStorage.getItem("pending-scroll-target");
  if (target) {
    sessionStorage.removeItem("pending-scroll-target");
  }
  return target;
};
