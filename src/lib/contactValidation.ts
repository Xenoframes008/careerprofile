import type { ContactFormValues } from "@/types";

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared client/server validation so the two never drift apart. */
export function validateContactForm(
  values: Partial<ContactFormValues>,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name?.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!values.email?.trim() || !EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject?.trim() || values.subject.trim().length < 3) {
    errors.subject = "Add a short subject.";
  }
  if (!values.message?.trim() || values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}
