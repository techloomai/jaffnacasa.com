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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
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

          {/* Map Placeholder */}
          <div className="bg-background rounded-lg shadow-sm overflow-hidden">
            <div className="h-full min-h-[400px] bg-neutral-dark/20 flex items-center justify-center relative">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground mb-2">
                  Google Map Coming Soon
                </p>
                <p className="text-foreground/70 text-sm">
                  Seerani Junction, Keerimalai Road,
                  <br />
                  Sandilipay, Jaffna
                </p>
              </div>
              {/* Optional: You can replace this with an actual Google Maps iframe */}
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d80.0123456!3d9.6543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzknMTUuNiJOIDgwwrAwMCc0NC40IkU!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

