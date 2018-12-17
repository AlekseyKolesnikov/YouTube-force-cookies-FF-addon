function saveOptions(e) {
  browser.storage.sync.set({
    country: document.querySelector("#country").value,
    classic: document.querySelector("#classic").checked
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.sync.get(['country', 'classic']);
  gettingItem.then((res) => {
    document.querySelector("#classic").checked = res.classic || false;
    document.querySelector("#country").value = res.country || 'US';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
