const videoEmbeds = {
  shortAd: "https://www.youtube.com/embed/9yM_QQ6rNAY",
  animeOpening: "https://www.youtube.com/embed/7fAf4xVB7rg",
  musinsaDiversityFilm: "https://www.youtube.com/embed/70blJ_6wh6s",
};

const videoTitles = {
  shortAd: "AI short-form ad video",
  animeOpening: "AI anime opening video",
  musinsaDiversityFilm: "편견을 벗다, 다양성을 입다, 무진장을 만나다.",
};

function scrollToHashTarget() {
  if (!window.location.hash) return;

  const target = document.getElementById(window.location.hash.slice(1));
  if (!target) return;

  window.setTimeout(() => {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    const headerOffset = document.querySelector(".topbar")?.offsetHeight || 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "auto" });
    document.documentElement.style.scrollBehavior = previousBehavior;
  }, 80);
}

for (const frame of document.querySelectorAll("[data-embed-key]")) {
  const key = frame.dataset.embedKey;
  const url = videoEmbeds[key];

  if (!url) continue;

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.title = videoTitles[key] || "AI portfolio video";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  frame.replaceChildren(iframe);
}

window.addEventListener("load", scrollToHashTarget);
window.addEventListener("hashchange", scrollToHashTarget);
