import React, { useRef, useState } from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: boolean;
}

export default function BentoCard({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.15)',
  hoverScale = true,
}: BentoCardProps) {
  return (
    <div
      className={`h-full rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-[#0b1120] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#10b981] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#10b981] ${className}`}
    >
      {children}
    </div>
  );
}
