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
  Globe,
  Share2,
  PhoneCall,
  Flame,
  Check
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
  badgeColor = 'bg-[#D4FF00] text-black border-black',
  children,
  actionUrl,
  actionLabel = 'Abrir Demonstração',
}: BrowserFrameProps) {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0b1120] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#10b981] transition-all">
      {/* Top Browser Bar */}
      <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5555] border border-black/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffb86c] border border-black/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#50fa7b] border border-black/40 inline-block" />
        </div>

        {/* Address bar */}
        <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5 shadow-inner">
          <span className="text-emerald-500 font-bold">https://</span>
          <span className="font-semibold">{url}</span>
        </div>

        {/* Status Badge & External Action */}
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded border ${badgeColor}`}>
            {badge}
          </span>
          {actionUrl && (
            <a
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-900 hover:bg-indigo-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-black text-[10px] font-bold transition shadow-xs"
            >
              <span>{actionLabel}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          )}
        </div>
      </div>

      {/* Frame Content */}
      <div className="p-3.5 sm:p-5">{children}</div>
    </div>
  );
}

// 1. EasyConnect Mockup (WhatsApp Omnichannel + AI SDR Engine)
export function EasyConnectMockup() {
  return (
    <ProductBrowserFrame
      url="easyconnect.broscotech.com.br"
      title="EasyConnect — Motor WhatsApp & Atendimento Omnichannel"
      badge="24/7 ONLINE"
      badgeColor="bg-[#25D366] text-black border-black"
    >
      <div className="space-y-3 font-sans">
        {/* WhatsApp Real-feel Header */}
        <div className="p-3 rounded-xl bg-[#075E54] dark:bg-[#005c4b] text-white flex items-center justify-between border-2 border-black/20 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center font-bold text-xs text-white">
                DA
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-white">Distribuidora Alfa (Lead B2B)</span>
                <span className="text-[10px] bg-emerald-400/20 text-emerald-200 border border-emerald-400/40 px-1.5 py-0.2 rounded font-mono font-bold">
                  VERIFICADO ✓
                </span>
              </div>
              <div className="text-[11px] text-emerald-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span>+55 (41) 99174-7318 • Atendimento em Andamento</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] bg-black/25 px-2.5 py-1 rounded-md text-emerald-200">
            <Bot className="w-3.5 h-3.5 text-emerald-300" />
            <span>SDR IA ATIVO</span>
          </div>
        </div>

        {/* WhatsApp Chat Log */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#EFEAE2] dark:bg-[#0b141a] space-y-3 text-xs border border-slate-300 dark:border-slate-800">
          
          {/* Client Message */}
          <div className="flex items-start gap-2 max-w-[85%] sm:max-w-[75%]">
            <div className="p-3 rounded-2xl rounded-tl-none bg-white dark:bg-[#202c33] text-slate-900 dark:text-slate-100 shadow-sm space-y-1 border border-slate-200 dark:border-slate-700">
              <p className="font-medium text-xs leading-relaxed">
                Olá Rogger! Preciso organizar o WhatsApp da minha empresa. Somos 8 vendedores usando celular pessoal e perdendo vários orçamentos por semana.
              </p>
              <div className="text-[9px] text-slate-400 text-right font-mono">10:42</div>
            </div>
          </div>

          {/* AI SDR Immediate Response */}
          <div className="flex items-start justify-end gap-2 ml-auto max-w-[90%] sm:max-w-[80%]">
            <div className="p-3 rounded-2xl rounded-tr-none bg-[#005c4b] text-white shadow-md space-y-1.5 border border-emerald-400/30">
              <div className="flex items-center justify-between gap-2 text-[10px] font-bold text-emerald-200 border-b border-emerald-600/50 pb-1 font-mono">
                <div className="flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5 text-emerald-300" />
                  <span>EasyConnect AI SDR • Triagem Contextual</span>
                </div>
                <span className="text-[9px] bg-emerald-800/80 px-1.5 py-0.2 rounded text-emerald-100">
                  Resposta: 1.8s
                </span>
              </div>
              <p className="text-emerald-50 text-xs leading-relaxed">
                Fala Carlos! O EasyConnect resolve isso centralizando todos os 8 vendedores em um <strong>único número oficial</strong>, com triagem inteligente, distribuição em rodízio e webhook síncrono para seu banco de dados.
              </p>
              <div className="flex items-center justify-between text-[10px] text-emerald-200 font-mono pt-1">
                <span className="text-[9px]">Lido 10:42 • Registro gravado no CRM</span>
                <CheckCheck className="w-3.5 h-3.5 text-cyan-300 inline" />
              </div>
            </div>
          </div>

          {/* Lead Qualification & Smart Routing Badge */}
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border-2 border-amber-400 dark:border-amber-600 text-amber-950 dark:text-amber-200 flex flex-wrap items-center justify-between gap-2 text-[11px] shadow-xs">
            <div className="flex items-center gap-2 font-bold font-mono">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>LEAD QUALIFICADO: Score 96/100 (B2B Médio Porte)</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-600 text-white font-mono text-[10px] font-black">
              TRANSFERIDO P/ CONSULTOR COMERCIAL
            </span>
          </div>

          {/* Quick Action Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-600 text-slate-800 dark:text-slate-100 text-[11px] font-bold shadow-[2px_2px_0px_#000] hover:translate-x-[-1px] transition">
              📅 Agendar Demonstração
            </button>
            <button className="px-3 py-1 rounded-full bg-emerald-500 text-black border-2 border-black text-[11px] font-black shadow-[2px_2px_0px_#000] hover:translate-x-[-1px] transition">
              💬 Testar no WhatsApp Agora
            </button>
            <button className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-600 text-slate-800 dark:text-slate-100 text-[11px] font-bold shadow-[2px_2px_0px_#000] hover:translate-x-[-1px] transition">
              📑 Ver Modelo de Contrato
            </button>
          </div>
        </div>

        {/* Live Operational Metrics Footer */}
        <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono pt-1">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#10b981]">
            <div className="text-[10px] font-bold text-slate-500 uppercase">1ª Resposta</div>
            <div className="text-emerald-600 dark:text-emerald-400 font-black text-sm">&lt; 15s (Zero Fila)</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#10b981]">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Atendentes</div>
            <div className="text-indigo-600 dark:text-indigo-400 font-black text-sm">Multi-Operador</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#10b981]">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Banco de Dados</div>
            <div className="text-slate-900 dark:text-white font-black text-sm">PostgreSQL 17</div>
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
      title="Planner SDR — Gestão & Metas com IA"
      badge="DEMO AO VIVO"
      badgeColor="bg-[#D4FF00] text-black border-black"
      actionUrl="https://planner-sdr.broscotech.com.br"
      actionLabel="Testar Demo Real"
    >
      <div className="space-y-3.5 font-sans">
        {/* Kanban Top Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] text-xs">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-slate-900 dark:text-white text-sm">Quadro Operacional & Vendas</span>
            <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10px] font-bold">
              Sprint #42 Ativa
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span className="font-bold text-emerald-600 dark:text-emerald-400">18 de 21 Tarefas Entregues (86%)</span>
          </div>
        </div>

        {/* Kanban 3-Column Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          {/* Column 1: A Fazer */}
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border-2 border-slate-300 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b-2 border-slate-300 dark:border-slate-800">
              <span className="font-black text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase">
                A Fazer
              </span>
              <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                2
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black font-mono px-1.5 py-0.5 rounded bg-amber-400 text-black border border-black">
                  COMERCIAL B2B
                </span>
                <span className="text-[10px] font-mono text-slate-400">16:00</span>
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                Reunião Fechamento Grupo Solar Sul
              </p>
              <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                R$ 32.000 / contrato
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 space-y-1.5 shadow-xs">
              <span className="text-[9px] font-black font-mono px-1.5 py-0.5 rounded bg-indigo-500 text-white border border-black">
                JURÍDICO
              </span>
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                Envio da minuta contratual assinada
              </p>
              <div className="text-[10px] font-mono text-slate-400">Amanhã • 10:00</div>
            </div>
          </div>

          {/* Column 2: Em Andamento */}
          <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border-2 border-indigo-600 dark:border-indigo-500 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b-2 border-indigo-200 dark:border-indigo-800">
              <span className="font-black text-indigo-700 dark:text-indigo-300 font-mono text-[11px] uppercase">
                Em Andamento
              </span>
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">
                1
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border-2 border-indigo-500 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black font-mono px-1.5 py-0.5 rounded bg-[#D4FF00] text-black border border-black">
                  PRIORIDADE MÁXIMA
                </span>
                <Clock className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
              </div>
              <p className="text-xs font-black text-slate-900 dark:text-white leading-tight">
                Homologação EasyConnect v2 c/ Webhook Síncrono
              </p>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Progresso</span>
                  <span className="font-bold text-indigo-600">85%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden border border-black/10">
                  <div className="bg-indigo-600 h-full w-[85%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Concluído */}
          <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border-2 border-emerald-600 dark:border-emerald-500 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b-2 border-emerald-200 dark:border-emerald-800">
              <span className="font-black text-emerald-700 dark:text-emerald-300 font-mono text-[11px] uppercase">
                Concluído
              </span>
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                8
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-emerald-300 dark:border-emerald-800 space-y-1 shadow-xs">
              <span className="text-[9px] font-black font-mono px-1.5 py-0.5 rounded bg-emerald-500 text-white border border-black">
                DEPLOY OK ✓
              </span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                Migração PostgreSQL 17 sem downtime
              </p>
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                SLA 99.9% Garantido
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-emerald-300 dark:border-emerald-800 space-y-1 shadow-xs">
              <span className="text-[9px] font-black font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 border border-black">
                AUTOMAÇÃO
              </span>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 line-through leading-tight">
                Onboarding da Equipe Comercial
              </p>
              <div className="text-[10px] font-mono text-slate-400">Entregue na Sprint</div>
            </div>
          </div>

        </div>

        {/* AI Executive Summary Chip & Direct Demo Link */}
        <div className="p-3 rounded-xl bg-slate-900 text-white border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-[2px_2px_0px_#000]">
          <div className="flex items-center gap-2.5">
            <Bot className="w-4 h-4 text-[#D4FF00] shrink-0" />
            <span className="text-xs text-slate-200">
              <strong className="text-white">Relatório Automático por IA:</strong> 70% menos reuniões operacionais e alinhamento direto no WhatsApp da liderança.
            </span>
          </div>

          <a
            href="https://planner-sdr.broscotech.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#D4FF00] hover:bg-yellow-300 text-black font-black text-xs transition flex items-center justify-center gap-1.5 shrink-0 border-2 border-black shadow-[2px_2px_0px_#fff]"
          >
            <span>Ver Demonstração Real</span>
            <ExternalLink className="w-3.5 h-3.5" />
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
      title="DripCast — Automação de Conteúdo & Fila Redis"
      badge="REDIS QUEUE"
      badgeColor="bg-[#00F0FF] text-black border-black"
    >
      <div className="space-y-3 font-sans">
        {/* Top Status */}
        <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] text-xs">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-500" />
            <span className="font-extrabold text-slate-900 dark:text-white">Motor de Pautas & Publicação Contínua</span>
          </div>
          <span className="text-xs font-mono font-black text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-400">
            30 DIAS DE AUTONOMIA
          </span>
        </div>

        {/* Scheduled Posts Timeline */}
        <div className="space-y-2.5">
          {/* Post 1: Published LinkedIn */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-between gap-3 text-xs shadow-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#0077b5] text-white font-black font-mono text-[10px] border border-black">
                LINKEDIN
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xs">
                  "Como arquitetar sistemas sem retrabalho operacional e sem débitos técnicos"
                </p>
                <span className="text-[10px] text-slate-400 font-mono">Publicado às 09:00 • 2.4k visualizações</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-black font-black font-mono text-[10px] border border-black shrink-0">
              PUBLICADO ✓
            </span>
          </div>

          {/* Post 2: Queued Today Instagram */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-pink-500 dark:border-pink-500 flex items-center justify-between gap-3 text-xs shadow-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black font-mono text-[10px] border border-black">
                INSTAGRAM
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xs">
                  Carrossel: "5 pilares para transformar seu WhatsApp em máquina de vendas"
                </p>
                <span className="text-[10px] text-slate-400 font-mono">Agendado para hoje às 18:30 • Fila ativa</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-pink-500 text-white font-black font-mono text-[10px] border border-black shrink-0 animate-pulse">
              AGENDADO ⏳
            </span>
          </div>

          {/* Post 3: Queued Tomorrow X */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 flex items-center justify-between gap-3 text-xs shadow-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-black text-white font-black font-mono text-[10px] border border-slate-600">
                X / TWITTER
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xs">
                  Thread: "Por que bancos PostgreSQL isolados protegem sua operação melhor que SaaS genérico"
                </p>
                <span className="text-[10px] text-slate-400 font-mono">Amanhã • Fila assíncrona Redis</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-black font-mono text-[10px] border border-black shrink-0">
              FILA REDIS
            </span>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border-2 border-cyan-400 dark:border-cyan-700 flex items-center justify-between text-xs font-mono">
          <span className="text-cyan-950 dark:text-cyan-200 font-bold">
            Ideias geradas por IA com aprovação em 1 clique antes de postar
          </span>
          <span className="text-black bg-[#00F0FF] px-2 py-0.5 rounded font-black border border-black">
            ZERO POSTAGEM MANUAL
          </span>
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
      title="EasyDev CRM — Gestão Comercial B2B & Multimoeda"
      badge="MULTIMOEDA B2B"
      badgeColor="bg-[#FF5500] text-white border-black"
      actionUrl="https://dev.easydev.com.br"
      actionLabel="Acessar Portal"
    >
      <div className="space-y-3 font-sans">
        {/* Currency Switcher & Stats */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#000] text-xs">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-slate-900 dark:text-white text-sm">Pipeline B2B Ativo</span>
            <div className="flex items-center gap-1 font-mono text-[10px] bg-slate-200 dark:bg-slate-800 p-1 rounded-lg border border-black">
              <span className="px-2 py-0.5 rounded bg-violet-600 text-white font-black">BRL (R$)</span>
              <span className="px-2 py-0.5 text-slate-700 dark:text-slate-300 font-bold">USD ($)</span>
              <span className="px-2 py-0.5 text-slate-700 dark:text-slate-300 font-bold">EUR (€)</span>
            </div>
          </div>
          <div className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-400">
            TOTAL EM NEGOCIAÇÃO: R$ 384.500
          </div>
        </div>

        {/* 3 Pipeline Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {/* Stage 1: Qualificação */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-700">
              <span className="font-black text-slate-800 dark:text-slate-200 font-mono text-[11px] uppercase">
                Qualificação
              </span>
              <span className="font-mono text-slate-500 font-bold text-[11px]">R$ 72.000</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white text-xs">Indústria Metalúrgica PR</p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold">R$ 48.000</div>
              <div className="text-[10px] text-slate-500">Lead triado via WhatsApp SDR</div>
            </div>
          </div>

          {/* Stage 2: Proposta Enviada */}
          <div className="p-3 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border-2 border-violet-600 dark:border-violet-500 space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-violet-200 dark:border-violet-800">
              <span className="font-black text-violet-700 dark:text-violet-300 font-mono text-[11px] uppercase">
                Proposta Enviada
              </span>
              <span className="font-mono text-violet-700 dark:text-violet-300 font-bold text-[11px]">R$ 138.000</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border-2 border-violet-400 space-y-1 shadow-xs">
              <p className="font-bold text-slate-900 dark:text-white text-xs">FinTech Global US</p>
              <div className="text-xs text-violet-600 dark:text-violet-400 font-mono font-bold">
                US$ 22.000 <span className="text-slate-500 text-[10px]">(R$ 125.400)</span>
              </div>
              <div className="text-[10px] text-emerald-600 font-bold font-mono">Follow-up automático ativo</div>
            </div>
          </div>

          {/* Stage 3: Fechamento */}
          <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border-2 border-emerald-600 dark:border-emerald-500 space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-200 dark:border-emerald-800">
              <span className="font-black text-emerald-700 dark:text-emerald-300 font-mono text-[11px] uppercase">
                Fechamento
              </span>
              <span className="font-mono text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">R$ 174.500</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border-2 border-emerald-400 space-y-1 shadow-xs">
              <p className="font-bold text-slate-900 dark:text-white text-xs">Logística Sul Express</p>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold">R$ 64.000</div>
              <div className="text-[10px] text-slate-500">Contrato assinado digitalmente</div>
            </div>
          </div>
        </div>

        {/* Follow-up assurance */}
        <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/50 border-2 border-orange-500 text-orange-950 dark:text-orange-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
            <span>Zero propostas esquecidas: Alertas inteligentes e relatórios semanais via WhatsApp</span>
          </div>
          <span className="text-xs font-mono font-black text-white bg-orange-600 px-2.5 py-0.5 rounded border border-black">
            +42% CONVERSÃO
          </span>
        </div>
      </div>
    </ProductBrowserFrame>
  );
}
