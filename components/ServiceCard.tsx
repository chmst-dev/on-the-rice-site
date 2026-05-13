interface ServiceCardProps {
  title: string;
  description: string;
  label?: string;
}

export default function ServiceCard({ title, description, label }: ServiceCardProps) {
  return (
    <div className="bg-white border border-rice-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      {label && <span className="text-xs font-bold text-gold tracking-widest mb-4 block uppercase">{label}</span>}
      <h3 className="text-xl font-bold text-ink-dark mb-4">{title}</h3>
      <p className="text-ink text-sm leading-relaxed">{description}</p>
    </div>
  );
}
