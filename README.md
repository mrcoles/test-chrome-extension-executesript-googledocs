
Google Docs Execute Script Bug
==============================

Trying to run `chrome.tabs.executeScript` on a logged-in Google docs page is triggering a `chrome.runtime.lastError`:

    Cannot access contents of the page. Extension manifest must request permission to access the respective host.

Tested with:

*   Version 65.0.3325.162 (Official Build) (64-bit)
*   Mac OS X 10.13.2
