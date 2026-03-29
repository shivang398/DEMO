import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary-500" />
              <span className="font-bold text-xl tracking-tight text-white">Antigravity</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Elevating students strictly above expectations. We focus on premier competitive exam preparation with state-of-the-art facilities and top-tier faculty.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#courses" className="hover:text-primary-400 transition-colors text-sm">Our Courses</Link></li>
              <li><Link to="/#faculty" className="hover:text-primary-400 transition-colors text-sm">Expert Faculty</Link></li>
              <li><Link to="/login" className="hover:text-primary-400 transition-colors text-sm">Student Login</Link></li>
              <li><Link to="/#contact" className="hover:text-primary-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0" />
                <span>123 Knowledge Park, Phase 1, Neo City, NC 54321</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span>info@antigravitycoaching.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">Subscribe to receive study materials and updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:border-primary-500 text-white text-sm"
              />
              <button 
                type="button" 
                className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-r-md transition-colors text-sm font-medium"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Antigravity Coaching Institutes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
