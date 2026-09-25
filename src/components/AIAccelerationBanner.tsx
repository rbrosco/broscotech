import React from 'react';
import { Zap, Bot, ShieldCheck, Flame, MessageSquare, ArrowRight, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export default function AIAccelerationBanner() {
  const advantages = [
    {
      icon: Zap,
      title: 'Entrega 5x Mais Rápida',
      tag: 'TIME-TO-MARKET',
      desc: 'Desenvolvimento acelerado por pipelines de IA. Arquiteturas robustas entregues em semanas com código limpo e sem débitos técnicos.',
      badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Bot,
      title: 'Agentes Autônomos Integrados',
      tag: 'INTELIGÊNCIA NATIVA',
      desc: 'Seu produto já nasce com fluxos de IA embutidos (Vercel AI SDK, reasoning executivo, relatórios inteligentes e triagem automática).',
      badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: MessageSquare,
      title: 'Máquinas de Vendas no WhatsApp',
      tag: 'CONVERSÃO & CRM',
      desc: 'Automação de ponta a ponta com Evolution API e n8n. Disparos transacionais, atendimento inteligente e CRM sincronizado 24/7.',
      badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: ShieldCheck,
      title: 'Engenharia de Missão Crítica',
      tag: '99.9% SLA',
      desc: 'PostgreSQL 17 relacional, Redis, Docker, proxies com SSL e monitoramento em tempo real. Estabilidade extrema sem surpresas.',
      badgeColor: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-7 sm:p-10 shadow-2xl overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>VANTAGEM COMPETITIVA EM PRODUÇÃO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Construa com velocidade de elite e IA nativa.
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Não entregamos apenas código — entregamos plataformas escaláveis com automação contínua, desenhadas para gerar receita e superar a concorrência desde o primeiro dia.
            </p>
          </div>

          <a
            href="https://wa.me/5541991747318?text=Ol%C3%A1%20Rogger,%20quero%20um%20projeto%20com%20IA%20e%20alta%20performance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition shadow-lg shadow-indigo-600/30 shrink-0 self-start lg:self-center cursor-pointer"
          >
            <span>Quero Acelerar Meu Projeto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Conversion Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3 group hover:bg-slate-800/60"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className={`text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Live Bottom Operational Strip */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-semibold font-sans">Status Operacional: <strong>Disponível para novos projetos de alta escala</strong></span>
          </div>
          <div className="flex items-center gap-5 text-[11px]">
            <span>STACK: <strong className="text-indigo-400">Next.js 15 + Postgres 17</strong></span>
            <span>AUTOMAÇÃO: <strong className="text-emerald-400">Multi-Agent Active</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}
