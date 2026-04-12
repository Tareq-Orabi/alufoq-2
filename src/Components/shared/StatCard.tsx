import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

/**
 * StatCard — purely presentational stat display card.
 * No lang/isAr dependency; all text comes in as resolved strings.
 */
const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => (
  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden group">
    {/* Background watermark icon */}
    <div className="absolute -bottom-4 -right-4 text-slate-100 group-hover:text-red-50 transition-colors duration-500 scale-150" aria-hidden="true">
      {icon}
    </div>
    <div className="relative z-10">
      <div className="flex justify-center mb-4 text-school-red" aria-hidden="true">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-school-red mb-3 tracking-tight">{value}</div>
      <div className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] leading-relaxed max-w-[15ch] mx-auto">
        {label}
      </div>
    </div>
  </div>
);

export default StatCard;
