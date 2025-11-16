import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} ListingApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
