import React, { useEffect, useRef, useState } from "react";
import { MdEmail, MdPhone, MdWhatsapp, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProject from "./AddProject";
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
        <div className="mt-10">
            <h1 className="text-2xl font-medium text-center text-black mb-4">Contact Me</h1>
            <p className="text-center mb-8 text-black max-w-xl mx-auto">
                Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together!
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
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                {/* Right Side: Contact Info */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-medium mb-6 text-gray-800">Contact Information</h1>
                    <div className="flex items-center mb-6">
                        <MdEmail className="text-2xl text-blue-600 mr-4" />
                        <span className="lg:text-lg text-base text-gray-700">mdfaruk01720875872@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <MdPhone className="text-2xl text-green-600 mr-4" />
                        <span className="text-lg text-gray-700">+880 1720 875872</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <MdWhatsapp className="text-2xl text-green-500 mr-4" />
                        <a
                            href="https://wa.me/8801720875872"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-gray-700 hover:text-green-700 transition underline"
                        >
                            +880 1720 875872
                        </a>
                    </div>
                    <div className="flex items-center">
                        <MdLocationOn className="text-2xl text-red-600 mr-4" />
                        <span className="text-lg text-gray-700">Dhaka, Bangladesh</span>
                    </div>
                </div>

                {/* Toast Notifications */}
                <ToastContainer />
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
