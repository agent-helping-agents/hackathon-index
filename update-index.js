const fs = require('fs');

// Read current
let projects = [];
try {
  const data = fs.readFileSync('projects.json', 'utf8');
  // Fix any trailing issues
  const cleaned = data.replace(/,\s*$/, '').replace(/,\s*\]/, ']');
  projects = JSON.parse(cleaned);
} catch (e) {
  console.log('Starting fresh:', e.message);
  projects = [];
}

// New projects to add
const newProjects = [
  {
    name: "autonomous-yield-oracle",
    github: "molhe-molhinho/autonomous-yield-oracle",
    category: "defi",
    description: "Autonomous yield optimization - ACTUALLY TRADES on mainnet",
    status: "deployed",
    chain: "mainnet",
    hasSkillMd: false,
    verifiedOnChain: true,
    program: "E7nfxrs1We4muQNAbqnyJwVGFA5WvJPAtvUbt8BoCeRq"
  },
  {
    name: "wargames-api",
    github: "b1rdmania/wargames-api",
    category: "infrastructure",
    description: "Free unlimited macro intelligence API for agents",
    status: "deployed",
    chain: "offchain",
    hasSkillMd: false,
    api: "https://wargames-api.vercel.app"
  },
  {
    name: "shalom-x402-facilitator",
    github: "MoikasLabs/shalom-x402-facilitator",
    category: "payments",
    description: "x402 HTTP payments with 10% tithe",
    status: "wip",
    chain: "devnet"
  },
  {
    name: "proof-of-work-agent",
    github: "nayrbryanGaming/proof-of-work-agent",
    category: "bounties",
    description: "Autonomous agent that completes tasks and proves work",
    status: "wip",
    chain: "devnet"
  },
  {
    name: "among-claw",
    github: "EndClaw/among-claw",
    category: "gaming",
    description: "Among Us-style social deduction for AI agents",
    status: "wip",
    chain: "none"
  }
];

// Add only new ones
const existing = new Set(projects.map(p => p.github));
for (const p of newProjects) {
  if (!existing.has(p.github)) {
    projects.push(p);
    console.log('Added:', p.name);
  }
}

fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2));
console.log('Total projects:', projects.length);
