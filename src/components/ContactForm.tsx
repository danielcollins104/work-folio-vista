import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, sendContactInquiry, type ContactInput } from "../lib/contact.functions";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const TOPICS = ["Partnership", "Investment", "Collaboration", "Press", "Just saying hi"];

const inputClass =
  "w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const send = useServerFn(sendContactInquiry);
  const [values, setValues] = useState<ContactInput>({ name: "", email: "", topic: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [fallback, setFallback] = useState(false);

  const set = (field: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("sending");
    setFallback(false);
    try {
      const result = await send({ data: parsed.data });
      if (result.sent) {
        setStatus("sent");
      } else {
        // Email delivery isn't configured yet — fall back to a prefilled email.
        setFallback(true);
        setStatus("sent");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    const mailto = `mailto:danielcollins104@gmail.com?subject=${encodeURIComponent(
      `Portfolio inquiry from ${values.name}`,
    )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`;
    return (
      <div className="glass-panel flex min-h-96 flex-col items-center justify-center gap-5 p-10 text-center" role="status">
        <CheckCircle2 size={44} className="text-primary" aria-hidden />
        <h3 className="font-display text-4xl">Message received.</h3>
        <p className="max-w-md leading-7 text-muted-foreground">
          {fallback
            ? "Direct delivery is being set up — in the meantime, send your message straight to my inbox with one click."
            : "Thanks for reaching out. I'll get back to you as soon as I can."}
        </p>
        {fallback && (
          <a className="primary-action" href={mailto}>
            Open in your email app <ArrowUpRight size={16} />
          </a>
        )}
        <button
          type="button"
          className="text-sm underline decoration-accent/60 underline-offset-4"
          onClick={() => {
            setValues({ name: "", email: "", topic: "", message: "" });
            setStatus("idle");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="glass-panel space-y-5 p-6 md:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="meta-label">Your name</label>
          <input
            id="contact-name"
            className={`${inputClass} mt-2`}
            value={values.name}
            onChange={set("name")}
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && <p id="contact-name-error" className="mt-2 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="meta-label">Email address</label>
          <input
            id="contact-email"
            type="email"
            className={`${inputClass} mt-2`}
            value={values.email}
            onChange={set("email")}
            placeholder="jane@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && <p id="contact-email-error" className="mt-2 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <fieldset>
        <legend className="meta-label">What's this about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => setValues((v) => ({ ...v, topic: v.topic === topic ? "" : topic }))}
              aria-pressed={values.topic === topic}
              className={`tag transition ${values.topic === topic ? "border-primary bg-primary/15 text-primary" : "hover:border-primary/50"}`}
            >
              {topic}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="contact-message" className="meta-label">Message</label>
        <textarea
          id="contact-message"
          className={`${inputClass} mt-2 min-h-36 resize-y`}
          value={values.message}
          onChange={set("message")}
          placeholder="Tell me about your idea, project, or opportunity…"
          maxLength={2000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        <div className="mt-2 flex items-center justify-between">
          {errors.message ? (
            <p id="contact-message-error" className="text-xs text-destructive">{errors.message}</p>
          ) : (
            <span />
          )}
          <span className="text-[11px] text-muted-foreground">{values.message.length}/2000</span>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong sending your message. Please try again, or email me directly below.
        </p>
      )}

      <button type="submit" className="primary-action w-full justify-center" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden /> Send message
          </>
        )}
      </button>
    </form>
  );
}
