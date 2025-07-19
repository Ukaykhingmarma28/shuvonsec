import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { Github, Linkedin, Twitter, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t border-cyber-gray/30 bg-gradient-cyber/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold terminal-text">CyberSec Pro</h3>
              <p className="text-muted-foreground">
                Ethical hacker & penetration tester specializing in web application security and bug bounty hunting.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold terminal-text">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Security Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold terminal-text">Security</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>PGP Encrypted Communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Bug Bounty Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Responsible Disclosure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyber-gray/30 pt-8 text-center">
            <p className="text-muted-foreground terminal-text">
              © 2024 CyberSec Professional. All rights reserved. | Securing the digital frontier.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
