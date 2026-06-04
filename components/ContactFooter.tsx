import React from 'react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full min-h-[60vh] bg-[#C6C6C5] flex flex-col justify-between pt-16 sm:pt-24 pb-10 sm:pb-12 px-5 sm:px-8 md:px-24 text-[#535150]">

      {/* Main Content: Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 sm:gap-y-16 md:gap-x-12 w-full flex-grow">

        {/* Left: Brand Name (Takes 5 columns) */}
        <div className="md:col-span-5">
          <h2 className="font-architectural text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#535150] leading-none">
            The<br />Paradigm<br />Architects
          </h2>
        </div>

        {/* Right: Info Grid (Takes 7 columns -> 3 internal columns) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-sm md:text-base">

          {/* Column 1: Head Office */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#A07457]">Head Office</h4>
            <address className="not-italic opacity-80 leading-relaxed">
              Wing A, 2nd floor, U.L.O Plaza,<br />
              No. 34, Sokode Crescent,<br />
              Wuse, Zone 5, Abuja.<br />
              <a href="mailto:hello@paradigm.arch" className="block mt-4 hover:text-[#A07457] transition-colors">hello@paradigm.arch</a>
            </address>
          </div>

          {/* Column 2: Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#A07457]">Socials</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-[#A07457] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#A07457] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#A07457] transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 3: Inquiries */}
          <div className="space-y-4">
            <h4 className="font-bold text-[#A07457]">Inquiries</h4>
            <div className="opacity-80 leading-relaxed">
              <p className="mb-4">For any inquiries, questions or commendations, please call:</p>
              <a href="tel:+2341234567890" className="block hover:text-[#A07457] transition-colors">+234 123 456 7890</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Divider + Legal + Copyright */}
      <div className="w-full mt-16 sm:mt-24">
        <div className="w-full h-px bg-[#535150]/20 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs opacity-60 gap-4">

          {/* Left: Legal Links */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            <a href="#" className="hover:text-[#A07457] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#A07457] transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-[#A07457] transition-colors">Accessibility Statement</a>
          </div>

          {/* Right: Copyright */}
          <div className="text-right">
            © 2026 by Sanadacchi.
          </div>
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;