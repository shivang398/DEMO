import { ArrowRight, CheckCircle2, Trophy, Users, BookOpen } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-32 -left-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow max-md:hidden" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary-100 shadow-sm mb-8 animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-800">Admissions Open 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Defy Expectations with <br />
              <span className="text-gradient">Antigravity Coaching</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Premium education ecosystem engineered to propel your academic career. Join thousands of students achieving top ranks.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(20,184,166,0.6)] hover:shadow-[0_0_60px_-15px_rgba(20,184,166,0.8)] flex items-center justify-center">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 rounded-full font-semibold text-lg transition-all shadow-sm flex items-center justify-center">
                Book Counseling
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">15k+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Students Selected</div>
            </div>
            <div className="text-center border-l border-slate-200">
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Expert Faculty</div>
            </div>
            <div className="text-center lg:border-l border-slate-200">
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="text-center border-l border-slate-200">
              <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive classroom and online programs designed by industry experts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Feature Cards */}
            {[
              { title: "Foundation Batch", desc: "For classes 9th & 10th. Building strong core concepts.", icon: BookOpen },
              { title: "Target Engineering", desc: "JEE Mains & Advanced comprehensive 2-year program.", icon: Trophy },
              { title: "Medical Elite", desc: "NEET dedicated batches with personalized mentoring.", icon: Users },
            ].map((course, idx) => (
              <div key={idx} className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <course.icon className="w-32 h-32 text-primary-500" />
                </div>
                <div className="h-12 w-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <course.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{course.title}</h3>
                <p className="text-slate-600 mb-6 relative z-10">{course.desc}</p>
                <a href="#" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 relative z-10">
                  View Syllabus <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Inquiry Lead Form Section */}
      <section id="contact" className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-primary-900 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Take the first step towards your dream.</h2>
              <p className="text-lg text-slate-300 mb-8">Fill out the form and our academic counselors will reach out to you within 24 hours.</p>
              <ul className="space-y-4">
                {['Free Career Counseling', 'Scholarship Test Details', 'Demo Class Booking'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-dark rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6 text-white">Request Information</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Lead captured! This will be sent to the backend /api/leads endpoint."); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="John Doe" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Target Course</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-slate-200">
                    <option value="">Select a course...</option>
                    <option value="jee">JEE Mains & Advanced</option>
                    <option value="neet">NEET / Medical</option>
                    <option value="foundation">Foundation (Class 9-10)</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 mt-6 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
