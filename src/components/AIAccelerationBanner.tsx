import React from 'react';
import {
  Zap,
  Bot,
  ShieldCheck,
  Flame,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  XCircle,
  Check,
  Cpu,
  Layers,
  Database
} from 'lucide-react';

export default function AIAccelerationBanner() {
  const comparison = [
    {
      bad: 'Reuniões de 2 horas que poderiam ser um email com gerentes de conta que não codificam',
      good: 'Alinhamento direto e objetivo com o arquiteto técnico sênior da sua aplicação',
    },
    {
      bad: '6 a 9 meses para entregar um MVP lento, engessado e repleto de débitos técnicos',
      good: 'Sistemas funcionais e validados entregues em semanas com pipelines modernos de IA',
    },
    {
      bad: 'Código repassado para estagiários e desenvolvedores júnior sem supervisão sênior',
      good: 'Arquitetura de missão crítica construída por quem já operou bancos de alta escala',
    },
    {
      bad: 'Mensalidades abusivas por usuário (lock-in) em plataformas fechadas de terceiros',
      good: 'O código-fonte e o banco de dados são 100% seus. Sem licença oculta por atendente',
    },
  ];

  const badges = [
    { label: 'TIME-TO-MARKET 5X', desc: 'Entregas em semanas, não semestres', icon: Zap, color: 'bg-[#D4FF00] text-black' },
    { label: 'POSTGRESQL 17 ISOLADO', desc: 'Banco relacional dedicado por cliente', icon: Database, color: 'bg-[#00F0FF] text-black' },
    { label: 'AGENTES IA 24/7', desc: 'Triagem, reasoning e automação real', icon: Bot, color: 'bg-[#A855F7] text-white' },
    { label: 'SLA 99.9% GARANTIDO', desc: 'Infraestrutura Docker com zero downtime', icon: ShieldCheck, color: 'bg-[#FF5500] text-white' },
  ];

  return (
    <div className="rounded-3xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0b1120] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#10b981] space-y-8 transition-all">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b-2 border-slate-900 dark:border-slate-700">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4FF00] text-black text-xs font-mono font-black border-2 border-black -rotate-1">
            <Flame className="w-3.5 h-3.5 fill-black" />
            <span>MANIFESTO BROSCOTECH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engenharia de verdade vs. O modelo tradicional de agência.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl">
            A maioria das empresas gasta fortunas com fábricas de software que entregam slides bonitos e código que quebra na primeira Black Friday. Aqui o jogo é outro.
          </p>
        </div>

        <a
          href="https://wa.me/5541991747318?text=Olá%20Rogger,%20li%20o%20manifesto%20e%20quero%20conversar%20sobre%20um%20software%20robusto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-black font-black text-xs transition border-2 border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] shrink-0"
        >
          <span>Conversar com Rogger</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Comparison Grid: Old vs Broscotech */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* The Old Way */}
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900/60 space-y-4">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono font-black text-xs uppercase tracking-wider">
            <XCircle className="w-4 h-4" />
            <span>O Jeito Tradicional (Agências & Fábricas)</span>
          </div>

          <div className="space-y-3">
            {comparison.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-rose-950 dark:text-rose-200">
                <span className="font-bold text-rose-500 mt-0.5">✕</span>
                <p className="leading-relaxed">{item.bad}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Broscotech Way */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-500 dark:border-emerald-600 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono font-black text-xs uppercase tracking-wider">
            <Check className="w-4 h-4" />
            <span>O Modelo Broscotech (Direto com o CTO)</span>
          </div>

          <div className="space-y-3">
            {comparison.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950 dark:text-emerald-200">
                <span className="font-black text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
                <p className="leading-relaxed font-semibold">{item.good}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4 Neo-Brutalist Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {badges.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#10b981] flex items-center gap-3"
            >
              <div className={`p-2 rounded-lg border-2 border-black ${b.color} shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono font-black text-slate-900 dark:text-white truncate">
                  {b.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  {b.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
