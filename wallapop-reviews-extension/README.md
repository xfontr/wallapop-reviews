# Extension

## Folder architecture (not your typical DDD!)

At first glance, this folder structure may look like an unconventional or failed attempt at domain-driven design. It isn’t (or at least that's what I'd like to believe 😅).

Chrome extensions are segmented by different, isolated, execution environments. This folder structure tries to emulate that. We could probably call this a **_"runtime-segmented architecture"_**, rather than your typical feature-based split.

Background, content, options and popups contain their own execution environments. That's what we try to portray with this kind of folder division.

There's still room for a shared/ or commons/ folder, which might be added if required.

#### popup/

Extension UI | Has DOM | Extension process

#### options/

Extension UI | Has DOM | Extension process

#### content/

Page sandbox | Has DOM access | Isolated world inside the website

#### background/

Service worker | No DOM | Extension worker

### Permissions

This extension requires the following Chrome permissions:

#### webNavigation

Allows observing browser-level navigation events, including SPA route changes that don’t trigger a full page reload.
Used to detect URL changes and notify the background when the active page logically changes.

#### webRequest

Allows observing network requests made by the target website.
Used to detect when specific API calls occur and extract metadata such as URLs, headers, and response status codes.

#### tabs

Required to identify and communicate with the active tab where the content script is running.
Used to send messages from the background service worker to the correct page instance.

#### storage

Used to persist processed data and cached results across extension lifecycles.
Also enables data sharing between isolated execution environments (background, content scripts).

#### scripting

Allows programmatic injection of scripts into web pages.
Used to inject a page-level script when access to in-page JavaScript context is required (e.g. intercepting `fetch` or `XMLHttpRequest`).

#### host_permissions

Grants the extension access to run scripts and observe activity on specific websites.
Restricted to the minimum set of domains required for functionality.
