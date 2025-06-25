import { Mail, Phone, MapPin } from "lucide-react";
import phoneMockup from "../../assets/phone2.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have questions, feedback, or need support? We’d love to hear from you.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="text-orange-500 w-6 h-6 mt-1" />,
                title: "Email",
                text: "support@forkedapp.com",
              },
              {
                icon: <Phone className="text-orange-500 w-6 h-6 mt-1" />,
                title: "Phone",
                text: "+233 567 8900",
              },
              {
                icon: <MapPin className="text-orange-500 w-6 h-6 mt-1" />,
                title: "Location",
                text: "Accra, Ghana",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <form className="space-y-6 bg-orange-50 p-6 rounded-xl shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* SOCIALS */}
          <div className="pt-6 border-t mt-10">
            <h4 className="text-md font-semibold text-gray-700 mb-4">
              Follow us
            </h4>
            <div className="flex gap-4">
              {[
                {
                  href: "https://facebook.com/forkedapp",
                  label: "Facebook",
                  color: "text-blue-600 hover:text-blue-700",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12a10 10 0 1 0-11.7 9.9v-7H8v-2.9h2.3V9.1c0-2.3 1.4-3.6 3.5-3.6.7 0 1.4.1 2.1.2v2.3h-1.2c-1.2 0-1.5.6-1.5 1.4v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" />
                    </svg>
                  ),
                },
                {
                  href: "https://instagram.com/forkedapp",
                  label: "Instagram",
                  color: "text-pink-500 hover:text-pink-600",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://twitter.com/forkedapp",
                  label: "Twitter",
                  color: "text-sky-500 hover:text-sky-600",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.7 1.03 4.29 4.29 0 0 0-7.3 3.91A12.16 12.16 0 0 1 3.16 4.7a4.28 4.28 0 0 0 1.33 5.72 4.26 4.26 0 0 1-1.95-.54v.05c0 2.05 1.46 3.76 3.39 4.15a4.28 4.28 0 0 1-1.94.07 4.29 4.29 0 0 0 4 2.98A8.61 8.61 0 0 1 2 19.55a12.15 12.15 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 22.46 6z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com/company/forkedapp",
                  label: "LinkedIn",
                  color: "text-blue-700 hover:text-blue-800",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.9 3.88 6 2.48 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.6-1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V24h-4V15.4c0-2.1 0-4.7-2.9-4.7s-3.3 2.2-3.3 4.5V24h-4V8z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`hover:scale-110 transition-transform ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={phoneMockup}
            alt="Download Forked App"
            className="mx-auto mb-6 w-64 h-auto shadow-lg rounded-xl"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get the Forked App
          </h3>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            Download our app to book chefs, explore recipes, and manage your
            account on the go.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 hover:scale-105 transition"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 hover:scale-105 transition"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
