chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    function: removeClarifyBox
  });
}, { url: [{ hostSuffix: "youtube.com" }] });

function removeClarifyBox() {
  document.querySelectorAll("#clarify-box").forEach(el => el.remove());

  // Observe for dynamically added elements
  const observer = new MutationObserver(() => {
    document.querySelectorAll("#clarify-box").forEach(el => el.remove());
    document.querySelectorAll("#middle-row").forEach(el => el.remove());
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
