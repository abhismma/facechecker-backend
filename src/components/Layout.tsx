import React, { ReactNode } from 'react';
import { Scan, Github } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scan className="h-8 w-8 text-indigo-500" />
            <h1 className="text-2xl font-bold text-gray-800">FaceChecker</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2025 FaceChecker. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-indigo-500 transition-colors flex items-center gap-2"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;