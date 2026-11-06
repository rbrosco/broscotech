import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  Bot,
  BrainCircuit,
  Search,
  PenTool,
  TrendingUp,
  Terminal,
  Cpu,
  CheckCircle2,
  Activity,
  Zap,
  ShieldCheck,
  Radio,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface AgentInfo {
  id: string;
  name: string;
  role: string;
  tag: string;
  badgeColor: string;
  icon: any;
  color: string;
  description: string;
  specs: {
    engine: string;
    memory: string;
    runtime: string;
    topic: string;
    uptime: string;
  };
  features: string[];
}

const AGENTS: AgentInfo[] = [
  {
    id: 'orchestrator',
    name: 'Orchestrator',
    role: 'Central Command & Multi-Agent Dispatcher',
    tag: 'HUB PRINCIPAL',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    icon: BrainCircuit,
    color: '#6366f1',
    description: 'Comandante supremo da frota. Executa triagem contextual, divide missões complexas em DAGs e orquestra a cooperação autônoma entre os 4 agentes especialistas.',
    specs: {
      engine: 'easydev.ai/rogger-dev',
      memory: 'Persistent SQLite + SOUL.md',
      runtime: 'Hermes Agent TUI & Multiplex Profiles',
      topic: '#command (Telegram)',
      uptime: '99.98%'
    },
    features: [
      'Roteamento autônomo com verificação formal de resultados',
      'Governança rigorosa de execução e tolerância zero a falhas',
      'Auditoria de telemetria em tempo real com retenção inteligente',
      'Orquestração paralela com subagentes isolados'
    ]
  },
  {
    id: 'dev',
    name: 'Dev Specialist',
    role: 'Full-Stack Architecture & Automation',
    tag: 'ENGENHARIA',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: Terminal,
    color: '#10b981',
    description: 'Especialista de engenharia profunda. Escreve código limpo e estrito, gerencia containers Docker, executa deploys via SSH, valida testes e monitora infraestrutura.',
    specs: {
      engine: 'easydev.ai/rogger-dev',
      memory: 'Docker + Git Tree Isolation',
      runtime: 'Bun + Node 22 + Python 3.13',
      topic: '#dev (Telegram)',
      uptime: '99.95%'
    },
    features: [
      'Desenvolvimento em Next.js 15, React 19 e TypeScript rigoroso',
      'Gestão de banco PostgreSQL 17, TypeORM e cache em Redis',
      'Automação de pipelines Nginx, SSL e Docker Compose',
      'Resolução sistemática de bugs sem suposições'
    ]
  },
  {
    id: 'scout',
    name: 'Scout Specialist',
    role: 'Deep Intelligence & Academic Recon',
    tag: 'PESQUISA',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    icon: Search,
    color: '#06b6d4',
    description: 'Unidade de reconhecimento e pesquisa profunda. Rastreia documentações técnicas, repositórios, artigos no arXiv, novidades de mercado e faz benchmarking comparativo.',
    specs: {
      engine: 'easydev.ai/rogger-dev',
      memory: 'Web Mining + ArXiv Cache',
      runtime: 'Headless Browser + Defuddle CLI',
      topic: '#scout (Telegram)',
      uptime: '99.99%'
    },
    features: [
      'Extração e síntese de fontes verificadas e citadas',
      'Análise competitiva de mercado e benchmarking técnico',
      'Monitoramento de feeds de engenharia e releases',
      'Navegação WebGL/DOM automatizada para auditorias'
    ]
  },
  {
    id: 'scribe',
    name: 'Scribe Specialist',
    role: 'High-Signal Technical Documentation & Copy',
    tag: 'COMUNICAÇÃO',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: PenTool,
    color: '#a855f7',
    description: 'Especialista em redação de alta precisão. Redige especificações arquiteturais (RFCs), documentações de API, relatórios executivos e copywriting técnico sem clichês.',
    specs: {
      engine: 'easydev.ai/rogger-dev',
      memory: 'Style Guide + Markdown Engine',
      runtime: 'AST Parser + PDF/Docx Renderer',
      topic: '#scribe (Telegram)',
      uptime: '99.96%'
    },
    features: [
      'Documentação técnica limpa orientada a arquitetura',
      'Síntese executiva com clareza matemática e objetividade',
      'Estruturação de propostas comerciais e relatórios de SLA',
      'Eliminação ativa de prolixidade e jargões vazios'
    ]
  },
  {
    id: 'reach',
    name: 'Reach Specialist',
    role: 'Growth, Marketing Automation & Distribution',
    tag: 'DISTRIBUIÇÃO',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    icon: TrendingUp,
    color: '#f59e0b',
    description: 'Motor de tração e canais. Conecta pipelines do n8n à Evolution API (WhatsApp), automatiza campanhas de SDR, gerencia métricas de funil e dispara follow-ups inteligentes.',
    specs: {
      engine: 'easydev.ai/rogger-dev',
      memory: 'CRM Sync + Funnel State',
      runtime: 'Evolution API v2 + Brevo Relay',
      topic: '#reach (Telegram)',
      uptime: '99.94%'
    },
    features: [
      'Disparos transacionais no WhatsApp com WebSockets',
      'Engenharia de automações no n8n com webhook trigger',
      'Monitoramento de taxas de conversão e retenção SaaS',
      'Nutrição contextual de leads com personalização dinâmica'
    ]
  }
];

