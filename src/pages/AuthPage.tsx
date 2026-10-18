import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, User, Shield, Key, Sparkles, CheckCircle2 } from 'lucide-react';
import { Logo } from '../components/brand/Logo';
import { setAuthUser } from '../lib/supabase';

interface AuthPageProps {
  setActiveTab: (tab: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ setActiveTab }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState<'Admin' | 'Student' | 'Mentor' | 'Founder'>('Admin');
  const [email, setEmail] = useState('admin@bitsvizag.ac.in');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('Sravan Kumar');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { email, role, name };
    setAuthUser(user);
    setLoggedIn(true);

    setTimeout(() => {
      if (role === 'Admin') {
        setActiveTab('admin');
      } else {
        setActiveTab('home');
      }
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-28 pb-16">
      <div className="glass-panel p-8 rounded-3xl border border-cyan-glow/40 shadow-cyan-glow space-y-6 relative overflow-hidden">
        <div className="text-center space-y-3">
          <Logo size="lg" className="justify-center" />
          <h2 className="text-2xl font-bold font-display text-white">
            {isSignUp ? 'Create Portal Account' : 'Supabase Authentication'}
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            BITS Vizag E-Cell Identity Management
          </p>
        </div>

        {loggedIn ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-cyan-glow mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-white">Authentication Successful!</h3>
            <p className="text-xs text-cyan-accent font-mono">
              Role: <span className="font-bold text-white">{role}</span> &bull; Redirecting...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {isSignUp && (
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-slate-300 font-medium mb-1">Role Type</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
              >
                <option value="Admin">Admin (E-Cell Executive Board)</option>
                <option value="Student">Student Innovator</option>
                <option value="Mentor">Alumni / VC Mentor</option>
                <option value="Founder">Incubated Startup Founder</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white focus:border-cyan-glow focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-accent to-cyan-deep text-navy-950 font-bold text-xs shadow-cyan-glow hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>{isSignUp ? 'Register Identity' : 'Log In to Console'}</span>
            </button>
          </form>
        )}

        <div className="pt-2 text-center text-xs font-mono text-slate-400">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-cyan-glow hover:underline cursor-pointer"
          >
            {isSignUp ? 'Already have credentials? Log In' : 'Need an account? Request Access'}
          </button>
        </div>
      </div>
    </div>
  );
};
