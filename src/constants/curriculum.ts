export interface DayData {
  day: number;
  title: string;
  goal: string;
  tasks: string[];
  tip: string;
}

export interface WeekData {
  week: number;
  title: string;
  subtitle: string;
  color: string;
  accent: string;
  days: DayData[];
}

export interface ToolItem {
  name: string;
  role: string;
}

export const weeks: WeekData[] = [
  {
    week: 1,
    title: "Foundation",
    subtitle: "Understand the tools & mindset",
    color: "#C8F5B0",
    accent: "#3D8B1F",
    days: [
      { day: 1, title: "What is vibe coding?", goal: "Understand the concept", tasks: ["Watch 2-3 YouTube videos on 'vibe coding' or 'AI app building'", "Read Andrej Karpathy's original tweet/post that coined the term", "Write down: what would you build if you could build anything?"], tip: "Vibe coding = describing what you want in plain English and letting AI write the code. You guide, it builds." },
      { day: 2, title: "Pick your stack", goal: "Choose your primary AI tool", tasks: ["Sign up for Claude.ai (you're already here!)", "Also explore: Cursor, Bolt.new, or Lovable.dev", "Try each with the same prompt: 'Build me a simple to-do app'"], tip: "Start with Claude + Bolt.new combo — Claude for thinking, Bolt for instant deployment." },
      { day: 3, title: "Your first prompt", goal: "Build something in under 10 minutes", tasks: ["Go to Bolt.new or Claude Artifacts", "Type: 'Create a personal mood tracker with a clean UI'", "Watch it build — don't touch the code yet", "Screenshot your first creation!"], tip: "Resist the urge to understand every line. Celebrate that it works." },
      { day: 4, title: "The art of prompting", goal: "Learn to communicate with AI", tasks: ["Learn the 3-part prompt formula: Context + Request + Constraints", "Bad: 'Make a button'. Good: 'Add a red submit button below the form that validates email'", "Practice rewriting 5 vague prompts into specific ones"], tip: "The more specific your prompt, the less back-and-forth you need." },
      { day: 5, title: "Iteration basics", goal: "Learn to refine, not restart", tasks: ["Take Day 3's app and make 5 changes via prompts only", "Change colours, add a feature, fix a bug — all by asking", "Keep a prompt diary of what worked vs. what didn't"], tip: "Never delete and start over. Say 'keep everything else but change X'." },
      { day: 6, title: "HTML & CSS in 60 mins", goal: "Just enough to understand your code", tasks: ["Do the first 2 modules of freeCodeCamp's Responsive Web Design (free)", "You don't need to memorise — just recognise what you're seeing", "Ask Claude: 'Explain this code to me like I'm 12'"], tip: "You're not learning to code from scratch. You're learning to read code." },
      { day: 7, title: "Week 1 project", goal: "Ship something real", tasks: ["Build a personal homepage: your name, bio, links, one fun feature", "Use Bolt.new or Claude Artifacts to generate it", "Share it with one friend and get feedback"], tip: "Done is better than perfect. You can iterate forever — but ship first." },
    ],
  },
  {
    week: 2,
    title: "Building",
    subtitle: "Real apps, real problems",
    color: "#B0D9F5",
    accent: "#1A5E8B",
    days: [
      { day: 8, title: "Components thinking", goal: "Break apps into pieces", tasks: ["Look at any website and identify its 'components' (header, cards, nav)", "Ask Claude: 'What components would I need for a recipe app?'", "Sketch (on paper!) the layout of your next build"], tip: "Every app is just Lego bricks. Thinking in components = thinking like a builder." },
      { day: 9, title: "Your first React app", goal: "Understand why React matters", tasks: ["Ask Claude to build a simple counter app in React", "Ask it to explain: 'What is useState and why do I need it?'", "Add a reset button by prompting — not by editing code manually"], tip: "React = apps that update themselves. Once you see it click, everything changes." },
      { day: 10, title: "Data & state", goal: "Make apps remember things", tasks: ["Build a simple shopping list app that adds/removes items", "Ask Claude: 'How is this list stored? What happens on refresh?'", "Add localStorage persistence by asking: 'Make this save between refreshes'"], tip: "State = your app's memory. Data that changes lives in state." },
      { day: 11, title: "APIs & real data", goal: "Connect to the outside world", tasks: ["Ask Claude to build a weather widget using Open-Meteo (free, no API key)", "Understand the concept: your app asks a server, server replies with data", "Extend it: add a 5-day forecast by prompting"], tip: "APIs are like menus — you order what you want and get it delivered." },
      { day: 12, title: "Debugging mindset", goal: "Turn errors into learning", tasks: ["Deliberately break your weather app (delete a word, add a typo)", "Copy the error message into Claude: 'I got this error, what's wrong?'", "Practice the loop: break, read error, ask AI, fix"], tip: "Errors aren't failures. They're the app telling you exactly what it needs." },
      { day: 13, title: "Design systems", goal: "Make things look good consistently", tasks: ["Learn about Tailwind CSS — ask Claude for a quick primer", "Rebuild your Day 7 homepage using Tailwind classes", "Explore shadcn/ui: ask Claude to add a modal dialog to any app"], tip: "Good design isn't random. Pre-built systems (Tailwind, shadcn) do the heavy lifting." },
      { day: 14, title: "Week 2 project", goal: "Build a useful tool", tasks: ["Build something you'd actually use: habit tracker, budget tool, study timer", "It must: store data, have at least 2 screens/views, look polished", "Write a one-paragraph 'product description' for it"], tip: "Build for yourself first. The best apps solve a real problem you have." },
    ],
  },
  {
    week: 3,
    title: "Scaling",
    subtitle: "More power, more complexity",
    color: "#F5D9B0",
    accent: "#8B4A1A",
    days: [
      { day: 15, title: "Supabase & databases", goal: "Store data in the cloud", tasks: ["Sign up for Supabase (free tier is generous)", "Ask Claude: 'Set up a Supabase table for a notes app with user IDs'", "Connect your Week 2 project to a real database"], tip: "Local state disappears. Databases are forever. This is the step that makes apps real." },
      { day: 16, title: "Authentication", goal: "Add login/signup", tasks: ["Add Supabase Auth to any project", "Ask Claude: 'Add Google login to my app using Supabase'", "Test: create an account, log out, log back in"], tip: "Auth is notoriously tricky to build from scratch. Always use a service." },
      { day: 17, title: "Cursor IDE", goal: "Upgrade your coding environment", tasks: ["Download Cursor (free tier available)", "Open your existing project in it", "Use Cmd+K to edit code in-line and Cmd+L for the AI chat panel"], tip: "Cursor = VS Code + AI baked in. This is how most vibe coders work on bigger projects." },
      { day: 18, title: "Version control basics", goal: "Never lose your work", tasks: ["Create a GitHub account", "Ask Claude to help you init a git repo and make your first commit", "Push your Week 2 project to GitHub"], tip: "Git is a time machine for your code. You only need 4 commands to start." },
      { day: 19, title: "Deployment", goal: "Put your app on the internet", tasks: ["Deploy your project to Vercel (free, connects to GitHub)", "Ask Claude to help write a proper README.md for the project", "Share the live URL — congratulations, you're a web developer"], tip: "Vercel = GitHub push to live URL automatically. It's genuinely magic." },
      { day: 20, title: "AI in your apps", goal: "Build AI-powered features", tasks: ["Add an AI feature using Anthropic's API (you've seen this UI!)", "Ideas: smart tagging, summarisation, a chatbot, content generation", "Ask Claude to write the API call code — it knows exactly what's needed"], tip: "You're not just using AI to build. You're building with AI inside. That's the meta." },
      { day: 21, title: "Week 3 project", goal: "A full-stack app", tasks: ["Build an app with: frontend, Supabase backend, auth, deployed to Vercel", "Ideas: shared wishlist, team todo, public changelog, link bookmarker", "Show it to 3 people and collect feedback"], tip: "Full-stack in 3 weeks. Not bad for someone who was 'clueless' 21 days ago." },
    ],
  },
  {
    week: 4,
    title: "Confidence",
    subtitle: "Sharpen, ship, and own it",
    color: "#F5B0D5",
    accent: "#8B1A5E",
    days: [
      { day: 22, title: "Refactoring with AI", goal: "Make messy code clean", tasks: ["Paste your messiest component into Claude: 'Refactor this, explain each change'", "Learn: what makes code 'clean'? Ask Claude for 5 principles", "Apply 3 of them to an existing project"], tip: "You won't always write clean code. Knowing how to clean it is the skill." },
      { day: 23, title: "Performance basics", goal: "Make your app fast", tasks: ["Run your app through PageSpeed Insights (free Google tool)", "Ask Claude: 'How do I fix these performance issues?'", "Learn: lazy loading, image optimisation, avoiding unnecessary re-renders"], tip: "A slow app loses users. Speed is a feature." },
      { day: 24, title: "Mobile-first design", goal: "Make it work on phones", tasks: ["Open DevTools then toggle mobile view on any project", "Find 3 things that look broken on mobile", "Fix them with: 'Make this fully responsive on mobile screens'"], tip: "Most users are on phones. Design mobile-first, enhance for desktop." },
      { day: 25, title: "Monetisation models", goal: "Turn apps into income", tasks: ["Learn 4 models: subscription, one-time, freemium, API usage billing", "Research: Stripe, Lemon Squeezy, Paddle for payments", "Ask Claude to add a Stripe payment button to a demo project"], tip: "You don't need investors. You need one person to pay 5/month. Then 100." },
      { day: 26, title: "Prompt engineering deep-dive", goal: "Master your most important skill", tasks: ["Study: system prompts, few-shot examples, chain-of-thought prompting", "Build a 'prompt library' doc with your best reusable prompts", "Practice: get Claude to produce the same output 3 different ways"], tip: "Prompting is programming. The better you communicate, the better your output." },
      { day: 27, title: "Learning to learn", goal: "Build your permanent curriculum", tasks: ["Find 3 vibe coders / indie hackers to follow on X/YouTube", "Join one Discord community (Indie Hackers, Build in Public, etc.)", "Subscribe to: TLDR, Bytes.dev, or Pointer newsletter"], tip: "The field moves fast. Your best skill is staying curious." },
      { day: 28, title: "The 'Show HN' draft", goal: "Tell the world what you built", tasks: ["Write a 200-word pitch for your best project", "Post it somewhere: X, LinkedIn, Indie Hackers, Reddit r/SideProject", "The goal isn't virality — it's accountability and feedback"], tip: "Building in public accelerates learning faster than anything else." },
      { day: 29, title: "Capstone planning", goal: "Design your finale project", tasks: ["Choose your best idea from the last 28 days", "Write a one-page spec: features, users, tech stack, monetisation", "Break it into a 2-week build plan with daily tasks"], tip: "Specs prevent scope creep. Write it, then build it. Don't invent as you go." },
      { day: 30, title: "Ship your capstone", goal: "Launch something you're proud of", tasks: ["Build and deploy the capstone project", "Write a 'what I learned in 30 days' post", "Post the project publicly with the story behind it"], tip: "You went from clueless to shipped in 30 days. That's not nothing — that's everything." },
    ],
  },
];

export const toolStack: ToolItem[] = [
  { name: "Claude", role: "Your AI pair programmer" },
  { name: "Bolt.new", role: "Instant app scaffolding" },
  { name: "Cursor", role: "AI-powered code editor" },
  { name: "Supabase", role: "Database & auth backend" },
  { name: "Vercel", role: "One-click deployment" },
  { name: "GitHub", role: "Version control & backup" },
  { name: "Tailwind CSS", role: "Utility-first styling" },
  { name: "shadcn/ui", role: "Pre-built UI components" },
];
