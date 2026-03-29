import { useState } from 'react';
import { BookOpen, User, Lock, Mail } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* In a real app, this will call the backend `/api/auth/login` */
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden w-full absolute top-0 z-[100]">
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 w-full px-4 sm:px-0">
        <Link to="/" className="flex justify-center items-center space-x-2 mb-6">
          <BookOpen className="h-10 w-10 text-primary-600" />
          <span className="font-bold text-3xl tracking-tight text-slate-900">Antigravity</span>
        </Link>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900">
          {isLogin ? 'Sign in to your account' : 'Register a new account'}
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Or{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-primary-600 hover:text-primary-500 transition-colors cursor-pointer">
            {isLogin ? 'create a new account' : 'sign in to existing account'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 animate-fade-in w-[95%] sm:w-full mx-auto">
        <div className="glass px-4 py-8 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="text" required className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-lg py-3 px-4 bg-white/50 outline-none" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" required className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-lg py-3 px-4 bg-white/50 outline-none" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" required className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-lg py-3 px-4 bg-white/50 outline-none" placeholder="••••••••" />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded cursor-pointer" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 cursor-pointer">Remember me</label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500">Forgot your password?</a>
                </div>
              </div>
            )}

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all hover:shadow-lg hover:shadow-primary-500/30 cursor-pointer">
                {isLogin ? 'Sign in' : 'Create Account'}
              </button>
            </div>
            {isLogin && (
               <div className="text-center text-xs text-slate-500 mt-4">
                 Demo Hint: Any credential will automatically route to Admin Dashboard.
               </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
