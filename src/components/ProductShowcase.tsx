import React, { useState } from 'react';
import {
  MessageSquare,
  Boxes,
  Calendar,
  DollarSign,
  Bot,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Phone,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Check,
  Flame
} from 'lucide-react';
import {
  EasyConnectMockup,
  PlannerSdrMockup,
  DripCastMockup,
  EasyDevCrmMockup
} from './ProductMockups.tsx';
import LiveInteractiveTerminal from './LiveInteractiveTerminal.tsx';

interface ProductItem {
  id: string;
  name: string;
  tag: string;
  badge: string;
  badgeColor: string;
  tabAccent: string;
  icon: any;
  headline: string;
  problem: string;
  solution: string;
  results: string[];
  features: string[];
  primaryCtaText: string;
  whatsappMessage: string;
  demoUrl?: string;
  demoLabel?: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'easyconnect',
    name: 'EasyConnect',
    tag: 'Plataforma WhatsApp & Atendimento Omnichannel',
    badge: 'Produção 24/7',
    badgeColor: 'bg-[#25D366] text-black border-black',
    tabAccent: 'bg-[#25D366] text-black border-black',
    icon: MessageSquare,
    headline: 'Seu WhatsApp transformado em canal profissional de vendas e suporte com IA.',
    problem: 'Atendimento desorganizado, clientes esperando horas por resposta e leads qualificados perdidos no limbo sem registro no CRM.',
    solution: 'Múltiplos atendentes em um único número oficial, triagem automática com IA contextual, fila de espera inteligente e webhooks síncronos com seu banco de dados.',
    results: [
      'Zero perda de leads por demora no primeiro contato (tempo médio < 15 segundos)',
      'Aumento imediato de produtividade da equipe comercial e histórico 100% auditável',
      'Encaminhamento automático para o vendedor certo baseado no perfil do cliente'
    ],
    features: [
      'Multi-dispositivo e múltiplos atendentes simultâneos',
      'Agente SDR de triagem inteligente com IA',
      'Webhooks e integração direta com PostgreSQL/MySQL',
      'Painel de métricas e tempo de resposta ao vivo'
    ],
    primaryCtaText: 'Quero o EasyConnect na Minha Empresa',
    whatsappMessage: 'Olá Rogger, quero conhecer e implantar o EasyConnect na minha empresa'
  },
  {
    id: 'planner-sdr',
    name: 'Planner SDR',
    tag: 'Gestão de Tarefas, Vendas & Produtividade com IA',
    badge: 'Demo Online Ativa',
    badgeColor: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white border-black',
    tabAccent: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white border-black',
    icon: Boxes,
    headline: 'Controle total da operação sem planilhas perdidas e sem cobrança manual de equipe.',
    problem: 'Tarefas descentralizadas, falta de clareza sobre prioridades da semana e horas perdidas em reuniões diárias de alinhamento.',
    solution: 'Quadro Kanban dinâmico com IA explicável nativa, relatórios executivos semanais zero-input e lembretes automáticos via WhatsApp e E-mail.',
    results: [
      'Redução de até 70% do tempo gasto em reuniões de acompanhamento e alinhamento',
      'Visibilidade instantânea para diretoria do status de cada projeto e gargalo',
      'Relatórios executivos gerados por IA com reasoning transparente'
    ],
    features: [
      'Kanban interativo de alta precisão com drag-and-drop',
      'Relatórios de status executivos gerados por IA nativa',
      'Disparos automáticos de notificações via Brevo SMTP e WhatsApp',
      'Ambiente multi-workspace com autenticação segura'
    ],
    primaryCtaText: 'Licenciar Planner SDR',
    whatsappMessage: 'Olá Rogger, quero uma demonstração do Planner SDR para minha empresa',
    demoUrl: 'https://planner-sdr.broscotech.com.br',
    demoLabel: 'Abrir Demonstração Real'
  },
  {
    id: 'dripcast',
    name: 'DripCast',
    tag: 'Automação de Conteúdo & Fila Contínua',
    badge: 'Fila Redis 7.2',
    badgeColor: 'bg-[#00F0FF] text-black border-black',
    tabAccent: 'bg-[#00F0FF] text-black border-black',
    icon: Calendar,
    headline: 'Presença digital recorrente para sua empresa sem precisar passar o dia criando posts.',
    problem: 'Falta de consistência em publicações de negócios, esquecimento de postagens e horas manuais perdidas em plataformas individuais.',
    solution: 'Central de ideias estruturada, motor de aprovação rápida e distribuição contínua agendada em múltiplos canais com motor de filas em Redis.',
    results: [
      'Campanhas e autoridade ativas por 30 dias sem esforço diário manual',
      'Distribuição multicanal simultânea (LinkedIn, Instagram e X)',
      'Eliminação total de esquecimento de cronograma de marketing'
    ],
    features: [
      'Motor de geração de pautas com inteligência artificial',
      'Fluxo de aprovação em um clique antes da publicação',
      'Fila de background assíncrona tolerante a falhas',
      'Histórico de engajamento e métricas de alcance'
    ],
    primaryCtaText: 'Quero Automação de Conteúdo',
    whatsappMessage: 'Olá Rogger, quero saber mais sobre o DripCast para minhas redes e canais'
  },
  {
    id: 'easydev-crm',
    name: 'EasyDev CRM',
    tag: 'CRM B2B & Gestão de Contratos Multimoeda',
    badge: 'Multi-Moeda B2B',
    badgeColor: 'bg-[#FF5500] text-white border-black',
    tabAccent: 'bg-[#FF5500] text-white border-black',
    icon: DollarSign,
    headline: 'Feche propostas mais rápido com um CRM desenhado para o ritmo real do seu comercial.',
    problem: 'Propostas comerciais esquecidas em follow-up, dificuldade para gerenciar contratos em moedas estrangeiras (USD/EUR) e previsibilidade de caixa zero.',
    solution: 'Pipeline visual de negócios sob medida, cálculo dinâmico de propostas, suporte nativo a multimoeda com câmbio em tempo real e automação de contratos.',
    results: [
      'Aumento na taxa de conversão comercial e zero propostas esquecidas',
      'Visão consolidada de pipeline em Real, Dólar e Euro no mesmo painel',
      'Follow-up automático notificando os executivos sobre prazos críticos'
    ],
    features: [
      'Funil de vendas visual e customizável por linha de negócio',
      'Suporte nativo a transações em BRL, USD e EUR',
      'Geração automatizada de propostas e minutas de contrato',
      'Integração com bancos relacionais e dashboards executivos'
    ],
    primaryCtaText: 'Conhecer o EasyDev CRM',
    whatsappMessage: 'Olá Rogger, quero implantar o EasyDev CRM no meu setor comercial',
    demoUrl: 'https://easydev.com.br',
    demoLabel: 'Conhecer Portal EasyDev'
  },
  {
    id: 'hermes-fleet',
    name: 'Hermes Fleet',
    tag: 'Inteligência Artificial Autônoma 24/7',
    badge: 'Multi-Agente Ativo',
    badgeColor: 'bg-[#A855F7] text-white border-black',
    tabAccent: 'bg-[#A855F7] text-white border-black',
    icon: Bot,
    headline: 'Agentes autônomos que pesquisam, codificam e executam tarefas contínuas no seu negócio.',
    problem: 'Equipes sobrecarregadas com rotinas repetitivas de análise de dados, monitoramento de sistemas e operações manuais de TI.',
    solution: 'Frota coordenada de agentes de IA com papéis especializados (Orchestrator, Dev, Scout, Scribe, Reach), memória duradoura e governança por Telegram e Discord.',
    results: [
      'Execução ininterrupta 24 horas por dia, 7 dias por semana',
      'Automação de fluxos complexos de engenharia, deploys e monitoramento',
      'Redução de custos operacionais com escala sob demanda'
    ],
    features: [
      'Orquestração determinística multi-agente',
      'Persistência de memória contextual em SQLite e vetores',
      'Interface de controle direto via Telegram Bot e Discord',
      'Execução de scripts, testes de software e deploys em servidores'
    ],
    primaryCtaText: 'Quero Agentes de IA na Minha Operação',
    whatsappMessage: 'Olá Rogger, quero entender como agentes de IA podem rodar no meu negócio'
  }
];

