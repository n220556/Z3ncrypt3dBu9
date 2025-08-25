import { Shield, Search, FileText, Users, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    description: 'Comprehensive security assessments and strategic guidance to identify and mitigate security risks in your digital infrastructure.',
    features: [
      'Security Risk Assessment',
      'Compliance Gap Analysis', 
      'Security Policy Development',
      'Incident Response Planning'
    ],
    color: 'primary'
  },
  {
    icon: Search,
    title: 'Penetration Testing',
    description: 'Simulating real-world attacks to identify vulnerabilities and strengthen your system defenses before malicious actors exploit them.',
    features: [
      'Web Application Testing',
      'Network Penetration Testing',
      'Wireless Security Testing',
      'Social Engineering Assessment'
    ],
    color: 'secondary'
  },
  {
    icon: FileText,
    title: 'Security Documentation',
    description: 'Detailed reports and documentation of security findings, recommendations, and implementation guides for your security posture.',
    features: [
      'Vulnerability Reports',
      'Security Recommendations',
      'Implementation Guides',
      'Training Materials'
    ],
    color: 'accent'
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Educational workshops and training sessions to enhance your team\'s cybersecurity awareness and technical skills.',
    features: [
      'Security Awareness Training',
      'Technical Skills Development',
      'Phishing Simulation',
      'Best Practices Workshops'
    ],
    color: 'primary'
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'secondary':
      return {
        icon: 'text-secondary',
        border: 'border-secondary/20',
        bg: 'bg-secondary/5',
        button: 'bg-secondary/10 hover:bg-secondary/20 border-secondary/20 text-secondary'
      };
    case 'accent':
      return {
        icon: 'text-accent-foreground',
        border: 'border-accent/20', 
        bg: 'bg-accent/5',
        button: 'bg-accent/10 hover:bg-accent/20 border-accent/20 text-accent-foreground'
      };
    default:
      return {
        icon: 'text-primary',
        border: 'border-primary/20',
        bg: 'bg-primary/5',
        button: 'bg-primary/10 hover:bg-primary/20 border-primary/20 text-primary'
      };
  }
};

export default function Services() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Services
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive cybersecurity services to protect and strengthen your digital infrastructure
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          const colors = getColorClasses(service.color);
          
          return (
            <Card key={index} className={`p-8 ${colors.bg} border-border/50 hover:bg-card-hover transition-all duration-300 group`}>
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-card border ${colors.border} group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className={`w-full ${colors.button} transition-all duration-300 group-hover:shadow-md`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <Card className="p-8 bg-gradient-subtle border-border/50 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Ready to Secure Your Digital Assets?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Let's work together to identify vulnerabilities and strengthen your cybersecurity posture.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Get Started
            </Button>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}