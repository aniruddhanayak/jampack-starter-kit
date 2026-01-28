import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing! Check your inbox to confirm.");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-secondary/20 border border-primary/20"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-1">Get the latest insights</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for weekly updates on development, design, and startup tips.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex gap-2">
          <div className="relative flex-grow md:w-64">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 bg-background/50"
            />
          </div>
          <Button type="submit" variant="hero" disabled={isLoading}>
            {isLoading ? "..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};
