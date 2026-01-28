import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description:
      "Sign up in seconds with your email or connect your existing accounts. No credit card required to get started.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure Your Workspace",
    description:
      "Customize your workspace to match your workflow. Set up teams, projects, and integrations with ease.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Build",
    description:
      "Start building immediately with our intuitive tools. Use templates or create from scratch—the choice is yours.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Scale & Grow",
    description:
      "As your needs grow, our platform scales with you. Access advanced features and analytics to drive success.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get started in <span className="text-gradient">4 simple steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From signup to success in minutes. Our streamlined process gets you up and running fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
