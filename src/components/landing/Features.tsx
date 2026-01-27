import { motion } from "framer-motion";
import { 
  Zap, Shield, Palette, Globe, 
  Database, Lock, Layers, Cpu 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with lazy loading, code splitting, and edge caching.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built-in authentication, authorization, and security best practices.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Pre-designed components with customizable themes and dark mode support.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy anywhere with edge functions and CDN distribution.",
  },
  {
    icon: Database,
    title: "Database Ready",
    description: "Seamless integration with PostgreSQL, Redis, and more.",
  },
  {
    icon: Lock,
    title: "Auth Included",
    description: "Email, OAuth, SSO, and magic links out of the box.",
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "500+ production-ready components for rapid development.",
  },
  {
    icon: Cpu,
    title: "AI Powered",
    description: "Built-in AI features for chat, search, and content generation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.1),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Ship Fast</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with the latest technologies and best practices. 
            Focus on your product, not boilerplate.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
