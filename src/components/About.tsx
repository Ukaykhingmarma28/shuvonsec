import { Shield, Target, Search, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

const About = () => {
  const skills = [
    {
      image: 'https://thepeninsulaqatar.com/get/maximage/20250528_1748449646-469.jpg?1748449646',
      description: 'A self-taught ethical hacker from Bangladesh, Shuvon recently made headlines after receiving an official letter of appreciation from the National Aeronautics and Space Administration (NASA).',
      link: 'https://thepeninsulaqatar.com/article/28/05/2025/17-year-old-bangladeshi-receives-nasa-recognition-for-ethical-hacking'
    },
    {
      image: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2025/05/18/md_shariar_shanaz_shuvon.png',
      description: 'Md Shariar Shanaz Shuvon, a 17-year-old Diploma in Information Technology student at the University of Cyberjaya, was recognised as an independent security researcher by the National Aeronautics and Space Administration (NASA) under its Vulnerability Disclosure Policy (VDP).',
      link: 'https://cyberjaya.edu.my/meet-shuvonsec-the-independent-ethical-hacker-safeguarding-the-worlds-biggest-systems-one-bug-at-a-time'
    },
    {
      image: 'https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2025/05/18/md_shariar_shanaz_shuvon.png',
      description: 'Md Shariar Shanaz Shuvon, a 17-year-old self-taught ethical hacker from Bangladesh, has discovered a critical security flaw in NASA\'s cybersecurity infrastructure. The US space agency acknowledged his findings with an official letter of appreciation.',
      link: 'https://www.thedailystar.net/tech-startup/news/17-year-old-bangladeshi-hacks-nasa-receives-appreciation-letter-3897451'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="terminal-text">[</span>
            <span className="gradient-text">About</span>
            <span className="terminal-text">]</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate cybersecurity professional dedicated to making the digital world safer through ethical hacking and security research
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px,1fr] gap-16 items-start mb-16">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start scale-90 md:scale-100">
            <div className="relative">
              {/* Cyber Frame */}
              <div className="cyber-border px-6 pt-6 bg-gradient-cyber">
                <div className="relative w-[20.5rem] h-96 overflow-hidden rounded-lg bg-muted/20">
                  {/* Placeholder for photo - replace src with your actual photo */}
                  <img
                    src="https://avatars.githubusercontent.com/u/83355567?v=4"
                    alt="Prial Islam - Shuvonsec"
                    className="w-full h-full object-cover"
                  />
                  {/* Cyber overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>

                  {/* Terminal-style info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-4 border-t border-primary/30">
                    <div className="terminal-text text-sm">
                      <div className="text-primary">$ whoami</div>
                      <div className="text-muted-foreground">Shuvonsec</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto pt-2">
                  <iframe
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1858474"
                    style={{ border: 'none', width: '100%', height: '128px' }}
                    className="rounded"
                  />
                </div>
              </div>


              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center border border-secondary/30">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-8 terminal-text text-primary">whoami</h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I’m Md Shariar Shanaz Shuvon, also known as <span className="text-primary font-bold">ShuvonSec</span>, a cybersecurity professional, ethical hacker, and trainer based in Malaysia. I specialize in penetration testing and bug bounty hunting, with hands-on experience in discovering and exploiting real-world security vulnerabilities. I help organizations strengthen their security posture by identifying weaknesses before attackers do.
              </p>
              <p>
                My expertise covers web application security, network penetration testing, mobile app security, and cloud security assessments. I use practical offensive security techniques to uncover critical issues and help teams build more secure systems.
              </p>
              <p>
                In addition to technical work, I’m actively involved in cybersecurity training and education, conducting workshops and sessions to share real-world knowledge with students, professionals, and security teams. My approach focuses on practical, up-to-date techniques that reflect today’s threat landscape.
              </p>
              <p>
                Outside of professional engagements, I spend time researching emerging threats, developing custom security tools, and contributing to the global cybersecurity community.
              </p>
              <p>
                As I always say: <span className="text-primary font-bold">“I don’t learn to hack — I hack to learn.”</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="cyber-border bg-card/50 hover:bg-card transition-colors group">
              <CardHeader>
                <img src={skill.image} className="w-full h-40 text-primary mb-4 group-hover:cyber-glow transition-all" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
                <div className="flex justify-end">
                  <a href={skill.link} className="text-sm text-muted-foreground border border-green-200 p-2">View News</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;