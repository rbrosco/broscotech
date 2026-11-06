import React, { useState } from "react";
import {
  Bot,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Zap,
  Terminal,
  Server,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  Lock,
  Boxes,
  Database,
  Search,
  MessageSquare,
  Users,
  Clock,
  Layers,
  ChevronRight,
  Activity,
  Flame,
  Check,
  ExternalLink,
  Building2
} from "lucide-react";
import LiveInteractiveTerminal from "./LiveInteractiveTerminal.tsx";

interface FleetRole {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  icon: any;
  color: string;
  accentBg: string;
  borderColor: string;
  problem: string;
  solution: string;
  deliveredTools: string[];
  metrics: string;
}

const FLEET_ROLES: FleetRole[] = [
  {
    id: "sdr",
    badge: "COMERCIAL & SDR",
    title: "Agente SDR & Qualificação Comercial",
    tagline: "Qualifica leads no WhatsApp e Web 24h por dia e agenda na hora com seu closer.",
    icon: MessageSquare,
    color: "text-blue-400",
    accentBg: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "border-blue-500",
    problem: "Leads que chegam à noite ou finais de semana esfriam esperando até segunda-feira, ou vendedores perdem horas filtrando curiosos sem orçamento.",
    solution: "Agente inteligente treinado nas regras exatas do seu negócio. Faz perguntas-chave de qualificação (orçamento, tamanho de equipe, urgência), responde dúvidas do produto e agenda a call no Google Calendar do vendedor certo.",
    deliveredTools: [
      "Triagem no WhatsApp via motor oficial Baileys",
      "Validação de dados do cliente com regras rígidas",
      "Agendamento síncrono no Google Calendar / Calendly",
      "Envio do lead pronto e qualificado direto no CRM da EasyDev"
    ],
    metrics: "Tempo de 1ª resposta < 10s • +45% reuniões qualificadas agendadas"
  },
  {
    id: "support",
    badge: "OPERAÇÃO & SUPORTE N1",
    title: "Agente Suporte N1 & Operação Contínua",
    tagline: "Resolve 70% a 90% das dúvidas com base no seu conhecimento interno, sem fila.",
    icon: Users,
    color: "text-cyan-400",
    accentBg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    borderColor: "border-cyan-500",
    problem: "Sua equipe vive afogada respondendo as mesmas 15 perguntas todo santo dia, gerando fila de espera e clientes insatisfeitos.",
    solution: "Agente alimentado com sua documentação e FAQs estruturadas. Conectado ao banco para consultar status de pedidos ou faturas e, se o caso for complexo, faz transição humanizada para o atendente com resumo completo do histórico.",
    deliveredTools: [
      "Base vetorial privada de conhecimento (dados isolados)",
      "Consulta segura a pedidos e status via API interna",
      "Abertura de tickets automática no Jira / Linear / Trello",
      "Handoff sem atrito para atendentes humanos quando necessário"
    ],
    metrics: "Zero fila de espera • 80% das dúvidas resolvidas no primeiro minuto"
  },
  {
    id: "devops",
    badge: "DEVOPS & INFRAESTRUTURA",
    title: "Agente DevOps, Monitoramento & SRE",
    tagline: "Vigia servidores, containers Docker e APIs sem dormir, avisando antes de cair.",
    icon: Server,
    color: "text-violet-400",
    accentBg: "bg-violet-500/10 dark:bg-violet-500/20",
    borderColor: "border-violet-500",
    problem: "Sistemas caem na madrugada ou finais de semana e a diretoria só descobre quando os clientes reclamam.",
    solution: "Agente com permissão supervisionada a terminal e Docker. Monitora consumo de RAM/CPU, renovação de SSL, tráfego de rede e executa scripts de auto-recuperação de serviços travados, notificando a equipe via Telegram/Discord.",
    deliveredTools: [
      "Telemetria em tempo real de CPU, RAM e containers Docker",
      "Scripts de auto-recuperação de serviços com falha",
      "Alertas inteligentes com contexto no Discord / Telegram",
      "Auditoria e registro de deploys executados com sucesso"
    ],
    metrics: "Monitoramento 24/7 ininterrupto • Redução de 90% no MTTR de incidentes"
  },
  {
    id: "scout",
    badge: "INTELIGÊNCIA & DADOS",
    title: "Agente Scout & Pesquisa Estratégica",
    tagline: "Varre concorrentes, notícias do setor e dados de mercado e entrega resumos prontos.",
    icon: Search,
    color: "text-indigo-400",
    accentBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderColor: "border-indigo-500",
    problem: "Falta de tempo para monitorar mudanças de preços da concorrência, atualizações de licitações ou novidades do mercado.",
    solution: "Agente de web scraping auditável e síntese de inteligência. Analisa páginas públicas, tabelas de preços e portais especializados diariamente e envia um briefing executivo de 2 minutos para a diretoria.",
    deliveredTools: [
      "Scraping seguro e auditável de fontes públicas de dados",
      "Comparações estruturadas de produtos e concorrentes",
      "Dossiês executivos entregues diariamente no chat da empresa",
      "Alertas de mudanças bruscas de mercado em tempo real"
    ],
    metrics: "Economia de 15 horas/semana de pesquisa manual por gestor"
  }
];

