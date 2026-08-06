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
    title: "Eco-Rangers",
    description: "Aplikasi mobile untuk mencatat dan melaporkan isu lingkungan.",
    href: "https://github.com/Rifatdhy/ECO-RANGERS",
    techs: ["Dart", "Flutter"],
    icon: "ph-leaf",
    gradient: "135deg, #D4D2CE 0%, #E5E3E0 100%",
  },
  {
    title: "Clash Soccer",
    description: "Game sepak bola multiplayer real-time berbasis web.",
    href: "https://github.com/Rifatdhy/Clash-Soccer",
    techs: ["TypeScript", "nodedotjs"],
    icon: "ph-soccer-ball",
    gradient: "135deg, #B8B5B0 0%, #E5E3E0 100%",
  },
  {
    title: "Node Vault",
    description: "Pengelola kata sandi aman dengan enkripsi end-to-end.",
    href: "https://github.com/Rifatdhy/NodeVault",
    techs: ["openjdk", "spring"],
    icon: "ph-key",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
    {
    title: "FinnBuddy",
    description: "Aplikasi web untuk melacak keuangan pribadi dan membuat anggaran.",
    href: "https://github.com/Rifatdhy/FINN-BUDDY",
    techs: ["html5", "css", "javascript"],
    icon: "ph-wallet",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
    {
    title: "TODO List",
    description: "Aplikasi sederhana untuk mencatat daftar tugas harian.",
    href: "https://github.com/Rifatdhy/TODO-List",
    techs: ["TypeScript", "React"],
    icon: "ph-check-square",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
    {
    title: "Project Pengeluaran",
    description: "Aplikasi untuk mencatat dan mengelola pengeluaran pribadi.",
    href: "https://github.com/Rifatdhy/Project-Pengeluaran",
    techs: ["TypeScript", "nextdotjs"],
    icon: "ph-chart-bar",
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
    period: "2024 - Sekarang",
    description: "Jakarta Global University",
  },
  {
    title: "SMK Teknik Komputer dan Jaringan",
    subtitle: "Jurusan TKJ",
    period: "2020 - 2023",
    description: "SMK",
  },
];
