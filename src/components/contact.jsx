// import React, { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     copy: false,
//   });
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     try {
//       const res = await fetch(
//         "https://personal-portfolio-production-dd73.up.railway.app/api/contact",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const result = await res.json();

//       if (res.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "", copy: false });
//       } else {
//         setStatus(result.message || "Something went wrong.");
//       }
//     } catch (err) {
//       console.error("Error submitting contact form:", err);
//       setStatus("Failed to send message. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="mt-10 pt-10">
//       {/* Google Map */}
//       <div id="map" className="relative h-[400px]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7470193987087!2d73.0664!3d33.6261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956d6a5a6f61%3A0x8a7f91caa7e1c2d7!2sSatellite%20Town%2C%20Rawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693825123456"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           title="Google Map"
//         ></iframe>
//       </div>

//       {/* Contact Section */}
//       <div className="container w-full px-4 md:px-12 -mt-[1px]">
//         <div className="card bg-base-100/80 backdrop-blur-xl border border-base-300 shadow-xl p-6 md:p-12">
//           <div className="flex flex-wrap">
//             {/* Left Form */}
//             <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="input input-bordered w-full"
//                 />

//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email Address"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="input input-bordered w-full"
//                 />

//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Message"
//                   rows="3"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="textarea textarea-bordered w-full"
//                 ></textarea>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="btn btn-primary w-full flex items-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <svg
//                         className="animate-spin h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                         ></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     "Send"
//                   )}
//                 </button>

//                 {status && (
//                   <p
//                     className={`text-sm mt-2 ${
//                       status.includes("")
//                         ? "text-success"
//                         : status.includes("")
//                         ? "text-error"
//                         : "text-warning"
//                     }`}
//                   >
//                     {status}
//                   </p>
//                 )}
//               </form>
//             </div>

//             {/* Right Info */}
//             <div className="w-full lg:w-7/12">
//               <div className="grid md:grid-cols-2 gap-8">
//                 {/* Technical Support */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-4 rounded-md bg-primary/20 text-primary">
//                     📞
//                   </div>
//                   <div>
//                     <p className="font-bold">Technical Support</p>
//                     <p className="text-sm text-base-content/70">
//                       example@gmail.com
//                     </p>
//                     <p className="text-sm text-base-content/70">
//                       1-600-890-4567
//                     </p>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-4 rounded-md bg-primary/20 text-primary">
//                     📍
//                   </div>
//                   <div>
//                     <p className="font-bold">Address</p>
//                     <p className="text-sm text-base-content/70">
//                       Satellite Town, Rawalpindi, Pakistan
//                     </p>
//                   </div>
//                 </div>

//                 {/* Land Line */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-4 rounded-md bg-primary/20 text-primary">
//                     ☎️
//                   </div>
//                   <div>
//                     <p className="font-bold">Land Line</p>
//                     <p className="text-sm text-base-content/70">
//                       (0421) 431 2030
//                     </p>
//                   </div>
//                 </div>

//                 {/* Mobile */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-4 rounded-md bg-primary/20 text-primary">
//                     📱
//                   </div>
//                   <div>
//                     <p className="font-bold">Mobile</p>
//                     <p className="text-sm text-base-content/70">
//                       +91 123456789
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* End Info */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    copy: false,
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "https://personal-portfolio-production-dd73.up.railway.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", copy: false });
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-10 pt-10">
      {/* Google Map with ZoomIn */}
      <motion.div
        id="map"
        className="relative h-[400px]"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7470193987087!2d73.0664!3d33.6261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956d6a5a6f61%3A0x8a7f91caa7e1c2d7!2sSatellite%20Town%2C%20Rawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693825123456"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </motion.div>

      {/* Contact Section */}
      <div className="container w-full px-4 md:px-12 -mt-[1px]">
        <motion.div
          className="card bg-base-100/80 backdrop-blur-xl border border-base-300 shadow-xl p-6 md:p-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap">
            {/* Left Form with SlideUp */}
            <motion.div
              className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />

                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="textarea textarea-bordered w-full"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </button>

                {status && (
                  <p
                    className={`text-sm mt-2 ${
                      status.includes("")
                        ? "text-success"
                        : status.includes("")
                        ? "text-error"
                        : "text-warning"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Right Info with fade/slide */}
            <motion.div
              className="w-full lg:w-7/12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technical Support */}
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-md bg-primary/20 text-primary">
                    📞
                  </div>
                  <div>
                    <p className="font-bold">Technical Support</p>
                    <p className="text-sm text-base-content/70">
                      asyncvibes87@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-md bg-primary/20 text-primary">
                    📍
                  </div>
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-sm text-base-content/70">
                      Satellite Town, Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Land Line */}
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-md bg-primary/20 text-primary">
                    ☎️
                  </div>
                  <div>
                    <p className="font-bold">Land Line</p>
                    <p className="text-sm text-base-content/70">
                      (0421) 431 2030
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-md bg-primary/20 text-primary">
                    📱
                  </div>
                  <div>
                    <p className="font-bold">Mobile</p>
                    <p className="text-sm text-base-content/70">
                      +92 03020784810
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