const CONSULTING_STEPS = [
  {
    week: "Semana 1",
    title: "Diagnóstico & Mapeamento de Processos",
    desc: "Mapeamos onde sua equipe perde horas com tarefas mecânicas, levantamos os sistemas existentes e desenhamos a arquitetura da frota com papéis bem delimitados.",
    deliverable: "Documento Executivo de Arquitetura & Matriz de Responsabilidade dos Agentes."
  },
  {
    week: "Semana 2",
    title: "Desenvolvimento de Tools & Conexões",
    desc: "Desenvolvemos as ferramentas técnicas (APIs, consultas ao PostgreSQL, conexão ao WhatsApp/Telegram, scripts em Python/Node) para os agentes agirem no mundo real.",
    deliverable: "APIs e Ferramentas Customizadas testadas e homologadas com dados reais."
  },
  {
    week: "Semana 3",
    title: "Setup em Infraestrutura Privada Docker",
    desc: "Configuração dos containers no servidor dedicado ou VPS da sua empresa pela equipe EasyDev, aplicando isolamento de rede, firewall e guardrails anti-alucinação rígidos.",
    deliverable: "Ambiente em produção rodando na sua nuvem sem vazamento de dados."
  },
  {
    week: "Semana 4",
    title: "Treinamento da Equipe & Operação 24/7",
    desc: "Treinamento executivo para sua equipe governar os agentes via chat (Discord/Telegram/WhatsApp). Ajustes finos de prompts e entrega de manuais de operação.",
    deliverable: "Frota em produção plena + Suporte da engenharia EasyDev por 30 dias pós-deploy."
  }
];

