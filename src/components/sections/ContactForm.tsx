"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim() || !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = "Add a short subject.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formId = useId();

  const handleChange = (field: keyof FormValues, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (touched[field]) {
      setErrors(validate(nextValues));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const fieldClasses = (field: keyof FormValues) =>
    cn(
      "focus-ring w-full rounded-xl bg-surface/[0.06] px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 transition-colors duration-200",
      "border",
      touched[field] && errors[field]
        ? "border-red-400/50 focus-visible:outline-red-400/60"
        : "border-border focus-visible:border-border-strong",
    );

  return (
    <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-4 py-10 text-center"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
              <motion.circle
                cx="36"
                cy="36"
                r="32"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.path
                d="M22 37.5L31.5 47L50 26"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              />
            </svg>
            <div>
              <p className="text-lg font-semibold text-foreground">Message sent!</p>
              <p className="mt-1.5 max-w-sm text-sm leading-6 text-foreground-muted">
                Thanks for reaching out — I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="focus-ring mt-2 inline-flex items-center gap-2 rounded-full bg-surface/[0.08] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface/[0.14]"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={`${formId}-name`}
                  className="mb-1.5 block text-xs font-medium text-foreground-muted"
                >
                  Name
                </label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  className={fieldClasses("name")}
                  placeholder="Jane Doe"
                />
                {touched.name && errors.name && (
                  <p
                    id={`${formId}-name-error`}
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                  >
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor={`${formId}-email`}
                  className="mb-1.5 block text-xs font-medium text-foreground-muted"
                >
                  Email
                </label>
                <input
                  id={`${formId}-email`}
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  className={fieldClasses("email")}
                  placeholder="jane@company.com"
                />
                {touched.email && errors.email && (
                  <p
                    id={`${formId}-email-error`}
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                  >
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor={`${formId}-subject`}
                className="mb-1.5 block text-xs font-medium text-foreground-muted"
              >
                Subject
              </label>
              <input
                id={`${formId}-subject`}
                type="text"
                value={values.subject}
                onChange={(event) => handleChange("subject", event.target.value)}
                onBlur={() => handleBlur("subject")}
                aria-invalid={Boolean(touched.subject && errors.subject)}
                aria-describedby={errors.subject ? `${formId}-subject-error` : undefined}
                className={fieldClasses("subject")}
                placeholder="QA role opportunity"
              />
              {touched.subject && errors.subject && (
                <p
                  id={`${formId}-subject-error`}
                  className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                >
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor={`${formId}-message`}
                className="mb-1.5 block text-xs font-medium text-foreground-muted"
              >
                Message
              </label>
              <textarea
                id={`${formId}-message`}
                rows={5}
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                onBlur={() => handleBlur("message")}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                className={cn(fieldClasses("message"), "resize-none")}
                placeholder="Tell me a bit about the role or project..."
              />
              {touched.message && errors.message && (
                <p
                  id={`${formId}-message-error`}
                  className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                >
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors.message}
                </p>
              )}
            </div>

            {status === "error" && (
              <p className="flex items-center gap-2 rounded-xl bg-red-400/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Something went wrong sending your message. Please try again or email me
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-secondary px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:brightness-110 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
