import { ExternalLink, Github, Shield, Globe, Database, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'SecureVault Pro',
    description: 'Enterprise-grade password manager with advanced encryption and zero-knowledge architecture.',
    category: 'Security',
    technologies: ['React', 'Node.js', 'MongoDB', 'AES-256'],
    image: '/api/placeholder/400/240',
    liveUrl: 'https://securevault-demo.vercel.app',
    githubUrl: 'https://github.com/z3ncrypt3dbu9/securevault',
    icon: Shield,
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Network Vulnerability Scanner',
    description: 'Automated network security assessment tool for identifying potential vulnerabilities.',
    category: 'Security Tools',
    technologies: ['Python', 'Nmap', 'Scapy', 'Flask'],
    image: '/api/placeholder/400/240',
    liveUrl: null,
    githubUrl: 'https://github.com/z3ncrypt3dbu9/netscanner',
    icon: Terminal,
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'CyberSec Portfolio',
    description: 'Personal portfolio showcasing cybersecurity skills and achievements.',
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/api/placeholder/400/240',
    liveUrl: 'https://z3ncrypt3dbu9.vercel.app',
    githubUrl: 'https://github.com/z3ncrypt3dbu9/portfolio',
    icon: Globe,
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Threat Intelligence Platform',
    description: 'Real-time threat intelligence aggregation and analysis platform.',
    category: 'Security',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    image: '/api/placeholder/400/240',
    liveUrl: null,
    githubUrl: 'https://github.com/z3ncrypt3dbu9/threat-intel',
    icon: Database,
    status: 'Planning'
  }
];

const categories = ['All', 'Security', 'Security Tools', 'Web Development'];

export default function Projects() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of cybersecurity tools, web applications, and research projects
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button 
            key={category} 
            variant="outline" 
            size="sm"
            className="hover:bg-primary/10 hover:text-primary hover:border-primary/20"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-elegant"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-subtle p-8 flex items-center justify-center">
                <IconComponent className="h-16 w-16 text-primary/60 group-hover:text-primary transition-colors" />
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                  project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' :
                  'bg-orange-500/10 text-orange-500'
                }`}>
                  {project.status}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="text-sm text-primary font-medium mt-1">
                      {project.category}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button 
                      asChild 
                      size="sm" 
                      className="flex-1"
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className={project.liveUrl ? "flex-1" : "w-full"}
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-8">
        <p className="text-muted-foreground">
          Interested in collaborating or have a project in mind?
        </p>
        <Button asChild className="hover-scale">
          <a href="/contact">
            Get In Touch
          </a>
        </Button>
      </div>
    </div>
  );
}