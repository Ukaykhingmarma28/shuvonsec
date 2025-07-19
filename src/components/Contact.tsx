import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, MapPin, Phone, Shield } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'security@cyberpro.dev',
      action: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      description: 'CyberSec#1337',
      action: 'Message'
    },
    {
      icon: Phone,
      title: 'Signal',
      description: '+1-555-CYBER-SEC',
      action: 'Call'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Remote / Global',
      action: 'Timezone: UTC'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="terminal-text">[</span>
            <span className="gradient-text">Contact</span>
            <span className="terminal-text">]</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on security projects or discuss potential opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 terminal-text">Get In Touch</h3>
            
            <form className="space-y-4 h-full flex flex-col">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Name" 
                  className="bg-cyber-dark border-cyber-gray focus:border-primary"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-cyber-dark border-cyber-gray focus:border-primary"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-cyber-dark border-cyber-gray focus:border-primary"
              />
              <Textarea 
                placeholder="Message" 
                rows={8}
                className="bg-cyber-dark border-cyber-gray focus:border-primary resize-none flex-grow"
              />
              <Button className="w-full cyber-glow bg-primary hover:bg-primary/80 mt-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6 h-full">
            <h3 className="text-2xl font-semibold mb-6 terminal-text mt-10 md:mt-0">Connect</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="cyber-border bg-card/50 hover:bg-card transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <method.icon className="w-5 h-5 text-primary" />
                      <CardTitle className="text-base">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    <Button variant="outline" size="sm" className="cyber-border text-xs">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold terminal-text">Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 cyber-border rounded-lg bg-card/50 hover:bg-card transition-colors cyber-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Additional Terminal Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold terminal-text">Available Services</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Penetration Testing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Bug Bounty Hunting</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Security Audits</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Vulnerability Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;