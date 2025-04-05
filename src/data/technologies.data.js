import { FaHtml5, FaCss3Alt, FaGithubSquare, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import { MdOutlineTerminal } from "react-icons/md";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiJira, SiTailwindcss } from "react-icons/si";
import { FaClipboardQuestion } from "react-icons/fa6";

export const technologies = [
  {
    icon: FaHtml5,
    title: "HTML",
    description: "Estructura",
  },
  { icon: FaCss3Alt, title: "CSS", description: "Estilo" },
  {
    icon: IoLogoJavascript,
    title: "JavaScript",
    description: "Interacción",
  },
  { icon: FaGithubSquare, title: "GitHub", description: "Versionamiento" },
  {
    icon: DiVisualstudio,
    title: "Visual Studio Code",
    description: "Editor de código",
  },
  {
    icon: MdOutlineTerminal,
    title: "Terminal",
    description: "Línea de comandos",
  },
  { icon: PiFigmaLogoFill, title: "Figma", description: "Diseño" },
  { icon: SiJira, title: "Jira", description: "Gestión" },
  { icon: FaReact, title: "React", description: "Framework" },
  {
    icon: FaBootstrap,
    title: "Bootstrap",
    description: "Frontend toolkit",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    description: "CSS Framework",
  },
  { icon: FaClipboardQuestion, title: "??", description: "??" },
];
