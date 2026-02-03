import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

const paymentMethods = [
  {
    id: "stripe",
    name: "Stripe",
    description: "Pay securely with credit card",
    icon: "💳",
  },
  {
    id: "lemonsqueezy",
    name: "Lemon Squeezy",
    description: "Simple checkout experience",
    icon: "🍋",
  },
  {
    id: "paddle",
    name: "Paddle",
    description: "Global payments made easy",
    icon: "🏓",
  },
];

const plans: Record<string, { name: string; price: string; period?: string; features: string[] }> = {
  starter: {
    name: "Starter",
    price: "Free",
    features: ["Up to 3 projects", "Basic analytics", "Community support"],
  },
  pro: {
    name: "Pro",
    price: "$29",
    period: "/month",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"],
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    features: ["Everything in Pro", "Unlimited team members", "Dedicated support", "SLA guarantee"],
  },
};

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planId = searchParams.get("plan") || "pro";
  const plan = plans[planId] || plans.pro;
  
  const [selectedPayment, setSelectedPayment] = useState("stripe");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success(`Redirecting to ${paymentMethods.find(p => p.id === selectedPayment)?.name}...`);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/#pricing")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Your <span className="text-gradient">Purchase</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose your preferred payment method to continue
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Payment Selection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Email Input */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Payment Method
                  </CardTitle>
                  <CardDescription>
                    Select how you'd like to pay
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedPayment}
                    onValueChange={setSelectedPayment}
                    className="space-y-3"
                  >
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`relative flex items-center p-4 rounded-lg border transition-all cursor-pointer ${
                          selectedPayment === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-muted-foreground/50"
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <RadioGroupItem
                          value={method.id}
                          id={method.id}
                          className="mr-4"
                        />
                        <div className="flex items-center gap-4 flex-1">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <Label
                              htmlFor={method.id}
                              className="text-base font-medium cursor-pointer"
                            >
                              {method.name}
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        {selectedPayment === method.id && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Secure checkout. Your data is protected.</span>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-border bg-card sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{plan.name} Plan</h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.period ? "Billed monthly" : "One-time"}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gradient">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-muted-foreground text-sm">
                            {plan.period}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Total</span>
                      <span className="text-xl font-bold">
                        {plan.price}
                        {plan.period && (
                          <span className="text-sm text-muted-foreground font-normal">
                            {plan.period}
                          </span>
                        )}
                      </span>
                    </div>
                    <Button
                      variant="hero"
                      className="w-full"
                      size="lg"
                      onClick={handleCheckout}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        "Processing..."
                      ) : (
                        <>
                          Continue with{" "}
                          {paymentMethods.find((p) => p.id === selectedPayment)?.name}
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    By continuing, you agree to our Terms of Service and Privacy
                    Policy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
