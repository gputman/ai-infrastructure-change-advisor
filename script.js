const pageTitles = {
  dashboard: "Infrastructure Change Dashboard",
  "new-change": "Create Infrastructure Change",
  "risk-analysis": "AI Risk Analysis",
  dependencies: "Dependency Intelligence",
  "release-planning": "Release Planning",
  analytics: "Product & Operational Analytics"
};

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageId);
  });

  document.getElementById("page-title").textContent =
    pageTitles[pageId] || "ChangePilot AI";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page], [data-page-link]").forEach((element) => {
  element.addEventListener("click", () => {
    showPage(element.dataset.page || element.dataset.pageLink);
  });
});

document.getElementById("change-form").addEventListener("submit", (event) => {
  event.preventDefault();
  showPage("risk-analysis");
});

document
  .getElementById("accept-recommendation")
  .addEventListener("click", () => {
    document.getElementById("recommendation-message").style.display = "block";
  });
