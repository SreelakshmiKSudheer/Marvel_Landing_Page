export interface CardItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
}

interface StoryCardProps {
  item: CardItem;
  className?: string;
}

export default function StoryCard({ item, className = '' }: StoryCardProps) {
  return (
    <a 
      href={item.link ?? '#'} 
      className={`group relative block flex-[1_1_0%] min-w-0 overflow-hidden rounded-[2px] border border-[var(--border-soft)] transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:grow-[1.9] ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-[120%] max-w-none h-full object-cover -translate-x-[8%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[4%] group-hover:scale-[1.02]" 
        />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,4,6,0.92)_0%,rgba(4,4,6,0.15)_45%,rgba(4,4,6,0.05)_100%)]" />
      
      <div className="relative z-10 h-full flex flex-col justify-end p-6 translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[6px] group-hover:pl-5">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-[22px] tracking-[1px] uppercase mb-1.5">
          {item.title}
        </h3>
        
        {item.subtitle && (
          <p className="text-[14px] text-[var(--text-secondary)] mb-4 max-w-[200px] opacity-0 max-h-0 translate-y-[6px] transition-all duration-[400ms] ease-[ease] group-hover:opacity-100 group-hover:max-h-[60px] group-hover:translate-y-0">
            {item.subtitle}
          </p>
        )}
        
        <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center transition-colors duration-300 ease-[ease] group-hover:bg-[var(--marvel-red)] group-hover:border-[var(--marvel-red)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}