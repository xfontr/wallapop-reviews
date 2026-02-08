# Wallpop reviews

Chrome extension that grabs all reviews for a specific user and injects an AI-made summary based on them.

### Folder architecture (not your typical DDD!)

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
