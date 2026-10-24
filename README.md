# BCTWU website
A responsive five-page website for the Bandaranayake College Gampaha Traffic Warden Unit. Plain HTML, CSS and JavaScript; no build step or dependencies.

## Run locally
From this directory run `python3 -m http.server 8000`. Open the local server in your browser.

## Edit on GitHub
- `content.js`: home page announcement cards.
- `index.html`: home page sections.
- `about.html`, `activities.html`, `safety.html`, `contact.html`: individual page content.
- `professional.css`: the active design system, including colours, typography, mobile layouts and animations. Edit the variables at the top to change the palette.
- `app.js`: navigation and entrance animations.
- `build.mjs`: optional, dependency-free page generator. Edit its shared templates and run `node build.mjs` to regenerate all five HTML pages. This overwrites direct HTML edits, so move any such edits into the templates first. Running this is not required for hosting or for direct HTML edits on GitHub.
- `styles.css` and `neon.css`: earlier themes, retained for reference; the website no longer loads them.

Commit edits through GitHub's file editor. To deploy, use repository Settings → Pages → Deploy from a branch, select your published branch and `/ (root)`. No credentials or backend are required.

The design combines a dark forest-green introduction, warm light content sections, and restrained neon-lime accents. Each inner page has its own layout. It includes an illustrated crossing, a once-per-tab animated introduction, scroll reveals, keyboard-accessible navigation, a numbered safety guide, and native expandable FAQs. Reduced-motion preferences are respected. Google Fonts are optional and have local fallbacks.

Before public launch, get school approval, verify all wording, add authorised contact details and replace the decorative shield mark with an approved school crest if desired. No events, officer names, or contact details have been invented. The activities page describes focus areas rather than claiming completed events. No contact form is included because no delivery service is configured.
