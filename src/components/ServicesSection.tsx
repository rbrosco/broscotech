import React, { useState } from "react";
import {
  Layers,
  MessageSquare,
  Bot,
  Server,
  Workflow,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  ExternalLink,
  Clock,
  Check,
  Building2
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "all" | "saas" | "whatsapp" | "ai" | "devops" | "integrations";
  badge: string;
  badgeClass: string;
  icon: any;
  title: string;
  summary: string;
  problem: string;
  solution: string;
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
    summary: "Plataformas web corporativas, robustas e escaláveis, desenhadas e desenvolvidas pelo time de engenharia da EasyDev.",
    problem: "Softwares de prateleira engessados cobram mensalidades abusivas por usuário, não se adaptam às regras do seu negócio e limitam seu crescimento.",
    solution: "A EasyDev constrói sua aplicação ponta a ponta: frontend moderno em Next.js/React, backend de alta performance, banco PostgreSQL dedicado, governança e segurança corporativa.",
    deliverables: [
      "Aplicação completa com código-fonte 100% de sua propriedade (sem royalties)",
      "Banco de dados PostgreSQL 17 dedicado, modelado e isolado",
      "Painel administrativo com controle de acessos (RBAC)",
      "Integração com gateways de faturamento (Stripe, Asaas, MercadoPago)",
      "Deploy e orquestração Docker conduzidos pela equipe EasyDev"
    ],
    stack: ["Next.js 15", "React", "TypeScript", "Node.js / Bun", "PostgreSQL 17", "Docker"],
    timeline: "3 a 6 semanas para MVP em produção",
    whatsappMessage: "Olá Rogger, vim pelo seu portfólio e quero contratar o desenvolvimento de um SaaS com a EasyDev"
  },
  {
    id: "whatsapp-baileys",
    category: "whatsapp",
    badge: "EASYDEV • OMNICHANNEL",
    badgeClass: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
    icon: MessageSquare,
    title: "Automações WhatsApp & CRM com Motor Baileys",
    summary: "Centralize o atendimento da sua empresa: múltiplos operadores no mesmo número de WhatsApp sem pagar por licença de atendente.",
    problem: "Vendedores atendem em celulares pessoais, clientes esperam horas no primeiro contato e o histórico das negociações não fica salvo na sua empresa.",
    solution: "Implementamos a suíte EasyConnect ou integração sob medida com Baileys direto no seu CRM: fila inteligente de atendimento, triagem por IA e roteamento automático.",
    deliverables: [
      "Múltiplos atendentes simultâneos no mesmo número oficial",
      "Fila de espera inteligente com triagem automática por IA",
      "Webhooks síncronos alimentando seu CRM e banco de dados em tempo real",
      "Envio de notificações automáticas (PIX, boletos, lembretes de agenda)",
      "Transcrição de áudios e histórico centralizado para a diretoria"
    ],
    stack: ["Baileys Engine", "WebSockets", "Node.js", "PostgreSQL", "Redis", "Docker"],
    timeline: "1 a 2 semanas para operação ativa",
    whatsappMessage: "Olá Rogger, quero contratar a solução de WhatsApp e CRM Omnichannel da EasyDev"
  },
  {
    id: "ai-agents-hermes",
    category: "ai",
    badge: "EASYDEV • AGENTES IA HERMES",
    badgeClass: "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white",
    icon: Bot,
    title: "Consultoria & Implantação de Frotas de Agentes IA",
    summary: "Frotas de agentes autônomos que operam 24/7 sem alucinação, executando processos operacionais dentro da sua infraestrutura privada.",
    problem: "Sua equipe perde metade do dia fazendo triagens repetitivas, copiando dados entre planilhas e sistemas ou executando tarefas mecânicas que geram erros.",
    solution: "A EasyDev implanta a tecnologia Hermes Agent: agentes autônomos especializados (SDR Comercial, Suporte N1, DevOps SRE, Inteligência de Dados) com ferramentas reais para consultar bancos e acionar APIs.",
    deliverables: [
      "Agentes operando 24 horas por dia, 7 dias por semana sem descanso",
      "Infraestrutura Docker privada exclusiva (zero vazamento de dados)",
      "Conexão com ferramentas internas (PostgreSQL, APIs, Discord, WhatsApp)",
      "Guardrails rígidos anti-alucinação e logs 100% auditáveis de cada ação",
      "Treinamento e governança conduzidos diretamente pela EasyDev"
    ],
    stack: ["Hermes Agent", "LLMs Privadas / OpenAI", "Python", "SQLite / Vector DB", "Docker"],
    timeline: "2 a 4 semanas para piloto em produção",
    whatsappMessage: "Olá Rogger, tenho interesse na consultoria e implantação de Agentes de IA da EasyDev"
  },
  {
    id: "cloud-devops",
    category: "devops",
    badge: "EASYDEV • CLOUD & DEVOPS",
    badgeClass: "bg-gradient-to-r from-indigo-600 to-blue-600 text-white",
    icon: Server,
    title: "Cloud, DevOps & Infraestrutura Linux Docker",
    summary: "Servidores blindados, proxies reversos de alto desempenho e pipelines de deploy contínuo sem sustos na fatura da nuvem.",
    problem: "Sistemas caem em horários de pico, deploys manuais travam a empresa e a conta de nuvem só cresce sem que ninguém saiba o motivo real.",
    solution: "Arquitetura e gerenciamento da EasyDev: servidores dedicados Linux (Ubuntu/Debian), orquestração Docker Compose, SSL automático via Nginx, firewall e backups externos diários criptografados.",
    deliverables: [
      "Servidores provisionados e configurados com segurança sênior",
      "Ambiente de containers Docker isolados e replicáveis",
      "Pipeline de CI/CD para deploys automáticos em segundos",
      "Monitoramento contínuo de uptime, memória e métricas críticas",
      "Plano de contingência e recuperação de desastre (DR)"
    ],
    stack: ["Linux Ubuntu / Debian", "Docker", "Docker Compose", "Nginx", "PostgreSQL", "GitHub Actions"],
    timeline: "3 a 7 dias para setup e migração completa",
    whatsappMessage: "Olá Rogger, preciso do suporte de Cloud e Infraestrutura da EasyDev"
  },
  {
    id: "api-integrations",
    category: "integrations",
    badge: "EASYDEV • INTEGRAÇÕES",
    badgeClass: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white",
    icon: Workflow,
    title: "Integrações de APIs Complexas & Sistemas Legados",
    summary: "Conecte seus ERPs legados, CRMs e plataformas financeiras para eliminar retrabalho e inconsistência de dados.",
    problem: "Informações presas em silos: o financeiro usa um ERP antigo, o comercial usa CRM moderno e alguém precisa redigitar tudo manualmente.",
    solution: "A EasyDev constrói middlewares resilientes com filas (Redis/RabbitMQ) que garantem a entrega dos dados mesmo em instabilidade de rede, com reprocessamento e logs auditáveis.",
    deliverables: [
      "Middleware de sincronização bidirecional em tempo real",
      "Tratamento automático de falhas e retentativas em caso de instabilidade",
      "Painel de telemetria com histórico dos dados transmitidos",
      "Documentação de endpoints e webhooks para o seu ecossistema"
    ],
    stack: ["Node.js / Bun", "Redis Queue", "REST / GraphQL", "Webhooks", "PostgreSQL"],
    timeline: "1 a 3 semanas conforme complexidade",
    whatsappMessage: "Olá Rogger, preciso integrar sistemas e APIs com o time da EasyDev"
  },
  {
    id: "modernization",
    category: "saas",
    badge: "EASYDEV • REFATORAÇÃO",
    badgeClass: "bg-gradient-to-r from-purple-600 to-violet-600 text-white",
    icon: Wrench,
    title: "Modernização & Resgate de Softwares Críticos",
    summary: "Recupere a estabilidade, performance e escalabilidade de softwares legados que ninguém tem coragem de mexer.",
    problem: "Sistemas legados onde qualquer alteração quebra outras telas, queries demoradas no banco e desenvolvedores anteriores que sumiram sem documentação.",
    solution: "Auditoria sênior da EasyDev: profiling de banco de dados, otimização de índices, desacoplamento gradual do código espaguete e introdução de testes de regressão sem parar a operação.",
    deliverables: [
      "Relatório técnico de gargalos com ganhos de performance medidos",
      "Otimização de banco de dados e aceleração de respostas",
      "Modularização do código para permitir novas funcionalidades com segurança",
      "Documentação arquitetural atualizada pela EasyDev"
    ],
    stack: ["Database Profiling", "TypeScript Refactor", "Clean Architecture", "Docker", "Caching Redis"],
    timeline: "Diagnóstico inicial em 5 dias úteis",
    whatsappMessage: "Olá Rogger, temos um software crítico que precisa de diagnóstico e modernização da EasyDev"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUÇÕES & SERVIÇOS ENTREGUES PELA EASYDEV</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Tudo que eu faço como CTO na EasyDev: Problema Real vs. O que Entregamos
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl font-medium">
            Este é meu portfólio técnico de liderança de engenharia. Todos os projetos, produtos e consultorias são estruturados e entregues com o respaldo e a infraestrutura completa da <strong className="text-indigo-600 dark:text-cyan-400">EasyDev</strong>.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono font-bold">
          {[
            { id: "all", label: "Todos os Serviços [6]" },
            { id: "saas", label: "SaaS Full-Stack" },
            { id: "whatsapp", label: "WhatsApp & Baileys" },
            { id: "ai", label: "Agentes IA (Hermes)" },
            { id: "devops", label: "Cloud & DevOps" },
            { id: "integrations", label: "Integrações" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-xl border-2 transition cursor-pointer text-xs ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0c0e1e] border-2 border-slate-900 dark:border-indigo-900/60 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] flex flex-col justify-between space-y-6 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <div className="space-y-5">
                
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#000]">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className={`text-[10px] font-mono font-black px-3 py-1 rounded-md border-2 border-black ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & One-line Summary */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1 font-medium">
                    {service.summary}
                  </p>
                </div>

                {/* Problem vs How We Solve */}
                <div className="space-y-3 text-xs">
                  
                  {/* Problem */}
                  <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900/60 space-y-1">
                    <span className="font-mono font-black text-rose-700 dark:text-rose-400 uppercase text-[10px] block">
                      ✕ O Problema do Cliente:
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {service.problem}
                    </p>
                  </div>

                  {/* How We Solve via EasyDev */}
                  <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-400 dark:border-indigo-600 space-y-1">
                    <span className="font-mono font-black text-indigo-700 dark:text-indigo-400 uppercase text-[10px] block">
                      ⚙️ Como a EasyDev Resolve:
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                      {service.solution}
                    </p>
                  </div>

                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono font-black uppercase text-slate-900 dark:text-white">
                    O Que Você Recebe Pronto:
                  </span>
                  <div className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5 font-bold" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Pills */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1.5 uppercase">
                    Tecnologias & Padrão de Engenharia:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151933] border border-slate-300 dark:border-indigo-950 text-slate-800 dark:text-slate-200 font-mono text-[10px] font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Actions & EasyDev Engagement */}
              <div className="pt-4 border-t-2 border-slate-200 dark:border-indigo-950/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{service.timeline}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://easydev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#12162b] hover:bg-slate-200 dark:hover:bg-[#181d38] text-slate-800 dark:text-slate-200 font-mono font-bold text-xs transition border border-slate-300 dark:border-indigo-800"
                  >
                    <span>EasyDev.com.br</span>
                    <ExternalLink className="w-3 h-3 text-indigo-400" />
                  </a>

                  <a
                    href={`https://wa.me/5541991747318?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Banner de Engajamento EasyDev */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-900/30 via-indigo-900/30 to-blue-900/30 border-2 border-indigo-500/70 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-black border-2 border-indigo-400 text-cyan-400 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-black text-base text-slate-900 dark:text-white">
              Projetos corporativos são contratados e operados pela EasyDev
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
              Contratos com CNPJ, notas fiscais, SLA garantido, time dedicado de suporte e a minha liderança direta como CTO.
            </p>
          </div>
        </div>

        <a
          href="https://easydev.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-black text-slate-900 dark:text-white hover:text-indigo-400 font-black text-xs transition border-2 border-black dark:border-indigo-400 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] shrink-0"
        >
          <span>Conhecer a EasyDev Oficial</span>
          <ArrowRight className="w-4 h-4 text-indigo-400" />
        </a>
      </div>

    </section>
  );
}
