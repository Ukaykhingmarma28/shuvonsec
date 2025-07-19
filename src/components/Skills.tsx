import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Search, Target, Code, Globe, Smartphone, Cloud, Terminal, Bug, Lock, Zap, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Penetration Testing',
      icon: Shield,
      skills: ['Web Application Testing', 'Network Penetration Testing', 'Wireless Security', 'Social Engineering'],
      proficiency: 'Advanced',
      color: 'text-primary'
    },
    {
      title: 'Web Security',
      icon: Globe,
      skills: ['OWASP Top 10', 'XSS & CSRF', 'SQL Injection', 'Authentication Bypass'],
      proficiency: 'Expert',
      color: 'text-secondary'
    },
    {
      title: 'Mobile Security',
      icon: Smartphone,
      skills: ['Android Security', 'iOS Security', 'Mobile App Analysis', 'Static/Dynamic Analysis'],
      proficiency: 'Advanced',
      color: 'text-accent'
    },
    {
      title: 'Cloud Security',
      icon: Cloud,
      skills: ['AWS Security', 'Azure Security', 'Container Security', 'Infrastructure as Code'],
      proficiency: 'Intermediate',
      color: 'text-primary'
    },
    {
      title: 'Bug Hunting',
      icon: Bug,
      skills: ['Vulnerability Research', 'Bug Bounty Programs', 'Zero-day Discovery', 'Exploit Development'],
      proficiency: 'Advanced',
      color: 'text-destructive'
    },
    {
      title: 'Red Team Operations',
      icon: Target,
      skills: ['Advanced Persistent Threats', 'Command & Control', 'Lateral Movement', 'Post-exploitation'],
      proficiency: 'Advanced',
      color: 'text-secondary'
    },
    {
      title: 'Security Tools',
      icon: Terminal,
      skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Nessus', 'OWASP ZAP'],
      proficiency: 'Expert',
      color: 'text-accent'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript', 'Bash Scripting', 'PowerShell', 'Go', 'C/C++'],
      proficiency: 'Advanced',
      color: 'text-primary'
    },
    {
      title: 'Cryptography',
      icon: Lock,
      skills: ['Encryption/Decryption', 'Hash Functions', 'Digital Signatures', 'PKI'],
      proficiency: 'Intermediate',
      color: 'text-secondary'
    },
    {
      title: 'Network Security',
      icon: Zap,
      skills: ['Firewall Configuration', 'IDS/IPS', 'VPN Security', 'Network Protocols'],
      proficiency: 'Advanced',
      color: 'text-accent'
    },
    {
      title: 'Forensics',
      icon: Search,
      skills: ['Digital Forensics', 'Incident Response', 'Memory Analysis', 'Log Analysis'],
      proficiency: 'Intermediate',
      color: 'text-destructive'
    },
    {
      title: 'Database Security',
      icon: Database,
      skills: ['SQL Security', 'NoSQL Security', 'Database Hardening', 'Access Control'],
      proficiency: 'Intermediate',
      color: 'text-primary'
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-cyber-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="terminal-text">[</span>
            <span className="gradient-text">Skills</span>
            <span className="terminal-text">]</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity expertise across multiple domains and technologies
          </p>
        </div>
        
        {/* Terminal-style skills overview */}
        <div className="cyber-border p-8 bg-gradient-cyber mb-16 max-w-4xl mx-auto">
          <div className="terminal-text space-y-2">
            <div className="flex">
              <span className="text-primary">$</span>
              <span className="ml-2">cat /proc/expertise</span>
            </div>
            <div className="text-muted-foreground ml-4 text-sm">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
                <div>• Web Application Security</div>
                <div>• Network Penetration Testing</div>
                <div>• Mobile Security Testing</div>
                <div>• Bug Bounty Hunting</div>
                <div>• Red Team Operations</div>
                <div>• Cloud Security Audits</div>
                <div>• Security Tool Development</div>
                <div>• Incident Response</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="cyber-border bg-card/50 hover:bg-card transition-all duration-300 group hover:shadow-cyber">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <category.icon className={`w-8 h-8 ${category.color} group-hover:cyber-glow transition-all`} />
                  <Badge className={`text-xs ${getProficiencyColor(category.proficiency)}`}>
                    {category.proficiency}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications and Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center terminal-text">
            <span className="text-primary">certifications</span> & <span className="text-secondary">achievements</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="cyber-border bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-destructive mb-2">125th</div>
                <div className="text-sm text-muted-foreground">Synack Red Team</div>
              </CardContent>
            </Card>
            <Card className="cyber-border bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">120th</div>
                <div className="text-sm text-muted-foreground">Bugcrowd Platform</div>
              </CardContent>
            </Card>
            <Card className="cyber-border bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-2">3000+</div>
                <div className="text-sm text-muted-foreground">HackerOne Reputation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;