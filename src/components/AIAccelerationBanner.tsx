import React from 'react';
import {
  Zap,
  Bot,
  ShieldCheck,
  Flame,
  ArrowRight,
  Sparkles,
  XCircle,
  Check,
  Database,
  Building2,
  ExternalLink
} from 'lucide-react';

export default function AIAccelerationBanner() {
  const comparison = [
    {
      bad: 'Reuniões de 2 horas que poderiam ser um email com gerentes de conta que não codificam',
      good: 'Alinhamento direto e objetivo com o arquiteto técnico sênior e CTO da EasyDev',
    },
    {
      bad: '6 a 9 meses para entregar um MVP lento, engessado e repleto de débitos técnicos',
      good: 'Sistemas funcionais e validados entregues em semanas com pipelines modernos de IA',
    },
    {
      bad: 'Código repassado para estagiários e desenvolvedores júnior sem supervisão sênior',
      good: 'Arquitetura de missão crítica construída e auditada por quem opera bancos de alta escala',
    },
    {
      bad: 'Mensalidades abusivas por usuário (lock-in) em plataformas fechadas de terceiros',
      good: 'O código-fonte e o banco de dados são 100% seus. Sem licença oculta por atendente',
    },
  ];

  const badges = [
    { label: 'TIME-TO-MARKET 5X', desc: 'Entregas em semanas, não semestres', icon: Zap, color: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white' },
    { label: 'POSTGRESQL 17 ISOLADO', desc: 'Banco relacional dedicado por cliente', icon: Database, color: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' },
    { label: 'AGENTES IA 24/7', desc: 'Triagem, reasoning e automação real', icon: Bot, color: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' },
    { label: 'SLA CORPORATIVO EASYDEV', desc: 'Infraestrutura Docker com zero downtime', icon: ShieldCheck, color: 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white' },
  ];

  return (
    <div id="manifesto" className="rounded-3xl border-2 border-slate-900 dark:border-indigo-900/60 bg-white dark:bg-[#0c0e1e] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#6366f1] space-y-8 transition-all scroll-mt-28">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b-2 border-slate-900 dark:border-indigo-900/60">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white text-xs font-mono font-black border-2 border-black -rotate-1 shadow-[2px_2px_0px_#000]">
            <Flame className="w-3.5 h-3.5 fill-white" />
            <span>MANIFESTO DE ENGENHARIA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engenharia de verdade na EasyDev vs. O modelo tradicional de agência.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl font-medium">
            A maioria das empresas gasta fortunas com fábricas de software que entregam slides bonitos e código que quebra na primeira Black Friday. Na EasyDev, o jogo é outro: liderança técnica sênior, código testado e arquitetura que escala.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
          <a
            href="https://wa.me/5541991747318?text=Olá%20Rogger,%20li%20o%20manifesto%20e%20quero%20conversar%20sobre%20um%20software%20robusto%20com%20a%20EasyDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-black text-xs transition border-2 border-black shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] shrink-0"
          >
            <span>Conversar com Rogger (CTO)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://easydev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-center text-indigo-500 hover:underline font-bold inline-flex items-center justify-center gap-1"
          >
            <Building2 className="w-3 h-3" />
            <span>Conheça a EasyDev corporativa</span>
          </a>
        </div>
      </div>

      {/* Comparison Grid: Old vs EasyDev */}
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
                <p className="leading-relaxed font-medium">{item.bad}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The EasyDev Way */}
        <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border-2 border-indigo-500 dark:border-indigo-600 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-mono font-black text-xs uppercase tracking-wider">
            <Check className="w-4 h-4" />
            <span>O Padrão EasyDev (Com Liderança de Rogger Brosco)</span>
          </div>

          <div className="space-y-3">
            {comparison.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-indigo-950 dark:text-indigo-200">
                <span className="font-black text-indigo-600 dark:text-cyan-400 mt-0.5">✓</span>
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
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#12162b] border-2 border-slate-900 dark:border-indigo-900/70 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#6366f1] flex items-center gap-3"
            >
              <div className={`p-2 rounded-lg border-2 border-black ${b.color} shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono font-black text-slate-900 dark:text-white leading-tight">
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
