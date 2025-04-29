'use client';

import { useState, useEffect, useContext, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// Theme context
const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

// Theme provider component
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Enhanced shooting star component (night mode only)
const ShootingStar = () => {
  const startX = Math.random() * 100;
  const startY = -20;
  const endX = startX + (Math.random() * 100 - 50);
  const endY = 120;
  const duration = 2 + Math.random() * 3;
  const delay = Math.random() * 15;
  const size = Math.random() * 2 + 1;

  return (
    <motion.div
      className="absolute z-0"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ 
        x: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        x: `${endX - startX}%`,
        y: `${endY - startY}%`,
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: delay,
        ease: "linear"
      }}
    >
      <div className="absolute w-full h-full bg-white rounded-full"></div>
      <div className="absolute w-40 h-[2px] bg-gradient-to-r from-white/60 via-white/30 to-transparent -translate-x-1/2"></div>
    </motion.div>
  );
};

// Enhanced floating particle component
const FloatingParticle = ({ theme }: { theme: 'light' | 'dark' }) => {
  const size = Math.random() * 3 + 1;
  const duration = 3 + Math.random() * 2;
  const delay = Math.random() * 2;
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;

  return (
    <motion.div
      className="absolute rounded-full z-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        top: `${startY}%`,
        left: `${startX}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

// New animated gradient orb component
const GradientOrb = ({ 
  theme,
  color, 
  size = 96, 
  position = { top: '20%', left: '10%' },
  animation = { x: [0, 100, 0], y: [0, 50, 0] },
  className = ''
}: { 
  theme: 'light' | 'dark';
  color: string;
  size?: number;
  position?: { top: string; left?: string; right?: string };
  animation?: { x: number[]; y: number[] };
  className?: string;
}) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl z-0 ${color} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position
      }}
      animate={animation}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Gradient text component
const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400/80 to-purple-500/80 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
        {children}
      </span>
    </span>
  );
};

// Theme toggle button
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 z-50"
    >
      {theme === 'dark' ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

// 添加新的成功动画组件
const SuccessAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-64 h-64 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        {/* 成功图标动画 */}
        <svg className="w-24 h-24 text-green-500" viewBox="0 0 24 24" fill="none">
          <motion.path
            d="M7 13L10 16L17 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
        </svg>
        
        {/* 祝贺文字 */}
        <motion.div
          className="absolute -bottom-20 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            恭喜您!
          </p>
          <p className="text-white mt-2">
            您已成功加入等待名单
          </p>
        </motion.div>

        {/* 飘落的星星和粒子 */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20%',
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.5})`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.8)`
            }}
            animate={{
              y: ['0%', '500%'],
              opacity: [0, 1, 0],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              ease: "easeInOut",
              delay: Math.random() * 0.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

// 添加浮动路径动画组件
const FloatingPaths = ({ position }: { position: number }) => {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.2 + i * 0.02,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.05 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Main component
const HomeContent = () => {
  const { theme } = useContext(ThemeContext);
  const themeMode = theme as 'light' | 'dark';
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState<'sent' | 'failed' | 'not_sent' | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

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
      // 显示成功动画
      setShowSuccess(true);
      // 3秒后自动关闭成功动画
      setTimeout(() => setShowSuccess(false), 3000);
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
    <div className={`min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500 ${
      themeMode === 'light' 
        ? 'bg-gradient-to-b from-white to-gray-50 text-gray-900' 
        : 'bg-[radial-gradient(circle_at_center,#1E40AF,#000000)] text-white'
    }`}>
      <ThemeToggle />
      
      {/* 成功动画 */}
      <AnimatePresence>
        {showSuccess && <SuccessAnimation />}
      </AnimatePresence>
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* 浮动路径动画 */}
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          themeMode === 'light' 
            ? 'bg-[linear-gradient(to_right,#e5e7eb/0.25_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb/0.25_1px,transparent_1px)]' 
            : 'bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]'
        } bg-[size:20px_20px]`}></div>
        
        {/* Gradient overlays */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          themeMode === 'light'
            ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent'
            : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/2 via-transparent to-transparent'
        } animate-pulse`}></div>
        
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          themeMode === 'light'
            ? 'bg-gradient-to-r from-blue-100/30 to-purple-100/30'
            : 'bg-gradient-to-r from-blue-500/1 to-purple-500/1'
        } animate-gradient-x`}></div>

        {/* Shooting stars (only in dark mode) */}
        <AnimatePresence>
          {themeMode === 'dark' && (
            <>
              {[...Array(15)].map((_, i) => (
                <ShootingStar key={i} />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} theme={themeMode} />
        ))}

        {/* Animated gradient orbs */}
        <GradientOrb
          theme={themeMode}
          color={themeMode === 'light' ? 'bg-blue-100/30' : 'bg-blue-500/2'}
          position={{ top: '20%', left: '10%' }}
          animation={{ x: [0, 100, 0], y: [0, 50, 0] }}
        />
        <GradientOrb
          theme={themeMode}
          color={themeMode === 'light' ? 'bg-purple-100/30' : 'bg-purple-500/2'}
          position={{ top: '60%', right: '10%' }}
          animation={{ x: [0, -100, 0], y: [0, -50, 0] }}
        />
        <GradientOrb
          theme={themeMode}
          color={themeMode === 'light' ? 'bg-pink-100/20' : 'bg-pink-500/1'}
          position={{ top: '40%', left: '30%' }}
          animation={{ x: [0, 50, 0], y: [0, -30, 0] }}
        />
        <GradientOrb
          theme={themeMode}
          color={themeMode === 'light' ? 'bg-indigo-100/20' : 'bg-indigo-500/1'}
          position={{ top: '70%', right: '30%' }}
          animation={{ x: [0, -30, 0], y: [0, 20, 0] }}
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
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GradientText>Welcome to AIGC Plan</GradientText>
            </motion.h1>
            <motion.p 
              className={`text-xl ${
                themeMode === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join our exclusive waitlist for early access to the future of{' '}
              <GradientText className="text-xl">AI-powered content creation</GradientText>.
            </motion.p>
          </div>

          <motion.div
            className={`backdrop-blur-lg p-8 rounded-xl shadow-lg border transition-colors duration-500 ${
              themeMode === 'light'
                ? 'bg-white/80 border-gray-200'
                : 'bg-white/10 border-white/20'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`w-full px-8 py-5 text-base rounded-xl transition-colors duration-500 ${
                    themeMode === 'light'
                      ? 'bg-white border-gray-200 focus:border-blue-500'
                      : 'bg-gray-800/50 border-gray-700 focus:border-blue-500'
                  } border focus:ring-2 focus:ring-blue-500 outline-none hover:bg-opacity-90`}
                />
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="How should we call you? (optional)"
                  className={`w-full px-8 py-5 text-base rounded-xl transition-colors duration-500 ${
                    themeMode === 'light'
                      ? 'bg-white border-gray-200 focus:border-blue-500'
                      : 'bg-gray-800/50 border-gray-700 focus:border-blue-500'
                  } border focus:ring-2 focus:ring-blue-500 outline-none hover:bg-opacity-90`}
                />
              </div>

              <JoinButton theme={themeMode} />
            </form>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg ${
                  status === 'success'
                    ? emailStatus === 'sent'
                      ? 'bg-green-500/20 text-green-600'
                      : emailStatus === 'failed'
                      ? 'bg-yellow-500/20 text-yellow-600'
                      : 'bg-blue-500/20 text-blue-600'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-600'
                    : ''
                }`}
              >
                {message}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <footer className={`py-8 px-6 relative z-10 transition-colors duration-500 ${
        themeMode === 'light' ? 'text-gray-600' : 'text-gray-400'
      }`}>
        <a
          href="https://x.com/zs_josh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <GradientText className="text-sm">Follow me on X</GradientText>
        </a>
      </footer>
    </div>
  );
};

const JoinButton = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <motion.button
      type="submit"
      className={`relative w-full px-8 py-4 rounded-[var(--radius)] text-lg font-medium overflow-hidden group transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
          : 'bg-primary text-primary-foreground hover:bg-primary/90'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Breathing gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]" />
      
      {/* Button content */}
      <div className="relative flex items-center justify-center gap-2">
        <span className="font-medium">Join Waitlist</span>
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg"
        >
          →
        </motion.div>
      </div>
    </motion.button>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
