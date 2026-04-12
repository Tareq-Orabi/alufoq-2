import React from 'react';
import { IconBolt } from '../shared/icons';

interface ProjectCardProps {
  title: string;
  progress: string;
  target: string;
  donated: string;
  of: string;
}

/**
 * ProjectCard — displays a fundraising project with a progress bar.
 * Receives translated strings as props so it stays purely presentational.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ title, progress, target, donated, of: ofLabel }) => (
  <div className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between group transition-all hover:shadow-2xl hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-red-50 rounded-xl text-school-red mt-1 shrink-0">
        <IconBolt className="w-6 h-6" />
      </div>
      <h4 className="font-bold text-xl mb-6 text-slate-800 leading-snug group-hover:text-school-red transition">
        {title}
      </h4>
    </div>
    <div className="space-y-4">
      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden" role="progressbar" aria-valuenow={parseInt(progress)} aria-valuemin={0} aria-valuemax={100}>
        <div className="bg-school-red h-full rounded-full transition-all duration-1000" style={{ width: progress }} />
      </div>
      <div className="flex justify-between text-sm font-bold">
        <span className="text-school-red">{progress} {donated}</span>
        <span className="text-slate-400">{ofLabel} {target}</span>
      </div>
    </div>
  </div>
);

export default ProjectCard;
