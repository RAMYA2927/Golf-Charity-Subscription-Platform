'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';

export default function HomePage() {
  const user = useAuthStore((state) => state.user);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a0b2e] overflow-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-secondary/80 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c026d3] to-[#e879f9] rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                🏌️
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#e879f9] bg-clip-text text-transparent">
                Golf Charity
              </span>
            </div>

            <div className="flex space-x-3">
              {user ? (
                <>
                  <Link href="/dashboard" className="px-4 py-2 text-gray-200 hover:text-white transition-colors font-medium">
                    Dashboard
                  </Link>
                  <Link href="/api/auth/logout" className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/auth/signin" className="px-4 py-2 text-gray-200 hover:text-white transition-colors font-medium">
                    Sign In
                  </Link>
                  <Link href="/auth/signup" className="px-6 py-2 bg-gradient-to-r from-[#c026d3] to-[#e879f9] hover:shadow-xl rounded-lg text-white font-bold shadow-lg hover:-translate-y-1 transition-all">
                    Subscribe
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-[#c026d3]/20 text-[#e879f9] text-sm font-bold border border-[#c026d3]/50">
              Play 🏌️ • Win 🏆 • Make an Impact 💜
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white">Turn Every Swing Into</span>
            <span className="block bg-gradient-to-r from-[#c026d3] via-[#e879f9] to-[#c026d3] bg-clip-text text-transparent">
              Real-World Impact
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Track your performance, win monthly rewards, and support meaningful causes — all in one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/signup" className="group px-8 py-4 bg-gradient-to-r from-[#c026d3] to-[#e879f9] hover:shadow-2xl rounded-xl text-white font-bold text-lg transition-all transform hover:-translate-y-2 shadow-lg">
              <span className="flex items-center justify-center space-x-2">
                <span>Start Your Subscription</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link href="/charities" className="px-8 py-4 border-2 border-[#e879f9] text-[#e879f9] hover:bg-[#e879f9] hover:text-[#1a0b2e] hover:shadow-xl rounded-xl font-bold text-lg transition-all transform hover:-translate-y-2 backdrop-blur-sm">
              Explore Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">
              A simple journey from performance to rewards and real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏌️',
                title: 'Track Your Game',
                description: 'Log your latest 5 scores and monitor your performance with a clean and intuitive experience.',
                gradient: 'from-blue-500/20 to-accent/20',
                border: 'border-accent/50'
              },
              {
                icon: '🎯',
                title: 'Win Monthly Rewards',
                description: 'Enter monthly draws and match numbers to unlock exciting prizes and rewards.',
                gradient: 'from-charity/20 to-blue-500/20',
                border: 'border-charity/50'
              },
              {
                icon: '❤️',
                title: 'Make an Impact',
                description: 'Support meaningful causes — a portion of every subscription goes to your chosen charity.',
                gradient: 'from-rose-500/20 to-charity/20',
                border: 'border-rose-500/50'
              },
            ].map((feature, idx) => (
              <div key={idx} className={`group p-8 bg-gradient-to-br ${feature.gradient} rounded-2xl border-2 ${feature.border} hover:shadow-2xl transition-all transform hover:-translate-y-2 backdrop-blur-sm`}>
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-400">
              Flexible plans designed to reward you while giving back
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                plan: 'Monthly',
                price: '$9.99',
                period: '/month',
                features: ['Latest 5 scores', 'Monthly draw entry', '10% to charity', 'Priority support'],
                icon: '📅'
              },
              {
                plan: 'Yearly',
                price: '$99.99',
                period: '/year',
                popular: true,
                badge: 'SAVE 17%',
                features: ['Everything in Monthly', 'Annual discount', 'Exclusive perks', 'Priority draws'],
                icon: '⭐'
              },
            ].map((pricing, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border-2 transition-all transform hover:-translate-y-2 ${
                  pricing.popular
                    ? 'border-[#c026d3] bg-gradient-to-br from-[#c026d3]/20 to-[#e879f9]/20 shadow-2xl lg:scale-105'
                    : 'border-gray-700 bg-white/5 hover:border-[#c026d3]/50'
                }`}
              >
                {pricing.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#c026d3] to-[#e879f9] rounded-full text-xs font-bold text-white">
                    {pricing.badge}
                  </div>
                )}
                
                <div className="text-4xl mb-4">{pricing.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{pricing.plan}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{pricing.price}</span>
                  <span className="text-gray-400">{pricing.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pricing.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 text-xs ${
                        pricing.popular ? 'bg-[#c026d3]/40 text-[#e879f9]' : 'bg-gray-700 text-gray-400'
                      }`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/auth/signup"
                  className={`block w-full py-3 rounded-lg font-bold text-center transition-all transform hover:shadow-xl ${
                    pricing.popular
                      ? 'bg-gradient-to-r from-[#c026d3] to-[#e879f9] text-white hover:-translate-y-1'
                      : 'border-2 border-[#e879f9] text-[#e879f9] hover:bg-[#e879f9] hover:text-[#1a0b2e]'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-accent/20 via-blue-500/20 to-charity/20 rounded-3xl p-12 border-2 border-accent/50 backdrop-blur-sm">
          
          <h2 className="text-4xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join a growing community of players making a difference while winning rewards
          </p>

          <Link href="/auth/signup" className="inline-block px-8 py-4 bg-gradient-to-r from-accent to-blue-600 hover:shadow-2xl rounded-xl text-primary font-bold text-lg transition-all transform hover:-translate-y-2">
            Create Account Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-secondary/50 backdrop-blur border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Ramya | Full Stack Developer</p>
        </div>
      </footer>

    </div>
  );
}