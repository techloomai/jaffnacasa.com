import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-foreground/70">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Guest Support
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Address</p>
                  <p className="text-foreground/70">
                    Seerani Junction, Keerimalai Road,
                    <br />
                    Sandilipay, Jaffna – 40098,
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+94701188111"
                    className="text-accent hover:underline"
                  >
                    +94 70 11 88 111
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a
                    href="mailto:jaffnacasasandilipay@gmail.com"
                    className="text-accent hover:underline"
                  >
                    jaffnacasasandilipay@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

