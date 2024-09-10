import { Facebook, Github, Instagram, Twitter } from "lucide-react";


export default function Footer() {
  return (
    <div>
      {/* {" "} */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 StrengthZone. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="www.facebook.com" className="hover:text-white">
              <Facebook className="hover:text-white" />
              </a>
              <a href="www.instagram.com" className="hover:text-white">
              <Instagram className="hover:text-white"  />
              </a>
              <a href="www.twitter.com" className="hover:text-white">
              <Twitter className="hover:text-white"  />
              </a>
              <a href="/www.github.com" className="hover:text-white">
                <Github className="hover:text-white" />
              </a>
              
              
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
