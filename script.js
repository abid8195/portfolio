// ---------- theme toggle ----------
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  let saved = null;
  try { saved = localStorage.getItem('portfolio-theme'); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    if (next === 'dark') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', 'light');
    try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
  });
})();

// ---------- mobile nav ----------
(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
})();

// ---------- scroll reveal ----------
(function () {
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
})();

// ---------- FAQ knowledge base ----------
const KB = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'yo'],
    answer: "Hi! I'm a simple assistant trained on Abid's resume and this page — ask me about his background, skills, projects, experience, or how to get in touch.",
  },
  {
    id: 'who',
    keywords: ['who', 'about', 'background', 'yourself', 'introduce'],
    answer: "Abid Sobhan is a final-year Software Engineering student at Swinburne University of Technology (BEng, final semester completing November 2026), based in Melbourne, and available full-time from mid-November 2026. He is AZ-900 certified, works across solution engineering and cloud solution architecture, builds AI-integrated solutions, and has been a volunteer Student Solution Engineer and App Developer at BetaBuilders since May 2024.",
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'swinburne', 'study', 'studying', 'graduate', 'graduation', 'scholarship'],
    answer: "Abid is completing a Bachelor of Engineering (Software Engineering) at Swinburne University of Technology, with his final semester completing in the first week of November 2026. He's a recipient of the Swinburne Excellence Scholarship, covering 75% of his tuition for academic merit.",
  },
  {
    id: 'skills',
    keywords: ['skill', 'skills', 'tech', 'stack', 'language', 'languages', 'technologies', 'know', 'proficient'],
    answer: "His core stack: Python, C#, JavaScript/TypeScript, and SQL, with React/Next.js on the front end and Node.js/Express/Flask on the back end. He also works with Microsoft Azure (AZ-900 certified), AWS, Microsoft 365 and SharePoint, PostgreSQL/SQLite, and integrates the Claude and OpenAI APIs directly into products. Full breakdown in the Skills section above.",
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'job', 'internship', 'intern', 'aakonsult', 'betabuilders', 'mcdonald'],
    answer: "Abid interned as a Junior IT Solutions Engineer at Aakonsult Services / MULINK Technologies, delivering cloud solution architecture (AWS environment design and configuration), Microsoft 365/SharePoint solutions, and Salesforce case workflows for 50+ users. Since May 2024 he has been a volunteer Student Solution Engineer and App Developer at BetaBuilders, delivering solution engineering and cloud solution architecture for platforms like FreeAppStore and FreeGameStore with a 40+ person remote team. He also worked at McDonald's from Jan 2023 to Mar 2026 in a customer-facing role.",
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'built', 'build', 'portfolio', 'app', 'apps'],
    answer: "His main projects are an Azure cloud deployment with secure networking and backup/disaster recovery, Calazm (an AI nutrition tracker using the Claude API), DataLens (a local-first data profiling tool), ProdTrack (a full-stack productivity dashboard), QML DataFlow Studio (a self-taught quantum ML pipeline), an AI chatbot app using the OpenAI API, and cloud CI/CD work with Docker, GitHub Actions and Azure Static Web Apps. Scroll to the Projects section for details on each, or ask me about a specific one.",
  },
  {
    id: 'calazm',
    keywords: ['calazm', 'nutrition', 'food', 'calorie'],
    answer: "Calazm is Abid's most complete project — an AI nutrition tracker where Claude's vision model reads a meal photo and returns a food label, estimated weight, and confidence score, while a deterministic resolver (not the AI) computes the actual calories and macros from a real nutrition database. It uses three different Claude models for three different jobs and falls back to an offline mode if the API is unavailable.",
  },
  {
    id: 'datalens',
    keywords: ['datalens', 'data lens', 'csv', 'data profiling'],
    answer: "DataLens is a privacy-first, local-first tool built with TypeScript, React, and Vite that profiles CSV, Excel, and JSON files entirely in the browser, producing column-level statistics and a data-quality score without uploading any data.",
  },
  {
    id: 'quantum',
    keywords: ['quantum', 'qml', 'qiskit', 'dataflow'],
    answer: "QML DataFlow Studio is a quantum machine learning pipeline Abid built after teaching himself quantum computing fundamentals from scratch — a good example of how quickly he can pick up an unfamiliar technical domain. Built with Python, Flask, and Qiskit.",
  },
  {
    id: 'certifications',
    keywords: ['certification', 'certifications', 'certificate', 'certificates', 'course', 'courses', 'udemy', 'azure', 'az-900', 'az900'],
    answer: "Abid holds the Microsoft Certified: Azure Fundamentals (AZ-900) certification, plus an Advanced Python Certification, Data Structures and Algorithms in Python, an SQL/PostgreSQL Bootcamp, and a Linux Command Line Bootcamp (all Udemy), plus Introduction to Cyber Security Essentials (Quitch). You can view every certificate in the Certifications section above.",
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'hire', 'linkedin', 'phone', 'connect'],
    answer: "Best ways to reach Abid: email at 103802241@student.swin.edu.au, or connect on LinkedIn (linkedin.com/in/abid-sobhan-60a768224). His GitHub is github.com/abid8195. Links are all in the Contact section above.",
  },
  {
    id: 'availability',
    keywords: ['available', 'availability', 'start', 'when', 'hire him', 'visa'],
    answer: "Abid's final semester ends in the first week of November 2026, and he is available to start full-time from mid-November 2026 in solution engineering, cloud solution architecture, and AI-integrated roles. Best to ask him directly about timing for a specific role.",
  },
  {
    id: 'strengths',
    keywords: ['strength', 'strengths', 'why hire', 'good at', 'unique'],
    answer: "A few things that stand out: he picks up unfamiliar technical domains fast (he taught himself quantum computing from scratch for a project), he builds AI-integrated products with real architectural thinking rather than just calling an API, and he brings genuine team collaboration experience from a 40+ person remote dev team.",
  },
];

