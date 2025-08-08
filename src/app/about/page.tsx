import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Content with top padding for header */}
      <div className="pt-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              About Me
            </h1>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              Learn more about my passion for web development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">
                  My Story
                </h2>
                <p className="text-lg text-secondary-text leading-relaxed">
                  I am a passionate fullstack developer with a strong attraction to technology and innovation. My career started in the luxury fashion industry, where I developed Progressive Web Apps for international brands like LN-CC, Casadei, and Maliparmi. This experience has allowed me to understand the importance of creating performant and user-friendly applications for highly competitive industries.
                </p>
                <p className="text-lg text-secondary-text leading-relaxed">
                  My passion for coding was born from the curiosity to understand how things work and the desire to create innovative solutions. Every project is an opportunity to learn something new and improve my technical skills.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">
                  My Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-divider p-6 rounded-lg">
                    <h3 className="font-bold mb-2">
                      Innovation
                    </h3>
                    <p className="text-secondary-text text-sm">
                      Always looking for new technologies and creative solutions
                    </p>
                  </div>
                  <div className="bg-divider p-6 rounded-lg">
                    <h3 className="font-bold mb-2">
                      Quality
                    </h3>
                    <p className="text-secondary-text text-sm">
                      Clean, performant, and maintainable code
                    </p>
                  </div>
                  <div className="bg-divider p-6 rounded-lg">
                    <h3 className="font-bold mb-2">
                      Collaboration
                    </h3>
                    <p className="text-secondary-text text-sm">
                      Teamwork and knowledge sharing
                    </p>
                  </div>
                  <div className="bg-divider p-6 rounded-lg">
                    <h3 className="font-bold mb-2">
                      Growth
                    </h3>
                    <p className="text-secondary-text text-sm">
                      Continuous learning and personal development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-divider p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Personal Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-primary">
                      Name
                    </h3>
                    <p className="text-secondary-text">Andrea Fazio</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">
                      Location
                    </h3>
                    <p className="text-secondary-text">Milano, Italia</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">
                      Email
                    </h3>
                    <p className="text-secondary-text">fazioandrea.f@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">
                      LinkedIn
                    </h3>
                    <p className="text-secondary-text">476+ connections</p>
                  </div>
                </div>
              </div>

              <div className="bg-divider p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Web Development',
                    'Technology',
                    'Innovation',
                    'Fashion',
                    'Luxury',
                    'UX/UI'
                  ].map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-background text-primary text-sm rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