export default function FleetVisualizer3D({ theme }: { theme: 'light' | 'dark' }) {
  const [selectedAgentId, setSelectedAgentId] = useState<string>('orchestrator');
  const [activeTelemetry, setActiveTelemetry] = useState({
    totalRequests: 14829,
    avgLatency: '18ms',
    activeThreads: 5,
    dbTelemetryRows: '1.2M'
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const selectedAgent = AGENTS.find(a => a.id === selectedAgentId) || AGENTS[0];

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const isDark = theme === 'dark';

    // Central Node (Orchestrator)
    const fleetGroup = new THREE.Group();
    scene.add(fleetGroup);

    const centerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x6366f1 : 0x4f46e5,
      emissive: isDark ? 0x312e81 : 0x4338ca,
      roughness: 0.2,
      metalness: 0.9,
    });
    const centerNode = new THREE.Mesh(centerGeo, centerMat);
    fleetGroup.add(centerNode);

    // Wireframe surrounding center
    const centerCage = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 1),
      new THREE.MeshBasicMaterial({
        color: isDark ? 0x818cf8 : 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.4 : 0.25,
      })
    );
    fleetGroup.add(centerCage);

    // 4 Satellite Nodes
    const satelliteCount = 4;
    const radius = 2.8;
    const satellites: THREE.Mesh[] = [];
    const connectionLines: THREE.Line[] = [];

    const satColors = [0x10b981, 0x06b6d4, 0xa855f7, 0xf59e0b]; // Dev, Scout, Scribe, Reach

    for (let i = 0; i < satelliteCount; i++) {
      const angle = (i / satelliteCount) * Math.PI * 2;
      const satX = Math.cos(angle) * radius;
      const satY = Math.sin(angle) * radius;

      const satGeo = new THREE.SphereGeometry(0.38, 24, 24);
      const satMat = new THREE.MeshStandardMaterial({
        color: satColors[i],
        emissive: satColors[i],
        emissiveIntensity: isDark ? 0.3 : 0.1,
        roughness: 0.3,
        metalness: 0.8,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.set(satX, satY, 0);
      fleetGroup.add(satMesh);
      satellites.push(satMesh);

      // Orbital Ring for satellite
      const satRing = new THREE.Mesh(
        new THREE.RingGeometry(0.45, 0.48, 32),
        new THREE.MeshBasicMaterial({
          color: satColors[i],
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5,
        })
      );
      satRing.position.set(satX, satY, 0);
      fleetGroup.add(satRing);

      // Connection Line to Center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(satX, satY, 0),
      ]);
      const lineMat = new THREE.LineDashedMaterial({
        color: satColors[i],
        dashSize: 0.15,
        gapSize: 0.1,
        transparent: true,
        opacity: isDark ? 0.6 : 0.35,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      line.computeLineDistances();
      fleetGroup.add(line);
      connectionLines.push(line);
    }

    // Great Orbital Constellation Ring
    const mainOrbit = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.015, 16, 120),
      new THREE.MeshBasicMaterial({
        color: isDark ? 0x475569 : 0x94a3b8,
        transparent: true,
        opacity: isDark ? 0.3 : 0.2,
      })
    );
    fleetGroup.add(mainOrbit);

    // Lights
    const ambLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.2);
    scene.add(ambLight);

    const light1 = new THREE.PointLight(0x6366f1, 5, 20);
    light1.position.set(3, 3, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x06b6d4, 4, 20);
    light2.position.set(-3, -3, 3);
    scene.add(light2);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle floating and continuous rotation
      fleetGroup.rotation.z = elapsed * 0.15;
      fleetGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.2;
      fleetGroup.rotation.y = Math.cos(elapsed * 0.3) * 0.2;

      centerCage.rotation.y = -elapsed * 0.4;
      centerCage.rotation.x = elapsed * 0.3;

      // Pulse satellites
      satellites.forEach((sat, idx) => {
        sat.scale.setScalar(1 + Math.sin(elapsed * 3 + idx) * 0.08);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div className="space-y-8">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wide shadow-xs">
            <Radio className="w-3.5 h-3.5 animate-pulse text-purple-500" />
            HERMES MULTI-AGENT ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Frota Autônoma de 5 Agentes de IA
          </h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md font-normal">
          Arquitetura multi-agente coordenada em tempo real com memória persistente, centro de comando no Telegram e auditoria de telemetria em SQLite.
        </p>
      </div>

      {/* Main Interactive Fleet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: 3D Orbit Node Visualizer (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-sm">
          {/* Subtle Live Badge */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">TELEMETRY: ONLINE</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">60 FPS WebGL</span>
          </div>

          {/* 3D Canvas Box */}
          <div
            ref={canvasRef}
            className="w-full h-[260px] sm:h-[320px] relative pointer-events-none my-2"
          />

          {/* Agent Fast Selector Tabs */}
          <div className="grid grid-cols-5 gap-1.5 z-10 pt-2 border-t border-slate-100 dark:border-slate-800">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;
              const isSelected = agent.id === selectedAgentId;
              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgentId(agent.id)}
                  className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                  title={agent.name}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] font-bold truncate max-w-full font-mono">{agent.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Agent Deep-Dive Card (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 rounded-3xl p-7 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-sm">
          
          <div className="space-y-5">
            {/* Top Header */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: selectedAgent.color }}
                >
                  <selectedAgent.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {selectedAgent.name}
                    </h3>
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${selectedAgent.badgeColor}`}>
                      {selectedAgent.tag}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">{selectedAgent.role}</p>
                </div>
              </div>

              {/* Status Chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>UPTIME {selectedAgent.specs.uptime}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
              {selectedAgent.description}
            </p>

            {/* System Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Engine Model</div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5 truncate">{selectedAgent.specs.engine}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Memória</div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5 truncate">{selectedAgent.specs.memory}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Telegram Channel</div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5 truncate">{selectedAgent.specs.topic}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">Runtime Env</div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5 truncate">{selectedAgent.specs.runtime.split('+')[0]}</div>
              </div>
            </div>

            {/* Feature Bullet Points */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Capacidades Operacionais:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedAgent.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Bar */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-semibold">
              <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span>Pipeline Hermes Agent em Execução Produtiva</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span>LATENCY: <strong>{activeTelemetry.avgLatency}</strong></span>
              <span>DB SYNC: <strong>ACTIVE</strong></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