export default function ProductShowcase() {
  const [selectedProductId, setSelectedProductId] = useState<string>('easyconnect');

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const renderMockup = (id: string) => {
    switch (id) {
      case 'easyconnect':
        return <EasyConnectMockup />;
      case 'planner-sdr':
        return <PlannerSdrMockup />;
      case 'dripcast':
        return <DripCastMockup />;
      case 'easydev-crm':
        return <EasyDevCrmMockup />;
      case 'hermes-fleet':
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
            <Flame className="w-3.5 h-3.5 fill-white" />
            <span>VITRINE DE SOFTWARES PRONTOS PARA USO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Softwares reais. Prontos para rodar no seu negócio.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Chega de slide em PowerPoint e promessas vazias. Sistemas desenvolvidos com arquitetura sênior, operando com dados reais e disponíveis para implantação ou adaptação sob medida.
          </p>
        </div>

        {/* Global Catalog CTA */}
        <a
          href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20um%20diagnóstico%20técnico%20gratuito%20para%20minha%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] shrink-0 self-start lg:self-center"
        >
          <Phone className="w-4 h-4" />
          <span>Falar Direto no WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
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
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-black transition whitespace-nowrap cursor-pointer border-2 ${
                isSelected
                  ? `${prod.tabAccent} shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]`
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-900 dark:border-indigo-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#6366f1]'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{prod.name}</span>
              <span
                className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                  isSelected
                    ? 'bg-black/20 text-current border-current font-black'
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
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-400 dark:border-slate-600">
                  {selectedProduct.tag}
                </span>
                <span className={`text-[11px] font-mono font-black px-2.5 py-0.5 rounded border ${selectedProduct.badgeColor}`}>
                  {selectedProduct.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {selectedProduct.headline}
              </h3>
            </div>

            {/* Pain & Solution Grid */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900/60 space-y-1 shadow-xs">
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-rose-700 dark:text-rose-400">
                  ✕ O Gargalo que Resolve:
                </div>
                <p className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed font-medium">
                  {selectedProduct.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-500 dark:border-emerald-600 space-y-1 shadow-xs">
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  ✓ A Solução em Produção:
                </div>
                <p className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed font-semibold">
                  {selectedProduct.solution}
                </p>
              </div>
            </div>

            {/* Results Bullet Points */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Impacto Operacional Mensurável:
              </div>
              <div className="space-y-2">
                {selectedProduct.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-black">
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
                Especificações Técnicas:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-2 border-slate-300 dark:border-indigo-900/60"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black transition border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>{selectedProduct.primaryCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {selectedProduct.demoUrl && (
                <a
                  href={selectedProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-black transition border-2 border-black dark:border-indigo-900/60 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span>{selectedProduct.demoLabel || 'Ver Demonstração'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Browser Frame Mockup (6 cols) */}
          <div className="lg:col-span-6 w-full">
            {renderMockup(selectedProduct.id)}
          </div>

        </div>
      </div>
    </section>
  );
}
