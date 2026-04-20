"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type State = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    await new Promise((r) => setTimeout(r, 600));

    setState("success");
    setForm({ name: "", email: "", organization: "", message: "" });
    setTimeout(() => setState("idle"), 6000);
  };

  const inputClass =
    "w-full border-0 border-b border-earth-900/20 bg-transparent px-0 py-3 text-base text-earth-900 placeholder:text-earth-400 focus:border-earth-900 focus:outline-none focus:ring-0";

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="grid gap-10 md:grid-cols-2">
        <Field id="name" label="Name" required>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            className={inputClass}
            placeholder="Full name"
          />
        </Field>

        <Field id="email" label="Email" required>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            className={inputClass}
            placeholder="you@organization.com"
          />
        </Field>
      </div>

      <Field id="organization" label="Organization">
        <input
          id="organization"
          type="text"
          value={form.organization}
          onChange={handleChange("organization")}
          className={inputClass}
          placeholder="Company or institution (optional)"
        />
      </Field>

      <Field id="message" label="Message" required>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={handleChange("message")}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us what brought you here."
        />
      </Field>

      <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-earth-500">
          By submitting, you agree to be contacted by our team.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="group inline-flex items-center gap-3 border-b border-earth-900 pb-1 text-sm font-medium uppercase tracking-[0.15em] text-earth-900 transition hover:gap-4 disabled:opacity-60"
        >
          <span>
            {state === "submitting"
              ? "Sending"
              : state === "success"
                ? "Sent"
                : "Send message"}
          </span>
          <span aria-hidden>→</span>
        </button>
      </div>

      <AnimatePresence>
        {state === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-sage-600"
          >
            Thank you. Your message has been sent. We&rsquo;ll be in touch.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-[0.7rem] uppercase tracking-[0.2em] text-earth-500"
      >
        {label}
        {required && (
          <span className="text-sage-600" aria-hidden>
            ·
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
