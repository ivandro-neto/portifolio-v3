import React from "react";
import { ContentItem } from "@/data/content";

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  React.useEffect(() => {
    if (item.html && item.platform === "X") {
      // Function to try loading widgets
      const loadWidgets = () => {
        // @ts-ignore
        if (window.twttr?.widgets) {
          // @ts-ignore
          window.twttr.widgets.load();
          return true;
        }
        return false;
      };

      // Try immediately
      if (!loadWidgets()) {
        // If not ready, poll every 500ms for a few seconds
        const interval = setInterval(() => {
          if (loadWidgets()) {
            clearInterval(interval);
          }
        }, 500);

        // Clear interval after 5 seconds to avoid infinite polling
        setTimeout(() => clearInterval(interval), 5000);
        return () => clearInterval(interval);
      }
    }
  }, [item.html, item.platform]);

  if (item.html) {
    return (
      <div 
        className="w-full flex justify-center twitter-embed-container"
        dangerouslySetInnerHTML={{ __html: item.html }} 
      />
    );
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-full"
    >
      <div className="flex flex-col gap-3 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all h-full">
        <div className="flex items-center justify-between text-xs text-offtext">
          <div className="flex items-center gap-2">
            <span className={`font-medium ${
              item.platform === 'X' ? 'text-primary' : 
              item.platform === 'Threads' ? 'text-primary' : 
              'text-primary'
            }`}>
              {item.platform}
            </span>
            <span className="text-white/20">•</span>
            <span className="opacity-60">{item.date}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-offtext transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        
        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {item.title}
        </h3>
        
        {item.description && (
          <p className="text-sm text-offtext/80 leading-relaxed">
            {item.description}
          </p>
        )}

        {item.image && (
          <div className="mt-auto pt-4">
            <div className="rounded-lg overflow-hidden border border-white/10 relative aspect-video">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        )}
      </div>
    </a>
  );
};

export default ContentCard;
