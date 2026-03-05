/**
 * skills.js — Hierarchical data for the Skills Graph.
 * Tier 1 (Root), Tier 2 (Group), Tier 3 (Node)
 */
const SKILLS = [
    // Tier 1: Root
    { id: "root", name: "SKILLS", parent: null, level: 0 },

    // Tier 2: Groups (Muted Colors)
    { id: "programming", name: "Programming", parent: "root", level: 1, color: "#0A192F" },
    { id: "webdev", name: "Web Dev", parent: "root", level: 1, color: "#062019" },
    { id: "security", name: "Security", parent: "root", level: 1, color: "#2D0B0B" },

    // Tier 3: Nodes (Programming)
    { id: "python", name: "Python", parent: "programming", level: 2 },
    { id: "cpp", name: "C++", parent: "programming", level: 2 },
    { id: "javascript", name: "JavaScript", parent: "programming", level: 2 },
    { id: "rust", name: "Rust", parent: "programming", level: 2 },

    // Tier 3: Nodes (Web Dev)
    { id: "react", name: "React", parent: "webdev", level: 2 },
    { id: "nextjs", name: "Next.js", parent: "webdev", level: 2 },
    { id: "threejs", name: "Three.js", parent: "webdev", level: 2 },
    { id: "tailwind", name: "Tailwind", parent: "webdev", level: 2 },

    // Tier 3: Nodes (Security)
    { id: "burp", name: "Burp Suite", parent: "security", level: 2 },
    { id: "metasploit", name: "Metasploit", parent: "security", level: 2 },
    { id: "ghidra", name: "Ghidra", parent: "security", level: 2 },
    { id: "wireshark", name: "Wireshark", parent: "security", level: 2 }
];
