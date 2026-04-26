import { useRef, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { SelectedPage } from "@/shared/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type ContactUsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const fieldClass =
  "w-full rounded-xl border border-primary-300/45 bg-primary-100/80 px-4 py-3 text-sm text-gray-500 shadow-sm outline-none transition placeholder:text-primary-500/75 focus:border-primary-500/55 focus:bg-primary-100 focus:ring-2 focus:ring-primary-500/30 dark:border-primary-500/35 dark:bg-charcoal-800/90 dark:text-rose-text dark:placeholder:text-rose-text-muted dark:focus:bg-charcoal-800 sm:py-3.5 sm:text-base";

const labelClass =
  "mb-1.5 block font-inter text-xs font-semibold uppercase tracking-[0.14em] text-gray-500/75 dark:text-rose-text-muted";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const FORMSUBMIT_ACTION =
  "https://formsubmit.co/faa9b414fce3f3287d1d07a739345357";

const ContactUs = ({ setSelectedPage }: ContactUsProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await trigger();
    if (ok) formRef.current?.submit();
  };

  return (
    <section
      id="contactus"
      className="border-t border-gray-100 bg-gradient-to-b from-gray-20 via-primary-100/40 to-gray-20 dark:border-charcoal-800 dark:from-charcoal-950 dark:via-charcoal-900 dark:to-charcoal-950"
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-16 sm:px-8 sm:py-20 md:py-24">
        <motion.div
          className="flex flex-col gap-12 md:gap-14"
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          <motion.header
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            variants={fade}
          >
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
              Contact
            </p>
            <h2 className="mt-3 font-inter text-4xl font-bold leading-tight tracking-tight text-gray-500 dark:text-rose-text min-[400px]:text-5xl md:text-6xl">
              <span className="text-primary-500">Say hi</span>
              <span className="text-gray-500 dark:text-rose-text">
                {" "}
                — we’ll help you start smart
              </span>
            </h2>
            <div
              className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
              aria-hidden
            />
            <p className="mt-6 max-w-prose text-sm leading-relaxed text-gray-500/90 dark:text-rose-text/90 sm:text-base">
              Tell us your goals, your schedule, and what feels intimidating
              (totally normal). Someone from EVOGYM will read it and point you to
              the right intro class, coach, or tour — no pressure, no spammy
              follow-ups.
            </p>
          </motion.header>

          <div className="grid min-w-0 gap-10 md:grid-cols-2 md:items-stretch md:gap-12">
            <motion.div
              className="flex h-full min-h-0 flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45 }}
              variants={fade}
            >
              <div className="flex h-full min-h-0 flex-col rounded-3xl border border-gray-100 bg-gray-20/95 p-6 shadow-lg shadow-primary-500/10 ring-1 ring-primary-100/50 dark:border-charcoal-700 dark:bg-charcoal-900/90 dark:ring-charcoal-700 sm:p-8">
                <form
                  ref={formRef}
                  id="contact-form"
                  action={FORMSUBMIT_ACTION}
                  method="POST"
                  target="_blank"
                  noValidate
                  onSubmit={handleSubmit}
                  className="flex min-h-0 flex-1 flex-col gap-5"
                >
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Alex Rivera"
                      className={fieldClass}
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p
                        className="mt-2 text-sm font-medium text-primary-500"
                        role="alert"
                      >
                        {errors.name.type === "required" &&
                          "This field is required."}
                        {errors.name.type === "maxLength" &&
                          "Maximum length is 100 characters."}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="hello@youremail.com"
                      className={fieldClass}
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p
                        className="mt-2 text-sm font-medium text-primary-500"
                        role="alert"
                      >
                        {errors.email.type === "required" &&
                          "This field is required."}
                        {errors.email.type === "pattern" &&
                          "Please enter a valid email address."}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="e.g. I want strength 2×/week plus one yoga class…"
                      className={`${fieldClass} min-h-[9rem] resize-y`}
                      {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                    />
                    {errors.message && (
                      <p
                        className="mt-2 text-sm font-medium text-primary-500"
                        role="alert"
                      >
                        {errors.message.type === "required" &&
                          "This field is required."}
                        {errors.message.type === "maxLength" &&
                          "Maximum length is 2000 characters."}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-auto w-full min-h-[44px] shrink-0 rounded-lg bg-secondary-500 px-8 py-3 font-inter text-sm font-semibold uppercase tracking-wide text-gray-500 transition-colors hover:bg-primary-500 hover:text-white dark:text-charcoal-950 sm:w-auto sm:px-12 sm:text-base"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.aside
              className="mx-auto flex h-full min-h-0 w-full max-w-md flex-col md:mx-0 md:max-w-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              variants={fade}
            >
              <div className="flex h-full min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-20/90 shadow-md ring-1 ring-primary-100/40 dark:border-charcoal-700 dark:bg-charcoal-900/80 dark:ring-charcoal-700">
                <img
                  src={ContactUsPageGraphic}
                  alt="EVOGYM front desk team welcoming a new member"
                  className="max-h-full w-full object-contain object-center p-6 sm:p-8"
                  loading="lazy"
                />
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
