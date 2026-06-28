const videoEmbeds = {
  portfolioReel: "https://www.youtube.com/embed/70blJ_6wh6s",
  shortAd: "https://www.youtube.com/embed/9yM_QQ6rNAY",
  animeOpening: "https://www.youtube.com/embed/7fAf4xVB7rg",
  musinsaDiversityFilm: "https://www.youtube.com/embed/70blJ_6wh6s",
  aiResumeProfileFilm: "https://www.youtube.com/embed/IIGiL3PU9VE",
  otherShortFilm: "https://www.youtube.com/embed/RiV4xbpvhvo",
};

const videoTitles = {
  portfolioReel: "AI Commercial / Fashion / Character Reel",
  shortAd: "AI short-form ad video",
  animeOpening: "AI anime opening video",
  musinsaDiversityFilm: "편견을 벗다, 다양성을 입다, 무진장을 만나다.",
  aiResumeProfileFilm: "AI 이력서 프로필 사진 앱 광고",
  otherShortFilm: "Other AI short-form video",
};

function scrollToHashTarget() {
  if (!window.location.hash) return;

  const target = document.getElementById(window.location.hash.slice(1));
  if (!target) return;

  window.setTimeout(() => {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    const headerOffset = document.querySelector(".topbar")?.offsetHeight || 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 24;

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
  iframe.loading = key === "portfolioReel" ? "eager" : "lazy";
  frame.replaceChildren(iframe);
}

document.querySelectorAll("img").forEach((img, index) => {
  img.decoding = "async";
  if (index > 0 && !img.loading) {
    img.loading = "lazy";
  }
});

window.addEventListener("load", scrollToHashTarget);
window.addEventListener("hashchange", scrollToHashTarget);
