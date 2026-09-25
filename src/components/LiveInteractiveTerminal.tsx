import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function LiveInteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'hermes fleet --status',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-emerald-400 font-bold">✓ Hermes Multi-Agent Fleet Active [5/5 Agents Online]</div>
          <div className="text-xs text-slate-400">
            • [Orchestrator] Hub Commander :: Telemetry active (#command)<br/>
            • [Dev] Full-Stack Architecture :: Bun / Docker / Next.js 15 (#dev)<br/>
            • [Scout] Recon & Deep Research :: ArXiv / Web Engine (#scout)<br/>
            • [Scribe] Tech Specs & RFCs :: High-Signal Engine (#scribe)<br/>
            • [Reach] Distribution & WhatsApp :: Evolution API + n8n (#reach)
          </div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <div className="text-indigo-400 font-bold">Comandos disponíveis:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div><strong className="text-amber-300">fleet</strong> : Status da frota IA</div>
              <div><strong className="text-amber-300">stack</strong> : Tecnologias core</div>
              <div><strong className="text-amber-300">projects</strong> : SaaS em produção</div>
              <div><strong className="text-amber-300">stats</strong> : Métricas chave</div>
              <div><strong className="text-amber-300">whoami</strong> : Perfil do arquiteto</div>
              <div><strong className="text-amber-300">ping</strong> : Latência de rede</div>
              <div><strong className="text-amber-300">contact</strong> : Contato direto</div>
              <div><strong className="text-amber-300">clear</strong> : Limpar terminal</div>
            </div>
          </div>
        );
        break;

      case 'fleet':
      case 'hermes fleet':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <div className="text-emerald-400 font-bold">FROTA HERMES MULTI-AGENT (5 AGENTES ATIVOS):</div>
            <div className="text-xs space-y-1 font-mono">
              <div className="text-indigo-300">[1] ORCHESTRATOR : Roteamento, DAGs e auditoria de logs</div>
              <div className="text-emerald-300">[2] DEV : Next.js 15, TypeScript, Docker, PostgreSQL 17</div>
              <div className="text-cyan-300">[3] SCOUT : Reconhecimento técnico, papers e scraping</div>
              <div className="text-purple-300">[4] SCRIBE : Documentação limpa, RFCs e relatórios</div>
              <div className="text-amber-300">[5] REACH : WhatsApp via Evolution API + pipelines n8n</div>
            </div>
          </div>
        );
        break;

      case 'stack':
        output = (
          <div className="space-y-1 text-slate-300">
            <div className="text-indigo-400 font-bold">CORE TECH STACK:</div>
            <div className="text-xs font-mono text-slate-300">
              • Frontend: Next.js 15, React 19, TypeScript 5.7, Tailwind CSS v4, Three.js<br/>
              • Backend: Bun, Node.js, PostgreSQL 17, TypeORM, Redis Cache<br/>
              • IA: Vercel AI SDK, Hermes Multi-Agent Fleet, Evolution API, n8n<br/>
              • Infra: Linux Ubuntu, Docker Compose, Nginx SSL, Fail2ban
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-slate-300">
            <div className="text-indigo-400 font-bold">PROJETOS EM PRODUÇÃO:</div>
            <div className="text-xs font-mono space-y-1">
              <div>⚡ <strong className="text-white">Planner SDR:</strong> https://planner-sdr.broscotech.com.br</div>
              <div>⚡ <strong className="text-white">EasyDev CRM:</strong> https://dev.easydev.com.br</div>
              <div>⚡ <strong className="text-white">Hermes Fleet:</strong> Orquestração multi-agente 24/7</div>
              <div>⚡ <strong className="text-white">Evolution Hub:</strong> Gateway WhatsApp + n8n</div>
            </div>
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div className="text-emerald-400 font-bold">MÉTRICAS OPERACIONAIS:</div>
            <div>• Experiência: +7 Anos em Arquitetura de Software</div>
            <div>• Produção: +20 Plataformas SaaS entregues</div>
            <div>• SLA Médio: 99.9% de alta disponibilidade</div>
            <div>• Agentes Autônomos: 5 em operação contínua</div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div className="text-white font-bold">Rogger Brosco</div>
            <div className="text-indigo-400">CTO @ EasyDev & Lead Full-Stack Software Architect</div>
            <div className="text-slate-400">Focado em SaaS de alta performance, agentes autônomos de IA e infraestrutura cloud.</div>
          </div>
        );
        break;

      case 'ping':
        output = (
          <div className="text-xs font-mono text-emerald-400">
            64 bytes from 163.176.12.119: icmp_seq=1 ttl=58 time=11.4 ms (Zero Packet Loss)
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <div className="text-amber-400 font-bold">CANAIS DE CONTATO:</div>
            <div>• WhatsApp: (41) 99174-7318 (https://wa.me/5541991747318)</div>
            <div>• E-mail: contato@broscotech.com.br</div>
            <div>• GitHub: https://github.com/rbrosco</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Comando não reconhecido: "{cmdText}". Digite <strong className="text-white underline">help</strong> para ver a lista de comandos.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="rounded-3xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden text-slate-100 font-mono">
      {/* Terminal Bar */}
      <div className="bg-[#080b13] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-slate-400 ml-2 font-bold font-sans">broscotech-telemetry-cli v2.4</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>HERMES: RUNNING</span>
        </div>
      </div>

      {/* Suggested Quick Commands */}
      <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/60 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[11px] text-slate-500 font-sans">Comandos rápidos:</span>
        {['help', 'fleet', 'stack', 'projects', 'stats', 'ping', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-indigo-600/80 hover:text-white text-slate-300 text-[11px] transition cursor-pointer border border-slate-700/60"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen */}
      <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto text-xs sm:text-sm">
        <div className="text-slate-500 text-xs font-mono">
          Bem-vindo ao console de telemetria Broscotech. Digite <span className="text-indigo-400">help</span> para navegar.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400 font-bold">
              <span className="text-indigo-400">brosco@arch-node:~$</span>
              <span className="text-white">{item.command}</span>
            </div>
            <div className="pl-4 border-l-2 border-slate-800/80">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt */}
      <form onSubmit={handleSubmit} className="px-4 py-3 bg-[#080b13] border-t border-slate-800 flex items-center gap-2">
        <span className="text-indigo-400 font-bold text-sm hidden sm:inline">brosco@arch-node:~$</span>
        <span className="text-indigo-400 font-bold text-sm sm:hidden">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="digite um comando (ex: fleet, stack, stats)..."
          className="flex-1 bg-transparent text-slate-100 text-xs sm:text-sm focus:outline-hidden font-mono"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer"
          title="Executar comando"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
