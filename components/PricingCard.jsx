'use client';

export default function PricingCard({ 
  badge, 
  title, 
  price, 
  period, 
  features, 
  ctaText, 
  ctaStyle = 'secondary',
  isPopular = false,
  isDisabled = false,
  subtext,
  ctaLink = null
}) {
  const buttonClasses = `w-full py-4 px-6 rounded-full text-lg font-semibold transition-all duration-200 ${
    ctaStyle === 'primary' 
      ? 'bg-primary text-white hover:scale-105 hover:shadow-xl' 
      : ctaStyle === 'secondary'
      ? 'bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-200 hover:scale-105'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <div className={`relative bg-white rounded-3xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
      isPopular ? 'ring-4 ring-primary scale-105' : ''
    }`}>
      {badge && (
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold ${
          isPopular ? 'bg-primary text-white' : isDisabled ? 'bg-gray-400 text-white' : 'bg-accent text-white'
        }`}>
          {badge}
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <div className="mb-2">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          {period && <span className="text-xl text-gray-600 ml-2">/ {period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-lg text-gray-700">
            <svg 
              className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {ctaLink && !isDisabled ? (
        <a
          href={ctaLink}
          className={buttonClasses}
          aria-label={ctaText}
        >
          {ctaText}
        </a>
      ) : (
        <button
          disabled={isDisabled}
          className={buttonClasses}
          aria-label={ctaText}
        >
          {ctaText}
        </button>
      )}

      {subtext && (
        <p className="text-center text-sm text-gray-500 mt-4">{subtext}</p>
      )}
    </div>
  );
}

