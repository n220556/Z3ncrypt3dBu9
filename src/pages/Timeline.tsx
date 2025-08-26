import { Calendar, Clock, Tag } from 'lucide-react';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  category: 'writeup' | 'blog';
  tags: string[];
  description: string;
  link: string;
}

const timelineData: TimelineItem[] = [
  {
    id: '0',
    date: 'Jan 1, 2025',
    title: 'Example Blog',
    category: 'writeup',
    tags: ['example', 'blog', 'markdown'],
    description: 'An example blog post demonstrating content structure and styling for cybersecurity writeups and educational content.',
    link: '/writeups/example-blog'
  },
  {
    id: '1',
    date: 'Jan 15, 2025',
    title: 'head-dump',
    category: 'writeup',
    tags: ['PicoCTF', 'CTF', 'Web Exploitation', 'easy'],
    description: 'Explore a web application and find an endpoint that exposes a file containing a hidden flag through heap dump analysis.',
    link: '/writeups/head-dump'
  },
  {
    id: '2',
    date: 'Jan 12, 2025',
    title: 'Text and Typography',
    category: 'blog',
    tags: ['markdown', 'typography', 'documentation'],
    description: 'A comprehensive guide to text formatting and typography elements used in technical writing and documentation.',
    link: '/blogs/text-typography'
  },
  {
    id: '3',
    date: 'Jan 10, 2025',
    title: 'OverTheWire Bandit Level 0-10',
    category: 'blog',
    tags: ['OverTheWire', 'Linux', 'beginner'],
    description: 'Complete walkthrough of the first 10 levels of OverTheWire Bandit wargame, perfect for Linux beginners.',
    link: '/blogs/otw-bandit-0-10'
  },
  {
    id: '4',
    date: 'Jan 8, 2025',
    title: 'VulnHub Boot2Root Analysis',
    category: 'blog',
    tags: ['VulnHub', 'penetration testing', 'boot2root'],
    description: 'Detailed analysis of a VulnHub machine focusing on enumeration, exploitation, and privilege escalation techniques.',
    link: '/blogs/vulnhub-boot2root'
  },
  {
    id: '5',
    date: 'Jan 5, 2025',
    title: 'Cryptography Fundamentals in CTFs',
    category: 'blog',
    tags: ['cryptography', 'CTF', 'fundamentals'],
    description: 'Understanding basic cryptographic concepts commonly encountered in Capture The Flag competitions.',
    link: '/blogs/crypto-fundamentals'
  },
  {
    id: '6',
    date: 'Jan 3, 2025',
    title: 'Digital Forensics with Autopsy',
    category: 'blog',
    tags: ['forensics', 'autopsy', 'investigation'],
    description: 'Introduction to digital forensics using Autopsy tool for investigating digital evidence and artifacts.',
    link: '/blogs/forensics-autopsy'
  }
];

export default function Timeline() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Timeline
        </h1>
        <p className="text-muted-foreground text-lg">
          A chronological overview of my cybersecurity journey, writeups, and blog posts.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

              {/* Content */}
              <div className="ml-16 group">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                  {/* Date and category */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === 'writeup' 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-accent/10 text-accent border border-accent/20'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    <a href={item.link} className="hover:underline">
                      {item.title}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs hover:bg-secondary/70 transition-colors cursor-pointer"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="text-sm">Timeline updated regularly with new content</span>
        </div>
      </div>
    </div>
  );
}