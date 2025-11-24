"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function CountdownNotify() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  // Hardcoded future date (3 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 3);

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Opening Soon in Jaffna
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Be the first to know when we open our doors. Get notified about
            early booking offers and special rates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg" disabled={submitted}>
              <Mail className="h-4 w-4" />
              {submitted ? "Subscribed!" : "Notify Me"}
            </Button>
          </form>

          {submitted && (
            <p className="mt-4 text-accent font-medium">
              Thank you! We&apos;ll notify you when we&apos;re ready to welcome
              you.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

