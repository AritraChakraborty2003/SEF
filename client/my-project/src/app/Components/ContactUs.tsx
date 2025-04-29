export default function ContactUs() {
  return (
    <section className="bg-[#FFF3CD] py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Section (Hidden on small screens) */}
        <div className="hidden md:block">
          <h2 className="text-4xl font-extrabold text-black mb-8">Join Us</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            We would love to hear from you. Whether you want to know more about
            our mission, donate, volunteer, or collaborate — feel free to reach
            out!
          </p>

          <div className="space-y-6 text-gray-800 text-md">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                📩 General Inquiries
              </h4>
              <p>Email: info@ngo.org</p>
              <p>Phone: +91 12345 67890</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">
                🎯 Donation Support
              </h4>
              <p>Email: donations@ngo.org</p>
              <p>Phone: +91 98765 43210</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">
                🤝 Volunteer Programs
              </h4>
              <p>Email: volunteer@ngo.org</p>
              <p>Phone: +91 87654 32109</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">🏢 Visit Us</h4>
              <p>123 NGO Street, City, State, India</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white border-2 border-yellow-400 p-10 rounded-2xl shadow-lg w-full">
          <form className="space-y-6">
            <div>
              <label
                className="block mb-2 text-gray-800 font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md border-gray-300 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                className="block mb-2 text-gray-800 font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md border-gray-300 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                className="block mb-2 text-gray-800 font-semibold"
                htmlFor="message"
              >
                Why Join us?
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded-md border-gray-300 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-yellow-400 font-bold py-3 rounded-md hover:bg-yellow-500 hover:text-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
