import React, { useState, useEffect } from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Server,
  Zap,
  Bot,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  ArrowRight,
  Database,
  Cloud,
  Sparkles,
  Phone,
  FileCode2,
  GitBranch,
  Terminal as TerminalIcon,
  Compass,
  Workflow,
  Boxes,
  Award,
  MapPin,
  Send,
  Moon,
  Sun,
  Activity,
  Sliders,
  Calendar,
  DollarSign,
  Clock,
  ArrowUpRight,
  Check,
  Flame,
  X,
  Building2
} from 'lucide-react';

import Hero3DScene from './components/Hero3DScene.tsx';
import AIAccelerationBanner from './components/AIAccelerationBanner.tsx';
import ProductShowcase from './components/ProductShowcase.tsx';
import HermesConsultingSection from './components/HermesConsultingSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import { PlannerSdrMockup, EasyConnectMockup, DripCastMockup } from './components/ProductMockups.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'devops'>('all');
  const [heroPreviewTab, setHeroPreviewTab] = useState<'easyconnect' | 'planner' | 'dripcast'>('easyconnect');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Contato via Portfólio Rogger Brosco (EasyDev)*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Assunto:* ${formData.subject}%0A*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/5541991747318?text=${text}`, '_blank');
  };

  const stats = [
    { label: 'Experiência Técnica', value: '7+ Anos', subtitle: 'Colocando sistemas em produção', icon: Code2 },
    { label: 'Disponibilidade', value: '99.9%', subtitle: 'SLA em servidores EasyDev', icon: ShieldCheck },
    { label: 'Engenharia de IA', value: 'Hermes Fleet', subtitle: 'Frotas autônomas 24/7 sem alucinação', icon: Bot },
    { label: 'Liderança Técnica', value: 'Sócio & CTO', subtitle: 'Engenharia sênior na EasyDev', icon: Zap },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Diagnóstico & Arquitetura',
      tag: 'DIRETO COM O CTO',
      desc: 'Alinhamento objetivo da sua regra de negócio e gargalos operacionais. Desenho da arquitetura técnica sem intermediários.',
    },
    {
      num: '02',
      title: 'Desenvolvimento Ágil na EasyDev',
      tag: 'SEMANAS 1 E 2',
      desc: 'Construção rápida de protótipo operacional navegável para sua equipe validar com dados reais.',
    },
    {
      num: '03',
      title: 'Integrações & Homologação',
      tag: 'SEMANA 3',
      desc: 'Conexão com WhatsApp Baileys, gateways de pagamento, APIs e banco PostgreSQL isolado com testes de estresse.',
    },
    {
      num: '04',
      title: 'Deploy em Produção & Suporte',
      tag: 'GO-LIVE CORPORATIVO',
      desc: 'Deploy em containers Docker com SSL, backups automatizados e acompanhamento contínuo da equipe EasyDev.',
    },
  ];

  const timeline = [
    {
      role: 'Sócio & Chief Technology Officer (CTO)',
      company: 'EasyDev CRM',
      companyUrl: 'https://easydev.com.br',
      period: '2023 — Presente',
      description: 'Liderança executiva de engenharia, arquitetura de microsserviços, inteligência artificial Hermes, integrações Baileys WhatsApp e CRM multimoeda em escala corporativa.',
    },
    {
      role: 'Fundador & Arquiteto de Software',
      company: 'Broscotech (Portfólio & Laboratório)',
      period: '2020 — Presente',
      description: 'Desenvolvimento e ideação dos produtos EasyConnect, Planner SDR, DripCast e protótipos de tecnologia aplicada para empresas.',
    },
    {
      role: 'Engenheiro de Automação & Full Stack',
      company: 'Projetos Globais & B2B',
      period: '2018 — 2023',
      description: 'Construção de pipelines de automação, integrações com bancos relacionais de alto tráfego e infraestrutura Linux Docker.',
    },
  ];

  const skills = [
    { name: 'TypeScript / React', category: 'frontend', level: 'Especialista', icon: Code2 },
    { name: 'Next.js 15 & Vite', category: 'frontend', level: 'Avançado', icon: Layers },
    { name: 'Tailwind CSS v4', category: 'frontend', level: 'Especialista', icon: Sparkles },
    { name: 'Node.js & Bun', category: 'backend', level: 'Especialista', icon: Server },
    { name: 'PostgreSQL 17 & Redis', category: 'backend', level: 'Avançado', icon: Database },
    { name: 'REST & Webhooks', category: 'backend', level: 'Especialista', icon: Workflow },
    { name: 'Hermes Fleet / Agentes IA', category: 'ai', level: 'Pioneiro', icon: Bot },
    { name: 'Vercel AI SDK & LLMs', category: 'ai', level: 'Avançado', icon: Zap },
    { name: 'WhatsApp Bot Baileys', category: 'ai', level: 'Especialista', icon: MessageSquare },
    { name: 'Docker & Compose', category: 'devops', level: 'Especialista', icon: Boxes },
    { name: 'Nginx & SSL Proxy', category: 'devops', level: 'Avançado', icon: ShieldCheck },
    { name: 'Linux / Arch / Debian', category: 'devops', level: 'Especialista', icon: TerminalIcon },
  ];

  const filteredSkills = activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8F9FE] dark:bg-[#070914] text-slate-900 dark:text-slate-100 font-sans selection:bg-violet-600 selection:text-white transition-colors duration-200 relative overflow-hidden">
      
      {/* Aurora Ambient Glows (Fusão Fluida Roxo & Azul) */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/15 via-indigo-600/15 to-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-bl from-blue-600/15 via-cyan-600/10 to-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Top Engineering Marquee com Gradiente Roxo & Azul */}
      <div className="bg-gradient-to-r from-violet-700 via-indigo-600 to-blue-600 text-white border-b-2 border-black py-1.5 px-4 font-mono font-black text-[11px] tracking-wider uppercase overflow-hidden whitespace-nowrap shadow-sm">
        <div className="inline-block animate-marquee">
          ⚡ ROGGER BROSCO • SÓCIO & CTO @ EASYDEV • IMPLANTAÇÃO DE AGENTES IA HERMES 24/7 • DESENVOLVIMENTO SAAS FULL-STACK • WHATSAPP BAILEYS & CRM • POSTGRESQL 17 ISOLADO • CONHEÇA AS SOLUÇÕES CORPORATIVAS NA EASYDEV (EASYDEV.COM.BR) • WHATSAPP: +55 (41) 99174-7318 •
        </div>
      </div>

      {/* Floating Header */}
      <header className="sticky top-3 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 dark:bg-[#0c0e1e]/90 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between border-2 border-slate-900 dark:border-indigo-900/70 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#6366f1]">
          
          {/* Brand Logo & Authority */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 text-white border-2 border-black flex items-center justify-center font-mono font-black text-xs shadow-[2px_2px_0px_#000]">
              RB
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm tracking-tight text-slate-900 dark:text-white">ROGGER BROSCO</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block font-black leading-none">
                SÓCIO & CTO @ EASYDEV
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-black text-slate-700 dark:text-slate-300">
            <a href="#hermes-consultoria" className="hover:text-indigo-500 transition flex items-center gap-1 text-violet-600 dark:text-cyan-400">
              <Bot className="w-3.5 h-3.5" />
              <span>Consultoria Hermes</span>
              <span className="px-1.5 py-0.2 rounded bg-gradient-to-r from-violet-600 to-blue-600 text-white text-[9px] font-mono font-black border border-black shadow-[1px_1px_0px_#000]">
                IA 24/7
              </span>
            </a>
            <a href="#servicos" className="hover:text-indigo-500 transition">Tudo Que Faço</a>
            <a href="#produtos" className="hover:text-indigo-500 transition">Softwares [5]</a>
            <a href="#manifesto" className="hover:text-indigo-500 transition">Manifesto</a>
            <a href="#processo" className="hover:text-indigo-500 transition">Processo</a>
            <a href="#sobre" className="hover:text-indigo-500 transition">Rogger Brosco</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://easydev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#12162b] hover:bg-slate-200 dark:hover:bg-[#181d38] text-slate-800 dark:text-slate-200 font-mono font-bold text-xs transition border border-slate-300 dark:border-indigo-800"
            >
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>EasyDev.com.br</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Alternar Tema"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#12162b] dark:hover:bg-[#181d38] text-slate-900 dark:text-white flex items-center justify-center transition border-2 border-black dark:border-indigo-800 cursor-pointer shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#6366f1]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
            </button>

            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20vi%20seu%20portfólio%20e%20quero%20conversar%20sobre%20as%20soluções%20da%20EasyDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Falar com Rogger ⚡</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-24 space-y-24">

        {/* 1. HERO SECTION COM FOTO DO ROGGER EM EVIDÊNCIA */}
        <section id="hero" className="relative rounded-3xl overflow-hidden min-h-[660px] flex flex-col items-center justify-center text-center p-6 sm:p-12 border-2 border-slate-900 dark:border-indigo-900/70 bg-white dark:bg-[#0c0e1e] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#6366f1]">
          
          {/* Interactive 3D Wireframe Scene */}
          <Hero3DScene theme={theme} />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            
            {/* FOTO DO ROGGER EM DESTAQUE MÁXIMO COM MOLDURA ROXO/AZUL */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative p-1.5 rounded-2xl bg-white dark:bg-black border-2 border-black shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1]">
                <img
                  src="/avatar.png"
                  alt="Rogger Brosco - Sócio & CTO EasyDev"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
                />
                <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white font-mono font-black text-[10px] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  ONLINE • CTO
                </span>
              </div>
            </div>

            {/* Sticker Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[3px_3px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ROGGER BROSCO • SÓCIO & CTO @ EASYDEV</span>
            </div>

            {/* Main Headline H1 */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Arquiteto de Software & Engenharia de IA.{' '}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white px-3 py-0.5 rounded-xl border-2 border-black inline-block mt-1 shadow-[2px_2px_0px_#000]">
                  Liderança Técnica na EasyDev.
                </span>
              </h1>
              
              {/* Subtitle / Positioning */}
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mx-auto pt-2">
                Este é meu portfólio autoral de engenharia. Construo plataformas SaaS completas, frotas autônomas de IA (Hermes) e automações WhatsApp Baileys operadas e entregues oficialmente pela <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong> para empresas que buscam escala real.
              </p>
            </div>

            {/* CTAs Principais */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="#hermes-consultoria"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-sm transition border-2 border-black shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>Consultoria Hermes Agent 24/7 ⚡</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://easydev.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#12162b] hover:bg-slate-100 dark:hover:bg-[#181d38] text-slate-900 dark:text-white font-black text-sm transition border-2 border-black dark:border-indigo-800 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>Conhecer a EasyDev Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Badges de Autoridade */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-xl bg-slate-100 dark:bg-[#12162b] border-2 border-black dark:border-indigo-900/80 shadow-[2px_2px_0px_#000]">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-black text-slate-900 dark:text-white">Liderança Direta de Engenharia</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-xl bg-slate-100 dark:bg-[#12162b] border-2 border-black dark:border-indigo-900/80 shadow-[2px_2px_0px_#000]">
                <span className="font-bold text-slate-600 dark:text-slate-300">Contratos & Operação via</span>
                <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong>
              </div>
              <a
                href="https://github.com/rbrosco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#12162b] hover:bg-slate-200 dark:hover:bg-[#181d38] text-slate-900 dark:text-white font-mono text-xs font-black transition border-2 border-black dark:border-indigo-900/80 shadow-[2px_2px_0px_#000]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/rbrosco</span>
              </a>
            </div>

          </div>

          {/* Quick Mockup Switcher inside Hero */}
          <div className="relative z-10 w-full max-w-4xl mx-auto mt-10 pt-6 border-t-2 border-slate-900 dark:border-indigo-900/60 space-y-4 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                  Sistemas em Produção:
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-indigo-300/70">
                  (Selecione para navegar no protótipo)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHeroPreviewTab('easyconnect')}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-mono transition border-2 cursor-pointer ${
                    heroPreviewTab === 'easyconnect'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-400 dark:border-indigo-900/60'
                  }`}
                >
                  📱 EasyConnect (WhatsApp)
                </button>
                <button
                  onClick={() => setHeroPreviewTab('planner')}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-mono transition border-2 cursor-pointer ${
                    heroPreviewTab === 'planner'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-400 dark:border-indigo-900/60'
                  }`}
                >
                  📊 Planner SDR (Kanban IA)
                </button>
                <button
                  onClick={() => setHeroPreviewTab('dripcast')}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-mono transition border-2 cursor-pointer ${
                    heroPreviewTab === 'dripcast'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-400 dark:border-indigo-900/60'
                  }`}
                >
                  🚀 DripCast (Social Feed)
                </button>
              </div>
            </div>

            {/* Quick Render Frame */}
            <div>
              {heroPreviewTab === 'easyconnect' && <EasyConnectMockup />}
              {heroPreviewTab === 'planner' && <PlannerSdrMockup />}
              {heroPreviewTab === 'dripcast' && <DripCastMockup />}
            </div>
          </div>
        </section>

        {/* 2. FAIXA DE CREDIBILIDADE & MÉTRICAS EM PRODUÇÃO */}
        <section className="bg-white dark:bg-[#0c0e1e] rounded-3xl p-6 sm:p-8 border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-cyan-400">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-black uppercase text-slate-500 dark:text-indigo-300/80">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Strip: Softwares da EasyDev */}
          <div className="pt-4 border-t-2 border-slate-900 dark:border-indigo-900/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="font-black text-white uppercase text-[11px] bg-gradient-to-r from-violet-600 to-blue-600 px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]">
              PRODUTOS & PROJETOS DA ENGENHARIA EASYDEV:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-bold text-slate-700 dark:text-slate-300">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900 text-indigo-400">EasyDev CRM Multimoeda</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900">EasyConnect WhatsApp</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900">Planner SDR</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900">Hermes Fleet IA</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900">PostgreSQL 17</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-black dark:border-indigo-900">Docker Privado</span>
            </div>
          </div>
        </section>

        {/* 3. DESTAQUE PRINCIPAL: HERMES AGENT CONSULTORIA & IMPLANTAÇÃO */}
        <HermesConsultingSection />

        {/* 4. TUDO QUE EU FAÇO / SERVIÇOS (PRÁTICO, SEM ENROLAÇÃO) */}
        <ServicesSection />

        {/* 5. VITRINE DE SOFTWARES PRONTOS PARA USO */}
        <ProductShowcase />

        {/* 6. MANIFESTO DE ENGENHARIA DE VERDADE VS AGÊNCIAS */}
        <AIAccelerationBanner />

        {/* 7. COMO TRABALHAMOS (PROCESSO EM 4 ETAPAS SEM BUROCRACIA) */}
        <section id="processo" className="bg-white dark:bg-[#0c0e1e] rounded-3xl p-6 sm:p-10 space-y-8 border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                <span>MÉTODO SEM BUROCRACIA • EASYDEV</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                Como tiramos seu projeto do papel
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md font-medium">
              Sem reuniões intermináveis e sem repasse de responsabilidade. Você fala direto com quem vai desenhar e liderar a entrega do software.
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
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-black text-slate-700 dark:text-slate-300">
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
              <span>Garantia de Entrega EasyDev: Escopo claro, código testado, emissão de nota fiscal e suporte contínuo pós-lançamento.</span>
            </div>
            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20agendar%20uma%20conversa%20técnica%20de%2030%20minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black transition border-2 border-black shadow-[2px_2px_0px_#000] shrink-0"
            >
              Agendar Conversa Técnica (30 min)
            </a>
          </div>
        </section>

        {/* 8. SOBRE ROGGER BROSCO (AUTORIDADE & CTO EASYDEV) */}
        <section id="sobre" className="space-y-8 scroll-mt-28">
          <div className="bg-white dark:bg-[#0c0e1e] rounded-3xl p-6 sm:p-10 border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                  <span>QUEM ESTÁ POR TRÁS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Engenharia sênior com liderança executiva — sem intermediários ou repasse de tarefas.
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 font-mono text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000]"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Conhecer a EasyDev Corporativa</span>
                  </a>
                  <a
                    href="https://github.com/rbrosco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#12162b] hover:bg-slate-100 dark:hover:bg-[#181d38] text-slate-900 dark:text-white text-xs font-black transition border-2 border-black dark:border-indigo-900 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1]"
                  >
                    <Github className="w-4 h-4 text-indigo-400" />
                    <span>github.com/rbrosco (Open Source)</span>
                  </a>
                </div>
              </div>

              {/* Founder Avatar & Snapshot */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] space-y-3">
                <div className="relative">
                  <img
                    src="/avatar.png"
                    alt="Rogger Brosco"
                    className="w-28 h-28 rounded-2xl object-cover border-3 border-black shadow-[4px_4px_0px_#000]"
                  />
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white font-mono font-black text-[10px] border-2 border-black shadow-[2px_2px_0px_#000]">
                    ONLINE ✓
                  </span>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-base">Rogger Brosco</h4>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">Sócio & CTO @ EasyDev</p>
                </div>
                <div className="text-[11px] font-mono text-white font-black px-3 py-1 rounded-md bg-slate-900 dark:bg-indigo-950 border-2 border-black dark:border-indigo-700">
                  Curitiba • Remoto Global
                </div>
              </div>
            </div>

            {/* Trajetória Timeline */}
            <div className="space-y-4 pt-6 border-t-2 border-slate-900 dark:border-indigo-900/60">
              <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Trajetória Profissional em Destaque:
              </h4>
              <div className="space-y-3">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[2px_2px_0px_#000] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 dark:text-white text-sm">{item.role}</span>
                        <span className="text-slate-400">•</span>
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-indigo-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                          >
                            <span>{item.company}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="font-bold text-indigo-600 dark:text-cyan-400">{item.company}</span>
                        )}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{item.description}</p>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-950 border-2 border-black text-slate-900 dark:text-white font-mono text-[11px] font-black self-start md:self-center shrink-0">
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack Interativo */}
            <div className="space-y-4 pt-6 border-t-2 border-slate-900 dark:border-indigo-900/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    Stack Técnica em Produção:
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Tecnologias testadas em servidores reais.</p>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  {(['all', 'frontend', 'backend', 'ai', 'devops'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-lg text-xs font-black capitalize transition cursor-pointer border-2 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white border-black shadow-[2px_2px_0px_#000]'
                          : 'bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-indigo-900/60 hover:border-black'
                      }`}
                    >
                      {tab === 'all' ? 'Todos' : tab}
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
                        <div className="font-black text-slate-900 dark:text-white text-xs truncate">{skill.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-indigo-300/80 font-mono font-bold">{skill.level}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 9. CONTATO & FORMULÁRIO WHATSAPP */}
        <section id="contato" className="scroll-mt-28">
          <div className="rounded-3xl bg-white dark:bg-[#0c0e1e] border-2 border-slate-900 dark:border-indigo-900/60 p-6 sm:p-12 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#6366f1] space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                  <span>VAMOS CONVERSAR SOBRE SEU PROJETO</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Tem um processo que toma tempo demais ou uma demanda crítica de software?
                </h2>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  Não perca semanas com soluções genéricas. Vamos desenhar um software, frota de IA ou automação que gere resultados imediatos para sua empresa através da estrutura corporativa da EasyDev.
                </p>

                {/* Direct Contacts List */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/5541991747318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-500 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                      <span>WhatsApp Direto: +55 (41) 99174-7318</span>
                    </div>
                    <span className="text-[10px] font-mono font-black text-white bg-gradient-to-r from-violet-600 to-blue-600 px-2 py-0.5 rounded border border-black">
                      RESPOSTA RÁPIDA ⚡
                    </span>
                  </a>

                  <a
                    href="https://easydev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>EasyDev Tecnologia Corporativa</span>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400 underline">
                      easydev.com.br
                    </span>
                  </a>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span>Email: contato@broscotech.com.br</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]">
                    <MapPin className="w-4 h-4 text-violet-400" />
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
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-white" />
                    <span>Enviar Mensagem Direta Para Rogger no WhatsApp ⚡</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Neo-Brutalist Footer */}
      <footer className="border-t-2 border-slate-900 dark:border-indigo-900/60 bg-white dark:bg-[#070914] py-8 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>© {new Date().getFullYear()} ROGGER BROSCO • SÓCIO & CTO @ EASYDEV</span>
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
