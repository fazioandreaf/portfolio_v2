"use client";

import Header from './components/Header';
import { translations } from './i18n/translations';
import { useLanguage } from './contexts/LanguageContext';
import { Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import ProfileImage from './components/ProfileImage';

export default function CVPage() {
  const { language, mounted } = useLanguage();
  const t = mounted ? translations[language] : translations.en;

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'PWA', icon: '📱' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Salesforce Commerce Cloud', icon: '☁️' },
    { name: 'Laravel', icon: '🐘' },
    { name: 'jQuery', icon: '💫' },
    { name: 'Contentful CMS', icon: '📝' },
    { name: 'Git', icon: '📝' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Luxury Fashion', icon: '👔' },
    { name: 'Performance Optimization', icon: '⚡' },
    { name: 'Headless Architecture', icon: '🏗️' },
    { name: 'Agile', icon: '🔄' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-secondary-text">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-secondary-text max-w-2xl">
                {t.hero.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/andrea-fazio_en.pdf" 
                download 
                className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
              <a 
                href="mailto:fazioandrea.f@gmail.com" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {t.hero.contactMe}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
              <p className="text-secondary-text text-lg">
                {t.experience.description}
              </p>
            </div>
            
            <div className="space-y-8">
              {t.experiences.map((experience, index) => (
                <div key={index} className="relative">
                  <div className="bg-divider p-6 rounded-lg hover:border hover:border-primary transition-colors duration-300">
                    <div className="text-primary font-semibold mb-2">{experience.period}</div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <div className="text-primary font-medium mb-3">{experience.company}</div>
                    <p className="text-secondary-text">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
              <p className="text-secondary-text text-lg">
                {t.skills.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-divider flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-secondary-text group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projectList.map((project, index) => (
            <div key={index} className="bg-divider rounded-lg p-6 hover:border hover:border-primary transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-secondary-text group-hover:text-primary transition-colors duration-300" />
              </div>
              <p className="text-secondary-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.certifications.title}</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            {t.certifications.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certificationList.map((cert, index) => (
            <div key={index} className="bg-divider rounded-lg p-6 hover:border hover:border-primary transition-colors duration-300">
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-primary font-medium mb-1">{cert.issuer}</p>
              <p className="text-secondary-text text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
        
        <div className="flex justify-center space-x-8">
          <a href="mailto:fazioandrea.f@gmail.com" className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors duration-300">
            <Mail className="w-6 h-6" />
            <span>fazioandrea.f@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/fazioandrea-f/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn (476+ connections)</span>
          </a>
          <a href="https://github.com/andrea-fazio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors duration-300">
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
