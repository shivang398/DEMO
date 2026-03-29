import { useState } from 'react';
import { Users, BookOpen, BarChart3, Bell, Settings, LogOut, CheckCircle2, TrendingUp, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Students', value: '1,245', icon: Users, trend: '+12%', color: 'from-blue-500 to-cyan-400' },
    { label: 'Active Leads', value: '84', icon: Bell, trend: '+5%', color: 'from-orange-500 to-amber-400' },
    { label: 'Total Revenue', value: '$45,200', icon: TrendingUp, trend: '+18%', color: 'from-green-500 to-emerald-400' },
    { label: 'Classes Today', value: '12', icon: Calendar, trend: '0%', color: 'from-purple-500 to-pink-400' },
  ];

  const leads = [
    { id: 1, name: 'Rahul Sharma', course: 'JEE Mains', status: 'New', date: '2 Mins ago' },
    { id: 2, name: 'Priya Patel', course: 'NEET Foundation', status: 'Contacted', date: '1 Hr ago' },
    { id: 3, name: 'Amit Kumar', course: 'Target Engineering', status: 'Converted', date: '5 Hrs ago' },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 overflow-hidden w-full">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col transition-all">
        <div className="flex flex-col space-y-2 p-4 flex-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
          <button onClick={() => setActiveTab('overview')} className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all cursor-pointer ${activeTab === 'overview' ? 'bg-primary-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>
            <BarChart3 className="w-5 h-5" /> <span>Overview</span>
          </button>
          <button onClick={() => setActiveTab('leads')} className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all cursor-pointer ${activeTab === 'leads' ? 'bg-primary-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>
            <Bell className="w-5 h-5" /> <span>Lead Pipeline</span>
          </button>
          <button onClick={() => setActiveTab('students')} className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all cursor-pointer ${activeTab === 'students' ? 'bg-primary-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>
            <Users className="w-5 h-5" /> <span>Students</span>
          </button>
          <button onClick={() => setActiveTab('courses')} className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all cursor-pointer ${activeTab === 'courses' ? 'bg-primary-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>
            <BookOpen className="w-5 h-5" /> <span>Courses & Batches</span>
          </button>
        </div>
        
        <div className="p-4 border-t border-slate-800 space-y-2">
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl text-slate-300 hover:bg-slate-800 transition-all cursor-pointer">
            <Settings className="w-5 h-5" /> <span>Settings</span>
          </button>
          <button className="flex items-center space-x-3 w-full p-3 rounded-xl text-red-400 hover:bg-slate-800 transition-all cursor-pointer">
            <LogOut className="w-5 h-5" /> <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8 relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500 text-sm">Welcome back, Superadmin. Here's what's happening today.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
               SA
             </div>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <stat.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{stat.trend}</span>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium relative z-10">{stat.label}</h3>
                  <p className="text-2xl font-bold text-slate-900 mt-1 relative z-10">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Leads */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-900">Recent Lead Inquiries</h2>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700 cursor-pointer">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-sm">
                      <th className="py-3 font-medium">Name</th>
                      <th className="py-3 font-medium">Interested Course</th>
                      <th className="py-3 font-medium">Time</th>
                      <th className="py-3 font-medium">Status</th>
                      <th className="py-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 font-medium text-slate-900">{lead.name}</td>
                        <td className="py-4 text-slate-600">{lead.course}</td>
                        <td className="py-4 text-slate-500 text-sm">{lead.date}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                             lead.status === 'New' ? 'bg-amber-100 text-amber-700' :
                             lead.status === 'Contacted' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button className="text-slate-400 hover:text-primary-600 transition-colors cursor-pointer">
                            <CheckCircle2 className="w-5 h-5 ml-auto" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'overview' && (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center animate-fade-in">
             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
               <Settings className="w-8 h-8 text-slate-400 animate-spin" />
             </div>
             <h2 className="text-xl font-bold text-slate-900 mb-2">Module Under Construction</h2>
             <p className="text-slate-500 max-w-md">This specific control panel block will be hooked to the backend API shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
