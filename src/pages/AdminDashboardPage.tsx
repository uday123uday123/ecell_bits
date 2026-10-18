import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Calendar, Users, Rocket, BookOpen, Image as ImageIcon, 
  Bell, MessageSquare, Plus, Trash2, Edit3, CheckCircle2, Search, X, LogOut
} from 'lucide-react';
import { 
  INITIAL_EVENTS, INITIAL_TEAM, INITIAL_STARTUPS, INITIAL_BLOGS, 
  INITIAL_GALLERY, INITIAL_ANNOUNCEMENTS, INITIAL_MESSAGES 
} from '../lib/mockData';
import { EventItem, TeamMember, StartupItem, BlogItem, AnnouncementItem } from '../lib/types';
import { setAuthUser } from '../lib/supabase';

interface AdminDashboardPageProps {
  setActiveTab: (tab: string) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ setActiveTab }) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'Overview' | 'Events' | 'Team' | 'Startups' | 'Blogs' | 'Announcements' | 'Messages'>('Overview');

  // State management for live CRUD operations in Admin console
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [team, setTeam] = useState<TeamMember[]>(INITIAL_TEAM);
  const [startups, setStartups] = useState<StartupItem[]>(INITIAL_STARTUPS);
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(INITIAL_ANNOUNCEMENTS);

  // Quick Modal State for adding new Event
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventCategory, setNewEventCategory] = useState<'Summit' | 'Hackathon' | 'Workshop'>('Workshop');
  const [newEventDate, setNewEventDate] = useState('2026-09-30');

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle) return;
    const newEvt: EventItem = {
      id: `evt-${Date.now()}`,
      title: newEventTitle,
      category: newEventCategory,
      date: newEventDate,
      time: '10:00 AM',
      location: 'Main Auditorium, BITS Vizag',
      description: 'Newly announced session added via Admin Portal.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      status: 'Upcoming',
      registrationOpen: true,
    };
    setEvents([newEvt, ...events]);
    setNewEventTitle('');
    setShowAddEvent(false);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const handleLogout = () => {
    setAuthUser(null);
    setActiveTab('home');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 space-y-8">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-3xl border border-cyan-glow/40 shadow-cyan-glow flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-glow/20 border border-cyan-glow flex items-center justify-center text-cyan-glow font-bold">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-white">BITS Vizag E-Cell Admin Dashboard</h1>
            <p className="text-xs font-mono text-cyan-accent">Master Console &bull; Connected to Client Database</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('home')}
            className="px-4 py-2 rounded-xl bg-navy-900 border border-slate-700 text-slate-300 text-xs font-medium hover:border-cyan-glow transition cursor-pointer"
          >
            View Live Site
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold hover:bg-red-500/20 transition cursor-pointer flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex flex-wrap gap-2 bg-navy-950 p-2 rounded-2xl border border-navy-800">
        {(['Overview', 'Events', 'Team', 'Startups', 'Announcements', 'Blogs', 'Messages'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveAdminTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeAdminTab === tab
                ? 'bg-cyan-glow/20 border border-cyan-glow text-cyan-glow shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeAdminTab === 'Overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Active Events', count: events.length, icon: Calendar, color: 'text-cyan-glow' },
              { label: 'Team Roster', count: team.length, icon: Users, color: 'text-emerald-400' },
              { label: 'Incubated Startups', count: startups.length, icon: Rocket, color: 'text-amber-400' },
              { label: 'Active Announcements', count: announcements.length, icon: Bell, color: 'text-purple-400' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="glass-panel p-6 rounded-3xl border border-cyan-glow/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 uppercase">{card.label}</span>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div className={`font-display text-3xl font-bold ${card.color}`}>{card.count}</div>
                </div>
              );
            })}
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-cyan-glow/20 space-y-4">
            <h3 className="text-lg font-bold text-white font-display">System Operations Log</h3>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 flex items-center justify-between">
                <span>[INFO] Supabase Auth session active for admin@bitsvizag.ac.in</span>
                <span className="text-slate-500">Just now</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 flex items-center justify-between">
                <span>[SUCCESS] Pitch application received for AquaSense AI</span>
                <span className="text-slate-500">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EVENTS MANAGEMENT TAB */}
      {activeAdminTab === 'Events' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold font-display text-white">Events Management</h3>
            <button
              onClick={() => setShowAddEvent(true)}
              className="px-4 py-2 rounded-xl bg-cyan-glow text-navy-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-cyan-glow"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Event</span>
            </button>
          </div>

          {/* Add Event Modal */}
          {showAddEvent && (
            <form onSubmit={handleAddEvent} className="glass-panel p-6 rounded-3xl border border-cyan-glow/40 space-y-4 text-xs">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white">Add Event</h4>
                <button type="button" onClick={() => setShowAddEvent(false)}><X className="w-4 h-4 text-slate-400" /></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Event Title"
                  required
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white"
                />
                <select
                  value={newEventCategory}
                  onChange={(e) => setNewEventCategory(e.target.value as any)}
                  className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white"
                >
                  <option value="Summit">Summit</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Workshop">Workshop</option>
                </select>
                <input
                  type="date"
                  value={newEventDate}
                  onChange={(e) => setNewEventDate(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-navy-950 border border-slate-700 text-white"
                />
              </div>
              <button type="submit" className="px-4 py-2 rounded-xl bg-cyan-glow text-navy-950 font-bold">Save Event</button>
            </form>
          )}

          <div className="glass-panel rounded-3xl overflow-hidden border border-cyan-glow/20">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-slate-400 font-mono border-b border-navy-800">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-900 text-slate-200">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-navy-900/50">
                    <td className="p-4 font-bold text-white">{evt.title}</td>
                    <td className="p-4 font-mono text-cyan-accent">{evt.category}</td>
                    <td className="p-4 font-mono">{evt.date}</td>
                    <td className="p-4"><span className="px-2 py-0.5 rounded-full bg-cyan-glow/15 text-cyan-glow text-[10px] font-mono">{evt.status}</span></td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDeleteEvent(evt.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        title="Delete Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TEAM MANAGEMENT TAB */}
      {activeAdminTab === 'Team' && (
        <div className="glass-panel rounded-3xl p-6 border border-cyan-glow/20 space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Team Member Directory</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {team.map((tm) => (
              <div key={tm.id} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{tm.name}</div>
                  <div className="text-[11px] text-cyan-accent">{tm.position}</div>
                </div>
                <button
                  onClick={() => setTeam(team.filter((t) => t.id !== tm.id))}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STARTUPS TAB */}
      {activeAdminTab === 'Startups' && (
        <div className="glass-panel rounded-3xl p-6 border border-cyan-glow/20 space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Incubation Portfolio List</h3>
          <div className="space-y-3">
            {startups.map((stp) => (
              <div key={stp.id} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{stp.name} ({stp.industry})</div>
                  <div className="text-[11px] text-slate-400">{stp.founder} &bull; {stp.fundingStage}</div>
                </div>
                <button
                  onClick={() => setStartups(startups.filter((s) => s.id !== stp.id))}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ANNOUNCEMENTS TAB */}
      {activeAdminTab === 'Announcements' && (
        <div className="glass-panel rounded-3xl p-6 border border-cyan-glow/20 space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Site Banner Announcements</h3>
          <div className="space-y-3">
            {announcements.map((anc) => (
              <div key={anc.id} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{anc.title}</div>
                  <div className="text-[11px] text-slate-400">{anc.content}</div>
                </div>
                <span className="px-2 py-1 rounded bg-cyan-glow/15 text-cyan-glow font-mono text-[10px]">{anc.type}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* BLOGS / RESOURCES CMS TAB */}
      {activeAdminTab === 'Blogs' && (
        <div className="glass-panel rounded-3xl p-6 border border-cyan-glow/20 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold font-display text-white">Content Management (CMS)</h3>
            <button className="px-4 py-2 rounded-xl bg-cyan-glow text-navy-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-cyan-glow">
              <Plus className="w-4 h-4" />
              <span>New Post / Resource</span>
            </button>
          </div>
          <div className="space-y-3">
            {INITIAL_BLOGS.map((blog) => (
              <div key={blog.id} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{blog.title}</div>
                  <div className="text-[11px] text-slate-400">Published: {blog.publishedAt} &bull; {blog.category}</div>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-lg bg-cyan-glow/10 text-cyan-glow hover:bg-cyan-glow/20"><Edit3 className="w-4 h-4" /></button>
                  <button className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MESSAGES TAB */}
      {activeAdminTab === 'Messages' && (
        <div className="glass-panel rounded-3xl p-6 border border-cyan-glow/20 space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Contact Form Submissions</h3>
          <div className="space-y-3">
            {INITIAL_MESSAGES.map((msg) => (
              <div key={msg.id} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex flex-col gap-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-white text-sm">{msg.subject}</div>
                    <div className="text-[11px] text-cyan-accent font-mono">{msg.name} ({msg.email}) &bull; {msg.timestamp}</div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${msg.status === 'Unread' ? 'bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/40' : 'bg-slate-800 text-slate-400'}`}>
                    {msg.status}
                  </span>
                </div>
                <div className="text-slate-300 bg-navy-900/50 p-3 rounded-xl border border-slate-800/50">
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
