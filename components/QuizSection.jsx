'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "How many events do you organize per year?",
    options: [
      { text: "Just 1-2 special occasions", points: 1 },
      { text: "3-5 regular gatherings", points: 2 },
      { text: "6+ (I'm always hosting!)", points: 3 }
    ]
  },
  {
    id: 2,
    question: "Do you ever organize more than one event at a time?",
    options: [
      { text: "No, one at a time is plenty", points: 1 },
      { text: "Sometimes, during busy seasons", points: 2 },
      { text: "Yes, I juggle multiple events regularly", points: 3 }
    ]
  },
  {
    id: 3,
    question: "How many people typically attend?",
    options: [
      { text: "Small group (under 10)", points: 1 },
      { text: "Medium group (10-30)", points: 2 },
      { text: "Large group (30+)", points: 3 }
    ]
  },
  {
    id: 4,
    question: "How far in advance do you start planning?",
    options: [
      { text: "Last minute (1-3 days)", points: 1 },
      { text: "A week ahead", points: 2 },
      { text: "Weeks or months in advance", points: 3 }
    ]
  },
  {
    id: 5,
    question: "What do you usually organize?",
    options: [
      { text: "Personal (family, friends)", points: 1 },
      { text: "Community (church, clubs, volunteers)", points: 2 },
      { text: "Work events", points: 2 },
      { text: "Mix of everything", points: 3 }
    ]
  }
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (points) => {
    setSelectedOption(points);
    setTimeout(() => {
      const newAnswers = [...answers, points];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  const calculateResults = () => {
    const totalScore = answers.reduce((sum, points) => sum + points, 0);
    
    if (totalScore <= 7) {
      return {
        tier: 'Free',
        color: 'primary',
        description: "Based on your answers, you organize a few special events with smaller groups. The Free tier gives you everything you need to make those occasions stress-free.",
        features: [
          "1 active project at a time",
          "Up to 10 participants",
          "14-day project window",
          "All core features"
        ]
      };
    } else if (totalScore <= 11) {
      return {
        tier: 'Basic',
        color: 'accent',
        description: "You're a regular host managing multiple events throughout the year. Basic tier keeps your gatherings organized without breaking the bank.",
        features: [
          "5 active projects",
          "Unlimited participants",
          "No time limits",
          "Priority support"
        ]
      };
    } else {
      return {
        tier: 'Pro',
        color: 'purple-600',
        description: "You're a power host juggling multiple large events! Start with our Basic tier today, and we'll notify you the moment Pro launches with advanced features built just for hosts like you.",
        features: [
          "10+ active projects",
          "Password protection",
          "Advanced analytics",
          "Team management"
        ]
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const results = calculateResults();
    
    return (
      <section id="quiz" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-3xl mx-auto">
          <div className="animate-confetti text-center mb-8">
            <Sparkles className="w-16 h-16 mx-auto text-accent mb-4" />
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              You're a <span className={`text-${results.color}`}>{results.tier}</span> Tier Host!
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {results.description}
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-left">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Your Plan Includes:</h3>
              <ul className="space-y-3">
                {results.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="https://app.sharedtask.ai/auth/signup"
              className="bg-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-200 mb-4 inline-block"
            >
              {results.tier === 'Pro' ? 'Start with Basic (14-Day Free Trial)' : 'Start Your 14-Day Free Trial'}
            </a>
            
            {results.tier === 'Pro' && (
              <p className="text-gray-600 text-lg mb-4">
                Want to be first in line for Pro? <a href="#pricing" className="text-primary font-semibold hover:underline">Join our waitlist</a> to get notified at launch.
              </p>
            )}
            
            <button 
              onClick={resetQuiz}
              className="block mx-auto text-gray-500 hover:text-gray-700 underline mt-6"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <section id="quiz" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Which Plan Fits Your Life?
          </h2>
          <p className="text-xl text-gray-600">
            Answer 5 quick questions to find your perfect fit
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8 animate-fade-in" key={currentQ.id}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900 leading-tight">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.points)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 hover:scale-102 hover:shadow-lg group ${
                    selectedOption === option.points
                      ? 'border-primary bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                  style={{ minHeight: '44px' }}
                  aria-label={option.text}
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Go back to previous question"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous Question
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

