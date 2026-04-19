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

    // TODO: wire Resend here
    // Example:
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    await new Promise((r) => setTimeout(r, 600));

    setState("success");
    setForm({ name: "", email: "", organization: "", message: "" });
    setTimeout(() => setState("idle"), 6000);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field id="name" label="Name" required>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            className="w-full rounded-2xl border border-earth-300 bg-earth-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-500 focus:border-sage-600 focus:outline-none"
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
            className="w-full rounded-2xl border border-earth-300 bg-earth-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-500 focus:border-sage-600 focus:outline-none"
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
          className="w-full rounded-2xl border border-earth-300 bg-earth-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-500 focus:border-sage-600 focus:outline-none"
          placeholder="Company or institution (optional)"
        />
      </Field>

      <Field id="message" label="Message" required>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={handleChange("message")}
          rows={6}
          className="w-full resize-none rounded-2xl border border-earth-300 bg-earth-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-500 focus:border-sage-600 focus:outline-none"
          placeholder="Tell us what brought you here."
        />
      </Field>

      <div className="flex flex-col items-start gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-earth-500">
          By submitting, you agree to be contacted by our team.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="group inline-flex items-center gap-3 rounded-full bg-earth-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-earth-800 disabled:opacity-60"
        >
          <span>
            {state === "submitting" ? "Sending" : state === "success" ? "Sent" : "Send message"}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-earth-900 transition group-hover:translate-x-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M3 9L9 3M9 3H4M9 3V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {state === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-sage-600/30 bg-sage-600/5 px-4 py-3 text-sm text-sage-600"
          >
            Thank you — your message has been sent. We&rsquo;ll be in touch.
          </motion.div>
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
        className="mb-2 flex items-center gap-1 text-[0.75rem] uppercase tracking-[0.2em] text-earth-700"
      >
        {label}
        {required && <span className="text-sage-600" aria-hidden>·</span>}
      </label>
      {children}
    </div>
  );
}
