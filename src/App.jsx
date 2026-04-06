import './App.css';

const data = [
  {
    icon: '🌿',
    name: 'UrbanRoots',
    domain: 'Sustainable Products / E-commerce',
    problem: 'UrbanRoots is a modern eco-conscious brand that sells sustainable everyday products like bamboo toothbrushes, reusable kitchen items, and eco-friendly lifestyle kits. The brand targets urban millennials who want to live sustainably but stylishly. The current challenge is to design a website that doesn’t feel “boring eco” but instead feels premium, aesthetic, and lifestyle-driven.',
    requirements: [
      'Homepage with strong brand storytelling',
      'Product listing + individual product pages',
      '“Why Sustainability?” section',
      'Subscription model (monthly eco box)',
      'Customer testimonials',
      'Clean, minimal, earthy UI'
    ],
    deliverables: [
      'Fully designed responsive website (UI/UX)',
      '3–5 key pages (Home, Shop, Product, About, Contact)',
      'Brand color palette & typography',
      'Micro-interactions / animations (optional bonus)'
    ]
  },
  {
    icon: '🏋️',
    name: 'FitForge',
    domain: 'Fitness Services / Coaching',
    problem: 'FitForge is an online fitness coaching platform offering personalized workout plans, diet tracking, and live sessions. The target audience is college students and working professionals who want convenient fitness solutions. The goal is to create a website that feels high-energy, motivating, and conversion-focused.',
    requirements: [
      'Landing page with strong CTA (Join Now / Start Trial)',
      'Plans & pricing section',
      'Trainer profiles',
      'Progress tracking feature (UI concept)',
      'Testimonials & transformation stories',
      'Mobile-first design'
    ],
    deliverables: [
      'Website UI design (responsive)',
      'Landing page + at least 2 inner pages',
      'CTA-focused UX flow',
      'Optional: Dashboard concept (bonus points)'
    ]
  },
  {
    icon: '🍽️',
    name: 'Rasoi Express',
    domain: 'Food Delivery / Restaurant',
    problem: 'Rasoi Express is a fast-growing food brand delivering homemade-style meals within a 10 km radius. The brand focuses on quick delivery, hygiene, and authentic taste. The challenge is to design a website that makes users instantly hungry and order quickly.',
    requirements: [
      'Menu browsing experience',
      'Quick order / reorder flow',
      'Highlight daily specials',
      'Location-based delivery info',
      'Offers & discounts section',
      'Visual-heavy design (food images focus)'
    ],
    deliverables: [
      'Website UI with ordering flow',
      'Menu page + product detail page',
      'Engaging hero section',
      'UX focused on fast conversion'
    ]
  },
  {
    icon: '🎓',
    name: 'SkillSphere Academy',
    domain: 'EdTech / Institution',
    problem: 'SkillSphere Academy provides industry-focused courses in UI/UX, Web Development, and Data Science. The target audience is students and early professionals looking to upskill. The website should feel trustworthy, modern, and career-oriented.',
    requirements: [
      'Course listing & details',
      'Instructor profiles',
      'Career outcomes / placement stats',
      'Student testimonials',
      'Enrollment flow',
      'Blog/resources section'
    ],
    deliverables: [
      '4–5 page website design',
      'Course detail page UI',
      'Structured information hierarchy',
      'Strong branding for credibility'
    ]
  },
  {
    icon: '🏨',
    name: 'StayNest',
    domain: 'Hospitality / Travel Booking',
    problem: 'StayNest is a boutique hotel booking platform offering unique stays like villas, homestays, and workation spaces. The brand focuses on experience over just accommodation. The goal is to design a website that feels premium, calming, and experience-driven.',
    requirements: [
      'Search & filter stays',
      'Property listing + detail page',
      'Booking interface (UI concept)',
      'Experience highlights (photos, reviews)',
      'Location-based browsing'
    ],
    deliverables: [
      'Responsive website design',
      'Search + listing UI',
      'Property detail page',
      'Clean and premium visual design'
    ]
  }
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Brand Forge</h1>
        <p>Premium UI/UX Problem Statements Showcase</p>
      </header>

      <main className="grid">
        {data.map((item, index) => (
          <article className="card" key={index}>
            <div className="card-header">
              <h2 className="brand-name">
                <span>{item.icon}</span> {item.name}
              </h2>
              <span className="domain">{item.domain}</span>
            </div>
            
            <p className="problem">{item.problem}</p>
            
            <h3 className="section-title">🎯 Requirements</h3>
            <ul className="list">
              {item.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>

            <div className="deliverables">
              <h3 className="section-title">📦 Deliverables</h3>
              <ul className="list" style={{ marginBottom: 0 }}>
                {item.deliverables.map((del, i) => (
                  <li key={i}>{del}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </main>

      <footer className="footer">
        <p>Designed for Vercel Deployment • Minimal Dark Theme</p>
      </footer>
    </div>
  );
}

export default App;
