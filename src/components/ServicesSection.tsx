import React, { useState } from "react";
import {
  Layers,
  MessageSquare,
  Bot,
  Server,
  Sparkles,
  Phone,
  ArrowRight,
  Clock,
  Check
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "all" | "saas" | "whatsapp" | "ai" | "devops";
  badge: string;
  badgeClass: string;
  icon: any;
  title: string;
  summary: string;
  focus: string;
  deliverables: string[];
  stack: string[];
  timeline: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "saas-fullstack",
    category: "saas",
    badge: "EASYDEV • SAAS FULL-STACK",
    badgeClass: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white",
    icon: Layers,
    title: "Desenvolvimento SaaS Full-Stack Sob Medida",
    summary: "Plataformas web corporativas, robustas e escaláveis, desenhadas e desenvolvidas sob demanda com arquitetura de alta performance.",
    focus: "Substitui softwares engessados por uma aplicação sob medida com banco de dados dedicado, sem cobrança abusiva por usuário.",
    deliverables: [
      "Frontend moderno em Next.js 15 / React com SSR e UX fluida",
      "Backend de alta performance (Bun / Node / Go) e APIs REST/GraphQL",
      "Banco PostgreSQL 17 dedicado com replicação e backups automáticos",
      "Deploy contínuo em servidor privado com Docker e monitoramento"
    ],
    stack: ["Next.js 15", "TypeScript", "Bun / Node", "PostgreSQL", "Docker", "Tailwind CSS"],
    timeline: "3 a 6 semanas",
    whatsappMessage: "Olá Rogger, quero desenvolver um SaaS sob medida com a EasyDev"
  },
  {
    id: "whatsapp-baileys",
    category: "whatsapp",
    badge: "EASYDEV • WHATSAPP & CRM",
    badgeClass: "bg-[#25D366] text-black border-black",
    icon: MessageSquare,
    title: "Engenharia de WhatsApp & Omnichannel",
    summary: "Automação profissional de atendimento e vendas no WhatsApp corporativo, com multi-atendentes e roteamento inteligente.",
    focus: "Acaba com o gargalo de atendimento no WhatsApp, perda de leads em celulares de vendedores e respostas lentas.",
    deliverables: [
      "Múltiplos atendentes no mesmo número corporativo oficial",
      "Triagem e roteamento automático de conversas com IA",
      "Webhooks síncronos com seu CRM, ERP e banco corporativo",
      "Painel de telemetria de filas e histórico auditável"
    ],
    stack: ["Node.js / Baileys", "PostgreSQL", "Redis", "WebSockets", "Docker"],
    timeline: "1 a 3 semanas",
    whatsappMessage: "Olá Rogger, preciso estruturar a automação do WhatsApp na minha empresa"
  },
  {
    id: "ai-agents-hermes",
    category: "ai",
    badge: "EASYDEV • AGENTES IA HERMES",
    badgeClass: "bg-[#A855F7] text-white border-black",
    icon: Bot,
    title: "Frotas de Agentes Autônomos de IA",
    summary: "Desenvolvimento e implantação de agentes de inteligência artificial autônomos que operam 24/7 com ferramentas reais.",
    focus: "Automatiza processos inteiros de prospecção, qualificação, suporte e monitoramento sem risco de alucinação.",
    deliverables: [
      "Agentes autônomos com execução de código, APIs e banco de dados",
      "Memória operacional duradoura em vetores e SQLite",
      "Governança, alertas e aprovações via Telegram e Discord",
      "Arquitetura 100% privada rodando em infraestrutura própria"
    ],
    stack: ["Hermes Agent", "Python", "Docker", "pgvector", "Telegram / Discord Bot API"],
    timeline: "2 a 4 semanas",
    whatsappMessage: "Olá Rogger, quero implantar uma frota de agentes de IA na minha operação"
  },
  {
    id: "cloud-devops",
    category: "devops",
    badge: "EASYDEV • CLOUD & DEVOPS",
    badgeClass: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
    icon: Server,
    title: "Infraestrutura Privada, DevOps & Linux",
    summary: "Arquitetura de servidores dedicados, conteinerização Docker, segurança e automação de deploys com zero downtime.",
    focus: "Reduz custos de cloud pública (AWS/GCP) em até 70% mantendo alta disponibilidade e total soberania dos dados.",
    deliverables: [
      "Provisionamento e hardening de servidores Linux (Debian / Arch)",
      "Orquestração Docker Compose com redes isoladas e SSL automático",
      "Pipelines de CI/CD para deploy seguro em 1 clique",
      "Monitoramento de telemetria, logs centralizados e backups diários"
    ],
    stack: ["Docker / Compose", "Linux / SSH", "Nginx / Caddy", "PostgreSQL", "GitHub Actions"],
    timeline: "1 a 2 semanas",
    whatsappMessage: "Olá Rogger, preciso otimizar a infraestrutura e os servidores da minha empresa"
  }
];

export default function ServicesSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices = filter === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="servicos" className="space-y-8 scroll-mt-28">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>ENGENHARIA SOB MEDIDA • EASYDEV</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Serviços especializados com liderança técnica sênior.
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
            Como CTO na <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong>, lidero a arquitetura e entrega de soluções corporativas de ponta a ponta, com código auditável e infraestrutura privada.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold">
          {[
            { id: "all", label: "Todos os Pilares" },
            { id: "saas", label: "SaaS Full-Stack" },
            { id: "whatsapp", label: "WhatsApp & CRM" },
            { id: "ai", label: "Agentes IA" },
            { id: "devops", label: "Cloud & DevOps" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-xl border-2 transition cursor-pointer text-xs shrink-0 whitespace-nowrap ${
                filter === cat.id
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white border-black shadow-[2px_2px_0px_#000]"
                  : "bg-white dark:bg-[#0c0e1e] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-indigo-900/60 hover:border-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c0e1e] border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] flex flex-col justify-between space-y-6 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#000]">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className={`text-[10px] font-mono font-black px-3 py-1 rounded-md border-2 border-black shrink-0 whitespace-nowrap ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    {service.summary}
                  </p>
                </div>

                {/* Focus / O que resolve */}
                <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-400/60 dark:border-indigo-800/80 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                  <span className="font-mono font-black text-indigo-600 dark:text-cyan-400 shrink-0 uppercase text-[10px] pt-0.5 whitespace-nowrap">
                    O QUE RESOLVE:
                  </span>
                  <span className="font-medium leading-relaxed">{service.focus}</span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    Entregáveis Inclusos:
                  </div>
                  <div className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-black flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5 border border-black">
                          ✓
                        </span>
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Chips */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                    Stack Tecnológica:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#12162b] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-indigo-900/60 shrink-0 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer: Timeline & CTA */}
              <div className="pt-4 border-t-2 border-slate-200 dark:border-indigo-950/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>Prazo médio: <strong className="text-slate-900 dark:text-white">{service.timeline}</strong></span>
                </div>

                <a
                  href={`https://wa.me/5541991747318?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000] shrink-0 whitespace-nowrap cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
                  <span>Solicitar com a EasyDev ⚡</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}