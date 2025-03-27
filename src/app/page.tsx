'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Shooting star component
const ShootingStar = () => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ 
        x: '0%',
        y: '0%',
        opacity: 0,
      }}
      animate={{
        x: ['0%', '100%'],
        y: ['0%', '100%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 5,
        ease: "linear"
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );
};

// Floating particle component
const FloatingParticle = () => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white/20 rounded-full"
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  );
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState<'sent' | 'failed' | 'not_sent' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    setEmailStatus(null);

    try {
      console.log('Submitting form with:', { email, nickname });
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nickname }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setStatus('success');
      setEmailStatus(data.emailStatus);
      setMessage(data.emailStatusMessage);
      setEmail('');
      setNickname('');
    } catch (error) {
      console.error('Error details:', error);
      setStatus('error');
      if (error instanceof Error) {
        setMessage(error.message === 'Failed to fetch' 
          ? 'Unable to connect to the server. Please try again later.'
          : error.message);
      } else {
        setMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5/5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 to-purple-500/3 animate-gradient-x"></div>

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <ShootingStar key={i} />
        ))}

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <FloatingParticle key={i} />
        ))}

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '60%', right: '10%' }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl w-full mx-auto px-4"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Welcome to AIGC Plan
            </h1>
            <p className="text-xl text-gray-300">
              Join our exclusive waitlist for early access to the future of AI-powered content creation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="How should we call you? (optional)"
                  className="w-full px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg ${
                  status === 'success'
                    ? emailStatus === 'sent'
                      ? 'bg-green-500/20 text-green-400'
                      : emailStatus === 'failed'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400'
                    : ''
                }`}
              >
                {message}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <footer className="py-8 px-6 text-gray-400 relative z-10">
        <a
          href="https://x.com/zs_josh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>Follow me on X</span>
        </a>
      </footer>
    </div>
  );
}
