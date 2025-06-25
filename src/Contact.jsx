import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_phcnwgu",
        "template_2ezse05",
        form.current,
        "86Wmqv5Bg61Y3MEKN"
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-800 dark:text-white">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
        {success && (
          <p className="text-green-500 mt-4 text-center">
            ✅ Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
