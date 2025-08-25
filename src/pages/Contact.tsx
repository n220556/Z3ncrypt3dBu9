import { Mail, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="What would you like to discuss?" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Tell me about your project, questions, or how we can work together..."
                rows={6}
              />
            </div>

            <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Direct Contact */}
          <Card className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:z3ncrypt3dbu9@gmail.com"
                    className="text-primary hover:underline"
                  >
                    z3ncrypt3dbu9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/20">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-muted-foreground text-sm">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">India (Remote Available)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Connect Online</h2>
            
            <div className="space-y-4">
              <a 
                href="#"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors border border-border/50"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my projects and contributions</p>
                </div>
              </a>

              <a 
                href="#"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors border border-border/50"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Professional network and updates</p>
                </div>
              </a>
            </div>
          </Card>

          {/* Availability */}
          <Card className="p-6 bg-gradient-subtle border-border/50">
            <div className="space-y-4">
              <h3 className="font-semibold">Available for:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Cybersecurity consulting projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Penetration testing engagements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Security training and workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Full-time cybersecurity roles
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}