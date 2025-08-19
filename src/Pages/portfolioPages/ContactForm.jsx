import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    
      emailjs
      .sendForm(
        "service_526rktp",
        "template_g8tiwdn",
        form.current,
        { publicKey: "vtR4yCx2k5k_EXOH2" }
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          setStatusMessage("❌ Oops! Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center  dark:bg-gray-900 px-4"
    >
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-700 dark:text-cyan-400">
          📬 Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {[{ name: "user_name", type: "text", placeholder: "Your Name" },
            { name: "user_email", type: "email", placeholder: "Your Email" }].map(
            ({ name, type, placeholder }) => (
              <div key={name} className="relative">
                <input
                  type={type}
                  name={name}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 outline-none py-2"
                />
                <label
                  htmlFor={name}
                  className="absolute left-0 top-0 text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all"
                >
                  {placeholder}
                </label>
              </div>
            )
          )}

          <div className="relative">
            <textarea
              name="message"
              placeholder=" "
              required
              rows="5"
              className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 outline-none py-2 resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-0 text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm transition-all"
            >
              Your Message
            </label>
          </div>

          <motion.button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 text-white rounded relative overflow-hidden transition-colors duration-300 ${
              isSending ? "bg-gray-400 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"
            }`}
            whileHover={{ scale: isSending ? 1 : 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isSending ? "Sending..." : "Send"}
            {!isSending && (
              <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
            )}
          </motion.button>
        </form>

        {statusMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`mt-6 text-center font-medium text-sm ${
              statusMessage.startsWith("✅") ? "text-green-500" : "text-red-500"
            }`}
          >
            {statusMessage}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
