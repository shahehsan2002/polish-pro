
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; 2024 PolishPro. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
