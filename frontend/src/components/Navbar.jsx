import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">Antigravity</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/#courses" className="text-slate-600 hover:text-primary-600 transition">Courses</Link>
            <Link to="/#faculty" className="text-slate-600 hover:text-primary-600 transition">Faculty</Link>
            <Link to="/#contact" className="text-slate-600 hover:text-primary-600 transition">Contact</Link>
            <Link to="/login" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-primary-500/30">
              Student Portal
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-16 w-full border-t border-slate-200 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/#courses" className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-primary-50 hover:text-primary-600 rounded-md">Courses</Link>
            <Link to="/#contact" className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-primary-50 hover:text-primary-600 rounded-md">Contact</Link>
            <Link to="/login" className="block px-3 py-2 mt-4 text-center text-base font-medium bg-primary-600 text-white rounded-md">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
