import React, { useState } from "react";
import {
  MessageSquare,
  Boxes,
  Calendar,
  DollarSign,
  Bot,
  ArrowRight,
  ExternalLink,
  Phone,
  Flame
} from "lucide-react";
import {
  EasyConnectMockup,
  PlannerSdrMockup,
  DripCastMockup,
  EasyDevCrmMockup
} from "./ProductMockups.tsx";
import LiveInteractiveTerminal from "./LiveInteractiveTerminal.tsx";

interface ProductItem {
  id: string;
  name: string;
  tag: string;
  badge: string;
  badgeColor: string;
  tabAccent: string;
  icon: any;
  headline: string;
  summary: string;
  focus: string;
  results: string[];
  features: string[];
  primaryCtaText: string;
  whatsappMessage: string;
  demoUrl?: string;
  demoLabel?: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "easyconnect",
    name: "EasyConnect",
    tag: "WhatsApp & Atendimento Omnichannel",
    badge: "Produção 24/7",
    badgeColor: "bg-[#25D366] text-black border-black",
    tabAccent: "bg-[#25D366] text-black border-black",
    icon: MessageSquare,
    headline: "Seu WhatsApp transformado em canal profissional de vendas e suporte com IA.",
    summary: "Múltiplos atendentes em um único número oficial, triagem automática com IA contextual, fila inteligente e webhooks síncronos com seu banco de dados.",
    focus: "Elimina perda de leads no WhatsApp, clientes esperando horas e histórico disperso em celulares de vendedores.",
    results: [
      "Zero perda de leads por demora no primeiro contato (resposta < 15s)",
      "Histórico 100% auditável centralizado no banco corporativo",
      "Roteamento automático para o atendente certo por regras de negócio"
    ],
    features: [
      "Multi-dispositivo e atendentes simultâneos",
      "Agente de triagem inteligente com IA",
      "Webhooks síncronos com PostgreSQL / MySQL",
      "Painel de telemetria e fila ao vivo"
    ],
    primaryCtaText: "Quero o EasyConnect na Minha Empresa",
    whatsappMessage: "Olá Rogger, quero conhecer e implantar o EasyConnect na minha empresa"
  },
  {
    id: "planner-sdr",
    name: "Planner SDR",
    tag: "Gestão de Tarefas, Vendas & Produtividade",
    badge: "Demo Online Ativa",
    badgeColor: "bg-gradient-to-r from-violet-600 to-blue-600 text-white border-black",
    tabAccent: "bg-gradient-to-r from-violet-600 to-blue-600 text-white border-black",
    icon: Boxes,
    headline: "Controle total da operação sem planilhas perdidas e sem reuniões intermináveis.",
    summary: "Quadro Kanban dinâmico com IA explicável nativa, relatórios executivos semanais automáticos e notificações síncronas via WhatsApp e E-mail.",
    focus: "Resolve a falta de clareza nas prioridades da equipe e elimina horas semanais de cobrança e alinhamentos manuais.",
    results: [
      "Redução de até 70% no tempo gasto em reuniões de alinhamento",
      "Visibilidade instantânea para diretoria do status de cada projeto",
      "Relatórios executivos semanais gerados por IA nativa"
    ],
    features: [
      "Kanban interativo de alta precisão",
      "Relatórios de status gerados por IA",
      "Disparos automáticos via SMTP e WhatsApp",
      "Ambiente multi-workspace isolado"
    ],
    primaryCtaText: "Licenciar Planner SDR",
    whatsappMessage: "Olá Rogger, quero uma demonstração do Planner SDR para minha empresa",
    demoUrl: "https://planner-sdr.broscotech.com.br",
    demoLabel: "Abrir Demonstração Real"
  },
  {
    id: "easydev-crm",
    name: "EasyDev CRM",
    tag: "CRM B2B & Gestão Multimoeda",
    badge: "Multi-Moeda B2B",
    badgeColor: "bg-[#FF5500] text-white border-black",
    tabAccent: "bg-[#FF5500] text-white border-black",
    icon: DollarSign,
    headline: "Feche propostas mais rápido com um CRM desenhado para o ritmo real do seu comercial.",
    summary: "Pipeline visual de negócios sob medida, cálculo dinâmico de propostas, suporte nativo a multimoeda com câmbio em tempo real e automação de contratos.",
    focus: "Elimina propostas esquecidas sem follow-up e simplifica contratos internacionais em USD, EUR e BRL.",
    results: [
      "Visão consolidada de pipeline em Real, Dólar e Euro no mesmo painel",
      "Aumento imediato na taxa de conversão e follow-up pontual",
      "Emissão ágil de propostas comerciais personalizadas"
    ],
    features: [
      "Pipeline visual drag-and-drop",
      "Conversão de moedas em tempo real",
      "Histórico integrado de interações",
      "Geração automatizada de propostas e PDFs"
    ],
    primaryCtaText: "Conhecer o CRM na EasyDev",
    whatsappMessage: "Olá Rogger, quero implantar o EasyDev CRM no meu setor comercial",
    demoUrl: "https://easydev.com.br",
    demoLabel: "Conhecer Portal EasyDev"
  },
  {
    id: "dripcast",
    name: "DripCast",
    tag: "Automação de Conteúdo & Fila Contínua",
    badge: "Fila Redis 7.2",
    badgeColor: "bg-[#00F0FF] text-black border-black",
    tabAccent: "bg-[#00F0FF] text-black border-black",
    icon: Calendar,
    headline: "Presença digital recorrente para sua empresa sem precisar passar o dia criando posts.",
    summary: "Central de ideias estruturada, motor de aprovação rápida e distribuição contínua agendada em múltiplos canais com motor de filas em Redis.",
    focus: "Acaba com a inconsistência nas postagens institucionais e centraliza a aprovação de conteúdo em um clique.",
    results: [
      "Campanhas ativas por 30 dias com distribuição programada",
      "Disparo multicanal simultâneo (LinkedIn, Instagram e X)",
      "Fila assíncrona tolerante a falhas de rede"
    ],
    features: [
      "Motor de pautas com inteligência artificial",
      "Fluxo de aprovação em um clique",
      "Fila assíncrona tolerante a falhas (Redis)",
      "Histórico de publicações e métricas"
    ],
    primaryCtaText: "Quero Automação de Conteúdo",
    whatsappMessage: "Olá Rogger, quero saber mais sobre o DripCast para minhas redes e canais"
  },
  {
    id: "hermes-fleet",
    name: "Hermes Fleet",
    tag: "Inteligência Artificial Autônoma 24/7",
    badge: "Multi-Agente Ativo",
    badgeColor: "bg-[#A855F7] text-white border-black",
    tabAccent: "bg-[#A855F7] text-white border-black",
    icon: Bot,
    headline: "Agentes autônomos que pesquisam, codificam e executam tarefas contínuas no seu negócio.",
    summary: "Frota coordenada de agentes de IA com papéis especializados (SDR, Suporte, DevOps, Scout), memória duradoura e governança por Telegram e Discord.",
    focus: "Libera sua equipe de rotinas mecânicas de triagem, monitoramento de servidores e relatórios manuais repetitivos.",
    results: [
      "Operação ininterrupta 24 horas por dia, 7 dias por semana",
      "Ações no mundo real com APIs, bancos relacionais e scripts",
      "Logs 100% auditáveis e zero alucinação com guardrails rígidos"
    ],
    features: [
      "Orquestração determinística multi-agente",
      "Memória persistente em SQLite e vetores",
      "Controle direto via Telegram e Discord",
      "Ambiente Docker isolado em servidor privado"
    ],
    primaryCtaText: "Quero Agentes de IA na Minha Operação",
    whatsappMessage: "Olá Rogger, quero entender como a frota de IA Hermes pode rodar no meu negócio"
  }
];

