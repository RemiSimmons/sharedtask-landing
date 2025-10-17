'use client';

import { useEffect, useState } from 'react';
import { 
  MessageSquare, 
  CheckCircle2, 
  Users, 
  Clock, 
  Pencil, 
  Link2, 
  Check, 
  Play, 
  ChevronDown,
  Star,
  Heart,
  Sparkles
} from 'lucide-react';
import QuizSection from './QuizSection';
import PricingCard from './PricingCard';
import NotifyMeCard from './NotifyMeCard';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="SharedTask.ai" 
              className="h-24 md:h-36"
            />
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://app.sharedtask.ai/auth/signin"
              className="text-gray-700 hover:text-primary font-semibold transition-colors py-2"
            >
              Sign In
            </a>
            <a 
              href="https://app.sharedtask.ai/auth/signup"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all hover:scale-105 flex items-center"
            >
              Try Free
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section py-16 px-4 pb-8 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Product Category */}
        <p className="text-primary uppercase text-2xl font-semibold tracking-wide text-center mb-12">
          Hosting Group Activities
        </p>

        {/* Text and Visual Side by Side */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Stop the Group<br />Text Chaos
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-gray-700">
              Organize with one shareable link.
            </p>

            {/* Simplicity Statement */}
            <p className="text-2xl font-medium text-gray-900">
              One link. Two clicks. Done.
            </p>

            {/* CTA Button and Social Proof */}
            <div className="flex flex-col gap-3 pt-4 items-center md:items-start">
              <a
                href="https://app.sharedtask.ai/auth/signup"
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 text-center"
                aria-label="Try SharedTask free for 14 days"
              >
                Try Free for 14 Days (No Credit Card)
              </a>

              {/* Social Proof */}
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <span className="text-accent">⭐</span>
                Trusted by families, volunteers, and community hosts everywhere.
              </p>
            </div>
          </div>

          {/* Right Side - Before/After Visual */}
          <div className="relative h-96 md:h-[500px]">
            {/* Chaos Side */}
            <div className="absolute left-0 top-0 w-1/2 h-full p-2 md:p-4 flex flex-col">
              <div className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">Before</div>
              <div className="flex-1 relative flex flex-col justify-between overflow-hidden py-1 md:py-2">
                {[
                  "Who's bringing plates?",
                  "Wait—what time?",
                  "I thought John was doing that",
                  "Can someone bring cups too?",
                  "Did anyone get napkins?",
                  "What's the address?",
                  "Is this still happening?"
                ].map((text, i) => (
                  <div
                    key={i}
                    className={`bg-gray-300 rounded-2xl p-2 md:p-3 shadow-sm text-xs leading-tight chaos-msg-${i}`}
                    style={{
                      backgroundColor: ['#E5E7EB', '#D1D5DB', '#9CA3AF'][i % 3],
                      opacity: 0.7 + (i % 3) * 0.1
                    }}
                  >
                    <div className="text-gray-700 font-medium">{text}</div>
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-4xl md:text-6xl animate-pulse">😰</div>
                </div>
              </div>
            </div>

            {/* Clean Side */}
            <div className="absolute right-0 top-0 w-1/2 h-full p-2 md:p-4 flex flex-col">
              <div className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">After</div>
              <div className="flex-1 relative flex flex-col justify-between py-1 md:py-2">
                {[
                  { task: "Bring plates", claimed: "Sarah" },
                  { task: "Bring cups", claimed: "Mike" },
                  { task: "Setup tables", claimed: null },
                  { task: "Bring drinks", claimed: "Lisa" },
                  { task: "Bring napkins", claimed: "Tom" },
                  { task: "Bring dessert", claimed: "Emma" },
                  { task: "Take photos", claimed: null }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg md:rounded-xl p-2 md:p-2.5 shadow-sm flex items-start border-2 ${
                      item.claimed 
                        ? 'bg-teal-50 border-teal-200' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-1.5 md:mr-2 mt-0.5 ${
                      item.claimed 
                        ? 'bg-teal-500' 
                        : 'bg-gray-200'
                    }`}>
                      {item.claimed && (
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-gray-900 leading-tight">{item.task}</div>
                      {item.claimed && (
                        <div className="text-xs text-teal-600 leading-tight">Claimed by {item.claimed}</div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="absolute -bottom-1 md:-bottom-2 right-2 md:right-4 pointer-events-none">
                  <div className="text-2xl md:text-3xl">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('pain-points')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to learn more"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </section>

      {/* Pain Points Section */}
      <section 
        id="pain-points" 
        className={`pt-8 pb-16 px-6 bg-white transition-opacity duration-1000 ${
          isVisible['pain-points'] ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Sound Familiar?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: '📱',
                title: '47 unread messages in the group chat',
                description: 'Stop scrolling to find who\'s bringing what'
              },
              {
                emoji: '🤷',
                title: 'Three people brought chips, nobody brought plates',
                description: 'No more duplicate disasters'
              },
              {
                emoji: '😰',
                title: 'Chasing people down to see who\'s actually coming',
                description: 'Know instantly when someone signs up'
              },
              {
                emoji: '⏰',
                title: 'Spending an hour organizing a 2-hour event',
                description: 'Set up in 2 minutes, not 2 hours'
              }
            ].map((pain, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="text-6xl mb-4">{pain.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{pain.title}</h3>
                <p className="text-lg text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        id="how-it-works" 
        className={`py-16 px-6 bg-gradient-to-br from-blue-50 to-white transition-opacity duration-1000 ${
          isVisible['how-it-works'] ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Here's How Simple It Actually Is
          </h2>

          {/* Timeline */}
          <div className="relative mb-12">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-green-500 transform -translate-y-1/2" 
                 style={{ width: 'calc(100% - 12rem)', left: '6rem' }}></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: <Pencil className="w-12 h-12" />,
                  title: 'Host Creates',
                  time: '60 sec',
                  description: 'List what you need, hit send'
                },
                {
                  icon: <Link2 className="w-12 h-12" />,
                  title: 'Share One Link',
                  time: '10 sec',
                  description: 'Text, email, post it anywhere'
                },
                {
                  icon: <Check className="w-12 h-12" />,
                  title: 'Everyone Updates',
                  time: '2 clicks',
                  description: 'No login, no confusion, no stress'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white text-primary">
                    {step.icon}
                  </div>
                  <div className="bg-accent text-white inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {step.time}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Embed */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/XYxnlXS-vX8?loop=1&playlist=XYxnlXS-vX8"
                title="SharedTask.ai Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <QuizSection />

      {/* Trust Section */}
      <section 
        id="trust" 
        className={`py-16 px-6 bg-white transition-opacity duration-1000 ${
          isVisible['trust'] ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900">
            We&apos;ve Been There
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-10 mb-12 shadow-md">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              We&apos;ve organized theater performances, volunteer outreach, countless potlucks, and family reunions. Whether for business, hobby, or personal gatherings, we kept hitting the same frustrations. So we built the tool we wished we had.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              No more chasing RSVPs. No more duplicate dishes. No more stress. Just simple, organized events that actually work.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '1,000+', label: 'Events Organized' },
              { stat: '25,000+', label: 'Tasks Claimed' },
              { stat: '4.8/5', label: 'Average Rating' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-xl text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Use Case Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Book Clubs', 'Potlucks', 'Volunteer Events', 'Family Reunions', 'Game Nights', 'Fundraisers'].map((useCase, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 px-6 py-3 rounded-full text-lg font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing" 
        className={`py-16 px-6 bg-gradient-to-br from-blue-50 to-white transition-opacity duration-1000 ${
          isVisible['pricing'] ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Simple, Honest Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Free"
              price="$0"
              period="forever"
              features={[
                '1 active project',
                'Up to 10 participants',
                '14-day project window',
                'All core features'
              ]}
              ctaText="Start Free"
              ctaStyle="secondary"
              subtext="No credit card required"
              ctaLink="https://app.sharedtask.ai/auth/signup"
            />

            <PricingCard
              badge="Perfect to Start"
              title="Basic"
              price="$2.99"
              period="month"
              features={[
                '5 active projects',
                'Unlimited participants',
                'No time limits',
                'Priority support'
              ]}
              ctaText="Try Free for 14 Days"
              ctaStyle="primary"
              isPopular={true}
              ctaLink="https://app.sharedtask.ai/auth/signup"
            />

            <PricingCard
              badge="Coming Soon"
              title="Pro"
              price="$9.99"
              period="month"
              features={[
                '10+ projects',
                'Password protection',
                'Advanced analytics',
                'Team management'
              ]}
              ctaText="Join Waitlist"
              ctaStyle="disabled"
              isDisabled={true}
            />
          </div>

          {/* Notify Me Card */}
          <NotifyMeCard />
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="final-cta" 
        className={`py-16 px-6 bg-gradient-to-br from-primary to-blue-600 text-white transition-opacity duration-1000 ${
          isVisible['final-cta'] ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Stop Stressing?
          </h2>
          <p className="text-2xl md:text-3xl mb-10 opacity-90">
            Your next event could be your easiest one yet
          </p>
          <a 
            href="https://app.sharedtask.ai/auth/signup"
            className="bg-white text-primary px-12 py-6 rounded-full text-2xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-200 inline-block mb-6"
            aria-label="Try SharedTask free for 14 days"
          >
            Try SharedTask Free for 14 Days
          </a>
          <p className="text-xl mb-4">
            No credit card • Cancel anytime • 14 days free
          </p>
          <p className="text-lg opacity-75">
            Seriously, no tricks. Just try it.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/logo.png" 
                alt="SharedTask.ai" 
                className="h-20 md:h-36"
              />
            </div>
            <p className="text-lg text-gray-400">Group planning, finally made simple</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            © 2025 SharedTask.ai
          </div>
        </div>
      </footer>
    </div>
  );
}

