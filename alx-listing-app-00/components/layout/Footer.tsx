const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 mt-auto">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} ALX Listing App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
