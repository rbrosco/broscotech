import React, { useState } from 'react';
import {
  Code2,
  Terminal,
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
  Linkedin,
  Mail,
  ArrowRight,
  Database,
  Cloud,
  ChevronRight,
  Sparkles,
  Phone,
  FileCode2,
  GitBranch,
  Monitor
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'ai' | 'devops'>('all');

  const stats = [
    { label: 'Anos de Experiência', value: '+7', desc: 'Engenharia de Software' },
    { label: 'SLA em Produção', value: '99.9%', desc: 'Infraestrutura Robusta' },
    { label: 'SaaS & Projetos', value: '+20', desc: 'Entregues com Excelência' },
    { label: 'Fleet de IA', value: '5 Agentes', desc: 'Automação Operacional' },
  ];

  const skills = [
    { name: 'TypeScript & JavaScript', category: 'frontend', level: 'Especialista', icon: FileCode2, highlight: true },
    { name: 'React 19 & Next.js 15 (App Router)', category: 'frontend', level: 'Especialista', icon: Code2, highlight: true },
    { name: 'Tailwind CSS v4 & UI Precision', category: 'frontend', level: 'Avançado', icon: Sparkles, highlight: false },
    { name: 'Node.js & Bun Runtime', category: 'backend', level: 'Especialista', icon: Zap, highlight: true },
    { name: 'PostgreSQL 17 & TypeORM', category: 'backend', level: 'Especialista', icon: Database, highlight: true },
    { name: 'Redis & Caching Strategy', category: 'backend', level: 'Avançado', icon: Server, highlight: false },
    { name: 'Vercel AI SDK & LLMs Reasoning', category: 'ai', level: 'Especialista', icon: Bot, highlight: true },
    { name: 'Arquitetura Multi-Agente (Hermes)', category: 'ai', level: 'Especialista', icon: Cpu, highlight: true },
    { name: 'Evolution API & Baileys (WhatsApp)', category: 'ai', level: 'Avançado', icon: MessageSquare, highlight: true },
    { name: 'n8n Workflow Automation', category: 'ai', level: 'Avançado', icon: GitBranch, highlight: false },
    { name: 'Docker & Docker Compose', category: 'devops', level: 'Especialista', icon: Layers, highlight: true },
    { name: 'Nginx, Reverse Proxies & SSL', category: 'devops', level: 'Avançado', icon: Cloud, highlight: false },
    { name: 'Linux Server (Ubuntu/Oracle OCI)', category: 'devops', level: 'Avançado', icon: Terminal, highlight: false },
    { name: 'Segurança & Fail2ban / UFW', category: 'devops', level: 'Avançado', icon: ShieldCheck, highlight: false },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  const projects = [
    {
      title: 'Planner SDR',
      subtitle: 'SaaS de Gestão de Projetos com IA Nativa',
      description: 'Plataforma completa de gerenciamento de tarefas em equipe com assistente de IA explicável, relatórios automáticos semanais zero-input, Kanban interativo (@dnd-kit) e notificações via WhatsApp.',
      tags: ['Next.js 15', 'React 19', 'TypeORM', 'PostgreSQL 17', 'Vercel AI SDK', 'WhatsApp', 'Tailwind v4'],
      status: 'Em Produção',
      link: 'https://planner-sdr.broscotech.com.br',
      color: 'from-emerald-500/20 to-cyan-500/10',
      borderColor: 'border-emerald-500/30',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      features: [
        'Relatório semanal automatizado com rastreabilidade de eventos',
        'Sugestão de priorização com reasoning auditável',
        'Autenticação NextAuth v4 e multi-tenant isolado por workspace',
        'Board Kanban dinâmico com drag-and-drop de alta fluidez'
      ]
    },
    {
      title: 'EasyDev Suite & CRM',
      subtitle: 'Plataforma Corporativa & Gestão de Micro-serviços',
      description: 'Ecossistema integrado para empresas de desenvolvimento de software, unindo gestão de desenvolvedores, controle financeiro de planos/descontos, CMS dinâmico e monitoramento de serviços.',
      tags: ['Next.js 15', 'TypeScript', 'TypeORM', 'Tailwind CSS', 'Docker', 'PostgreSQL'],
      status: 'Core Enterprise',
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      features: [
        'Painel administrativo para gestão de desenvolvedores e portfólio',
        'Controle de faturamento, planos e cálculo dinâmico de descontos',
        'Integrações com bancos de dados relacionais e APIs REST',
        'Interface responsiva com rigor técnico de pixel-precision'
      ]
    },
    {
      title: 'Hermes Fleet (Multi-Agente)',
      subtitle: 'Arquitetura Autônoma de 5 Agentes de IA',
      description: 'Frota coordenada de agentes autônomos (Orchestrator, Scout, Scribe, Reach, Dev) operando com persistência de memória, centro de comando no Telegram e auditoria operacional SQLite.',
      tags: ['Hermes Agent', 'Python', 'SQLite', 'Telegram Bot API', 'Docker', 'Autonomous AI'],
      status: 'Ativo 24/7',
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      features: [
        'Roteamento por tópicos no Telegram com perfis e SOUL.md dedicados',
        'Sistema de telemetria e auditoria de logs com expiração automatizada',
        'Execução autônoma de tarefas de pesquisa, desenvolvimento e monitoramento',
        'Zero tolerância a falhas e integração com ambientes de produção'
      ]
    },
    {
      title: 'Evolution & n8n Automation Hub',
      subtitle: 'Infraestrutura de Mensageria e Fluxos Assíncronos',
      description: 'Ambiente escalável de automação de processos, integrando WhatsApp via WebSockets (Evolution API v2) e pipelines visuais no n8n conectados a bancos de dados e webhooks.',
      tags: ['Evolution API', 'n8n', 'Redis', 'PostgreSQL', 'WebSockets', 'Docker Compose'],
      status: 'Infraestrutura',
      color: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-500/30',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      features: [
        'Instâncias de WhatsApp conectadas para notificações transacionais',
        'Pipelines de dados automatizados com tolerância a falhas',
        'Proxy reverso Nginx com SSL automático Let Encrypt',
        'Monitoramento de integridade dos containers via watchdog'
      ]
    }
  ];

  const timeline = [
    {
      role: 'CTO & Co-Founder',
      company: 'EasyDev',
      period: '2023 — Presente',
      description: 'Liderança técnica, definição da arquitetura de software de todos os produtos, estruturação de pipelines de CI/CD, microsserviços Docker e governança de código.'
    },
    {
      role: 'Senior Technical Support Analyst',
      company: 'UBVA',
      period: 'Atuação Contínua',
      description: 'Análise técnica sênior de infraestrutura, resolução de problemas complexos em sistemas críticos, otimização de banco de dados e garantia de estabilidade operacional.'
    },
    {
      role: 'Full-Stack Software Architect',
      company: 'Broscotech',
      period: 'Evolução Contínua',
      description: 'Desenvolvimento e arquitetura de soluções SaaS, plataformas web escaláveis em Next.js/Node.js, implantação de servidores Linux e sistemas orientados a IA.'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] glow-ambient" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] glow-ambient" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] glow-ambient" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px] flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center transition group-hover:bg-zinc-900">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono text-sm">RB</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-zinc-100 tracking-tight text-base group-hover:text-emerald-400 transition">Rogger Brosco</span>
              <span className="text-xs text-zinc-500 block font-mono">Broscotech</span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#sobre" className="hover:text-emerald-400 transition">Sobre</a>
            <a href="#habilidades" className="hover:text-emerald-400 transition">Habilidades</a>
            <a href="#projetos" className="hover:text-emerald-400 transition">Projetos</a>
            <a href="#experiencia" className="hover:text-emerald-400 transition">Trajetória</a>
            <a href="#contato" className="hover:text-emerald-400 transition">Contato</a>
          </nav>

          {/* Status Badge & Direct Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponível para Projetos
            </div>
            <a
              href="https://wa.me/5519999999999?text=Ol%C3%A1%20Rogger,%20vi%20seu%20portf%C3%B3lio%20na%20Broscotech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition shadow-lg shadow-emerald-500/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-24">
        
        {/* HERO SECTION */}
        <section id="sobre" className="space-y-8 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            CTO @ EasyDev • Engenheiro de Software & Arquiteto de IA
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Construindo sistemas escaláveis, SaaS de alta performance e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                agentes autônomos de IA
              </span>.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-3xl">
              Sou <strong>Rogger Brosco</strong>, desenvolvedor Full-Stack sênior e líder técnico. Especializado em ecossistema TypeScript moderno (<code className="text-emerald-400 font-mono text-base">Next.js 15</code>, <code className="text-emerald-400 font-mono text-base">React 19</code>, <code className="text-emerald-400 font-mono text-base">Bun</code>, <code className="text-emerald-400 font-mono text-base">PostgreSQL</code>), infraestrutura Docker conteinerizada e sistemas com inteligência artificial aplicada.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition shadow-xl shadow-emerald-500/20"
            >
              Explorar Projetos
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/rbrosco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm transition"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              GitHub
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800/60 text-zinc-300 font-medium text-sm transition"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              Entrar em Contato
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 backdrop-blur-sm hover:border-zinc-700 transition">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">{stat.value}</div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">{stat.label}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & STACK SECTION */}
        <section id="habilidades" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Stack Técnica & Competências</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Tecnologias de Ponta a Ponta</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Todas' },
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend & DB' },
                { id: 'ai', label: 'IA & Automação' },
                { id: 'devops', label: 'Infra & Cloud' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition group flex items-start gap-3.5 ${
                    skill.highlight
                      ? 'bg-zinc-900/60 border-zinc-800 hover:border-emerald-500/40 hover:bg-zinc-900/90'
                      : 'bg-zinc-900/30 border-zinc-800/60 hover:border-zinc-700'
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700/50 text-emerald-400 group-hover:scale-105 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-zinc-200 text-sm truncate group-hover:text-white">{skill.name}</h3>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 capitalize font-mono mt-1 block">{skill.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projetos" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-6">
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Portfólio em Destaque</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Projetos & Aplicações em Produção</h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Soluções reais desenvolvidas com arquiteturas sólidas, escalabilidade, segurança e foco em experiência de usuário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border backdrop-blur-sm transition hover:shadow-2xl ${proj.borderColor} hover:bg-zinc-900/60`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border inline-block ${proj.badgeColor}`}>
                        {proj.status}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight mt-2">{proj.title}</h3>
                      <div className="text-xs font-mono text-zinc-400 mt-0.5">{proj.subtitle}</div>
                    </div>

                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition border border-zinc-700/60 shrink-0"
                        title="Acessar site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed">{proj.description}</p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <div className="text-xs font-mono text-zinc-400 font-medium">Principais Destaques:</div>
                    {proj.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-zinc-800/60">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE & PRINCIPLES */}
        <section className="space-y-8 p-8 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/40 to-zinc-950 border border-zinc-800">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">Engenharia & Filosofia</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Pilares de Construção</h2>
            <p className="text-zinc-400 text-sm mt-2">
              Qualidade técnica inegociável em cada linha de código e na infraestrutura de produção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Performance Extrema</h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Aplicações otimizadas com SSR inteligente, bundling moderno via Bun/Vite e cache estratégico no Redis.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Código Limpo & YAGNI</h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Tipagem estrita com TypeScript, validação estruturada com Zod e sem excesso desnecessário de dependências.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">IA com Reasoning</h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Inteligência artificial auditável, com dados estruturados via Zod e sem alterações silenciosas ou caixas pretas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Alta Disponibilidade</h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Containers Docker com health-checks, monitoramento com watchdog, Fail2ban e certificados SSL automáticos.
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE / EXPERIENCE */}
        <section id="experiencia" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-6">
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Histórico Profissional</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Trajetória & Liderança</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col md:flex-row md:items-start justify-between gap-4 hover:border-zinc-700 transition"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <span className="text-zinc-500">•</span>
                    <span className="text-emerald-400 font-semibold text-sm">{item.company}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="font-mono text-xs text-zinc-500 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/40 self-start shrink-0">
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="contato" className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 font-mono">
              Vamos construir algo incrível juntos?
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pronto para elevar seu produto ou infraestrutura ao próximo nível.
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Disponível para consultorias técnicas, desenvolvimento de soluções SaaS, arquitetura de sistemas com IA e liderança de engenharia.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/5519999999999?text=Ol%C3%A1%20Rogger,%20vamos%20conversar%20sobre%20um%20projeto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition shadow-xl shadow-emerald-500/25"
              >
                <Phone className="w-4 h-4" />
                Conversar no WhatsApp
              </a>
              <a
                href="mailto:contato@broscotech.com.br"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-medium text-sm transition"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                contato@broscotech.com.br
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300 font-mono">Broscotech</span>
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span>Rogger Brosco</span>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <a href="https://github.com/rbrosco" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              LinkedIn
            </a>
            <a href="https://planner-sdr.broscotech.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              Planner SDR
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
