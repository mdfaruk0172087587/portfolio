import React, { useRef, useState } from "react";
import { MdEmail, MdPhone, MdWhatsapp, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
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

        // শুধু ইমেইল ভ্যালিডেশন
        if (!isValidEmail(formData.user_email)) {
            toast.error("সঠিক ইমেইল ঠিকানা দিন।");
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
                    toast.success("আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!", {
                        position: "top-center",
                        autoClose: 3000,
                    });
                    setLoading(false);
                },
                (error) => {
                    toast.error("মেসেজ পাঠাতে সমস্যা হয়েছে, আবার চেষ্টা করুন।", {
                        position: "top-center",
                        autoClose: 3000,
                    });
                    console.error("FAILED...", error.text);
                    setLoading(false);
                }
            );
    };

    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold text-center text-gray-800">Contact Me</h1>

            <div className="max-w-[90%] mx-auto p-6 my-5 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side: Form */}
                <div>
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">আমাকে ইমেইল করুন</h1>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4" noValidate>
                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">নাম</label>
                            <input
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">ইমেইল</label>
                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-gray-700">মেসেজ</label>
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
                            className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                } text-white font-semibold px-6 py-3 rounded transition flex items-center justify-center`}
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
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">যোগাযোগের তথ্য</h1>

                    <div className="flex items-center mb-6">
                        <MdEmail className="text-2xl text-blue-600 mr-4" />
                        <a
                            href="mailto:mdfaruk01720875872@gmail.com"
                            className="text-lg text-gray-700 hover:text-blue-700 transition"
                        >
                            mdfaruk01720875872@gmail.com
                        </a>
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
                            className="text-lg text-gray-700 hover:text-green-700 transition"
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
        </div>
    );
};

export default Contact;
