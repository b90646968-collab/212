const videoEmbeds = {
  shortAd: "",
  animeOpening: "https://www.youtube.com/embed/7fAf4xVB7rg",
};

for (const frame of document.querySelectorAll("[data-embed-key]")) {
  const key = frame.dataset.embedKey;
  const url = videoEmbeds[key];

  if (!url) continue;

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.title = key === "shortAd" ? "AI short-form ad video" : "AI anime opening video";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  frame.replaceChildren(iframe);
}
