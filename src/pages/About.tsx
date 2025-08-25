import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies',
    period: '2024 – 2028',
    status: 'In Progress',
    description: 'Specializing in cybersecurity and software engineering'
  },
  {
    degree: 'PUC in MPC',
    institution: 'Rajiv Gandhi University of Knowledge Technologies', 
    period: '2022 – 2024',
    grade: '8.01/10',
    description: 'Mathematics, Physics, Chemistry with distinction'
  },
  {
    degree: 'SSC',
    institution: 'MJP AP BC W Residential School',
    period: '2022',
    grade: '563/600',
    description: 'Secondary School Certificate with excellent performance'
  }
];

const certifications = [
  'IBM Cybersecurity Fundamentals',
  'Cisco Networking Essentials', 
  'Udemy Ethical Hacking Course',
  'Forge Security Training'
];

export default function About() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Passionate about cybersecurity and ethical hacking, building skills to protect digital infrastructure
        </p>
      </div>

      {/* Bio Section */}
      <Card className="p-8 bg-gradient-subtle border-border/50">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <Award className="mr-3 h-6 w-6 text-primary" />
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dedicated and detail-oriented undergraduate pursuing a B-Tech in Computer Science & Engineering 
            with a strong foundation in cybersecurity, programming, and network security. Experienced in 
            tools like <span className="text-primary font-mono">Nmap</span>, <span className="text-primary font-mono">Burp Suite</span>, 
            and <span className="text-primary font-mono">Linux</span>, with multiple certifications from IBM, Udemy, Cisco, and Forge.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Actively participates in CTF competitions and ethical hacking simulations, building toward a 
            career in offensive security. Committed to continuous learning and staying updated with the 
            latest cybersecurity trends and threats.
          </p>
        </div>
      </Card>

      {/* Education Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <GraduationCap className="mr-3 h-6 w-6 text-primary" />
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:bg-card-hover transition-colors border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.institution}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center text-primary font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                  {edu.grade && (
                    <div className="text-sm bg-primary/10 px-3 py-1 rounded-full text-primary">
                      Grade: {edu.grade}
                    </div>
                  )}
                  {edu.status && (
                    <div className="text-sm bg-secondary/10 px-3 py-1 rounded-full text-secondary">
                      {edu.status}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Award className="mr-3 h-6 w-6 text-primary" />
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-4 bg-card/50 border-border/50 hover:bg-card-hover transition-colors">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="font-medium">{cert}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}