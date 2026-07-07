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

  const alignTarget = () => {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 24;

    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "auto" });
    document.documentElement.style.scrollBehavior = previousBehavior;
  };

  window.setTimeout(alignTarget, 80);
  window.setTimeout(alignTarget, 500);
}

function syncDetailParts() {
  if (!document.body.classList.contains("detail-page")) return;

  const detailPanels = Array.from(document.querySelectorAll(".process-overview[id], .detail-project[id]"));
  const hashId = window.location.hash.slice(1);
  const activePanel = detailPanels.find((panel) => panel.id === hashId);
  const modeClasses = ["detail-hub-view", "detail-part-view", "detail-process-view"];

  document.body.classList.remove(...modeClasses);
  detailPanels.forEach((panel) => panel.classList.remove("is-active-detail"));
  document
    .querySelectorAll(".detail-index a, .detail-nav a")
    .forEach((link) => link.classList.remove("is-active-detail-link"));

  if (!activePanel) {
    document.body.classList.add("detail-hub-view");
    return;
  }

  const isProcessPanel = activePanel.classList.contains("process-overview");
  document.body.classList.add(isProcessPanel ? "detail-process-view" : "detail-part-view");
  activePanel.classList.add("is-active-detail");

  document
    .querySelectorAll(`.detail-index a[href="#${activePanel.id}"], .detail-nav a[href="#${activePanel.id}"]`)
    .forEach((link) => link.classList.add("is-active-detail-link"));
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

syncDetailParts();

window.addEventListener("load", () => {
  syncDetailParts();
  scrollToHashTarget();
});

window.addEventListener("hashchange", () => {
  syncDetailParts();
  scrollToHashTarget();
});
