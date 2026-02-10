import { REVIEWS_API } from "./content.constants";
import { findResource, sleep } from "./content.utils";

let cachedApp: ReturnType<typeof createApp>;
let cache = [];

const createHeader = () => {
  const header = document.createElement("header");

  header.classList.add("d-flex", "align-items-center");

  return header;
};

const createTitle = () => {
  const h3 = document.createElement("h3");

  h3.textContent = "AI Summary";

  const userName = document.getElementById("user-name");
  h3.className = userName!.className;

  return h3;
};

const createContent = () => {
  const p = document.createElement("p");

  p.textContent = "Loading...";
  p.classList.add("mt-3");

  return p;
};

const createIcon = () => {
  const wallaAvatar = document.createElement("walla-avatar");

  wallaAvatar.className = "align-self-center hydrated me-2";
  wallaAvatar.setAttribute("variant", "rounded");
  wallaAvatar.setAttribute("size", "small");
  wallaAvatar.setAttribute(
    "src",
    "https://wallapop-sales-public.wallapop.com/resources/technology-and-electronics.png",
  );

  return wallaAvatar;
};

const createReviewCount = (count: number) => {
  const span = document.createElement("span");

  const firstFooterItem = document.querySelector("footer p");

  span.innerHTML = `Based on <b>${count} reviews</b>`;
  span.className = firstFooterItem!.className;

  return span;
};

const createApp = () => {
  const container = document.querySelector("[aria-label='User reviews']");

  const parent = container?.querySelector(".d-flex");

  parent?.classList.add("flex-column-reverse");

  const currentReviews = parent?.querySelector("div");

  const app = document.createElement("article");

  app.className = currentReviews!.className;
  app.classList.add("p-4", "my-3");

  const header = createHeader();
  const title = createTitle();
  const icon = createIcon();
  const content = createContent();

  header.appendChild(icon);
  header.appendChild(title);
  app.appendChild(header);
  app.appendChild(content);

  const mount = () => {
    const container = document.querySelector("[aria-label='User reviews']");
    const parent = container?.querySelector(".d-flex");
    parent?.classList.add("flex-column-reverse");
    parent?.appendChild(cachedApp.app);
  };

  return {
    app,
    content,
    mount,
  };
};

void (async () => {
  cachedApp = createApp();
  cachedApp.mount();

  await sleep();

  const entry = findResource(REVIEWS_API);

  const url = entry?.name;

  if (!url) {
    console.error("Failed!");
    return;
  }

  if (!cache.length) {
    const reviews = await fetch(url);
    cache = await reviews.json();

    console.log(cache);
  }

  cachedApp.content.textContent = "Ready";

  const reviewCount = createReviewCount(cache.length);

  cachedApp.app.appendChild(reviewCount);
})();

chrome.runtime.onMessage.addListener(({ type }) => {
  if (type === "MOUNT_REVIEWS")
    setTimeout(() => {
      cachedApp.mount();
    }, 100);
});