export default function HermesConsultingSection() {
  const [activeTab, setActiveTab] = useState<"fleets" | "process" | "terminal">("fleets");
  const [selectedFleetId, setSelectedFleetId] = useState<string>("sdr");

  const selectedRole = FLEET_ROLES.find(r => r.id === selectedFleetId) || FLEET_ROLES[0];
  const IconComponent = selectedRole.icon;

  return (
    <section id="hermes-consultoria" className="space-y-8 scroll-mt-28">
      
      {/* Container Principal Neo-Brutalista com Fusão Roxo & Azul */}
      <div className="rounded-3xl border-2 border-slate-900 dark:border-indigo-900/60 bg-white dark:bg-[#0c0e1e] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#6366f1] space-y-8 relative overflow-hidden transition-all">
        
        {/* Glow de Fundo Mesclado Roxo & Azul */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-violet-600/20 via-indigo-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header da Seção de Consultoria */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b-2 border-slate-900 dark:border-indigo-900/60 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
                <Bot className="w-3.5 h-3.5" />
                <span>CONSULTORIA CORPORATIVA DE IA • EASYDEV</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono font-black text-[11px] border-2 border-indigo-400 dark:border-indigo-700">
                HERMES AGENT FRAMEWORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Coloque uma Frota de Agentes de IA Autônomos trabalhando pela sua empresa.
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Consultoria executiva e implantação conduzida por <strong className="text-indigo-600 dark:text-cyan-400">Rogger Brosco (CTO EasyDev)</strong> e time de engenharia. Não é chatbot genérico que só enrola: é inteligência autônoma com ferramentas reais (APIs, bancos e scripts), memória duradoura e execução 24/7 sem alucinações, rodando na sua infraestrutura privada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="https://wa.me/5541991747318?text=Ol%C3%A1%20Rogger,%20quero%20conversar%20sobre%20a%20Consultoria%20e%20Implanta%C3%A7%C3%A3o%20do%20Hermes%20Agent%20pela%20EasyDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs sm:text-sm transition border-2 border-black shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Agendar Consultoria Hermes ⚡</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500 dark:text-indigo-300/80 font-bold">
              <span>Operado oficialmente pela</span>
              <a href="https://easydev.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-white inline-flex items-center gap-0.5">
                EasyDev <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Garantias Corporativas Fundamentais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-1.5">
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-mono font-black text-xs uppercase">
              <Lock className="w-4 h-4" />
              <span>Arquitetura 100% Privada</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Roda em VPS dedicada ou servidor próprio via Docker. Nenhum dado sensível do seu negócio é exposto ou usado para treinar modelos externos.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-1.5">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono font-black text-xs uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Alucinação</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Guardrails rígidos e validação determinística: o agente age baseado em dados reais do seu banco. Se não tiver certeza, escalona para humano.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono font-black text-xs uppercase">
              <Zap className="w-4 h-4" />
              <span>Tools & Ações Reais</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Não é gerador de texto: os agentes chamam APIs, consultam PostgreSQL, disparam mensagens no WhatsApp e executam rotinas de infraestrutura.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono font-black text-xs uppercase">
              <Activity className="w-4 h-4" />
              <span>Governança & Logs 24/7</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Você controla a frota por Telegram ou Discord. Histórico auditável de tudo o que os agentes fizeram, com métricas e custos transparentes.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-slate-900 dark:border-indigo-900/60 relative z-10">
          <button
            onClick={() => setActiveTab("fleets")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition border-2 cursor-pointer ${
              activeTab === "fleets"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1]"
                : "bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-indigo-900/60 hover:border-black"
            }`}
          >
            🤖 Frotas Especializadas em Produção
          </button>

          <button
            onClick={() => setActiveTab("process")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition border-2 cursor-pointer ${
              activeTab === "process"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1]"
                : "bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-indigo-900/60 hover:border-black"
            }`}
          >
            📋 O Processo de Implantação EasyDev (4 Semanas)
          </button>

          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition border-2 cursor-pointer ${
              activeTab === "terminal"
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1]"
                : "bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-indigo-900/60 hover:border-black"
            }`}
          >
            ⚡ Console CLI Interativo (Telemetria)
          </button>
        </div>

        {/* CONTEÚDO DA TAB: FROTAS ESPECIALIZADAS */}
        {activeTab === "fleets" && (
          <div className="space-y-6 relative z-10">
            
            {/* Seletor de Papéis */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {FLEET_ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedFleetId(role.id)}
                  className={`p-3 rounded-xl border-2 text-left transition flex flex-col justify-between gap-1 cursor-pointer ${
                    selectedFleetId === role.id
                      ? "bg-slate-900 text-white dark:bg-[#181d38] border-black dark:border-indigo-500 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1]"
                      : "bg-slate-50 dark:bg-[#101426] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-indigo-900/60 hover:border-black"
                  }`}
                >
                  <span className="text-[10px] font-mono font-black uppercase text-indigo-400">
                    {role.badge}
                  </span>
                  <span className="text-xs font-black truncate">
                    {role.title.replace("Agente ", "")}
                  </span>
                </button>
              ))}
            </div>

            {/* Detalhe do Papel Selecionado */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/80 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#6366f1] space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-slate-200 dark:border-indigo-950">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl border-2 border-black bg-white dark:bg-slate-950 ${selectedRole.color} shadow-[2px_2px_0px_#000]`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-black text-white dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-700">
                        {selectedRole.badge}
                      </span>
                      <span className="text-xs font-mono text-blue-500 dark:text-cyan-400 font-bold">
                        ● Ativo em Produção 24/7
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                      {selectedRole.title}
                    </h3>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20implantar%20com%20a%20EasyDev%20o%20${encodeURIComponent(selectedRole.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[2px_2px_0px_#000] shrink-0 self-start sm:self-center cursor-pointer"
                >
                  <span>Implantar Este Agente</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                {selectedRole.tagline}
              </p>

              {/* Problema vs Solução */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900/60 space-y-1.5">
                  <span className="font-mono font-black text-rose-700 dark:text-rose-400 uppercase text-[10px] block">
                    ✕ O Gargalo Operacional:
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {selectedRole.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-400 dark:border-indigo-600 space-y-1.5">
                  <span className="font-mono font-black text-indigo-700 dark:text-indigo-400 uppercase text-[10px] block">
                    ✓ A Solução Hermes na EasyDev:
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                    {selectedRole.solution}
                  </p>
                </div>
              </div>

              {/* Tools e Ações Concretas Entregues */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-black uppercase text-slate-900 dark:text-white">
                  Ferramentas & Conexões Entregues:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedRole.deliveredTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-white dark:bg-[#0c0e1e] border border-slate-300 dark:border-indigo-900/60 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium"
                    >
                      <Check className="w-4 h-4 text-cyan-500 shrink-0 font-bold" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Métrica de Impacto */}
              <div className="pt-3 border-t border-slate-200 dark:border-indigo-950 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-bold uppercase text-[10px]">Impacto Comprovado:</span>
                <span className="text-indigo-600 dark:text-cyan-400 font-black">{selectedRole.metrics}</span>
              </div>
            </div>

          </div>
        )}

        {/* CONTEÚDO DA TAB: PROCESSO DE IMPLANTAÇÃO */}
        {activeTab === "process" && (
          <div className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONSULTING_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-mono font-black text-xs border border-black">
                        {step.week}
                      </span>
                      <span className="text-indigo-400 font-mono text-xs font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-black text-slate-900 dark:text-white text-base tracking-tight pt-1">
                      {step.title}
                    </h4>

                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-indigo-950 text-[11px] font-mono space-y-1">
                    <span className="text-violet-600 dark:text-indigo-400 font-black block uppercase text-[10px]">
                      Entregável Tangível:
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 font-bold block">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Box de Confiança EasyDev */}
            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border-2 border-indigo-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-bold">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Consultoria executada do início ao fim pelo time da EasyDev sob liderança de Rogger Brosco: código, infraestrutura e governança corporativa.</span>
              </div>
              <a
                href="https://easydev.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black transition border-2 border-black shadow-[2px_2px_0px_#000] shrink-0"
              >
                Conhecer a EasyDev
              </a>
            </div>
          </div>
        )}

        {/* CONTEÚDO DA TAB: TERMINAL INTERATIVO AO VIVO */}
        {activeTab === "terminal" && (
          <div className="space-y-4 relative z-10">
            <div className="p-3 rounded-xl bg-slate-900 border-2 border-indigo-900/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 shadow-[2px_2px_0px_#000]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-bold text-white font-mono">EasyDev • Hermes Agent Multi-Fleet Telemetry</span>
                <span className="text-slate-500">•</span>
                <span className="text-indigo-400 font-mono text-[11px]">5 Agentes Especializados Ativos</span>
              </div>
              <span className="text-cyan-400 font-mono font-bold text-[11px]">
                Docker Containers • SQLite Memory • Isolated
              </span>
            </div>
            
            <LiveInteractiveTerminal />
          </div>
        )}

      </div>
    </section>
  );
}
