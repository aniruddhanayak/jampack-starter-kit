import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse headings from HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const h2s = doc.querySelectorAll("h2");
    
    const items: TOCItem[] = Array.from(h2s).map((h2, index) => ({
      id: `heading-${index}`,
      text: h2.textContent || "",
      level: 2,
    }));
    
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="hidden xl:block sticky top-24 w-64"
    >
      <div className="p-4 rounded-xl bg-card border border-border">
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
          <List className="w-4 h-4 text-primary" />
          Table of Contents
        </div>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                activeId === heading.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
