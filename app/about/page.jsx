import Link from 'next/link';
import { ArrowLeft, Heart, Users, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'About - SharedTask.ai',
  description: 'Learn about SharedTask.ai and our mission to simplify group planning',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="py-6 px-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">About SharedTask.ai</h1>
            <p className="text-2xl text-gray-600">
              Group Planning, Finally Made Simple
            </p>
          </div>

          {/* Main Story Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                SharedTask.ai was created by people who&apos;ve lived through the frustration of messy group chats, forgotten details, and last minute confusion when planning get togethers. From family reunions to volunteer events, we realized everyone was using a dozen messages to do something that should take two clicks.
              </p>
              
              <p className="text-2xl font-semibold text-gray-900">
                So we built a simpler way.
              </p>
              
              <p>
                With SharedTask, you can create a list of what&apos;s needed, share one link, and let friends, family, or coworkers claim tasks instantly — no app installs or sign ups required. Everything updates in real time.
              </p>
              
              <p>
                Our mission is to make organizing any event, big or small, quick, clear, and stress free.
              </p>
            </div>
          </div>

          {/* Why People Trust Us Section */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl shadow-xl p-12 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why people trust us:</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl text-gray-700">
                    <strong>We design with simplicity first</strong> — fewer steps, larger buttons, and clear instructions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl text-gray-700">
                    <strong>We respect your privacy</strong> — no tracking, no spam, and no data sold to anyone.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xl text-gray-700">
                    <strong>We believe technology should make life easier</strong> — not more complicated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              SharedTask.ai is proudly built by a small independent team who believe in everyday problem-solving done right.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl shadow-xl p-12 text-center text-white mt-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Stop Stressing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of hosts who've made their events easier
            </p>
            <a
              href="https://app.sharedtask.ai/signup"
              className="bg-white text-primary px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-200 inline-block"
            >
              Try Free for 14 Days
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

