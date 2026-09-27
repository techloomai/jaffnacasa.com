"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const BASE_TRANSITION = { ease: [0.4, 0, 0.2, 1] as const, duration: 0.75 };

export function CountdownNotify() {
  const [selected, setSelected] = useState<"group" | "individual">(
    "individual"
  );

  return (
    <section className="p-4 py-16 bg-neutral-light">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
}

const Form = ({
  selected,
  setSelected,
}: {
  selected: "group" | "individual";
  setSelected: Dispatch<SetStateAction<"group" | "individual">>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    groupName: "",
    inquiry: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent("Jaffna Casa Booking Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n${
        selected === "group" ? `Group/Company: ${formData.groupName}\n` : ""
      }Inquiry: ${formData.inquiry}`
    );
    window.location.href = `mailto:jaffnacasasandilipay@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", groupName: "", inquiry: "" });
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 w-full text-white transition-colors duration-750 ${
        selected === "group" ? "bg-primary" : "bg-primary-dark"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>
      
      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Hi 👋! My name is...</p>
        <input
          type="text"
          placeholder="Your name..."
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          className={`${
            selected === "group" ? "bg-primary-light" : "bg-primary"
          } transition-colors duration-750 placeholder-white/70 p-2 rounded-md w-full focus:outline-0 focus:ring-2 focus:ring-accent`}
        />
      </div>

      {/* Group/Individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">and I&apos;m booking for...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Group name */}
      <AnimatePresence>
        {selected === "group" && (
          <motion.div
            initial={{
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">by the name of...</p>
            <input
              type="text"
              placeholder="Your group/company name..."
              value={formData.groupName}
              onChange={(e) =>
                setFormData({ ...formData, groupName: e.target.value })
              }
              required
              className={`${
                selected === "group" ? "bg-primary-light" : "bg-primary"
              } transition-colors duration-750 placeholder-white/70 p-2 rounded-md w-full focus:outline-0 focus:ring-2 focus:ring-accent`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry */}
      <div className="mb-6">
        <p className="text-2xl mb-2">I&apos;d love to ask about...</p>
        <textarea
          placeholder="Booking dates, room preferences, special requirements..."
          value={formData.inquiry}
          onChange={(e) =>
            setFormData({ ...formData, inquiry: e.target.value })
          }
          required
          className={`${
            selected === "group" ? "bg-primary-light" : "bg-primary"
          } transition-colors duration-750 min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0 focus:ring-2 focus:ring-accent`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        disabled={submitted}
        className={`${
          selected === "group"
            ? "bg-accent text-primary hover:bg-accent-light"
            : "bg-accent text-primary hover:bg-accent-light"
        } transition-colors duration-750 text-lg text-center rounded-lg w-full py-3 font-semibold disabled:opacity-50`}
      >
        {submitted ? "Message Sent!" : "Send Inquiry"}
      </motion.button>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: "group" | "individual";
  setSelected: Dispatch<SetStateAction<"group" | "individual">>;
}) => {
  return (
    <div className="border rounded border-white overflow-hidden font-medium w-fit">
      <button
        type="button"
        className={`${
          selected === "individual" ? "text-primary-dark" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-750 relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">Individual / Family</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-accent z-0"
          />
        )}
      </button>
      <button
        type="button"
        className={`${
          selected === "group" ? "text-primary" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-750 relative`}
        onClick={() => setSelected("group")}
      >
        <span className="relative z-10">Group / Company</span>
        {selected === "group" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-accent z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: "group" | "individual" }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[400px] lg:min-h-[600px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-neutral-dark"
        style={{
          backgroundImage: "url(/img2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "group" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-neutral-dark"
        style={{
          backgroundImage: "url(/room-group.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};
