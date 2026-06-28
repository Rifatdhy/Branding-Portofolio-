export interface Project {
  title: string;
  description: string;
  href: string;
  techs: string[];
  icon: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Jarvis",
    description:
      "Chatbot AI berbasis AIML dengan Text-to-Speech. GUI tkinter untuk percakapan natural, random responses, dan pengenalan konteks user via tag Set/Get/SRAI.",
    href: "https://github.com/Rifatdhy/Jarvis",
    techs: ["Python", "Shell"],
    icon: "ph-robot",
    gradient: "135deg, #D4D2CE 0%, #E5E3E0 100%",
  },
  {
    title: "Mini-Whatsapp",
    description:
      "Aplikasi chat multi-client dengan Java Socket Programming. Arsitektur client-server, GUI Swing, broadcast real-time, multithreading.",
    href: "https://github.com/Rifatdhy/Mini-Whatsapp-",
    techs: ["Java", "Socket"],
    icon: "ph-chats",
    gradient: "135deg, #B8B5B0 0%, #E5E3E0 100%",
  },
  {
    title: "Chat-bot-UTS",
    description:
      "Sistem chatbot berbasis Python untuk tugas Artificial Intelligence. Mengimplementasikan pola percakapan berbasis aturan dengan respons otomatis.",
    href: "https://github.com/Rifatdhy/Chat-bot-UTS",
    techs: ["Python"],
    icon: "ph-magic-wand",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
];

export const allTechs = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Laravel",
  "MySQL",
  "Node.js",
  "Figma",
  "Git",
  "Cisco",
  "Linux",
  "MikroTik",
  "Java",
  "Python",
  "Socket",
  "Shell",
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", slug: "html5", color: "#E34F26" },
      { name: "CSS3", slug: "css", color: "#1572B6" },
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
      { name: "React", slug: "react", color: "#61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "#000000" },
      { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Laravel", slug: "laravel", color: "#FF2D20" },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
      { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    ],
  },
  {
    name: "Tools & Design",
    skills: [
      { name: "Figma", slug: "figma", color: "#F24E1E" },
      { name: "Git", slug: "git", color: "#F05032" },
    ],
  },
  {
    name: "Network & Infrastructure",
    skills: [
      { name: "Cisco", slug: "cisco", color: "#1BA0D7" },
      { name: "Linux", slug: "linux", color: "#000000" },
      { name: "MikroTik", slug: "mikrotik", color: "#FF6600" },
    ],
  },
];

export interface Education {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    title: "Teknik Informatika",
    subtitle: "S1 Sarjana Komputer",
    period: "2023 - Sekarang",
    description: "Jakarta Global University",
  },
  {
    title: "SMK Teknik Komputer dan Jaringan",
    subtitle: "Jurusan TKJ",
    period: "2020 - 2023",
    description: "SMK",
  },
];
