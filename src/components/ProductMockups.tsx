import React from 'react';
import {
  MessageSquare,
  Bot,
  User,
  CheckCheck,
  Send,
  Clock,
  Sparkles,
  TrendingUp,
  DollarSign,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Activity,
  Globe
} from 'lucide-react';

interface BrowserFrameProps {
  url?: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  children: React.ReactNode;
  actionUrl?: string;
  actionLabel?: string;
}

export function ProductBrowserFrame({
  url = 'https://broscotech.com.br',
  title,
  badge = 'Produção Ativa',
  badgeColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  children,
  actionUrl,
  actionLabel = 'Abrir Demonstração',
}: BrowserFrameProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl transition-all hover:border-slate-300 dark:hover:border-slate-700">
      {/* Top Browser Bar */}
      <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Address bar */}
        <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate text-center flex items-center justify-center gap-1.5 shadow-2xs">
          <Globe className="w-3 h-3 text-indigo-500 shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {badge && (
            <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border ${badgeColor}`}>
              {badge}
            </span>
          )}
          {actionUrl && (
            <a
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>{actionLabel}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Frame Content */}
      <div className="p-4 sm:p-5 bg-slate-50/50 dark:bg-[#070b14]">
        {children}
      </div>
    </div>
  );
}

// 1. EasyConnect Mockup (WhatsApp Omnichannel & AI SDR)
export function EasyConnectMockup() {
  return (
    <ProductBrowserFrame
      url="easyconnect.broscotech.com.br"
      title="EasyConnect Omnichannel"
      badge="WhatsApp + IA Ativo"
      badgeColor="bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    >
      <div className="space-y-3 font-sans">
        {/* Top Status & SLA */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-200">Motor Omnichannel</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">3 Atendentes Online</span>
          </div>
          <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Tempo 1ª resposta: 14s
          </div>
        </div>

        {/* Chat Simulator */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-[#EFEAE2]/60 dark:bg-slate-950/80 p-3.5 space-y-2.5 text-xs">
          {/* Client Incoming */}
          <div className="flex items-start gap-2 max-w-[85%]">
            <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center shrink-0 text-[10px] font-bold text-slate-700 dark:text-slate-300">
              CL
            </div>
            <div className="p-2.5 rounded-2xl rounded-tl-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-2xs space-y-1">
              <p>Olá, preciso de um sistema para automatizar orçamentos e pedidos da minha distribuidora.</p>
              <div className="text-[9px] text-slate-400 text-right font-mono">10:42</div>
            </div>
          </div>

          {/* AI SDR Immediate Response */}
          <div className="flex items-start justify-end gap-2 ml-auto max-w-[85%]">
            <div className="p-2.5 rounded-2xl rounded-tr-none bg-emerald-600 text-white shadow-2xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-200 border-b border-emerald-500/50 pb-1">
                <Bot className="w-3 h-3" />
                <span>EasyConnect SDR IA • Triagem Automática</span>
              </div>
              <p className="text-emerald-50">
                Perfeito! Quantos vendedores atuam na equipe hoje e qual volume médio mensal de orçamentos?
              </p>
              <div className="flex items-center justify-between text-[9px] text-emerald-200 font-mono">
                <span>Respondido em 3s</span>
                <CheckCheck className="w-3 h-3 inline" />
              </div>
            </div>
          </div>

          {/* Client Reply */}
          <div className="flex items-start gap-2 max-w-[85%]">
            <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center shrink-0 text-[10px] font-bold text-slate-700 dark:text-slate-300">
              CL
            </div>
            <div className="p-2.5 rounded-2xl rounded-tl-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-2xs space-y-1">
              <p>Somos 6 vendedores e fazemos cerca de 450 orçamentos/mês.</p>
              <div className="text-[9px] text-slate-400 text-right font-mono">10:43</div>
            </div>
          </div>

          {/* System Action / Routing Chip */}
          <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Lead Qualificado: Score 92/100 (B2B Médio Porte)</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold font-mono">
              Transferido p/ Consultor
            </span>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1 font-mono">
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-400 text-[10px]">Taxa Resposta</div>
            <div className="text-emerald-500 font-bold">100% (&lt;30s)</div>
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-400 text-[10px]">Canais WhatsApp</div>
            <div className="text-indigo-400 font-bold">Multi-Dispositivo</div>
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-slate-400 text-[10px]">Histórico CRM</div>
            <div className="text-slate-200 font-bold">Sincronizado</div>
          </div>
        </div>
      </div>
    </ProductBrowserFrame>
  );
}

// 2. Planner SDR Mockup (Interactive Kanban & Real Production Demo)
export function PlannerSdrMockup() {
  return (
    <ProductBrowserFrame
      url="planner-sdr.broscotech.com.br"
      title="Planner SDR — Gestão & Metas"
      badge="Demo Online"
      badgeColor="bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
      actionUrl="https://planner-sdr.broscotech.com.br"
      actionLabel="Ver Demo Real"
    >
      <div className="space-y-3 font-sans">
        {/* Kanban Top Toolbar */}
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-100">Board Comercial & Operação</span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-mono">
              Sprint Ativa #42
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>18 de 21 Tarefas Entregues</span>
          </div>
        </div>

        {/* Kanban 3-Column Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          {/* Column 1: A Fazer */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span>A Fazer</span>
              <span className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px]">2</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500">Comercial</span>
              <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">Reunião fechamento ACME Corp</p>
              <div className="text-[9px] text-slate-400 font-mono">Hoje, 16:00</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400">Contrato</span>
              <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">Envio de minuta jurídica</p>
              <div className="text-[9px] text-slate-400 font-mono">Amanhã</div>
            </div>
          </div>

          {/* Column 2: Em Andamento */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-900/40 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-indigo-600 dark:text-indigo-400 pb-1 border-b border-indigo-100 dark:border-indigo-900/30">
              <span>Em Andamento</span>
              <span className="w-4 h-4 rounded-full bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-[10px]">1</span>
            </div>
            <div className="p-2 rounded-lg bg-indigo-50/50 dark:bg-slate-950 border border-indigo-200/80 dark:border-indigo-800/80 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Alta Prioridade</span>
                <Clock className="w-3 h-3 text-indigo-400 animate-spin" />
              </div>
              <p className="text-[11px] font-bold text-slate-900 dark:text-white">Apresentação demo com diretoria</p>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-3/4 rounded-full" />
              </div>
            </div>
          </div>

          {/* Column 3: Concluído */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-emerald-600 dark:text-emerald-400 pb-1 border-b border-slate-100 dark:border-slate-800">
              <span>Concluído</span>
              <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-[10px]">8</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1 opacity-80">
              <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Deploy Realizado</span>
              <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 line-through">Onboarding Equipe Comercial</p>
              <div className="text-[9px] text-emerald-500 font-mono">Entregue no prazo</div>
            </div>
          </div>
        </div>

        {/* AI Executive Summary Chip */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200/80 dark:border-indigo-800/80 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-indigo-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300 text-[11px]">
              <strong>Relatório Automático por IA:</strong> 70% menos reuniões operacionais e alinhamento direto via WhatsApp.
            </span>
          </div>
          <a
            href="https://planner-sdr.broscotech.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-2.5 py-1 rounded-md bg-indigo-600 text-white font-bold text-[10px] hover:bg-indigo-500 transition shadow-xs flex items-center gap-1"
          >
            <span>Testar Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </ProductBrowserFrame>
  );
}

// 3. DripCast Mockup (Social Automation & Content Queues)
export function DripCastMockup() {
  return (
    <ProductBrowserFrame
      url="dripcast.broscotech.com.br"
      title="DripCast — Automação de Conteúdo"
      badge="Fila 24/7 Ativa"
      badgeColor="bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
    >
      <div className="space-y-3 font-sans">
        {/* Top Status */}
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-cyan-500" />
            <span className="font-bold text-slate-800 dark:text-slate-100">Calendário & Motor de Publicação</span>
          </div>
          <span className="text-[11px] font-mono text-cyan-500 font-bold">30 Dias de Autonomia</span>
        </div>

        {/* Scheduled Posts Timeline */}
        <div className="space-y-2">
          {/* Post 1: Published */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold font-mono text-[10px]">LinkedIn</span>
              <p className="font-medium text-slate-800 dark:text-slate-200 text-[11px] truncate max-w-[280px]">
                "Como arquitetar sistemas sem retrabalho operacional"
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono text-slate-400">09:00</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[10px]">Publicado ✓</span>
            </div>
          </div>

          {/* Post 2: Queued Today */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-cyan-200/80 dark:border-cyan-900/60 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded bg-pink-500/10 text-pink-500 font-bold font-mono text-[10px]">Instagram</span>
              <p className="font-semibold text-slate-900 dark:text-white text-[11px] truncate max-w-[280px]">
                Carrossel: "5 pilares para transformar WhatsApp em máquina de vendas"
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono text-slate-400">18:30</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-[10px] animate-pulse">Agendado ⏳</span>
            </div>
          </div>

          {/* Post 3: Queued Tomorrow */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-400 font-bold font-mono text-[10px]">X / Twitter</span>
              <p className="font-medium text-slate-800 dark:text-slate-200 text-[11px] truncate max-w-[280px]">
                Thread: "Por que bancos PostgreSQL isolados protegem sua operação"
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-mono text-slate-400">Amanhã</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-[10px]">Fila Redis</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span>Ideias geradas por IA com aprovação em 1 clique</span>
          <span className="text-cyan-500 font-bold">Zero postagem manual</span>
        </div>
      </div>
    </ProductBrowserFrame>
  );
}

// 4. EasyDev CRM Mockup (B2B Multi-currency Deals Pipeline)
export function EasyDevCrmMockup() {
  return (
    <ProductBrowserFrame
      url="dev.easydev.com.br"
      title="EasyDev CRM — Gestão Comercial"
      badge="Multi-Moeda B2B"
      badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/30"
      actionUrl="https://dev.easydev.com.br"
      actionLabel="Acessar Portal"
    >
      <div className="space-y-3 font-sans">
        {/* Currency Switcher & Stats */}
        <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-100">Pipeline Comercial</span>
            <div className="flex items-center gap-1 font-mono text-[10px] bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md">
              <span className="px-1.5 py-0.5 rounded bg-violet-600 text-white font-bold">BRL</span>
              <span className="px-1.5 py-0.5 text-slate-500">USD</span>
              <span className="px-1.5 py-0.5 text-slate-500">EUR</span>
            </div>
          </div>
          <div className="text-[11px] font-mono text-emerald-500 font-bold">
            Total Ativo: R$ 264.500
          </div>
        </div>

        {/* 3 Pipeline Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          {/* Stage 1: Qualificação */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-slate-700 dark:text-slate-300">Qualificação</span>
              <span className="font-mono text-slate-400 text-[10px]">R$ 54.000</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white text-[11px]">Grupo Solar Sul</p>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">R$ 32.000</div>
              <div className="text-[9px] text-slate-400">Lead via WhatsApp SDR</div>
            </div>
          </div>

          {/* Stage 2: Proposta Enviada */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-violet-200 dark:border-violet-900/40 space-y-2">
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-violet-100 dark:border-violet-900/30">
              <span className="font-bold text-violet-600 dark:text-violet-400">Proposta Enviada</span>
              <span className="font-mono text-slate-400 text-[10px]">R$ 118.000</span>
            </div>
            <div className="p-2 rounded-lg bg-violet-50/50 dark:bg-slate-950 border border-violet-200/80 dark:border-violet-800/80 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white text-[11px]">Plataforma FinTech X</p>
              <div className="text-[10px] text-violet-600 dark:text-violet-400 font-mono font-bold">US$ 14.500 (R$ 82.650)</div>
              <div className="text-[9px] text-emerald-500 font-semibold">Follow-up automático ativo</div>
            </div>
          </div>

          {/* Stage 3: Fechamento */}
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">Fechamento</span>
              <span className="font-mono text-slate-400 text-[10px]">R$ 92.500</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white text-[11px]">Logística Nacional</p>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">R$ 48.000</div>
              <div className="text-[9px] text-slate-400">Contrato assinado digitalmente</div>
            </div>
          </div>
        </div>

        {/* Follow-up assurance */}
        <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero propostas esquecidas: Alertas inteligentes e relatórios semanais</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">+38% Conversão</span>
        </div>
      </div>
    </ProductBrowserFrame>
  );
}
