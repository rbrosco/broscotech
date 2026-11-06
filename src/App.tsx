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
  Play
} from 'lucide-react';

import Hero3DScene from './components/Hero3DScene.tsx';
import BentoCard from './components/BentoCard.tsx';
import AIAccelerationBanner from './components/AIAccelerationBanner.tsx';
import ProductShowcase from './components/ProductShowcase.tsx';
import { PlannerSdrMockup, EasyConnectMockup, DripCastMockup } from './components/ProductMockups.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'devops'>('all');
  const [heroPreviewTab, setHeroPreviewTab] = useState<'planner' | 'easyconnect' | 'dripcast'>('planner');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('broscotech-theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('broscotech-theme', 'light');
      setTheme('light');
    }
  };

  const stats = [
    { label: 'Engenharia de Software', value: '+7 Anos', subtitle: 'Liderança Técnica & Produção', icon: Award },
    { label: 'Softwares & Automações', value: '+20 Sistemas', subtitle: 'Operação Ativa Diária', icon: Boxes },
    { label: 'Uptime & Estabilidade', value: '99.9%', subtitle: 'Monitoramento 24/7', icon: ShieldCheck },
    { label: 'Sem Intermediários', value: 'Direto CTO', subtitle: 'Do Escopo ao Deploy', icon: Zap },
  ];

  const pillars = [
    {
      icon: MessageSquare,
      badge: 'OMNICHANNEL & BOT',
      title: 'WhatsApp Comercial, Atendimento & IA',
      problem: 'Atendimento desorganizado, clientes esperando horas por resposta e leads qualificados perdidos sem registro.',
      solution: 'Motor Omnichannel no WhatsApp com triagem por IA, múltiplos operadores no mesmo número e webhook para seu CRM 24h por dia.',
      color: 'from-emerald-500 to-teal-500',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/80',
      glow: 'rgba(16, 185, 129, 0.2)',
      metric: 'Tempo de 1ª resposta < 15s'
    },
    {
      icon: Boxes,
      badge: 'SAAS & KANBAN',
      title: 'Sistemas & Plataformas Sob Medida',
      problem: 'Planilhas confusas, processos manuais e ferramentas prontas engessadas que não se adaptam à sua empresa.',
      solution: 'Painéis Kanban, dashboards de gestão e rotinas construídos exatamente para a operação do cliente, eliminando retrabalho.',
      color: 'from-indigo-500 to-blue-500',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/80',
      glow: 'rgba(99, 102, 241, 0.2)',
      metric: '-70% tempo em reuniões'
    },
    {
      icon: Calendar,
      badge: 'MOTOR DE DISTRIBUIÇÃO',
      title: 'Automação de Conteúdo e Campanhas',
      problem: 'Tempo gasto postando manualmente e falta de consistência nas redes e canais de comunicação da empresa.',
      solution: 'Motor que agenda, gera ideias e distribui conteúdo em múltiplos canais sem necessidade de intervenção manual diária.',
      color: 'from-cyan-500 to-teal-500',
      badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/70 dark:text-cyan-300 dark:border-cyan-800/80',
      glow: 'rgba(6, 182, 212, 0.2)',
      metric: '30 dias de autonomia'
    },
    {
      icon: Server,
      badge: 'INFRA & BACKUP',
      title: 'Infraestrutura Própria & Segura (Sem Sustos)',
      problem: 'Sistemas lentos, dados em servidores compartilhados desconhecidos e quedas repentinas de operação.',
      solution: 'Banco de dados isolado em PostgreSQL 17, rotinas automáticas de backup e monitoramento de integridade 24/7.',
      color: 'from-amber-500 to-orange-500',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/80',
      glow: 'rgba(245, 158, 11, 0.2)',
      metric: 'Latência < 25ms • 99.9% Uptime'
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Conversa Inicial (30 min)',
      desc: 'Entendemos o gargalo principal da sua operação e exatamente onde você perde tempo ou faturamento hoje.',
      tag: 'Diagnóstico Sem Custo'
    },
    {
      num: '02',
      title: 'Proposta Clara & Prazo Fixo',
      desc: 'Apresento a solução recomendada, o valor fechado de implantação e o cronograma com escopo delimitado.',
      tag: 'Sem Surpresas'
    },
    {
      num: '03',
      title: 'Desenvolvimento Ágil & Testes',
      desc: 'Você acompanha o sistema ganhando vida semanalmente em ambiente de homologação com dados reais.',
      tag: 'Entregas Contínuas'
    },
    {
      num: '04',
      title: 'Implantação & Autonomia',
      desc: 'Coloco no ar no seu servidor Linux ou nuvem gerenciada. O código e os dados são seus, com treinamento.',
      tag: 'Código Proprietário'
    },
  ];

  const skills = [
    { name: 'TypeScript & React 19', level: 'Especialista', category: 'frontend', icon: FileCode2, highlight: true },
    { name: 'Next.js 15 (App Router)', level: 'Especialista', category: 'frontend', icon: Code2, highlight: true },
    { name: 'Three.js & WebGL 3D', level: 'Especialista', category: 'frontend', icon: Sparkles, highlight: true },
    { name: 'Tailwind CSS v4', level: 'Especialista', category: 'frontend', icon: Sliders, highlight: true },
    { name: 'Bun & Node.js Runtime', level: 'Especialista', category: 'backend', icon: Zap, highlight: true },
    { name: 'PostgreSQL 17 & TypeORM', level: 'Especialista', category: 'backend', icon: Database, highlight: true },
    { name: 'Redis Cache & Filas', level: 'Avançado', category: 'backend', icon: Server, highlight: false },
    { name: 'Vercel AI SDK & LLMs', level: 'Especialista', category: 'ai', icon: Bot, highlight: true },
    { name: 'Hermes Multi-Agent Fleet', level: 'Especialista', category: 'ai', icon: Cpu, highlight: true },
    { name: 'Evolution API (WhatsApp)', level: 'Especialista', category: 'ai', icon: MessageSquare, highlight: true },
    { name: 'n8n Workflow Automation', level: 'Avançado', category: 'ai', icon: GitBranch, highlight: false },
    { name: 'Docker & Docker Compose', level: 'Especialista', category: 'devops', icon: Layers, highlight: true },
    { name: 'Nginx, Reverse Proxy & SSL', level: 'Avançado', category: 'devops', icon: Cloud, highlight: false },
    { name: 'Linux Ubuntu / Servidores VPS', level: 'Avançado', category: 'devops', icon: TerminalIcon, highlight: false },
    { name: 'Segurança & Fail2ban', level: 'Avançado', category: 'devops', icon: ShieldCheck, highlight: false },
  ];

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category === activeTab);

  const timeline = [
    {
      role: 'CTO & Co-Founder',
      company: 'EasyDev',
      companyUrl: 'https://dev.easydev.com.br',
      period: '2023 — Presente',
      description: 'Liderança técnica geral, definição de arquitetura de software de todas as plataformas corporativas, esteiras de IA, infraestrutura Docker conteinerizada e governança de código.'
    },
    {
      role: 'Senior Technical Support Analyst',
      company: 'UBVA',
      period: 'Atuação Contínua',
      description: 'Análise técnica avançada de infraestrutura e suporte a ambientes críticos de alta demanda, troubleshooting de banco de dados e garantia de estabilidade.'
    },
    {
      role: 'Full-Stack Software Architect & Fundador',
      company: 'Broscotech',
      period: '2019 — Presente',
      description: 'Criação e arquitetura de aplicações SaaS completas, sistemas escaláveis no ecossistema TypeScript/React, agentes autônomos de IA e servidores Linux em produção.'
    }
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Rogger! Meu nome é ${formData.name || 'Cliente'}.\nE-mail: ${formData.email}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}`
    );
    window.open(`https://wa.me/5541991747318?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#060911] text-slate-900 dark:text-slate-100 relative overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-900 dark:selection:text-emerald-200 transition-colors duration-300">
      
      {/* Dynamic Background Mesh & Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-gradient-to-t from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Floating Header */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border border-slate-200/80 dark:border-slate-800/80 shadow-lg dark:shadow-2xl">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500 p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400 font-mono text-sm tracking-tight">RB</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">Rogger Brosco</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Broscotech • Softwares & IA</span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#solucoes" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Soluções</a>
            <a href="#produtos" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-bold flex items-center gap-1">
              <span>Vitrine de Softwares</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
            </a>
            <a href="#processo" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Como Funciona</a>
            <a href="#sobre" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Sobre</a>
            <a href="#contato" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contato</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Alternar Modo Escuro / Claro"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition border border-slate-200 dark:border-slate-700 cursor-pointer shadow-xs"
              title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20vi%20seu%20site%20e%20quero%20entender%20como%20criar%20ou%20implantar%20um%20software%20no%20meu%20negócio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition duration-200 shadow-md shadow-emerald-600/20"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="hidden xs:inline">Falar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-24 space-y-28">

        {/* 1. HERO SECTION (COPY V2 COM FOCO EM VENDAS & CONVERSÃO) */}
        <section id="hero" className="relative rounded-3xl overflow-hidden min-h-[620px] sm:min-h-[680px] flex flex-col items-center justify-center text-center p-6 sm:p-12 border border-slate-200/60 dark:border-slate-800/80 bg-gradient-to-b from-slate-900/70 via-slate-950/90 to-slate-900/95 backdrop-blur-md shadow-2xl">
          
          {/* 3D Wave Canvas Layer */}
          <Hero3DScene theme={theme} />

          {/* Hero Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
            
            {/* Top Badge Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DISPONÍVEL PARA NOVOS PROJETOS E LICENCIAMENTO DE SOFTWARES</span>
            </div>

            {/* Main Headline H1 */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Softwares sob medida e automações que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
                  aceleram sua operação e faturam por você.
                </span>
              </h1>
              
              {/* Subtitle / Value Proposition */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mx-auto pt-2">
                Desenvolvo sistemas prontos para rodar, CRMs no WhatsApp e agentes inteligentes para o seu negócio — com arquitetura testada em produção, sem dependência de agências e sem complicação.
              </p>
            </div>

            {/* CTAs Principais */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="https://wa.me/5541991747318?text=Olá%20Rogger,%20vi%20seu%20site%20e%20quero%20entender%20como%20criar%20ou%20implantar%20um%20software%20no%20meu%20negócio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-600/40 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Quero um Software Para Minha Empresa</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#produtos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 font-semibold text-sm transition shadow-sm backdrop-blur-md hover:scale-[1.02]"
              >
                <Boxes className="w-4 h-4 text-emerald-400" />
                <span>Ver Sistemas em Produção ↓</span>
              </a>
            </div>

            {/* Interactive Hero Preview Quick Tabs (Visual Slot) */}
            <div className="w-full pt-8 max-w-2xl">
              <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    <span>Sistemas ativos em produção com clientes reais:</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono">
                    <button
                      onClick={() => setHeroPreviewTab('planner')}
                      className={`px-2.5 py-1 rounded-lg transition ${
                        heroPreviewTab === 'planner'
                          ? 'bg-indigo-600 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Planner SDR
                    </button>
                    <button
                      onClick={() => setHeroPreviewTab('easyconnect')}
                      className={`px-2.5 py-1 rounded-lg transition ${
                        heroPreviewTab === 'easyconnect'
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      EasyConnect
                    </button>
                    <button
                      onClick={() => setHeroPreviewTab('dripcast')}
                      className={`px-2.5 py-1 rounded-lg transition ${
                        heroPreviewTab === 'dripcast'
                          ? 'bg-cyan-600 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      DripCast
                    </button>
                  </div>
                </div>

                {/* Tab Preview View */}
                <div className="text-left">
                  {heroPreviewTab === 'planner' && <PlannerSdrMockup />}
                  {heroPreviewTab === 'easyconnect' && <EasyConnectMockup />}
                  {heroPreviewTab === 'dripcast' && <DripCastMockup />}
                </div>
              </div>
            </div>

            {/* Executive Identity & Public Github */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                <img
                  src="/avatar.png"
                  alt="Rogger Brosco"
                  className="w-6 h-6 rounded-full object-cover border border-emerald-400"
                />
                <span className="text-white font-bold">Rogger Brosco</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-semibold">CTO @ EasyDev & Arquiteto Broscotech</span>
              </div>

              <a
                href="https://github.com/rbrosco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition font-mono backdrop-blur-md"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/rbrosco</span>
              </a>
            </div>

          </div>
        </section>

        {/* 2. FAIXA DE CREDIBILIDADE & PROVA IMEDIATA */}
        <section className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-1.5 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 dark:text-emerald-400">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans">{item.label}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">{item.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.subtitle}</div>
                </div>
              );
            })}
          </div>

          {/* Trust Strip: Logos & Tecnologias */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px]">
              Empresas & Tecnologias em Produção:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-600 dark:text-slate-300 font-medium">
              <span>EasyDev CRM</span>
              <span>•</span>
              <span>Planner SDR</span>
              <span>•</span>
              <span>Solar sem Fronteiras</span>
              <span>•</span>
              <span>Next.js 15</span>
              <span>•</span>
              <span>PostgreSQL 17</span>
              <span>•</span>
              <span>Docker</span>
              <span>•</span>
              <span>Hermes Agent Fleet</span>
            </div>
          </div>
        </section>

        {/* 3. OS 4 PILARES DE SOLUÇÕES (COMO EU POSSO AJUDAR SUA EMPRESA) */}
        <section id="solucoes" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
                <Compass className="w-3.5 h-3.5" />
                PILARES DE ENGENHARIA & AUTOMAÇÃO
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                Como posso ajudar sua empresa a lucrar mais
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md font-normal">
              Resolvo dores operacionais concretas com softwares sob medida, código limpo e arquitetura validada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <BentoCard key={idx} glowColor={pil.glow}>
                  <div className="p-7 sm:p-8 space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pil.color} text-white flex items-center justify-center shadow-md shadow-indigo-500/20`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${pil.badgeClass}`}>
                          {pil.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{pil.title}</h3>

                      {/* Problem & Solution Breakdown */}
                      <div className="space-y-2.5 text-xs pt-1">
                        <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30">
                          <span className="font-bold text-rose-600 dark:text-rose-400 uppercase font-mono text-[10px] block">O Problema:</span>
                          <p className="text-slate-700 dark:text-slate-300 mt-0.5">{pil.problem}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30">
                          <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase font-mono text-[10px] block">A Solução:</span>
                          <p className="text-slate-700 dark:text-slate-300 mt-0.5">{pil.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Impacto Mensurável:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{pil.metric}</span>
                    </div>
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </section>

        {/* 4. VITRINE DE SOFTWARES & PRODUTOS REAIS (O CORAÇÃO DA VENDA) */}
        <ProductShowcase />

        {/* 5. VANTAGEM COMPETITIVA COM IA NATIVA */}
        <section id="vantagens" className="scroll-mt-28">
          <AIAccelerationBanner />
        </section>

        {/* 6. COMO TRABALHAMOS (MÉTODO EM 4 ETAPAS SEM BUROCRACIA) */}
        <section id="processo" className="bg-white dark:bg-slate-900/90 rounded-3xl p-8 sm:p-12 space-y-10 border border-slate-200 dark:border-slate-800 shadow-sm scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-wide border border-emerald-200/60 dark:border-emerald-800/60">
              PROCESSO TRANSPARENTE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Como tiramos seu projeto do papel
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Sem reuniões intermináveis e sem repasse de responsabilidade. Você fala direto com o arquiteto técnico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3 relative group hover:border-emerald-500/40 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-indigo-600 dark:text-emerald-400 font-mono">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                    {step.tag}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">{step.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick CTA inside process */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Garantia de Entrega:</strong> Escopo bem delimitado, código testado e suporte contínuo pós-lançamento.</span>
            </div>
            <a
              href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20agendar%20a%20conversa%20inicial%20de%2030%20minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition whitespace-nowrap shadow-xs"
            >
              Agendar Conversa Inicial (30 min)
            </a>
          </div>
        </section>

        {/* 7. SOBRE ROGGER BROSCO (AUTORIDADE COM PROXIMIDADE) */}
        <section id="sobre" className="space-y-10 scroll-mt-28">
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
                  AUTORIDADE TÉCNICA DIRETA
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Engenharia sênior direto com quem constrói — sem intermediários ou repasse para estagiários.
                </h3>
                <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-3">
                  <p>
                    Sou CTO na EasyDev e fundador da Broscotech. Nos últimos 7 anos, projetei e coloquei em produção sistemas para empresas que precisavam de performance e estabilidade diária.
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-mono text-xs font-bold transition border border-slate-200 dark:border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/rbrosco (Código Aberto)</span>
                  </a>
                  <a
                    href="https://dev.easydev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold transition border border-slate-200 dark:border-slate-700"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Conhecer a EasyDev</span>
                  </a>
                </div>
              </div>

              {/* Founder Avatar & Snapshot */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="relative">
                  <img
                    src="/avatar.png"
                    alt="Rogger Brosco"
                    className="w-28 h-28 rounded-full object-cover border-4 border-emerald-500 shadow-xl"
                  />
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Rogger Brosco</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">CTO & Engenheiro de Software</p>
                </div>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Curitiba • Remoto Global
                </div>
              </div>
            </div>

            {/* Trajetória Timeline */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                Trajetória Profissional em Destaque:
              </h4>
              <div className="space-y-3">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/70 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{item.role}</span>
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
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-mono text-[11px] font-bold self-start md:self-center shrink-0">
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack Interativo */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Stack em Produção:
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tecnologias testadas em servidores reais.</p>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  {(['all', 'frontend', 'backend', 'ai', 'devops'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition cursor-pointer ${
                        activeTab === tab
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {tab === 'all' ? 'Todos' : tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {filteredSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-2.5 shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 dark:text-white text-xs truncate">{skill.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{skill.level}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 8. CHAMADA FINAL DE CONVERSÃO & FORMULÁRIO WHATSAPP (CTA BOTTOM BOX) */}
        <section id="contato" className="scroll-mt-28">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-14 shadow-2xl overflow-hidden">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>VAMOS CONVERSAR SOBRE SEU PROJETO</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Tem um processo que toma tempo demais ou uma ideia de produto para colocar no ar?
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Não perca semanas com soluções genéricas que não atendem sua rotina. Vamos desenhar um software ou automação que gere resultados imediatos para sua empresa.
                </p>

                {/* Direct Contacts List */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/5541991747318?text=Olá%20Rogger,%20vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20novo%20projeto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 text-white transition group shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase font-mono">WhatsApp Direto</div>
                      <div className="text-sm font-bold text-white font-mono">(41) 99174-7318</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@broscotech.com.br"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 text-white transition group shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase font-mono">E-mail Profissional</div>
                      <div className="text-sm font-bold text-white font-mono">contato@broscotech.com.br</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase font-mono">Tempo Médio de Resposta</div>
                      <div className="text-xs font-semibold text-emerald-400">Menos de 2 horas em horário comercial</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Structured Direct Form (7 cols) */}
              <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">Envie uma Mensagem Direta</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Preencha os campos abaixo para abrir a conversa formatada no WhatsApp de Rogger Brosco.
                </p>

                <form onSubmit={handleWhatsAppSend} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Seu Nome</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-hidden focus:border-emerald-500 transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Seu E-mail</label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: carlos@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-hidden focus:border-emerald-500 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Assunto / Software de Interesse</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Implantação de EasyConnect / Planner SDR / Sistema sob medida"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-hidden focus:border-emerald-500 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Detalhes da Necessidade</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Descreva o que sua empresa precisa, gargalos atuais ou prazos desejados..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-hidden focus:border-emerald-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Iniciar Conversa no WhatsApp</span>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">Broscotech</span>
            <span>•</span>
            <span>Rogger Brosco © {new Date().getFullYear()}</span>
            <span>•</span>
            <span className="text-emerald-500 font-mono">Softwares & Automações em Produção</span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a href="https://planner-sdr.broscotech.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
              Planner SDR
            </a>
            <a href="https://dev.easydev.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
              EasyDev
            </a>
            <a href="https://github.com/rbrosco" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
              GitHub
            </a>
            <a href="#hero" className="hover:text-indigo-500 transition">
              Topo ↑
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
