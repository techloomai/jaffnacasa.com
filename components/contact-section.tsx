"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [selected, setSelected] = useState(0);

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

        <div className="mx-auto max-w-5xl">
          <Tabs selected={selected} setSelected={setSelected} />

          <AnimatePresence mode="wait">
            {CONTACT_FEATURES.map((tab, index) => {
              return selected === index ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  key={index}
                >
                  <tab.Feature />
                </motion.div>
              ) : undefined;
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ selected, setSelected }: TabsProps) => {
  return (
    <div className="flex overflow-x-scroll">
      {CONTACT_FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={tab.Icon}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

interface TabProps {
  selected: boolean;
  Icon: IconType;
  title: string;
  setSelected: Function;
  tabNum: number;
}

const Tab = ({ selected, Icon, title, setSelected, tabNum }: TabProps) => {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 border-neutral-dark bg-white p-6 transition-colors hover:bg-neutral-light md:flex-col"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-primary from-10% to-primary-dark p-3 text-2xl text-white shadow-accent/30 transition-all duration-300 ${
            selected
              ? "scale-100 opacity-100 shadow-lg"
              : "scale-90 opacity-50 shadow"
          }`}
        >
          <Icon />
        </span>
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xs text-foreground transition-opacity md:text-center ${
            selected ? "opacity-100 font-semibold" : "opacity-50"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-accent"
        />
      )}
    </div>
  );
};

interface ContactFeatureProps {
  Icon: IconType;
  content: React.ReactNode;
}

const ContactFeature = ({ Icon, content }: ContactFeatureProps) => (
  <div className="w-full px-0 py-8 md:px-8">
    <div className="relative h-96 w-full rounded-xl bg-primary shadow-xl overflow-hidden">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-primary-dark p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-6 bg-accent/20 rounded-full">
              <Icon className="text-6xl text-accent" />
            </div>
          </div>
          {content}
        </div>
      </div>
    </div>
  </div>
);

const AddressFeature = () => (
  <ContactFeature
    Icon={MapPin}
    content={
      <div className="space-y-4 text-white">
        <h3 className="text-3xl font-bold text-accent">Our Location</h3>
        <div className="text-lg text-neutral-light space-y-2">
          <p>Seerani Junction, Keerimalai Road,</p>
          <p>Sandilipay, Jaffna – 40098,</p>
          <p>Sri Lanka</p>
        </div>
        <p className="text-sm text-neutral-light/80 mt-6">
          Easily accessible from major attractions in Jaffna
        </p>
        <div className="mt-6">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <a
              href="https://maps.app.goo.gl/R6QjdgCoJw1ePQZo6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-5 w-5 mr-2" />
              View on Google Maps
            </a>
          </Button>
        </div>
      </div>
    }
  />
);

const PhoneFeature = () => (
  <ContactFeature
    Icon={Phone}
    content={
      <div className="space-y-4 text-white">
        <h3 className="text-3xl font-bold text-accent">Call Us</h3>
        <div className="text-2xl font-semibold text-neutral-light">
          <a
            href="tel:+94701188111"
            className="text-accent hover:text-accent-light transition-colors"
          >
            +94 70 11 88 111
          </a>
        </div>
        <p className="text-sm text-neutral-light/80 mt-6">
          Available for guest support and bookings
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent-light text-white"
          >
            <a href="tel:+94701188111">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <a
              href="https://wa.me/94701188111"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    }
  />
);

const EmailFeature = () => (
  <ContactFeature
    Icon={Mail}
    content={
      <div className="space-y-4 text-white">
        <h3 className="text-3xl font-bold text-accent">Email Us</h3>
        <div className="text-lg font-semibold text-neutral-light">
          <a
            href="mailto:jaffnacasasandilipay@gmail.com"
            className="text-accent hover:text-accent-light transition-colors break-all"
          >
            jaffnacasasandilipay@gmail.com
          </a>
        </div>
        <p className="text-sm text-neutral-light/80 mt-6">
          Send us your booking inquiries and questions
        </p>
        <div className="mt-6">
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent-light text-white"
          >
            <a href="mailto:jaffnacasasandilipay@gmail.com?subject=Jaffna Casa Booking Inquiry">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    }
  />
);

const CONTACT_FEATURES = [
  {
    title: "Address & Location",
    Icon: FiMapPin,
    Feature: () => <AddressFeature />,
  },
  {
    title: "Phone & Call Support",
    Icon: FiPhone,
    Feature: () => <PhoneFeature />,
  },
  {
    title: "Email & Inquiries",
    Icon: FiMail,
    Feature: () => <EmailFeature />,
  },
];
