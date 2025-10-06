import React, { useEffect, useRef, useState } from "react";
import { MdEmail, MdPhone, MdWhatsapp, MdLocationOn } from "react-icons/md";
import contactLot from "../assets/contactLottee.json"
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProject from "./AddProject";
import Lottie from "lottie-react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
const Contact = () => {
    const form = useRef();
     const [showAddProject, setShowAddProject] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showAddProject') === 'true') {
      setShowAddProject(true);
    }
  }, []);

 const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const isValidEmail = (email) => {
        return /^\S+@\S+\.\S+$/.test(email);
    };
    const sendEmail = (e) => {
        e.preventDefault();

        // valid email
        if (!isValidEmail(formData.user_email)) {
            toast.error("Please provide a valid email address.");
            return;
        }
        setLoading(true);
        emailjs
            .sendForm("service_9nalt3s", "template_7ac1yko", form.current, {
                publicKey: "AXXI-Dh3STkbFTMbc",
            })
            .then(
                () => {
                    form.current.reset();
                    setFormData({ user_name: "", user_email: "", message: "" });
                    toast.success("Your message has been sent successfully!", {
                        position: "top-center",
                        autoClose: 3000,
                    });
                    setLoading(false);
                },
                (error) => {
                    toast.error("There was a problem sending the message. Please try again.", {
                        position: "top-center",
                        autoClose: 3000,
                    });
                    console.error("FAILED...", error.text);
                    setLoading(false);
                }
            );
    };
    return (
        <div className="mt-12">
            <h1 className="text-4xl lg:text-5xl font-medium text-center text-black mb-4">Get In Touch</h1>
            <p className="text-center mb-8 text-black px-4 max-w-xl mx-auto ">
                Have questions or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
            </p>
            <div className="max-w-[90%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side: Form */}
                <div>
                    <h1 className="text-3xl font-medium mb-6 text-gray-800">Email Me</h1>
                    <form ref={form} onSubmit={sendEmail} className="space-y-2" noValidate>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="your name"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="youremail@gamil.com"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Massage</label>
                            <textarea
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`${loading ? "bg-gray-400 cursor-not-allowed" : "text-black border border-blue-600 rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
                                }  font-semibold px-6 py-3 rounded transition flex items-center justify-center`}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
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
                                "Send Email"
                            )}
                        </button>
                    </form>
                </div>
                 {/* Lottie Animation */}
        <div className="flex-1 w-full flex justify-center items-center">
          <Lottie animationData={contactLot} loop={true} style={{ width: '100%', height: '100%' }} />
        </div>

                {/* Toast Notifications */}
                <ToastContainer />
            </div>
             {/* Contact Cards */}
             <h1 className="text-center text-4xl lg:text-5xl font-medium my-10 text-gray-700">Contact Information</h1>
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mb-20">
          {/* Email */}
          <div
            className=" backdrop-blur-md border bg-gray-300 border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-green-100 p-4 rounded-full shadow-inner">
              <FaEnvelope className="text-green-600 text-2xl" />
            </div>
            <span className="font-semibold text-base md:text-lg text-gray-500">
              mdfaruk01720875872@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div
            className="backdrop-blur-md border bg-gray-300 border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-green-100 p-4 rounded-full shadow-inner">
              <FaPhoneAlt className="text-green-600 text-2xl" />
            </div>
            <span className="font-semibold text-base md:text-lg text-gray-500">
              +8801720875872
            </span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801823461697"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md border bg-gray-300 border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-green-100 p-4 rounded-full shadow-inner">
              <FaWhatsapp className="text-green-600 text-2xl" />
            </div>
            <span className="font-semibold text-base md:text-lg text-gray-500">
              +8801720875872
            </span>
          </a>

          {/* Location */}
          <div
            className="backdrop-blur-md border bg-gray-300 border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-green-100 p-4 rounded-full shadow-inner">
              <FaMapMarkerAlt className="text-green-600 text-2xl" />
            </div>
            <span className="font-semibold text-base md:text-lg text-gray-500">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>
             <div className=" max-w-[90%] mx-auto border-t text-black py-4 text-sm text-center">
                    © {new Date().getFullYear()} Omar Faruk. All rights reserved.
                </div>
                <div>
                  {
                    showAddProject && <AddProject></AddProject>
                  }
                </div>
        </div>
    );
};

export default Contact;
