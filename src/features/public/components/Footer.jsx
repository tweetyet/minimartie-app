const Footer = () => {
  return (
    <footer className="border-t border-[#A16207]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-[#A16207]">
              Minimartie
            </h2>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Your daily essentials in one place. Fresh products, fast delivery
              and affordable prices for everyone.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-[#A16207] mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#A16207] cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-[#A16207] cursor-pointer transition">
                Products
              </li>
              <li className="hover:text-[#A16207] cursor-pointer transition">
                Categories
              </li>
              <li className="hover:text-[#A16207] cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-[#A16207] mb-3">Contact</h3>
            <p className="text-sm text-gray-500">Email: support@minimartie.com</p>
            <p className="text-sm text-gray-500">Phone: +66 123 456 789</p>
            <p className="text-sm text-gray-500">Location: Bangkok, Thailand</p>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-[#A16207]/20 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Minimartie. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;