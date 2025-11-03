export const metadata = {
  title: 'Contact Us - Get Help with SharedTask',
  description: 'Have questions about SharedTask? Contact our team for support, feature requests, or general inquiries. We respond within 24 hours.',
  alternates: {
    canonical: 'https://sharedtask.ai/contact',
  },
  openGraph: {
    title: 'Contact SharedTask',
    description: 'Get in touch with the SharedTask team for support and inquiries.',
    url: 'https://sharedtask.ai/contact',
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

export default function ContactLayout({ children }) {
  return children;
}

