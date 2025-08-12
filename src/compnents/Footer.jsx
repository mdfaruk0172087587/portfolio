import React from "react";

const Footer = () => {
    return (
        <div className=" max-w-[78%] mx-auto border-t border-gray-700 py-4 text-gray-600 text-sm text-center">
                    © {new Date().getFullYear()} Omar Faruk. All rights reserved.
                </div>
    );
};

export default Footer;
