import { Calendar, Tag, User, ArrowLeft, ExternalLink, Terminal, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const relatedPosts = [
  {
    title: 'head-dump',
    category: 'writeup',
    tags: ['PicoCTF', 'Web Exploitation'],
    link: '/writeups/head-dump'
  },
  {
    title: 'Text and Typography',
    category: 'blog',
    tags: ['markdown', 'typography'],
    link: '/blogs/text-typography'
  },
  {
    title: 'OverTheWire Bandit Level 0-10',
    category: 'blog',
    tags: ['OverTheWire', 'Linux'],
    link: '/blogs/otw-bandit-0-10'
  }
];

export default function ExampleWriteup() {
  return (
    <div className="min-h-screen">
      {/* Back button */}
      <div className="mb-6">
        <Button variant="ghost" className="gap-2" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Example Blog</h1>
        
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Jan 1, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Raj Kumar</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['example', 'blog', 'markdown'].map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        <div className="bg-card rounded-lg p-8 border border-border space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Terminal className="h-6 w-6" />
              Introduction
            </h2>
            <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-primary">
              <p className="text-foreground leading-relaxed">
                Hi everyone! This is an example blog post demonstrating how content can be structured 
                and presented in our cybersecurity portfolio. This serves as a template for future 
                writeups and blog posts.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">📝 Content Structure</h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">Writing Style</h3>
                <p className="text-muted-foreground mb-3">
                  Our blog posts and writeups follow a consistent structure that makes them easy to read 
                  and understand. Each post includes:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Clear introduction explaining the topic</li>
                  <li>Step-by-step methodology when applicable</li>
                  <li>Code examples and command snippets</li>
                  <li>Visual elements like callouts and highlights</li>
                  <li>Conclusion summarizing key learnings</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Code Examples
                </h3>
                <p className="text-muted-foreground mb-3">
                  Here's an example of how we format code snippets:
                </p>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <code className="text-primary font-mono text-sm block">
                    # Example bash command<br/>
                    echo "Hello, cybersecurity world!"<br/>
                    <br/>
                    # Another example<br/>
                    nmap -sV target.com
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">💡 Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-2">Content Guidelines</h3>
                <ul className="text-sm space-y-1">
                  <li>Keep explanations clear and concise</li>
                  <li>Use proper syntax highlighting for code</li>
                  <li>Include relevant tags for categorization</li>
                  <li>Add related posts for better navigation</li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">Technical Writing</h3>
                <ul className="text-sm space-y-1">
                  <li>Document your methodology step by step</li>
                  <li>Include screenshots when helpful</li>
                  <li>Explain complex concepts simply</li>
                  <li>Provide context for your findings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎯 Conclusion</h2>
            <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-accent">
              <p className="text-foreground leading-relaxed">
                This example demonstrates the structure and styling we use for our cybersecurity content. 
                Whether it's a CTF writeup, vulnerability analysis, or educational blog post, maintaining 
                consistency in presentation helps readers focus on the technical content while ensuring 
                a professional appearance.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* Related Posts */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">📚 Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {relatedPosts.map((post, index) => (
            <a 
              key={index}
              href={post.link}
              className="block bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-secondary/50 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <ExternalLink className="h-3 w-3" />
                <span>{post.category}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}