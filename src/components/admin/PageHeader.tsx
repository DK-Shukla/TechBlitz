import { ReactNode } from 'react';

export default function PageHeader({ title, description, action }: { title: string, description?: string, action?: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
        {description && <p className="text-[#A3A3A3] text-sm">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
