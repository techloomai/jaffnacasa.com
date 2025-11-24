import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-neutral-light">
            © {currentYear} Jaffna Casa – Fine Stay. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="tel:+94701188111">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a
                href="https://wa.me/94701188111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

