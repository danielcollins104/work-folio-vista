import portrait from "../assets/portfolio/daniel-avatar.jpg";
import casino from "../assets/portfolio/rolling-in-the-dough.png";
import fasting from "../assets/portfolio/fasting-and-freedom.png";
import futureProof from "../assets/portfolio/future-proof.png";
import adonboi from "../assets/portfolio/adonboi.png";
import naturalPortrait from "../assets/portfolio/daniel-natural-portrait.jpg";

export const images = { portrait: naturalPortrait, casino, faceRewrite: portrait, fasting, futureProof, adonboi } as const;

export const projects = [
  { title: "Rolling in the Dough", subtitle: "Python-Coded Casino Slot Machine", description: "A fully custom Python-coded slot machine casino game engineered with above-average player odds compared to any other app or game on the market. Built from the ground up with a proprietary RNG algorithm that genuinely rewards players — because the house doesn't always have to win. Sleek neon-Vegas aesthetic, smooth gameplay, and real entertainment value baked in.", tags: ["Python", "Gaming", "Casino", "Slots"], image: images.casino, link: "https://luckyslots-aynovan9.manus.space/", stats: [["50K+", "Players"], ["30+", "Games"], ["$250K", "Jackpot"]] },
  { title: "FaceRewrite (AvatarPipe)", subtitle: "AI Facial Manipulation Web App", description: "A cutting-edge web application for AI-powered facial manipulation, built on Hugging Face's state-of-the-art model ecosystem. FaceRewrite enables real-time face swapping, style transfer, age progression, and video manipulation — all accessible from the browser. Become a movie star, fix bad takes, create viral clips, and own the scene. Powered by the latest open-source AI breakthroughs.", tags: ["AI/ML", "Hugging Face", "Web App", "Computer Vision"], image: images.faceRewrite, link: "https://avatarpipe.com", stats: [["12K+", "Users"], ["1M+", "Videos"], ["99.2%", "Accuracy"]] },
  { title: "Fasting and Freedom", subtitle: "21-Day Guide to Break Free from Addictions", description: "A deeply personal and transformative 21-day program born from Daniel's own journey through addiction, homelessness, and recovery. Fasting and Freedom teaches the ancient, Biblically-rooted practice of voluntary, spiritually empowered fasting as a powerful tool to break addiction, reset the mind, and reclaim sovereignty over your own life.", tags: ["Wellness", "Fasting", "Faith", "Recovery"], image: images.fasting, link: "https://collinsphere370.gumroad.com/l/Fasting", stats: [["8K+", "Members"], ["21", "Days"], ["Freedom", "Is yours"]] },
  { title: "Future Proof: Keep Your Job", subtitle: "How NOT to Lose Your Job to AI", description: "As AI reshapes every industry, most workers are one software update away from obsolescence — but not you. Daniel's practical, no-fluff guide develops AI-proof skills, career strategies machines can't replicate, and the edge to stay relevant in a changing world.", tags: ["AI", "Career", "Future Skills", "Strategy"], image: images.futureProof, link: "https://collinsphere370.gumroad.com/l/careeryes", stats: [["5K+", "Students"], ["AI-Proof", "Skills"], ["Protect", "Your future"]] },
  { title: "AdonBoi Somali Translator", subtitle: "AI-Powered Language Bridge", description: "Breaking language barriers in real time. AdonBoi uses advanced AI for accurate, culturally aware translation between Somali and English, helping communities, businesses, and organizations communicate seamlessly.", tags: ["AI", "Translation", "Somali", "Community"], image: images.adonboi, link: "https://app.heygen.com/videos/in-the-loop-social-1ba85ed2e82c4e8cbc25b6485b45e5eb", videoEmbed: "https://app.heygen.com/embeds/1ba85ed2e82c4e8cbc25b6485b45e5eb", stats: [] },
] as const;

export const companies = [
  ["Nexus Digital Labs", "Founder & CEO", "2021", "Daniel's flagship digital product studio — the engine behind Rolling in the Dough, FaceRewrite, and more. Specializing in AI-powered applications, Python game development, and disruptive SaaS solutions."],
  ["Forge AI Systems", "Co-Founder & CTO", "2022", "AI research and development firm with ties to the University of Minnesota scientific community, focused on computer vision, Hugging Face integrations, and generative AI."],
  ["Dough Entertainment", "Founder", "2023", "Independent gaming company and home of Rolling in the Dough, built on the principle that players deserve a fair shot."],
  ["Freedom Dawn Collective", "Founder & Lead Coach", "2024", "A wellness and personal transformation community rooted in Biblical wisdom and lived experience."],
] as const;

export const timeline = [
  ["The Struggle", "Homelessness, Addiction & Survival", "Battled years of homelessness, drug addiction, misunderstandings, and police harassment on the streets of Minneapolis. The foundation of hard-won wisdom was being laid in real time."],
  ["The Turn", "Discovery of Ancient Teachings", "Found grounding in Biblical wisdom and fasting traditions passed down through millennia. Fasting became the tool that broke the chains — and sparked the mission to help others."],
  ["2021", "First Lines of Python Code", "Taught himself Python and began building Rolling in the Dough — proving that a fair casino game was possible and that anyone can learn to build, regardless of where they started."],
  ["2022", "Founded Nexus Digital Labs", "Launched the studio with a vision to build AI-first digital products that actually serve people. Minneapolis-based, globally minded."],
  ["2023", "FaceRewrite Development", "Dove into Hugging Face's AI ecosystem and began building FaceRewrite — a professional-grade facial manipulation web app powered by open-source AI."],
  ["2024", "Fasting to Break Addictions Launch", "Turned personal transformation into a community program and launched Freedom Dawn Collective to help others find freedom through fasting and faith."],
  ["2026", "Building in Public from Minneapolis", "Continuing to build, ship, and grow as a serial founder, tech innovator, and lifelong student of timeless wisdom."],
] as const;

export const partnerships = [
  ["Hugging Face", "AI Technology Partner", "Core model ecosystem powering FaceRewrite's facial manipulation and computer vision capabilities."],
  ["University of Minnesota", "Research Partnership", "Collaborative ties with scientists and professors informing the AI and neuroscience foundations across Daniel's platforms."],
  ["Python Software Foundation", "Technology Ecosystem", "Rolling in the Dough is built entirely in Python, leveraging it for game logic and RNG engineering."],
  ["Biblical Wisdom Tradition", "Philosophical Foundation", "Fasting and Freedom draws from teachings and practices handed down since Biblical times."],
  ["Minneapolis Recovery Community", "Community Partner", "Local recovery networks and support groups that inform and amplify Freedom Dawn Collective."],
  ["Open Source AI Community", "Development Partner", "Active collaborator in the global open-source AI ecosystem, particularly around Hugging Face model development."],
] as const;