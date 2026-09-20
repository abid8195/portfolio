# Abid Sobhan — Portfolio Site

A self-contained portfolio site: `index.html`, `style.css`, `script.js`. No build step, no dependencies to install, no backend — it deploys to Vercel as-is.

## What's in it

- Hero, About, Skills, Experience, Projects, Certifications, and Contact sections, all built from your real resume/LinkedIn content.
- A light/dark theme toggle (remembered per visitor via localStorage).
- A chat widget in the bottom-right corner. **Important: this is a rule-based FAQ assistant, not a live AI.** It matches keywords in a visitor's question against a small knowledge base in `script.js` (the `KB` array) and returns a pre-written answer — there's no API call, no cost, and nothing that can go off-script or say something inaccurate about you. If you want a real Claude/OpenAI-powered chatbot instead, see "Upgrading the chatbot" below — it's a bigger change (needs a backend function and an API key), so I kept this version as the fast, zero-cost, zero-maintenance option to get you live today.

## Deploying to Vercel (no coding required, ~2 minutes)

**Option A — drag and drop (fastest):**
1. Go to [vercel.com](https://vercel.com) and sign up / log in (GitHub, GitLab, or email — free).
2. From your dashboard, click **Add New → Project**, then look for the **"Deploy without Git"** / drag-and-drop upload area (sometimes under "Import Third-Party Git Repository" there's a separate upload option — if you don't see it immediately, search Vercel's dashboard for "deploy a folder" or use `vercel.com/new` and look for the upload option).
3. Drag this whole `portfolio` folder in. Vercel auto-detects it as a static site — no configuration needed.
4. Click **Deploy**. You'll get a live URL like `abid-sobhan.vercel.app` within a minute.

**Option B — connect GitHub (better if you'll keep updating it):**
1. Create a new repo on GitHub (e.g. `portfolio`) and push these three files to it:
   ```
   git init
   git add index.html style.css script.js README.md
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/abid8195/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), sign in with your GitHub account, and import the `portfolio` repo.
3. Leave all settings as default (it's a static site, no framework to select) and click **Deploy**.
4. Every future `git push` automatically redeploys the live site.

Either way, once deployed you can add a custom domain later from the Vercel project's **Settings → Domains** tab if you want something other than the `.vercel.app` URL.

## Things worth doing before you send this to employers

1. **AI Chatbot Application repo name**: its real repo is `AI-Chatbot-Rufus-the-Egg-Enthusiast` — a much more specific/playful name than the generic "customer-facing web application" copy on the site. I kept the existing professional description since I don't know what the actual app does beyond its name, but if the real project is themed differently (an egg-recipe bot, a fun persona project, etc.), the description on the site should match what a visitor actually finds when they click through — worth a quick check that they agree before this goes out.
2. **Email address**: the Contact section and mailto link use your student email (`103802241@student.swin.edu.au`), matching your resumes. That address won't survive past graduation — consider swapping in a personal email if you want this site to keep working after Swinburne.
3. **Phone number**: I deliberately left your mobile number off this page. A resume you send privately is different from a public, search-indexable website — a phone number here is exposed to scrapers and spam. If you want it included anyway, add it next to the email button in the Contact section of `index.html`.
4. **Chatbot answers**: skim the `KB` array in `script.js` and make sure every answer still matches your resume for whichever specific job you're sending this link to — it's currently written as a general-purpose summary, not tailored to one role.

## Upgrading the chatbot to a real LLM later

If you want actual Claude or OpenAI-powered answers instead of the FAQ matcher:
1. Add a Vercel serverless function (e.g. `api/chat.js`) that calls the Claude or OpenAI API server-side.
2. Store your API key as an environment variable in the Vercel project settings (**never** put it directly in `script.js` — anything in client-side JS is publicly visible to anyone who views the page source).
3. Update the chat form handler in `script.js` to `fetch('/api/chat', ...)` instead of calling `matchAnswer()` locally.

Happy to build that version with you if/when you want it — it's a bigger job than this one, involving real API costs per conversation, so worth doing deliberately rather than as a default.
