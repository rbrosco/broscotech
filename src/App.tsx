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
  Terminal,
  Compass,
  Workflow,
  Boxes,
  Award,
  MapPin,
  Send,
  Moon,
  Sun
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'devops'>('all');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    { label: 'Anos de Experiência', value: '+7', subtitle: 'Engenharia de Software', icon: Award },
    { label: 'SaaS em Produção', value: '+20', subtitle: 'Projetos de Alto Impacto', icon: Boxes },
    { label: 'Frota de IA Ativa', value: '5 Agentes', subtitle: 'Automação Operacional', icon: Bot },
    { label: 'SLA Operacional', value: '99.9%', subtitle: 'Alta Disponibilidade', icon: ShieldCheck },
  ];

  const services = [
    {
      icon: Code2,
      badge: 'Full-Stack Moderno',
      title: 'Arquitetura SaaS & Web Apps',
      description: 'Construção de plataformas completas e escaláveis utilizando Next.js 15 (App Router), React 19, TypeScript estrito e Tailwind CSS v4 com rigorosa precisão visual.',
      color: 'from-indigo-500 to-blue-500',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/80',
    },
    {
      icon: Database,
      badge: 'Backend & Dados',
      title: 'Engenharia Backend & Alta Performance',
      description: 'Desenvolvimento de APIs robustas com Node.js / Bun, modelagem relacional em PostgreSQL 17, otimização de queries, TypeORM e camadas de cache no Redis.',
      color: 'from-violet-500 to-purple-500',
      badgeClass: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/70 dark:text-violet-300 dark:border-violet-800/80',
    },
    {
      icon: Bot,
      badge: 'Inteligência Artificial',
      title: 'Agentes Autônomos & IA com Reasoning',
      description: 'Implementação de pipelines com LLMs, Vercel AI SDK, orquestração multi-agente Hermes, automação de processos via n8n e integração com WhatsApp via Evolution API.',
      color: 'from-cyan-500 to-teal-500',
      badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/70 dark:text-cyan-300 dark:border-cyan-800/80',
    },
    {
      icon: Server,
      badge: 'Infra & DevOps',
      title: 'Infraestrutura Cloud & Confiabilidade',
      description: 'Conteinerização com Docker e Compose, servidores Linux Ubuntu, proxies reversos Nginx com SSL automático, tuning de kernel, swap e segurança com Fail2ban.',
      color: 'from-amber-500 to-orange-500',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/80',
    },
  ];

  const skills = [
    { name: 'TypeScript', level: 'Especialista', category: 'frontend', icon: FileCode2, highlight: true },
    { name: 'React 19 & Next.js 15', level: 'Especialista', category: 'frontend', icon: Code2, highlight: true },
    { name: 'Tailwind CSS v4', level: 'Especialista', category: 'frontend', icon: Sparkles, highlight: true },
    { name: 'Bun & Node.js Runtime', level: 'Especialista', category: 'backend', icon: Zap, highlight: true },
    { name: 'PostgreSQL 17 & TypeORM', level: 'Especialista', category: 'backend', icon: Database, highlight: true },
    { name: 'Redis Cache & Queues', level: 'Avançado', category: 'backend', icon: Server, highlight: false },
    { name: 'Vercel AI SDK & LLMs', level: 'Especialista', category: 'ai', icon: Bot, highlight: true },
    { name: 'Hermes Multi-Agent Fleet', level: 'Especialista', category: 'ai', icon: Cpu, highlight: true },
    { name: 'Evolution API (WhatsApp)', level: 'Especialista', category: 'ai', icon: MessageSquare, highlight: true },
    { name: 'n8n Workflow Automation', level: 'Avançado', category: 'ai', icon: GitBranch, highlight: false },
    { name: 'Docker & Docker Compose', level: 'Especialista', category: 'devops', icon: Layers, highlight: true },
    { name: 'Nginx, Reverse Proxy & SSL', level: 'Avançado', category: 'devops', icon: Cloud, highlight: false },
    { name: 'Linux Ubuntu / Oracle OCI', level: 'Avançado', category: 'devops', icon: Terminal, highlight: false },
    { name: 'Segurança & Fail2ban', level: 'Avançado', category: 'devops', icon: ShieldCheck, highlight: false },
  ];

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category === activeTab);

  const projects = [
    {
      title: 'Planner SDR',
      category: 'SaaS / IA Produtiva',
      badge: 'Em Produção',
      subtitle: 'Plataforma de Gestão com Assistente de IA Explicável',
      description: 'SaaS completo de tarefas e projetos com IA nativa auditável via Vercel AI SDK, relatórios automáticos semanais zero-input, Kanban interativo (@dnd-kit) e notificações via WhatsApp e E-mail.',
      tags: ['Next.js 15', 'React 19', 'PostgreSQL 17', 'TypeORM', 'Vercel AI SDK', 'Brevo SMTP', 'Tailwind v4'],
      link: 'https://planner-sdr.broscotech.com.br',
      color: 'from-indigo-600 to-violet-600',
      highlights: [
        'Relatórios de status executivos gerados por IA com reasoning transparente',
        'Board Kanban fluído com atualização em tempo real e drag-and-drop',
        'Notificações transacionais integradas com WhatsApp e Brevo SMTP',
        'Arquitetura multi-workspace isolada com autenticação NextAuth'
      ]
    },
    {
      title: 'EasyDev Suite & CRM',
      category: 'Enterprise / Core',
      badge: 'Corporativo',
      subtitle: 'Ecossistema Integrado de Gestão e Microsserviços',
      description: 'Plataforma robusta para gestão de desenvolvedores, controle financeiro de planos e descontos progressivos, CMS dinâmico de projetos e monitoramento de serviços em tempo real.',
      tags: ['Next.js 15', 'TypeScript', 'TypeORM', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
      link: 'https://dev.easydev.com.br',
      color: 'from-blue-600 to-cyan-600',
      highlights: [
        'Painel corporativo com rigor técnico de pixel-precision na interface',
        'Cálculo dinâmico e automatizado de taxas, faturamento e planos',
        'Painéis de CMS dinâmico para showcase e portfólio de engenheiros',
        'Infraestrutura conteinerizada e monitorada com alta disponibilidade'
      ]
    },
    {
      title: 'Hermes Multi-Agent Fleet',
      category: 'Automação & IA',
      badge: 'Ativo 24/7',
      subtitle: 'Orquestração de 5 Agentes Autônomos de Alta Performance',
      description: 'Frota coordenada de agentes autônomos (Orchestrator, Scout, Scribe, Reach, Dev) operando com persistência de memória, centro de comando por tópicos no Telegram e auditoria de logs em SQLite.',
      tags: ['Hermes Agent', 'Python', 'SQLite', 'Telegram Bot API', 'Docker', 'Autonomous AI'],
      color: 'from-purple-600 to-pink-600',
      highlights: [
        'Roteamento inteligente por tópicos com perfis e SOUL.md independentes',
        'Auditoria completa de logs e telemetria operacional com retenção inteligente',
        'Execução autônoma de pesquisas, coding, testes e deploys em servidores',
        'Zero tolerância a erros e integração direta com ambientes produtivos'
      ]
    },
    {
      title: 'Evolution & n8n Hub',
      category: 'Infra & Webhooks',
      badge: 'Infraestrutura',
      subtitle: 'Hub de Mensageria em Escala e Fluxos Assíncronos',
      description: 'Ambiente conteinerizado de alta vazão unindo Evolution API v2 para instâncias de WhatsApp e pipelines visuais no n8n conectados a bancos de dados, webhooks e relays SMTP da Brevo.',
      tags: ['Evolution API', 'n8n', 'Redis', 'PostgreSQL 17', 'WebSockets', 'Docker Compose'],
      color: 'from-amber-600 to-orange-600',
      highlights: [
        'Gateway de WhatsApp com WebSockets e envio transacional em tempo real',
        'Workflows no n8n com disparo de e-mails transacionais via Brevo',
        'Proxy reverso Nginx com certificados Let Encrypt automatizados',
        'Tuning de swapfile e isolamento total de recursos por container'
      ]
    },
  ];

  const processSteps = [
    { num: '01', title: 'Descoberta & Escopo', desc: 'Alinhamento direto de objetivos de negócio, requisitos técnicos e restrições de arquitetura.' },
    { num: '02', title: 'Design & Arquitetura', desc: 'Modelagem de dados no Postgres, definição da stack (Next.js/Bun) e prototipagem visual.' },
    { num: '03', title: 'Desenvolvimento Ágil', desc: 'Código limpo com tipagem rigorosa, YAGNI, validações Zod e sem sobrecargas desnecessárias.' },
    { num: '04', title: 'Testes & Verificação', desc: 'Validação funcional, testes de integração, auditoria de performance e segurança.' },
    { num: '05', title: 'Deploy & Telemetria', desc: 'Publicação em servidores Linux via Docker/Nginx com monitoramento ativo 24/7.' },
  ];

  const timeline = [
    {
      role: 'CTO & Co-Founder',
      company: 'EasyDev',
      companyUrl: 'https://dev.easydev.com.br',
      period: '2023 — Presente',
      description: 'Liderança técnica geral, definição de arquitetura de software de todas as plataformas, automações com IA, infraestrutura Docker conteinerizada e governança de código.'
    },
    {
      role: 'Senior Technical Support Analyst',
      company: 'UBVA',
      period: 'Atuação Contínua',
      description: 'Análise técnica avançada de infraestrutura e suporte a ambientes críticos de alta demanda, troubleshooting de banco de dados e garantia de estabilidade.'
    },
    {
      role: 'Full-Stack Software Architect',
      company: 'Broscotech',
      period: 'Evolução Contínua',
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
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#080C16] text-slate-900 dark:text-slate-100 relative overflow-x-hidden selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-200">
      
      {/* Background Subtle Gradient Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Indigo Top Light */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-100/60 via-purple-50/40 to-transparent dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-transparent rounded-full blur-[100px]" />
        {/* Bottom Accent */}
        <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-gradient-to-t from-blue-100/40 to-transparent dark:from-blue-950/15 dark:to-transparent rounded-full blur-[120px]" />
      </div>

      {/* Floating Header */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-mono text-sm tracking-tight">RB</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">Rogger Brosco</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Broscotech</span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Sobre</a>
            <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Especialidades</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projetos</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Stack</a>
            <a href="#timeline" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Carreira</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
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
              href="https://wa.me/5541991747318?text=Ol%C3%A1%20Rogger,%20vi%20seu%20portf%C3%B3lio%20na%20Broscotech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-xs transition duration-200 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="hidden xs:inline">Falar Comigo</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24 space-y-28">

        {/* HERO SECTION */}
        <section id="about" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top Greeting Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <span>👋 HELLO, I'M ROGGER BROSCO</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                  CTO & Full-Stack{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-indigo-400 dark:via-purple-400 dark:to-sky-400">
                    Software Architect
                  </span>
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Especialista em construir <strong>SaaS de alta escala</strong>, interfaces ultrarrápidas em <strong>Next.js 15 & React 19</strong>, arquitetura de dados em <strong>PostgreSQL 17</strong> e <strong>sistemas autônomos de Inteligência Artificial</strong>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition shadow-md shadow-indigo-600/20"
                >
                  <span>Ver Projetos em Destaque</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/5541991747318?text=Ol%C3%A1%20Rogger,%20vamos%20conversar%20sobre%20um%20projeto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm transition shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>(41) 99174-7318</span>
                </a>
              </div>

              {/* Core Stack Badges */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Core Stack & Especialidades</p>
                <div className="flex flex-wrap items-center gap-2">
                  {['Next.js 15', 'React 19', 'TypeScript', 'Bun', 'PostgreSQL 17', 'Docker', 'Vercel AI SDK', 'Tailwind v4'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Hero Profile Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 space-y-6 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
                
                {/* Visual Profile Container */}
                <div className="rounded-2xl p-7 text-center relative overflow-hidden bg-gradient-to-b from-indigo-50/90 via-slate-50/80 to-purple-50/50 dark:from-slate-800/80 dark:via-indigo-950/50 dark:to-slate-900 border border-indigo-100/80 dark:border-indigo-500/20 flex flex-col items-center justify-center">
                  
                  {/* Photo with gradient ring */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-[3px] shadow-lg shadow-indigo-500/20 mb-4 group">
                    <img
                      src="/avatar.png"
                      alt="Rogger Brosco"
                      className="w-full h-full rounded-full object-cover bg-white dark:bg-slate-900 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Rogger Brosco</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">CTO @ EasyDev • Lead Architect</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Disponível para Projetos
                    </div>
                  </div>

                </div>

                {/* Floating Micro-Card: Experience & SLA */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white font-mono">+7 Anos</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Experiência Real</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white font-mono">99.9% SLA</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Em Produção</div>
                    </div>
                  </div>
                </div>

                {/* Mini Links */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <a href="https://github.com/rbrosco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    <span>github.com/rbrosco</span>
                  </a>
                  <a href="https://dev.easydev.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition">
                    <span>EasyDev</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* METRICS & STATS PANEL */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-1.5 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{item.label}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">{item.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.subtitle}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
                <Compass className="w-3.5 h-3.5" />
                SOLUÇÕES & EXPERTISE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                O que construo com excelência
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md font-normal">
              Soluções completas desenhadas para performance extrema, segurança e zero tolerância a falhas em produção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 space-y-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${srv.color} text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${srv.badgeClass}`}>
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{srv.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">{srv.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
                <Boxes className="w-3.5 h-3.5" />
                PORTFÓLIO EM DESTAQUE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                Projetos & Aplicações em Produção
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md font-normal">
              Aplicações reais com arquiteturas de ponta a ponta e usuários ativos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="space-y-4">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">{proj.category}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {proj.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{proj.subtitle}</p>
                    </div>

                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-900 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 text-white flex items-center justify-center transition shrink-0 shadow-xs"
                        title="Visitar Aplicação"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{proj.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Principais Entregas:</span>
                    {proj.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-medium shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* STACK & SKILLS */}
        <section id="skills" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
                <Workflow className="w-3.5 h-3.5" />
                STACK & FERRAMENTAS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                Tecnologias que domino
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Todas' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend & DB' },
                { id: 'ai', label: 'IA & Automação' },
                { id: 'devops', label: 'Cloud & Infra' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                      : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-4 flex items-center gap-3 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600/40 transition-all shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm truncate">{skill.name}</h4>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      <span className="capitalize">{skill.category}</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">{skill.level}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 space-y-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
              MÉTODO DE ENGENHARIA
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Como eu entrego resultados</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Processo rigoroso para garantir código limpo, arquitetura sólida e previsibilidade.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-2">
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">{step.num}</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="space-y-8 scroll-mt-28">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
              HISTÓRICO PROFISSIONAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
              Trajetória & Liderança Técnica
            </h2>
          </div>

          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600/40 hover:shadow-sm transition"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold text-sm inline-flex items-center gap-1 transition"
                      >
                        {item.company}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">{item.company}</span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold font-mono self-start md:self-center shrink-0 border border-slate-200 dark:border-slate-700">
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details Left (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold tracking-wide border border-indigo-200/60 dark:border-indigo-800/60">
                VAMOS CONVERSAR?
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Pronto para transformar sua ideia em um produto de alto impacto.
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Disponível para novos projetos SaaS, liderança de engenharia, arquiteturas com inteligência artificial autônoma e consultoria técnica.
              </p>

              {/* Direct Info List */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/5541991747318?text=Ol%C3%A1%20Rogger,%20vamos%20conversar%20sobre%20um%20projeto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 transition group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">WhatsApp Direto</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">(41) 99174-7318</div>
                  </div>
                </a>

                <a
                  href="mailto:contato@broscotech.com.br"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 transition group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">E-mail Profissional</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">contato@broscotech.com.br</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">Localização</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Curitiba / São Paulo, Brasil (Remoto Global)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form Right (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Envie uma Mensagem Direta</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Preencha os campos abaixo para abrir a conversa estruturada no WhatsApp.</p>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-indigo-600 transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: carlos@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-indigo-600 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Tipo de Projeto / Assunto</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Desenvolvimento SaaS em Next.js / Arquitetura de IA"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-indigo-600 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Detalhes da Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte um pouco sobre as necessidades técnicas, prazos ou objetivos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:border-indigo-600 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem via WhatsApp</span>
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">Broscotech</span>
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span className="font-medium">Rogger Brosco</span>
          </div>

          <div className="flex items-center gap-5 font-semibold text-slate-600 dark:text-slate-300">
            <a href="https://dev.easydev.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              EasyDev
            </a>
            <a href="https://planner-sdr.broscotech.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              Planner SDR
            </a>
            <a href="https://github.com/rbrosco" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              GitHub
            </a>
            <a href="https://wa.me/5541991747318" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
