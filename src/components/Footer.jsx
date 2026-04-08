import { Heart } from "lucide-react";

const Footer = ({ darkMode }) => {
  const dark = {
    text: "text-gray-400",
    border: "border-white/10",
    link: "text-gray-300 hover:text-orange-400",
  };
  const light = {
    text: "text-gray-600",
    border: "border-gray-200",
    link: "text-gray-800 hover:text-orange-600",
  };
  const t = darkMode ? dark : light;

  return (
    <footer className="relative z-10">
      <div className={`container mx-auto px-4 sm:px-8 lg:px-14 py-10 border-t ${t.border}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${t.text}`}>
            © {new Date().getFullYear()} Oussama. All rights reserved.
          </p>
          <p className={`text-sm ${t.text}`}>
            Built with <Heart className="inline w-4 h-4 text-orange-500" /> React + Vite + Tailwind
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a className={`${t.link}`} href="#home">
              Home
            </a>
            <a className={`${t.link}`} href="#project">
              Projects
            </a>
            <a className={`${t.link}`} href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