export default function ProductShowcase() {
  const [selectedProductId, setSelectedProductId] = useState<string>("easyconnect");

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const renderMockup = (id: string) => {
    switch (id) {
      case "easyconnect":
        return <EasyConnectMockup />;
      case "planner-sdr":
        return <PlannerSdrMockup />;
      case "dripcast":
        return <DripCastMockup />;
      case "easydev-crm":
        return <EasyDevCrmMockup />;
      case "hermes-fleet":
        return (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-900 border-2 border-slate-700 flex items-center justify-between text-xs text-slate-300 shadow-[2px_2px_0px_#000]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-bold text-white font-mono">Hermes Fleet CLI Telemetry</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-400 font-mono text-[11px]">5 Agentes Ativos</span>
              </div>
              <span className="text-emerald-400 font-mono font-bold text-[11px]">Docker Containerized</span>
            </div>
            <LiveInteractiveTerminal />
          </div>
        );
      default:
        return <PlannerSdrMockup />;
    }
  };

  return (
    <section id="produtos" className="space-y-8 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000] shrink-0 whitespace-nowrap">
            <Flame className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>VITRINE DE SOFTWARES PRONTOS PARA USO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Softwares reais. Prontos para rodar no seu negócio.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-medium">
            Sistemas desenvolvidos com arquitetura sênior, operando com dados reais e disponíveis para implantação ou adaptação sob medida pela EasyDev.
          </p>
        </div>

        {/* Global Catalog CTA */}
        <a
          href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20um%20diagnóstico%20técnico%20gratuito%20para%20minha%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] shrink-0 whitespace-nowrap self-start lg:self-center"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Falar Direto no WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>

      {/* Product Navigation Pills (Neo-Brutalist Tabs) */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {PRODUCTS.map((prod) => {
          const Icon = prod.icon;
          const isSelected = prod.id === selectedProductId;
          return (
            <button
              key={prod.id}
              onClick={() => setSelectedProductId(prod.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-black transition whitespace-nowrap shrink-0 cursor-pointer border-2 ${
                isSelected
                  ? `${prod.tabAccent} shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]`
                  : "bg-white dark:bg-[#12162b] text-slate-700 dark:text-slate-300 border-slate-900 dark:border-indigo-900/60 hover:bg-slate-100 dark:hover:bg-[#181d38] shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#6366f1]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="shrink-0">{prod.name}</span>
              <span
                className={`text-[9px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                  isSelected
                    ? "bg-black/20 text-current border-current font-black"
                    : prod.badgeColor
                }`}
              >
                {prod.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Selected Product Card Showcase */}
      <div className="bg-white dark:bg-[#0c0e1e] rounded-3xl border-2 border-slate-900 dark:border-indigo-900/60 p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Product Details & Value Proposition (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-400 dark:border-slate-600 shrink-0 whitespace-nowrap">
                  {selectedProduct.tag}
                </span>
                <span className={`text-[11px] font-mono font-black px-2.5 py-0.5 rounded border shrink-0 whitespace-nowrap ${selectedProduct.badgeColor}`}>
                  {selectedProduct.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {selectedProduct.headline}
              </h3>
            </div>

            {/* Clear Value Narrative */}
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
              {selectedProduct.summary}
            </p>

            {/* Focus / Gargalo que resolve */}
            <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-400/60 dark:border-indigo-800/80 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
              <span className="font-mono font-black text-indigo-600 dark:text-cyan-400 shrink-0 uppercase text-[10px] pt-0.5 whitespace-nowrap">
                O QUE RESOLVE:
              </span>
              <span className="font-medium leading-relaxed">{selectedProduct.focus}</span>
            </div>

            {/* Results Bullet Points */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Impacto Operacional Mensurável:
              </div>
              <div className="space-y-2">
                {selectedProduct.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-black flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5 border border-black">
                      ✓
                    </span>
                    <span className="leading-snug font-medium">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Chips */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Especificações de Engenharia:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#12162b] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-indigo-900/60 shrink-0 whitespace-nowrap"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={`https://wa.me/5541991747318?text=${encodeURIComponent(selectedProduct.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000] shrink-0 whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>{selectedProduct.primaryCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {selectedProduct.demoUrl && (
                <a
                  href={selectedProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-[#12162b] text-slate-900 dark:text-white text-xs font-black transition border-2 border-black dark:border-indigo-900/60 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] hover:bg-slate-100 dark:hover:bg-[#181d38] shrink-0 whitespace-nowrap"
                >
                  <span>{selectedProduct.demoLabel || "Ver Demonstração"}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Mockup (6 cols) */}
          <div className="lg:col-span-6 w-full">
            {renderMockup(selectedProduct.id)}
          </div>

        </div>
      </div>
    </section>
  );
}