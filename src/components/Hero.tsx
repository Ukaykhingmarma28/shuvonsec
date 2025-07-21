
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, Shield, Terminal, Code, Lock } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Shuvonsec';
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-cyber rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="mb-2">
                <p className="text-sm md:text-base text-muted-foreground font-mono tracking-wider uppercase">
                  Cybersecurity Researcher
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Hi I'm <span className="gradient-text font-extrabold">{displayText}</span>
              </h1>
              <div className="mb-8">
                <p className="text-lg md:text-xl font-mono font-medium tracking-wide">
                  <span className="text-primary">AKA</span> <span className="text-secondary font-bold">Md Shariar Shanaz Shuvon</span>
                </p>
              </div>
              <div className="space-y-4 max-w-2xl">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                I’m a <span className="text-primary font-bold">NASA-acknowledged vulnerability researcher</span>, World’s <span className="text-primary font-bold">#1 Monthly Top Ranked user on TryHackMe</span>, ethical hacker, and cybersecurity trainer based in Malaysia.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                I specialize in real-world penetration testing, vulnerability research, and cybersecurity education. My mission is to help organizations and individuals strengthen their digital security through hands-on skills, ethical hacking, and real-world knowledge.
                </p>
              </div>
            </div>
            
            {/* Social Icon Buttons */}
            <div className="flex gap-4">
              <Button size="lg" variant="outline" className="cyber-border hover:bg-muted/50 p-4" onClick={() => window.open('https://github.com/shuvonsec', '_blank')}>
                <Github className="w-7 h-7" />
              </Button>
              <Button size="lg" variant="outline" className="cyber-border hover:bg-muted/50 p-4" onClick={() => window.open('https://linkedin.com/in/shuvonsec', '_blank')}>
                <Linkedin className="w-7 h-7" />
              </Button>
              <Button size="lg" variant="outline" className="cyber-border hover:bg-muted/50 p-4" onClick={() => window.open('https://tryhackme.com/p/shuvonsec', '_blank')}>
                <Shield className="w-7 h-7" />
              </Button>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Main Circle Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl"></div>
              
              {/* Laptop/Terminal Illustration */}
              <div className="relative z-10 w-80 h-60 bg-cyber-dark rounded-lg border border-primary/30 shadow-cyber">
                {/* Screen */}
                <div className="w-full h-48 bg-background/50 rounded-t-lg border-b border-primary/30 p-4">
                  <div className="w-full h-full bg-background/80 rounded border border-primary/20 p-3">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-destructive"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground font-mono ml-2">terminal</span>
                    </div>
                    
                    {/* Terminal Content */}
                    <div className="space-y-1 text-xs font-mono">
                      <div className="text-primary">$ whoami</div>
                      <div className="text-muted-foreground">Shuvonsec</div>
                      <div className="text-primary">$ cat /etc/passwd</div>
                      <div className="text-muted-foreground">root:x:0:0:root:/root:/bin/bash</div>
                      <div className="text-primary">$ nmap -sS target.com</div>
                      <div className="text-muted-foreground">Starting Nmap scan...</div>
                      <div className="text-primary animate-typing">$ exploit...</div>
                    </div>
                  </div>
                </div>
                
                {/* Keyboard */}
                <div className="h-12 bg-cyber-gray rounded-b-lg flex items-center justify-center">
                  <div className="grid grid-cols-12 gap-1 w-64">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="w-4 h-2 bg-primary/20 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-12 left-12 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-float">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute top-20 right-8 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Lock className="w-5 h-5 text-secondary" />
              </div>
              <div className="absolute bottom-20 left-8 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Code className="w-5 h-5 text-accent" />
              </div>
              <div className="absolute bottom-32 right-12 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              
              {/* Code Snippets */}
              <div className="absolute top-8 right-20 bg-background/80 border border-primary/30 rounded p-2 text-xs font-mono animate-float" style={{ animationDelay: '0.3s' }}>
                <div className="text-primary">&lt;/etc/passwd&gt;</div>
              </div>
              <div className="absolute bottom-8 left-20 bg-background/80 border border-primary/30 rounded p-2 text-xs font-mono animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="text-secondary">payload.py</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