const FALLBACK = "I'm not sure about that one — try asking about Abid's education, skills, experience, projects, certifications, or how to get in touch. You can also browse the sections above or email him directly.";

function matchAnswer(text) {
  const q = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length; // longer keyword matches score higher
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best ? best.answer : FALLBACK;
}

// ---------- chat UI ----------
(function () {
  const fab = document.getElementById('chatFab');
  const heroBtn = document.getElementById('heroChatBtn');
  const panel = document.getElementById('chatPanel');
  const closeBtn = document.getElementById('chatClose');
  const messages = document.getElementById('chatMessages');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');
  const chipsWrap = document.getElementById('chatChips');

  const SUGGESTIONS = [
    'What are your skills?',
    'Tell me about Calazm',
    'What is your experience?',
    'How can I contact you?',
  ];

  function addMessage(text, who) {
    const div = document.createElement('div');
    div.className = 'msg ' + (who === 'user' ? 'msg-user' : 'msg-bot');
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function renderChips() {
    chipsWrap.innerHTML = '';
    SUGGESTIONS.forEach((s) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chat-chip';
      chip.textContent = s;
      chip.addEventListener('click', () => handleUserMessage(s));
      chipsWrap.appendChild(chip);
    });
  }

  function handleUserMessage(text) {
    if (!text.trim()) return;
    addMessage(text, 'user');
    input.value = '';
    setTimeout(() => {
      addMessage(matchAnswer(text), 'bot');
    }, 350);
  }

  function openChat() {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    if (!messages.childElementCount) {
      addMessage("Hi! I'm a quick FAQ assistant covering Abid's background, skills, and projects. Ask me anything, or tap a suggestion below.", 'bot');
      renderChips();
    }
    input.focus();
  }
  function closeChat() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }

  fab.addEventListener('click', () => {
    panel.classList.contains('open') ? closeChat() : openChat();
  });
  heroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openChat();
  });
  closeBtn.addEventListener('click', closeChat);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleUserMessage(input.value);
  });
})();
