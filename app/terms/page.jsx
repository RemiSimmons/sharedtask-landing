import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - SharedTask Usage Agreement',
  description: 'Read SharedTask\'s Terms of Service. Learn about user responsibilities, free and paid plans, service availability, and our commitment to simple, fair terms.',
  alternates: {
    canonical: 'https://sharedtask.ai/terms',
  },
  openGraph: {
    title: 'Terms of Service - SharedTask',
    description: 'Read SharedTask\'s Terms of Service and usage agreement.',
    url: 'https://sharedtask.ai/terms',
    siteName: 'SharedTask',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-6 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 italic mb-12">Last updated: October 2025</p>

          <div className="text-xl leading-relaxed text-gray-700 space-y-8">
            <p>
              Welcome to SharedTask.ai!<br />
              By accessing or using our website and services, you agree to the following terms.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose</h2>
              <p>
                SharedTask.ai helps users organize and manage group activities through shared task lists and links. 
                The platform is meant for personal, community, and light business use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to use SharedTask only for lawful, respectful purposes.</li>
                <li>You are responsible for the content you add (such as event names, descriptions, and participant lists).</li>
                <li>You agree not to misuse, copy, or interfere with the platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accounts and Access</h2>
              <p>
                Most features do not require sign-up. If you choose to create an account or subscribe, 
                you agree to provide accurate information and keep your credentials secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Free and Paid Plans</h2>
              <p>
                You may use SharedTask for free or upgrade for additional features at a low monthly rate.<br />
                Paid plans are managed through our secure payment processor (e.g., Stripe). Subscriptions can be canceled anytime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
              <p>
                We aim for reliable, continuous operation but cannot guarantee uninterrupted access.<br />
                We may update, suspend, or improve features at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability Disclaimer</h2>
              <p>
                SharedTask.ai is provided "as is." We are not responsible for losses or damages arising 
                from use or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p>
                All trademarks, designs, and software related to SharedTask.ai belong to SharedTask LLC (or its founders). 
                You may not reproduce or distribute them without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate access for misuse or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
              <p>
                For any questions about these terms, email{' '}
                <a href="mailto:legal@sharedtask.ai" className="text-primary hover:underline font-semibold">
                  legal@sharedtask.ai
                </a>
                .
              </p>
            </section>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="text-lg">
                Thank you for using SharedTask.ai — we&apos;re glad to help make group planning a little easier for everyone.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}


