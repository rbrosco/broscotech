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
  ChevronRight
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
  color: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'easyconnect',
    name: 'EasyConnect',
    tag: 'Plataforma WhatsApp & Atendimento',
    badge: 'Produção 24/7',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: MessageSquare,
    headline: 'Seu WhatsApp transformado em canal profissional de vendas e suporte com IA.',
    problem: 'Atendimento desorganizado, clientes esperando horas por resposta e leads qualificados perdidos no limbo sem registro no CRM.',
    solution: 'Múltiplos atendentes em um único número oficial, triagem automática com IA contextual, fila de espera inteligente e webhooks síncronos com seu banco de dados.',
    results: [
      'Zero perda de leads por demora no primeiro contato (tempo médio de resposta < 15 segundos)',
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
    whatsappMessage: 'Olá Rogger, quero conhecer e implantar o EasyConnect na minha empresa',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'planner-sdr',
    name: 'Planner SDR',
    tag: 'Gestão de Tarefas, Vendas & Produtividade',
    badge: 'Demo Online Ativa',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
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
    demoLabel: 'Abrir Demonstração do Planner',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'dripcast',
    name: 'DripCast',
    tag: 'Automação de Conteúdo & Crescimento',
    badge: 'Fila Autônoma',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
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
    whatsappMessage: 'Olá Rogger, quero saber mais sobre o DripCast para minhas redes e canais',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'easydev-crm',
    name: 'EasyDev CRM',
    tag: 'CRM B2B & Gestão de Contratos',
    badge: 'Multi-Moeda B2B',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
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
    demoUrl: 'https://dev.easydev.com.br',
    demoLabel: 'Conhecer Portal EasyDev',
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    id: 'hermes-fleet',
    name: 'Hermes Fleet',
    tag: 'Inteligência Artificial Autônoma 24/7',
    badge: 'Multi-Agente Ativo',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
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
    whatsappMessage: 'Olá Rogger, quero entender como agentes de IA podem rodar no meu negócio',
    color: 'from-amber-500 to-orange-500'
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
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-bold text-white">Hermes Fleet CLI Telemetry</span>
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
    <section id="produtos" className="space-y-10 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>VITRINE DE SOFTWARES & PRODUTOS REAIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Softwares prontos para implantar no seu negócio.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Nada de promessas no papel. Abaixo estão plataformas construídas com arquitetura de elite, operando com dados reais e disponíveis para implantação ou adaptação sob medida.
          </p>
        </div>

        {/* Global Catalog CTA */}
        <a
          href="https://wa.me/5541991747318?text=Olá%20Rogger,%20quero%20um%20diagnóstico%20técnico%20gratuito%20para%20minha%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white text-xs font-bold transition shadow-md self-start lg:self-center shrink-0"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Solicitar Diagnóstico Técnico</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Product Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PRODUCTS.map((prod) => {
          const Icon = prod.icon;
          const isSelected = prod.id === selectedProductId;
          return (
            <button
              key={prod.id}
              onClick={() => setSelectedProductId(prod.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap cursor-pointer border ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-indigo-500'}`} />
              <span>{prod.name}</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isSelected
                    ? 'bg-white/20 text-white border-white/30'
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
      <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Product Details & Value Proposition (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {selectedProduct.tag}
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className={`text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full border ${selectedProduct.badgeColor}`}>
                  {selectedProduct.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {selectedProduct.headline}
              </h3>
            </div>

            {/* Pain & Solution Grid */}
            <div className="space-y-3.5">
              <div className="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 font-mono">
                  O Gargalo que Resolve:
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {selectedProduct.problem}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
                  A Solução Entregue:
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {selectedProduct.solution}
                </p>
              </div>
            </div>

            {/* Measurable Results */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
                Resultados Mensuráveis no Cliente:
              </div>
              <div className="space-y-2">
                {selectedProduct.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights / Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              {selectedProduct.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px] font-medium"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/5541991747318?text=${encodeURIComponent(selectedProduct.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-emerald-600/30 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>{selectedProduct.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {selectedProduct.demoUrl && (
                <a
                  href={selectedProduct.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs transition border border-slate-200 dark:border-slate-700"
                >
                  <ExternalLink className="w-4 h-4 text-indigo-500" />
                  <span>{selectedProduct.demoLabel || 'Ver Demonstração'}</span>
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Visual Mockup Showcase (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Subtle Ambient Glow Behind Mockup */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-emerald-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              
              <div className="relative">
                {renderMockup(selectedProduct.id)}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid of all 4 Products for quick overview and direct access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRODUCTS.filter(p => p.id !== 'hermes-fleet').map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              onClick={() => setSelectedProductId(p.id)}
              className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between space-y-4 ${
                selectedProductId === p.id
                  ? 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-400 dark:border-indigo-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{p.name}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                  {p.headline}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span>Ver Demonstração</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
