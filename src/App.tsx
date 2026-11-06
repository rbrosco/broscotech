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
  X
} from 'lucide-react';

import Hero3DScene from './components/Hero3DScene.tsx';
import BentoCard from './components/BentoCard.tsx';
import AIAccelerationBanner from './components/AIAccelerationBanner.tsx';
import ProductShowcase from './components/ProductShowcase.tsx';
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
    const text = `*Contato via Site Broscotech*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Assunto:* ${formData.subject}%0A*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/5541991747318?text=${text}`, '_blank');
  };

  const stats = [
    { label: 'Experiência Técnica', value: '7+ Anos', subtitle: 'Colocando sistemas em produção', icon: Code2 },
    { label: 'Disponibilidade', value: '99.9%', subtitle: 'SLA em servidores Docker', icon: ShieldCheck },
    { label: 'WhatsApp Integrado', value: '100%', subtitle: 'Comunicação oficial e automatizada', icon: MessageSquare },
    { label: 'Intermediários', value: 'Zero', subtitle: 'Você fala direto com o arquiteto', icon: Zap },
  ];

  const pillars = [
    {
      title: 'Máquinas de Vendas no WhatsApp',
      badge: 'CRM & WHATSAPP',
      badgeClass: 'bg-[#25D366] text-black border-black',
      color: 'bg-emerald-500',
      icon: MessageSquare,
      problem: 'Leads perdidos por demora de resposta e vendedores usando WhatsApp pessoal sem registro no CRM.',
      solution: 'EasyConnect com agentes de triagem rápida, múltiplos operadores no mesmo número e webhook para PostgreSQL.',
      metric: 'Tempo de 1ª resposta < 15 segundos',
    },
    {
      title: 'Gestão & Produtividade com IA',
      badge: 'PRODUTIVIDADE',
      badgeClass: 'bg-[#D4FF00] text-black border-black',
      color: 'bg-indigo-600',
      icon: Boxes,
      problem: 'Falta de clareza nas metas da equipe, planilhas desatualizadas e horas gastas em reuniões de alinhamento.',
      solution: 'Planner SDR com Kanban de alta precisão, relatórios semanais gerados por IA e lembretes automáticos.',
      metric: '70% menos reuniões operacionais',
    },
    {
      title: 'Agentes Autônomos 24/7',
      badge: 'HERMES FLEET',
      badgeClass: 'bg-[#A855F7] text-white border-black',
      color: 'bg-purple-600',
      icon: Bot,
      problem: 'Tarefas manuais e repetitivas de análise de dados, deploys e monitoramento sobrecarregando a equipe técnica.',
      solution: 'Frota coordenada de agentes autônomos com memória duradoura e governança via Telegram/Discord.',
      metric: 'Operação ininterrupta 24/7',
    },
    {
      title: 'Infraestrutura de Missão Crítica',
      badge: 'DOCKER & POSTGRESQL',
      badgeClass: 'bg-[#FF5500] text-white border-black',
      color: 'bg-orange-500',
      icon: Server,
      problem: 'Aplicações que travam na primeira oscilação de tráfego e bancos de dados sem backup confiável.',
      solution: 'Bancos PostgreSQL 17 isolados, proxies reversos Nginx com SSL automático e monitoramento em tempo real.',
      metric: 'SLA de 99.9% garantido em contrato',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Diagnóstico & Arquitetura',
      tag: '30 MINUTOS',
      desc: 'Alinhamos a regra de negócio direto no WhatsApp ou call rápida. Mapeamos as dores e definimos a arquitetura ideal.',
    },
    {
      num: '02',
      title: 'Protótipo Operacional Rápido',
      tag: 'SEMANA 1',
      desc: 'Primeira versão funcional navegável colocada no ar para você validar com sua equipe e dados reais.',
    },
    {
      num: '03',
      title: 'Homologação & Integração',
      tag: 'SEMANA 2',
      desc: 'Integração de APIs (WhatsApp, pagamentos, bancos de dados), testes de segurança e refinamento da experiência.',
    },
    {
      num: '04',
      title: 'Deploy em Produção & Suporte',
      tag: 'GO-LIVE',
      desc: 'Deploy em containers Docker isolados com SSL, monitoramento ativo e suporte contínuo direto com o arquiteto.',
    },
  ];

  const timeline = [
    {
      role: 'Chief Technology Officer (CTO)',
      company: 'EasyDev CRM',
      companyUrl: 'https://dev.easydev.com.br',
      period: '2023 — Presente',
      description: 'Liderança de engenharia da plataforma comercial multimoeda (BRL/USD/EUR), arquitetura de microsserviços e integrações WhatsApp.',
    },
    {
      role: 'Fundador & Arquiteto de Software',
      company: 'Broscotech',
      period: '2020 — Presente',
      description: 'Criação e sustentação dos produtos EasyConnect, Planner SDR, DripCast e desenvolvimento de softwares sob medida para empresas.',
    },
    {
      role: 'Engenheiro de Automação & Full Stack',
      company: 'Projetos Globais & B2B',
      period: '2018 — 2023',
      description: 'Construção de pipelines de automação, integrações com bancos relacionais e aplicações corporativas de alto tráfego.',
    },
  ];

  const skills = [
    { name: 'TypeScript / React', category: 'frontend', level: 'Especialista', icon: Code2 },
    { name: 'Next.js 15 & Vite', category: 'frontend', level: 'Avançado', icon: Layers },
    { name: 'Tailwind CSS v4', category: 'frontend', level: 'Especialista', icon: Sparkles },
    { name: 'Node.js & Bun', category: 'backend', level: 'Especialista', icon: Server },
    { name: 'PostgreSQL 17 & Redis', category: 'backend', level: 'Avançado', icon: Database },
    { name: 'REST & Webhooks', category: 'backend', level: 'Especialista', icon: Workflow },
    { name: 'Hermes Fleet / Multi-Agent', category: 'ai', level: 'Pioneiro', icon: Bot },
    { name: 'Vercel AI SDK & LLMs', category: 'ai', level: 'Avançado', icon: Zap },
    { name: 'WhatsApp Bot Engine', category: 'ai', level: 'Especialista', icon: MessageSquare },
    { name: 'Docker & Compose', category: 'devops', level: 'Especialista', icon: Boxes },
    { name: 'Nginx & SSL Proxy', category: 'devops', level: 'Avançado', icon: ShieldCheck },
    { name: 'Linux / Arch / Debian', category: 'devops', level: 'Especialista', icon: TerminalIcon },
  ];

  const filteredSkills = activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060911] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#D4FF00] selection:text-black transition-colors duration-200">
      
      {/* Top Retro Engineering Tape */}
      <div className="bg-[#D4FF00] text-black border-b-2 border-black py-1.5 px-4 font-mono font-black text-[11px] tracking-wider uppercase overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          ⚡ 4 SOFTWARES REAIS EM PRODUÇÃO • ARQUITETURA SÊNIOR • POSTGRESQL 17 ISOLADO • WHATSAPP OFICIAL COM IA • SEM SLIDES EM POWERPOINT • DIRETO COM O CTO • CONTATO: +55 (41) 99174-7318 •
        </div>
      </div>

      {/* Floating Neo-Brutalist Header */}
      <header className="sticky top-3 z-50 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-md rounded-2xl px-4 sm:px-5 py-2.5 flex items-center justify-between border-2 border-slate-900 dark:border-slate-700 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#10b981]">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-black text-[#D4FF00] border-2 border-black flex items-center justify-center font-mono font-black text-xs shadow-[2px_2px_0px_#D4FF00]">
              RB
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm tracking-tight text-slate-900 dark:text-white">BROSCOTECH</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block font-bold leading-none">
                ROGER BROSCO • CTO
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-black text-slate-700 dark:text-slate-300">
            <a href="#produtos" className="hover:text-emerald-500 transition flex items-center gap-1">
              <span>Softwares [4]</span>
              <span className="px-1.5 py-0.2 rounded bg-[#D4FF00] text-black text-[9px] font-mono font-black border border-black">
                NOVO
              </span>
            </a>
            <a href="#solucoes" className="hover:text-emerald-500 transition">Pilares</a>
            <a href="#manifesto" className="hover:text-emerald-500 transition">Manifesto</a>
            <a href="#processo" className="hover:text-emerald-500 transition">Como Funciona</a>
            <a href="#sobre" className="hover:text-emerald-500 transition">Rogger Brosco</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar Tema"
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center transition border-2 border-black dark:border-slate-700 cursor-pointer shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#10b981]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
            </button>

            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20software%20para%20minha%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#D4FF00] hover:bg-yellow-300 text-black font-black text-xs transition border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>Falar com Rogger ⚡</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-24 space-y-24">

        {/* 1. HERO SECTION (NEO-BRUTALIST & PUNCHY EDITORIAL) */}
        <section id="hero" className="relative rounded-3xl overflow-hidden min-h-[640px] flex flex-col items-center justify-center text-center p-6 sm:p-12 border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0b1120] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#10b981]">
          
          {/* Interactive 3D Wireframe Scene */}
          <Hero3DScene theme={theme} />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            
            {/* Sticker Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4FF00] text-black text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[3px_3px_0px_#000]">
              <Flame className="w-3.5 h-3.5 fill-black" />
              <span>SOFTWARES EM PRODUÇÃO • SEM ENROLAÇÃO</span>
            </div>

            {/* Main Headline H1 */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Construo softwares de verdade que rodam o seu negócio.{' '}
                <span className="bg-[#D4FF00] text-black px-2 py-0.5 rounded-lg border-2 border-black inline-block mt-1">
                  Direto com quem programa.
                </span>
              </h1>
              
              {/* Subtitle / Value Proposition */}
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mx-auto pt-2">
                Chega de sistemas genéricos que quebram na primeira Black Friday ou de reuniões infinitas com gerentes de conta que não sabem o que é um banco de dados. Crio CRMs no WhatsApp, plataformas SaaS e agentes autônomos prontos para faturar.
              </p>
            </div>

            {/* CTAs Principais */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20um%20software%20para%20minha%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm transition border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Quero um Software Para Minha Empresa ⚡</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-black text-sm transition border-2 border-black dark:border-slate-700 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#10b981] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <Boxes className="w-4 h-4 text-emerald-500" />
                <span>Explorar Sistemas em Produção [4] ↓</span>
              </a>
            </div>

            {/* Rogger's Direct Author Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
              <div className="flex items-center gap-2.5 p-1.5 pr-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border-2 border-black dark:border-slate-700 shadow-[2px_2px_0px_#000]">
                <img
                  src="/avatar.png"
                  alt="Rogger Brosco"
                  className="w-7 h-7 rounded-lg object-cover border border-black"
                />
                <span className="font-black text-slate-900 dark:text-white">Rogger Brosco</span>
                <span className="text-slate-400">•</span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  CTO & Arquiteto Técnico
                </span>
              </div>

              <a
                href="https://github.com/rbrosco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-mono text-xs font-black transition border-2 border-black dark:border-slate-700 shadow-[2px_2px_0px_#000]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/rbrosco</span>
              </a>
            </div>

          </div>

          {/* Interactive Live Quick Mockup Switcher inside Hero */}
          <div className="relative z-10 w-full max-w-4xl mx-auto mt-10 pt-6 border-t-2 border-slate-900 dark:border-slate-700 space-y-4 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                  Prévia em Tempo Real:
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  (Selecione para ver o sistema funcionando)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHeroPreviewTab('easyconnect')}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-mono transition border-2 ${
                    heroPreviewTab === 'easyconnect'
                      ? 'bg-[#25D366] text-black border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-400 dark:border-slate-700'
                  }`}
                >
                  📱 EasyConnect (WhatsApp)
                </button>
                <button
                  onClick={() => setHeroPreviewTab('planner')}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-mono transition border-2 ${
                    heroPreviewTab === 'planner'
                      ? 'bg-[#D4FF00] text-black border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-400 dark:border-slate-700'
                  }`}
                >
                  📊 Planner SDR (Kanban)
                </button>
                <button
                  onClick={() => setHeroPreviewTab('dripcast')}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-mono transition border-2 ${
                    heroPreviewTab === 'dripcast'
                      ? 'bg-[#00F0FF] text-black border-black shadow-[2px_2px_0px_#000]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-400 dark:border-slate-700'
                  }`}
                >
                  🚀 DripCast (Social)
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

        {/* 2. FAIXA DE CREDIBILIDADE & PROVA TÉCNICA */}
        <section className="bg-white dark:bg-[#0b1120] rounded-3xl p-6 sm:p-8 border-2 border-slate-900 dark:border-slate-700 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#10b981] space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#10b981] space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-black uppercase text-slate-500 dark:text-slate-400">
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

          {/* Trust Strip: Logos & Tecnologias */}
          <div className="pt-4 border-t-2 border-slate-900 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="font-black text-slate-900 dark:text-white uppercase text-[11px] bg-[#D4FF00] text-black px-2 py-0.5 rounded border border-black">
              SOFTWARES & TECNOLOGIAS EM PRODUÇÃO:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-bold text-slate-700 dark:text-slate-300">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">EasyDev CRM</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">Planner SDR</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">EasyConnect</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">DripCast</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">Next.js 15</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">PostgreSQL 17</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">Docker</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-black">Hermes Fleet</span>
            </div>
          </div>
        </section>

        {/* 3. OS 4 PILARES DE SOLUÇÕES (BENTO CARDS) */}
        <section id="solucoes" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4FF00] text-black text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                <Compass className="w-3.5 h-3.5" />
                <span>PILARES DE ENGENHARIA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                Como ajudo sua empresa a faturar mais
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md font-medium">
              Elimino dores operacionais concretas com softwares sob medida, código limpo e arquitetura validada em produção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <BentoCard key={idx}>
                  <div className="p-6 sm:p-8 space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-11 h-11 rounded-xl ${pil.color} text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#000]`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-mono font-black px-2.5 py-1 rounded-md border-2 ${pil.badgeClass}`}>
                          {pil.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                        {pil.title}
                      </h3>

                      {/* Problem & Solution Breakdown */}
                      <div className="space-y-2.5 text-xs pt-1">
                        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900/60">
                          <span className="font-black text-rose-700 dark:text-rose-400 uppercase font-mono text-[10px] block">
                            ✕ O Problema:
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 mt-0.5 font-medium">{pil.problem}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-500 dark:border-emerald-600">
                          <span className="font-black text-emerald-700 dark:text-emerald-400 uppercase font-mono text-[10px] block">
                            ✓ A Solução:
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 mt-0.5 font-semibold">{pil.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t-2 border-slate-900 dark:border-slate-700 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 font-bold uppercase text-[10px]">Impacto Mensurável:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-black">{pil.metric}</span>
                    </div>
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </section>

        {/* 4. VITRINE DE SOFTWARES & PRODUTOS REAIS */}
        <ProductShowcase />

        {/* 5. MANIFESTO DE ENGENHARIA DE VERDADE */}
        <section id="manifesto" className="scroll-mt-28">
          <AIAccelerationBanner />
        </section>

        {/* 6. COMO TRABALHAMOS (PROCESSO EM 4 ETAPAS) */}
        <section id="processo" className="bg-white dark:bg-[#0b1120] rounded-3xl p-6 sm:p-10 space-y-8 border-2 border-slate-900 dark:border-slate-700 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#10b981] scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4FF00] text-black text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                <span>MÉTODO SEM BUROCRACIA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                Como tiramos seu projeto do papel
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md font-medium">
              Sem reuniões intermináveis e sem repasse de responsabilidade. Você fala direto com quem vai programar o sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#10b981] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-indigo-600 dark:text-[#D4FF00] font-mono">
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
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-bold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Garantia de Entrega: Escopo delimitado, código testado e suporte contínuo pós-lançamento.</span>
            </div>
            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20agendar%20a%20conversa%20inicial%20de%2030%20minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black transition border-2 border-black shadow-[2px_2px_0px_#000] shrink-0"
            >
              Agendar Conversa Inicial (30 min)
            </a>
          </div>
        </section>

        {/* 7. SOBRE ROGGER BROSCO (AUTORIDADE DIRETA) */}
        <section id="sobre" className="space-y-8 scroll-mt-28">
          <div className="bg-white dark:bg-[#0b1120] rounded-3xl p-6 sm:p-10 border-2 border-slate-900 dark:border-slate-700 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#10b981] space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4FF00] text-black text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                  <span>QUEM ESTÁ POR TRÁS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Engenharia sênior direto com quem constrói — sem intermediários ou repasse para estagiários.
                </h3>
                <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-3 font-medium">
                  <p>
                    Sou CTO na EasyDev e fundador da Broscotech. Nos últimos 7 anos, projetei e coloquei em produção sistemas para empresas que precisavam de performance, estabilidade e automação diária.
                  </p>
                  <p>
                    Quando você contrata um projeto comigo, você fala direto com o arquiteto técnico: da regra de negócio à linha final de deploy.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://github.com/rbrosco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-mono text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000]"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/rbrosco (Código Aberto)</span>
                  </a>
                  <a
                    href="https://dev.easydev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-xs font-black transition border-2 border-black dark:border-slate-700 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#10b981]"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Conhecer a EasyDev CRM</span>
                  </a>
                </div>
              </div>

              {/* Founder Avatar & Snapshot */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#10b981] space-y-3">
                <div className="relative">
                  <img
                    src="/avatar.png"
                    alt="Rogger Brosco"
                    className="w-28 h-28 rounded-2xl object-cover border-3 border-black shadow-[4px_4px_0px_#000]"
                  />
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#D4FF00] text-black font-mono font-black text-[10px] border-2 border-black shadow-[2px_2px_0px_#000]">
                    ONLINE ✓
                  </span>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-base">Rogger Brosco</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">CTO & Engenheiro de Software</p>
                </div>
                <div className="text-[11px] font-mono text-slate-900 dark:text-white font-black px-3 py-1 rounded-md bg-[#D4FF00] border-2 border-black">
                  Curitiba • Remoto Global
                </div>
              </div>
            </div>

            {/* Trajetória Timeline */}
            <div className="space-y-4 pt-6 border-t-2 border-slate-900 dark:border-slate-700">
              <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Trajetória Profissional em Destaque:
              </h4>
              <div className="space-y-3">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
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
                            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                          >
                            <span>{item.company}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">{item.company}</span>
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
            <div className="space-y-4 pt-6 border-t-2 border-slate-900 dark:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    Stack em Produção:
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
                          ? 'bg-slate-900 text-white dark:bg-[#D4FF00] dark:text-black border-black shadow-[2px_2px_0px_#000]'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-black'
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
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-black flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-black text-slate-900 dark:text-white text-xs truncate">{skill.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold">{skill.level}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 8. CONTATO & FORMULÁRIO WHATSAPP */}
        <section id="contato" className="scroll-mt-28">
          <div className="rounded-3xl bg-white dark:bg-[#0b1120] border-2 border-slate-900 dark:border-slate-700 p-6 sm:p-12 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#10b981] space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4FF00] text-black text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                  <span>VAMOS CONVERSAR SOBRE SEU SOFTWARE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Tem um processo que toma tempo demais ou uma ideia de produto para colocar no ar?
                </h2>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                  Não perca semanas com soluções genéricas que não atendem sua rotina. Vamos desenhar um software ou automação que gere resultados imediatos para sua empresa.
                </p>

                {/* Direct Contacts List */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/5541991747318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Direto: +55 (41) 99174-7318</span>
                    </div>
                    <span className="text-[10px] font-mono font-black text-emerald-700 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-500">
                      RESPOSTA RÁPIDA ⚡
                    </span>
                  </a>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]">
                    <Mail className="w-4 h-4 text-indigo-500" />
                    <span>Email: contato@broscotech.com.br</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-white shadow-[2px_2px_0px_#000]">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Sede: Curitiba, PR • Atendimento Global</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive WhatsApp Dispatch Form (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#10b981]">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-inner"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-inner"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                        Tipo de Projeto:
                      </span>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Ex: Licenciar EasyConnect / Software Novo"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                      Conte sobre sua empresa e seu desafio:
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Qual o maior gargalo operacional hoje ou o que precisa automatizar?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#D4FF00] hover:bg-yellow-300 text-black font-black text-xs transition border-2 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-black" />
                    <span>Enviar Mensagem Direta Para Rogger no WhatsApp ⚡</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Neo-Brutalist Clean Footer */}
      <footer className="border-t-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#060911] py-8 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>© {new Date().getFullYear()} BROSCOTECH • ARQUITETURA & SOFTWARES SOB MEDIDA</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-bold">
            <a href="https://github.com/rbrosco" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
              GitHub
            </a>
            <span>•</span>
            <a href="https://dev.easydev.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
              EasyDev CRM
            </a>
            <span>•</span>
            <a href="https://planner-sdr.broscotech.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
              Planner SDR
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
