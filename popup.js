chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  chrome.tabs.executeScript(
    tabs[0].id,
    { code: 'console.log("INJECTED")' },
    () => {
      let lastError = chrome.runtime.lastError;
      let result = document.getElementById("result");
      if (lastError) {
        result.innerText =
          "encountered chrome.runtime.lastError\n\n" + lastError.message;
      } else {
        result.innerText = "YES!";
      }
    }
  );
});
