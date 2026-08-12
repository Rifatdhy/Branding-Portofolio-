export interface Project {
  title: string;
  description: string;
  href: string;
  techs: string[];
  icon: string;
  gradient: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  info?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const about = "Mahasiswa S1 Teknik Informatika di Jakarta Global University dengan latar belakang Teknik Komputer dan Jaringan. Memiliki kompetensi dan pengalaman di bidang pengembangan web, aplikasi desktop dan mobile, jaringan komputer, serta IT support. Terampil dalam mengembangkan aplikasi web responsif dan aplikasi desktop, serta memiliki pemahaman yang baik mengenai administrasi Linux, konfigurasi jaringan, dan troubleshooting perangkat maupun sistem jaringan. Adaptif terhadap perkembangan teknologi, memiliki kemauan belajar yang tinggi, serta berorientasi pada pengembangan solusi teknologi yang efektif dan praktis melalui proyek akademik maupun personal.";

export const education: Education[] = [
  {
    school: "Jakarta Global University",
    degree: "S1 Teknik Informatika",
    period: "2024 - Sekarang",
    info: "IPK 3.48/4.00",
  },
  {
    school: "SMK Negeri 3 Depok",
    degree: "Teknik Komputer dan Jaringan",
    period: "2020 - 2023",
    info: "Jaringan komputer, infrastruktur jaringan, administrasi Linux & server",
  },
];

export const experiences: Experience[] = [
  {
    company: "BAPENDA Provinsi DKI Jakarta",
    position: "Administrative Staff Intern",
    period: "Jan 2023 - Mar 2023",
    description: "Menjaga dan memverifikasi 500 catatan data wajib pajak untuk akurasi data, membantu pengorganisasian dokumen resmi dan laporan administrasi, memperbarui database, serta mendukung operasional kantor harian."
  },
  {
    company: "PT Pizza Boxx",
    position: "Kitchen Staff",
    period: "-",
    description: "Menyiapkan makanan sesuai standar kualitas dan higienis perusahaan, mengelola inventaris dan stok dapur, bekerja efisien dalam lingkungan serba cepat, serta berkolaborasi dengan tim untuk operasional harian."
  },
  {
    company: "Komisi Pemilihan Umum",
    position: "Anggota KPPS",
    period: "-",
    description: "Memverifikasi identitas pemilih dan dokumen pemilu saat proses pemungutan suara, membantu pemeriksaan dan penghitungan suara, memastikan prosedur sesuai peraturan resmi, serta menyusun laporan secara akurat dan tepat waktu."
  }
]

export const projects: Project[] = [
  {
    title: "Clash.Soccer",
    description: "Website berita sepak bola responsif dengan komponen UI reusable, dicapai menggunakan React.js dan Tailwind CSS untuk desktop maupun mobile-first.",
    href: "https://github.com/Rifatdhy/Clash-Soccer",
    techs: ["React", "TailwindCSS", "JavaScript"],
    icon: "ph-soccer-ball",
    gradient: "135deg, #B8B5B0 0%, #E5E3E0 100%",
  },
  {
    title: "ECO RANGERS",
    description: "Aplikasi web tentang kesadaran lingkungan dan gaya hidup berkelanjutan dengan fitur inti dibangun menggunakan PHP dan MySQL serta antarmuka responsif.",
    href: "https://github.com/Rifatdhy/ECO-RANGERS",
    techs: ["PHP", "MySQL"],
    icon: "ph-leaf",
    gradient: "135deg, #D4D2CE 0%, #E5E3E0 100%",
  },
  {
    title: "FINN BUDDY",
    description: "Website responsif dengan antarmuka modern yang bersih menggunakan HTML, CSS, dan JavaScript, fokus pada komponen front-end reusable dan navigasi intuitif.",
    href: "https://github.com/Rifatdhy/FINN-BUDDY",
    techs: ["HTML5", "CSS", "JavaScript"],
    icon: "ph-wallet",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
  {
    title: "NodeVault",
    description: "P2P file sharing dan music streaming terdesentralisasi — setiap laptop menjadi peer yang menyimpan filenya sendiri. Backend Java SE, frontend vanilla HTML/CSS/JS.",
    href: "https://github.com/Rifatdhy/NodeVault",
    techs: ["Java", "HTML5", "CSS", "JavaScript"],
    icon: "ph-share-network",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
  {
    title: "TODO-List",
    description: "Aplikasi pencatat tugas harian berbasis web, dibangun dengan React, TypeScript, Vite, dan Tailwind CSS.",
    href: "https://github.com/Rifatdhy/TODO-List",
    techs: ["React", "TypeScript", "Vite", "TailwindCSS"],
    icon: "ph-check-square",
    gradient: "135deg, #8A8782 0%, #D4D2CE 100%",
  },
];

export const allTechs = [
  "HTML5",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "PHP",
  "MySQL",
  "Java",
  "TypeScript",
  "Vite",
];

export const skillCategories = [
  {
    name: "Programming & Frontend",
    skills: [
      { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "#3178C6" },
      { name: "React", slug: "react", color: "#61DAFB" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
      { name: "Bootstrap", slug: "bootstrap", color: "#7952B3" },
      { name: "HTML5", slug: "html5", color: "#E34F26" },
      { name: "CSS3", slug: "css", color: "#1572B6" },
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Laravel", slug: "laravel", color: "#FF2D20" },
      { name: "Java", slug: "openjdk", color: "#000000" },
      { name: "PHP", slug: "php", color: "#777BB4" },
      { name: "Python", slug: "python", color: "#3776AB" },
      { name: "MySQL", slug: "mysql", color: "#4479A1" },
      { name: "REST API", slug: "insomnia", color: "#4000BF" },
    ],
  },
  {
    name: "Networking",
    skills: [
      { name: "Cisco", slug: "cisco", color: "#1BA0D7" },
      { name: "MikroTik", slug: "mikrotik", color: "#FF6600" },
      { name: "Ubuntu", slug: "ubuntu", color: "#E95420" },
      { name: "Linux", slug: "linux", color: "#FCC624" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", slug: "git", color: "#F05032" },
      { name: "GitHub", slug: "github", color: "#181717" },
      { name: "Postman", slug: "postman", color: "#FF6C37" },
    ],
  },
];