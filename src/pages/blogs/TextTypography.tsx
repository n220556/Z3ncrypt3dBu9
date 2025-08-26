import { Calendar, Tag, User, ArrowLeft, ExternalLink, Code, Type, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';

const relatedPosts = [
  {
    title: 'Example Blog',
    category: 'writeup',
    tags: ['example', 'blog'],
    link: '/writeups/example-blog'
  },
  {
    title: 'head-dump',
    category: 'writeup',
    tags: ['PicoCTF', 'Web Exploitation'],
    link: '/writeups/head-dump'
  },
  {
    title: 'OverTheWire Bandit Level 0-10',
    category: 'blog',
    tags: ['OverTheWire', 'Linux'],
    link: '/blogs/otw-bandit-0-10'
  },
  {
    title: 'Cryptography Fundamentals in CTFs',
    category: 'blog',
    tags: ['cryptography', 'CTF'],
    link: '/blogs/crypto-fundamentals'
  }
];

export default function TextTypography() {
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
        <h1 className="text-4xl font-bold mb-4">Text and Typography</h1>
        
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Jan 12, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Raj Kumar</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['markdown', 'typography', 'documentation'].map((tag) => (
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
              <Type className="h-6 w-6" />
              Typography Elements
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This guide demonstrates various text and typography elements commonly used in technical documentation, 
              blogs, and writeups. These elements help structure content and improve readability.
            </p>
          </section>

          {/* Headings */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Hash className="h-6 w-6" />
              Headings
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/10 rounded-lg p-4">
                <h1 className="text-3xl font-bold mb-2">H1 Heading</h1>
                <h2 className="text-2xl font-semibold mb-2">H2 Heading</h2>
                <h3 className="text-xl font-semibold mb-2">H3 Heading</h3>
                <h4 className="text-lg font-semibold mb-2">H4 Heading</h4>
                <h5 className="text-base font-semibold mb-2">H5 Heading</h5>
                <h6 className="text-sm font-semibold">H6 Heading</h6>
              </div>
            </div>
          </section>

          {/* Text Formatting */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Text Formatting</h2>
            <div className="bg-secondary/10 rounded-lg p-4 space-y-3">
              <p><strong>Bold text</strong> - Used for emphasis and important terms</p>
              <p><em>Italic text</em> - Used for emphasis and technical terms</p>
              <p><code className="bg-primary/10 text-primary px-2 py-1 rounded font-mono">Inline code</code> - Used for code snippets and commands</p>
              <p><del>Strikethrough text</del> - Used for corrections or outdated information</p>
              <p><u>Underlined text</u> - Used sparingly for special emphasis</p>
              <p className="text-primary">Colored text</p> - Used for highlighting important information
              <p className="text-muted-foreground">Muted text</p> - Used for less important information
            </div>
          </section>

          {/* Code Blocks */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Code className="h-6 w-6" />
              Code Blocks
            </h2>
            
            {/* Bash/Terminal */}
            <h3 className="text-lg font-semibold mb-3 text-accent">Bash/Terminal Commands</h3>
            <div className="bg-secondary/10 rounded-lg p-4 mb-4">
              <pre className="text-sm font-mono text-primary">
{`$ ls -la
$ grep "flag" file.txt
$ curl -X GET http://example.com/api
$ nmap -sV target.com`}
              </pre>
            </div>

            {/* Python */}
            <h3 className="text-lg font-semibold mb-3 text-accent">Python Code</h3>
            <div className="bg-secondary/10 rounded-lg p-4 mb-4">
              <pre className="text-sm font-mono">
{`def exploit_vulnerability():
    payload = "malicious_input"
    response = requests.post(target_url, data=payload)
    if "flag" in response.text:
        print("Flag found!")
    return response`}
              </pre>
            </div>

            {/* SQL */}
            <h3 className="text-lg font-semibold mb-3 text-accent">SQL Injection</h3>
            <div className="bg-secondary/10 rounded-lg p-4">
              <pre className="text-sm font-mono">
{`' OR 1=1--
'; DROP TABLE users;--
' UNION SELECT username, password FROM users--`}
              </pre>
            </div>
          </section>

          {/* Lists */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Lists</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Unordered List */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Unordered List</h3>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reconnaissance</li>
                    <li>Scanning and Enumeration</li>
                    <li>Vulnerability Assessment</li>
                    <li>Exploitation</li>
                    <li>Post-Exploitation</li>
                    <li>Reporting</li>
                  </ul>
                </div>
              </div>

              {/* Ordered List */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Ordered List</h3>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Information Gathering</li>
                    <li>Port Scanning</li>
                    <li>Service Enumeration</li>
                    <li>Vulnerability Discovery</li>
                    <li>Exploit Development</li>
                    <li>Privilege Escalation</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Blockquotes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Blockquotes</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
                <p className="text-foreground italic">
                  "The best way to prepare for a penetration test is to think like an attacker."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">— Cybersecurity Professional</footer>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-4 bg-accent/5 p-4 rounded-r-lg">
                <p className="text-foreground">
                  <strong>Security Tip:</strong> Always validate and sanitize user input to prevent injection attacks.
                </p>
              </blockquote>
            </div>
          </section>

          {/* Tables */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Tables</h2>
            <div className="bg-secondary/10 rounded-lg p-4 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 font-semibold">Tool</th>
                    <th className="text-left p-2 font-semibold">Purpose</th>
                    <th className="text-left p-2 font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-2 font-mono text-primary">nmap</td>
                    <td className="p-2">Network scanning and enumeration</td>
                    <td className="p-2">Reconnaissance</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-2 font-mono text-primary">burp suite</td>
                    <td className="p-2">Web application security testing</td>
                    <td className="p-2">Web Testing</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-2 font-mono text-primary">metasploit</td>
                    <td className="p-2">Exploitation framework</td>
                    <td className="p-2">Exploitation</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono text-primary">wireshark</td>
                    <td className="p-2">Network protocol analyzer</td>
                    <td className="p-2">Analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Alerts/Callouts */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Alerts & Callouts</h2>
            <div className="space-y-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-primary font-semibold mb-2">💡 Information</p>
                <p>This is an informational callout used to highlight important information.</p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-400 font-semibold mb-2">✅ Success</p>
                <p>This indicates a successful operation or positive outcome.</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-400 font-semibold mb-2">⚠️ Warning</p>
                <p>This warns about potential issues or important considerations.</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-2">❌ Danger</p>
                <p>This indicates dangerous operations or critical errors.</p>
              </div>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Links</h2>
            <div className="bg-secondary/10 rounded-lg p-4 space-y-2">
              <p><a href="#" className="text-primary hover:underline">Internal link</a> - Links to other pages on the site</p>
              <p><a href="https://example.com" className="text-accent hover:underline inline-flex items-center gap-1">
                External link <ExternalLink className="h-3 w-3" />
              </a> - Links to external resources</p>
              <p><a href="#introduction" className="text-secondary-foreground hover:underline">Anchor link</a> - Links to sections on the same page</p>
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