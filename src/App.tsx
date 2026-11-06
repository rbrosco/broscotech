import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Code2,
  Workflow,
  Boxes,
  Database,
  Terminal as TerminalIcon,
  Phone,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  MessageSquare,
  Building2,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Send,
  Sun,
  Moon,
  MapPin,
  Flame,
  Award,
  Cpu
} from "lucide-react";

import Hero3DScene from "./components/Hero3DScene.tsx";
import AIAccelerationBanner from "./components/AIAccelerationBanner.tsx";
import ProductShowcase from "./components/ProductShowcase.tsx";
import HermesConsultingSection from "./components/HermesConsultingSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "ai" | "devops">("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = isDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Rogger! Meu nome é ${formData.name} (${formData.email}). Gostaria de falar sobre: ${formData.subject}. Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5541991747318?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const stats = [
    { label: "Sistemas em Produção", value: "4 SaaS", subtitle: "EasyConnect, Planner, CRM, DripCast" },
    { label: "Mensagens & Webhooks", value: "+500k/mês", subtitle: "Roteamento assíncrono Baileys & Redis" },
    { label: "Economia em Infraestrutura", value: "Até 70%", subtitle: "Docker dedicado vs Cloud pública" },
    { label: "Disponibilidade Operacional", value: "99.9%", subtitle: "Monitoramento e auto-healing 24/7" }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Diagnóstico Técnico & Alinhamento",
      tag: "SEMANA 1",
      desc: "Análise profunda dos gargalos operacionais da sua empresa, definição de arquitetura e escopo fechado sem enrolação."
    },
    {
      num: "02",
      title: "Arquitetura & Engenharia Ágil",
      tag: "SEMANA 2",
      desc: "Modelagem do banco PostgreSQL, criação das APIs e entrega de protótipo navegável para validação prática."
    },
    {
      num: "03",
      title: "Integrações & Homologação",
      tag: "SEMANA 3",
      desc: "Conexão com WhatsApp Baileys, gateways de pagamento, agentes IA e infraestrutura Docker isolada."
    },
    {
      num: "04",
      title: "Deploy em Produção & Suporte",
      tag: "GO-LIVE",
      desc: "Deploy em servidores dedicados com SSL, rotinas de backup automatizadas e suporte sênior contínuo."
    }
  ];

  const timeline = [
    {
      role: "Sócio & Chief Technology Officer (CTO)",
      company: "EasyDev CRM",
      companyUrl: "https://easydev.com.br",
      period: "2023 — Presente",
      description: "Liderança executiva de engenharia, arquitetura de microsserviços, inteligência artificial Hermes, integrações Baileys WhatsApp e CRM multimoeda em escala corporativa."
    },
    {
      role: "Fundador & Arquiteto de Software",
      company: "Broscotech (Laboratório de Inovação)",
      period: "2020 — Presente",
      description: "Desenvolvimento e ideação dos produtos EasyConnect, Planner SDR, DripCast e sistemas sob medida para empresas."
    },
    {
      role: "Engenheiro de Software & Automações",
      company: "Projetos Corporativos B2B",
      period: "2018 — 2023",
      description: "Construção de pipelines de dados, integrações com bancos relacionais de alta carga e infraestrutura Linux Docker."
    }
  ];

  const skills = [
    { name: "TypeScript / React", category: "frontend", level: "Especialista", icon: Code2 },
    { name: "Next.js 15 & Vite", category: "frontend", level: "Avançado", icon: Layers },
    { name: "Tailwind CSS v4", category: "frontend", level: "Especialista", icon: Sparkles },
    { name: "Node.js & Bun", category: "backend", level: "Especialista", icon: Server },
    { name: "PostgreSQL 17 & Redis", category: "backend", level: "Avançado", icon: Database },
    { name: "REST & Webhooks", category: "backend", level: "Especialista", icon: Workflow },
    { name: "Hermes Fleet / Agentes IA", category: "ai", level: "Pioneiro", icon: Bot },
    { name: "Vercel AI SDK & LLMs", category: "ai", level: "Avançado", icon: Zap },
    { name: "WhatsApp Bot Baileys", category: "ai", level: "Especialista", icon: MessageSquare },
    { name: "Docker & Compose", category: "devops", level: "Especialista", icon: Boxes },
    { name: "Nginx & SSL Proxy", category: "devops", level: "Avançado", icon: ShieldCheck },
    { name: "Linux / Arch / Debian", category: "devops", level: "Especialista", icon: TerminalIcon }
  ];

  const filteredSkills = activeTab === "all" ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8F9FE] dark:bg-[#070914] text-slate-900 dark:text-slate-100 font-sans selection:bg-violet-600 selection:text-white transition-colors duration-200 relative overflow-x-clip">
      
      {/* Aurora Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/15 via-indigo-600/15 to-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-bl from-blue-600/15 via-cyan-600/10 to-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* HEADER 100% FIXO NO TOPO - Acompanha a rolagem de ponta a ponta */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-[#070914]/85 border-b border-slate-200/80 dark:border-indigo-900/40 shadow-sm transition-all duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Logo & Autoridade Broscotech com Monograma Autoral B Futurista */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group select-none">
            {/* Monograma Autoral B Diferentaço Isométrico */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 rounded-xl blur-[3px] opacity-75 group-hover:opacity-100 transition duration-300" />
              <svg
                viewBox="0 0 40 40"
                className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 drop-shadow-[2px_2px_0px_#000]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="brosco-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="brosco-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="100%" stopColor="#090d1f" />
                  </linearGradient>
                  <linearGradient id="brosco-neon" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                
                {/* Moldura Neobrutalista Futurista */}
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                  rx="10"
                  fill="url(#brosco-grad-dark)"
                  stroke="#000000"
                  strokeWidth="2"
                />
                
                {/* Micro Circuitos */}
                <path
                  d="M5 14H11M29 26H35M14 5V11M26 29V35"
                  stroke="url(#brosco-neon)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />

                {/* Tronco do B */}
                <path
                  d="M11 9H17C17 9 17 31 17 31H11C9.89543 31 9 30.1046 9 29V11C9 9.89543 9.89543 9 11 9Z"
                  fill="url(#brosco-grad-1)"
                  stroke="#000000"
                  strokeWidth="1.5"
                />

                {/* Loop Superior B */}
                <path
                  d="M17 9H24C27.3137 9 30 11.4624 30 14.5C30 17.5376 27.3137 20 24 20H17V9Z"
                  fill="url(#brosco-neon)"
                  stroke="#000000"
                  strokeWidth="1.5"
                />
                <circle cx="22.5" cy="14.5" r="2.2" fill="#090d1f" stroke="#000000" strokeWidth="1" />

                {/* Loop Inferior B Mais Largo */}
                <path
                  d="M17 20H25.5C29.0899 20 32 22.4624 32 25.5C32 28.5376 29.0899 31 25.5 31H17V20Z"
                  fill="url(#brosco-grad-1)"
                  stroke="#000000"
                  strokeWidth="1.5"
                />
                <circle cx="23.5" cy="25.5" r="2.5" fill="#090d1f" stroke="#000000" strokeWidth="1" />

                {/* Ponto Neon Vértice */}
                <circle cx="30" cy="11" r="1.5" fill="#22d3ee" />
              </svg>
            </div>

            {/* Wordmark Broscotech */}
            <div className="shrink-0 whitespace-nowrap">
              <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                <span className="font-black text-sm sm:text-base tracking-wider text-slate-900 dark:text-white uppercase font-mono group-hover:tracking-widest transition-all duration-300 shrink-0 whitespace-nowrap">
                  BROSCO<span className="bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">TECH</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-indigo-300 font-bold block leading-none shrink-0 whitespace-nowrap">
                por Rogger Brosco • CTO EasyDev
              </span>
            </div>
          </a>

          {/* Menu Central: Exatamente 4 links limpos e espaçados */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-black text-slate-700 dark:text-slate-300">
            <a
              href="#produtos"
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition whitespace-nowrap shrink-0"
            >
              Softwares
            </a>
            <a
              href="#hermes-consultoria"
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-500" />
              <span>Consultoria Hermes</span>
            </a>
            <a
              href="#servicos"
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition whitespace-nowrap shrink-0"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition whitespace-nowrap shrink-0"
            >
              Sobre
            </a>
          </nav>

          {/* Lado Direito: Tema + Botão WhatsApp Direto */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border-2 border-slate-900 dark:border-indigo-900/60 bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#181d38] transition cursor-pointer shadow-[2px_2px_0px_#000] shrink-0"
              title="Alternar Tema"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </button>

            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20conversar%20sobre%20um%20projeto%20para%20minha%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] shrink-0 whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Falar com Rogger ⚡</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl border-2 border-slate-900 dark:border-indigo-900/60 bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 cursor-pointer shadow-[2px_2px_0px_#000]"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-slate-900 dark:border-indigo-950 bg-white/95 dark:bg-[#070914]/95 backdrop-blur-xl px-5 py-4 space-y-3 font-black text-xs">
            <a
              href="#produtos"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-800 dark:text-slate-200 hover:text-indigo-600"
            >
              Softwares em Produção
            </a>
            <a
              href="#hermes-consultoria"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-800 dark:text-slate-200 hover:text-indigo-600"
            >
              Consultoria Hermes IA
            </a>
            <a
              href="#servicos"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-800 dark:text-slate-200 hover:text-indigo-600"
            >
              Serviços Especializados
            </a>
            <a
              href="#sobre"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-slate-800 dark:text-slate-200 hover:text-indigo-600"
            >
              Sobre Rogger Brosco
            </a>
            <div className="pt-2 border-t border-slate-200 dark:border-indigo-950">
              <a
                href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20conversar%20sobre%20um%20projeto%20para%20minha%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-black text-xs flex items-center justify-center gap-2 border-2 border-black shadow-[2px_2px_0px_#000]"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Falar no WhatsApp ⚡</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content com pt-24 para compensar o header fixo */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-24 space-y-24">
        
        {/* 1. HERO SECTION LIMPA, RESPIRÁVEL E DE ALTO IMPACTO */}
        <section id="hero" className="relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col items-center justify-center text-center p-6 sm:p-12 lg:p-16 border-2 border-slate-900 dark:border-indigo-900/70 bg-white dark:bg-[#0c0e1e] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#6366f1]">
          
          {/* Interactive 3D Wireframe Scene */}
          <Hero3DScene theme={theme} />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            
            {/* Foto do Rogger com Moldura Roxo & Azul */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative p-1.5 rounded-2xl bg-white dark:bg-black border-2 border-black shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1]">
                <img
                  src="/avatar.png"
                  alt="Rogger Brosco - CTO EasyDev"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
                />
                <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white font-mono font-black text-[10px] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  ONLINE • CTO
                </span>
              </div>
            </div>

            {/* Sticker Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[3px_3px_0px_#000] shrink-0 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>ROGGER BROSCO • CTO & SÓCIO @ EASYDEV</span>
            </div>

            {/* Main Headline H1 */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Arquiteto de Software & Engenharia de IA.{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white px-3 py-0.5 rounded-xl border-2 border-black inline-block mt-1 shadow-[2px_2px_0px_#000]">
                  Liderança Técnica na EasyDev.
                </span>
              </h1>
              
              {/* Subtitle / Positioning */}
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mx-auto pt-2">
                Desenvolvo plataformas SaaS completas, frotas autônomas de IA (Hermes) e automações WhatsApp Baileys operadas e entregues oficialmente pela <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong> para empresas que buscam escala real.
              </p>
            </div>

            {/* CTAs Principais */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20conversar%20sobre%20um%20projeto%20com%20a%20EasyDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-sm transition border-2 border-black shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-white shrink-0" />
                <span>Falar com Rogger no WhatsApp ⚡</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#12162b] hover:bg-slate-100 dark:hover:bg-[#181d38] text-slate-900 dark:text-white font-black text-sm transition border-2 border-black dark:border-indigo-800 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] hover:-translate-x-0.5 hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
              >
                <Boxes className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Explorar Softwares Prontos ↓</span>
              </a>
            </div>

            {/* Badges de Autoridade */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-xl bg-slate-100 dark:bg-[#12162b] border-2 border-black dark:border-indigo-900/80 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="font-black text-slate-900 dark:text-white">Liderança Direta de Engenharia</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-xl bg-slate-100 dark:bg-[#12162b] border-2 border-black dark:border-indigo-900/80 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
                <span className="font-bold text-slate-600 dark:text-slate-300">Contratos & Operação via</span>
                <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong>
              </div>
              <a
                href="https://github.com/rbrosco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#12162b] hover:bg-slate-200 dark:hover:bg-[#181d38] text-slate-900 dark:text-white font-mono text-xs font-black transition border-2 border-black dark:border-indigo-900/80 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span>github.com/rbrosco</span>
              </a>
            </div>

          </div>
        </section>

        {/* 2. STATS STRIP & CREDIBILIDADE COM ESPAÇAMENTO */}
        <section className="bg-white dark:bg-[#0c0e1e] rounded-3xl p-6 sm:p-10 border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-1.5"
              >
                <div className="text-[10px] font-mono font-black uppercase text-indigo-600 dark:text-indigo-400">
                  {item.label}
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                  {item.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Strip */}
          <div className="pt-4 border-t-2 border-slate-200 dark:border-indigo-950 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="font-black text-white uppercase text-[11px] bg-gradient-to-r from-violet-600 to-blue-600 px-2.5 py-1 rounded border border-black shadow-[1px_1px_0px_#000] shrink-0 whitespace-nowrap">
              ENGENHARIA EASYDEV EM PRODUÇÃO:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-bold text-slate-700 dark:text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900 text-indigo-400 shrink-0 whitespace-nowrap">EasyDev CRM Multimoeda</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900 shrink-0 whitespace-nowrap">EasyConnect WhatsApp</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900 shrink-0 whitespace-nowrap">Planner SDR</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900 shrink-0 whitespace-nowrap">Hermes Fleet IA</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900 shrink-0 whitespace-nowrap">PostgreSQL 17 Isolado</span>
            </div>
          </div>
        </section>

        {/* 3. VITRINE DE SOFTWARES PRONTOS PARA USO (Softwares) */}
        <ProductShowcase />

        {/* 4. HERMES AGENT CONSULTORIA & IMPLANTAÇÃO (Consultoria Hermes) */}
        <HermesConsultingSection />

        {/* 5. TUDO QUE FAÇO / SERVIÇOS (Serviços) */}
        <ServicesSection />

        {/* 6. MANIFESTO DE ENGENHARIA DE VERDADE VS AGÊNCIAS */}
        <AIAccelerationBanner />

        {/* 7. COMO TRABALHAMOS (Processo em 4 Etapas) */}
        <section id="processo" className="bg-white dark:bg-[#0c0e1e] rounded-3xl p-6 sm:p-10 space-y-8 border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
                <span>MÉTODO SEM BUROCRACIA • EASYDEV</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                Como tiramos seu projeto do papel
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md font-medium">
              Sem intermediários e sem repasse de responsabilidade. Você fala direto com quem desenha e lidera a entrega do software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-indigo-600 dark:text-cyan-400 font-mono">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-black text-slate-700 dark:text-slate-300 shrink-0 whitespace-nowrap">
                    {step.tag}
                  </span>
                </div>
                <h4 className="font-black text-slate-900 dark:text-white text-base tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick CTA inside process */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border-2 border-indigo-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-bold">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400 shrink-0" />
              <span>Garantia de Entrega EasyDev: Escopo claro, código testado, nota fiscal e suporte contínuo pós-lançamento.</span>
            </div>
            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20agendar%20uma%20conversa%20técnica%20de%2030%20minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black transition border-2 border-black shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap cursor-pointer"
            >
              Agendar Conversa Técnica ⚡
            </a>
          </div>
        </section>

        {/* 8. SOBRE ROGGER BROSCO (Sobre) */}
        <section id="sobre" className="space-y-8 scroll-mt-28">
          <div className="bg-white dark:bg-[#0c0e1e] rounded-3xl p-6 sm:p-10 border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
                  <span>QUEM ESTÁ POR TRÁS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Engenharia sênior com liderança executiva — sem intermediários.
                </h3>
                <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-3 font-medium">
                  <p>
                    Sou Sócio & CTO na <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong> e fundador da Broscotech. Nos últimos 7 anos, projetei e coloquei em produção sistemas para empresas que precisavam de performance extrema, estabilidade e automação ininterrupta.
                  </p>
                  <p>
                    Minha missão na EasyDev é garantir que cada linha de código gere valor concreto para o negócio do cliente, desde a modelagem do banco de dados até a orquestração de frotas autônomas de IA.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://easydev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-950 text-white text-xs font-mono font-bold border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-slate-800 transition shrink-0 whitespace-nowrap"
                  >
                    <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Conhecer a EasyDev Oficial</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>

                  <a
                    href="https://github.com/rbrosco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#12162b] text-slate-800 dark:text-slate-200 text-xs font-mono font-bold border-2 border-black dark:border-indigo-900 shadow-[2px_2px_0px_#000] hover:bg-slate-200 dark:hover:bg-[#181d38] transition shrink-0 whitespace-nowrap"
                  >
                    <Github className="w-3.5 h-3.5 shrink-0" />
                    <span>github.com/rbrosco</span>
                  </a>
                </div>
              </div>

              {/* Trajetória Timeline */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] space-y-4">
                <div className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Trajetória Profissional:</span>
                </div>
                <div className="space-y-3">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-indigo-500 pl-3 space-y-1">
                      <div className="text-[10px] font-mono text-indigo-600 dark:text-cyan-400 font-bold">
                        {item.period}
                      </div>
                      <div className="font-black text-slate-900 dark:text-white text-xs">
                        {item.role}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                        {item.company}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Competências Técnicas & Stack */}
            <div className="pt-6 border-t-2 border-slate-200 dark:border-indigo-950 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  Stack & Domínios de Engenharia:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {(["all", "frontend", "backend", "ai", "devops"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded-lg border transition cursor-pointer text-[11px] font-bold shrink-0 whitespace-nowrap ${
                        activeTab === tab
                          ? "bg-slate-900 text-white dark:bg-white dark:text-black border-black"
                          : "bg-slate-100 dark:bg-[#12162b] text-slate-600 dark:text-slate-400 border-slate-300 dark:border-indigo-900 hover:border-black"
                      }`}
                    >
                      {tab === "all" ? "Todos" : tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[2px_2px_0px_#000] flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-black flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-black text-slate-900 dark:text-white text-xs whitespace-nowrap">{skill.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-indigo-300/80 font-mono font-bold whitespace-nowrap">{skill.level}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 9. CONTATO & FORMULÁRIO */}
        <section id="contato" className="scroll-mt-28">
          <div className="rounded-3xl bg-white dark:bg-[#0c0e1e] border-2 border-slate-900 dark:border-indigo-900/60 p-6 sm:p-12 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#6366f1] space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
                  <span>VAMOS CONVERSAR SOBRE SEU PROJETO</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Pronto para construir software de verdade para seu negócio?
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  Atendimento direto sem filtros comerciais. Responderei com um diagnóstico técnico preliminar e próximos passos objetivos.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20conversar%20sobre%20um%20projeto%20com%20a%20EasyDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000] hover:bg-slate-100 dark:hover:bg-[#181d38] transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>WhatsApp Direto: +55 (41) 99174-7318</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">ONLINE</span>
                  </a>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]">
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Email: contato@broscotech.com.br</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]">
                    <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Sede: Curitiba, PR • Atendimento Global</span>
                  </div>
                </div>
              </div>

              {/* Right Column: WhatsApp Form */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1]">
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                      Seu Nome Completo:
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Carlos Mendes"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-indigo-900 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 shadow-inner"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                        Seu Melhor Email:
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-indigo-900 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 shadow-inner"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                        Tipo de Demanda:
                      </span>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Ex: Consultoria Hermes / SaaS Novo"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-indigo-900 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                      Conte sobre sua empresa e o desafio:
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Qual o maior gargalo operacional hoje ou o que precisa ser construído?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-indigo-900 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4 fill-white shrink-0" />
                    <span>Enviar Mensagem Direta Para Rogger no WhatsApp ⚡</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t-2 border-slate-900 dark:border-indigo-900/60 bg-white dark:bg-[#070914] py-8 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>© {new Date().getFullYear()} ROGGER BROSCO • CTO @ EASYDEV</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-bold">
            <a href="https://easydev.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-indigo-400 underline">
              EasyDev Oficial
            </a>
            <span>•</span>
            <a href="https://github.com/rbrosco" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
              GitHub
            </a>
            <span>•</span>
            <a href="#hermes-consultoria" className="hover:text-black dark:hover:text-white transition">
              Hermes IA
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-black dark:hover:text-white transition">
              Voltar ao Topo ↑
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}