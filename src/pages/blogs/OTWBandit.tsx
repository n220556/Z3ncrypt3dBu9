import { Calendar, Tag, User, ArrowLeft, ExternalLink, Terminal, Lock, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';

const relatedPosts = [
  {
    title: 'head-dump',
    category: 'writeup',
    tags: ['PicoCTF', 'Web Exploitation'],
    link: '/writeups/head-dump'
  },
  {
    title: 'VulnHub Boot2Root Analysis',
    category: 'blog',
    tags: ['VulnHub', 'penetration testing'],
    link: '/blogs/vulnhub-boot2root'
  },
  {
    title: 'Digital Forensics with Autopsy',
    category: 'blog',
    tags: ['forensics', 'autopsy'],
    link: '/blogs/forensics-autopsy'
  }
];

export default function OTWBandit() {
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
        <h1 className="text-4xl font-bold mb-4">OverTheWire Bandit Level 0-10</h1>
        
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Jan 10, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Raj Kumar</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['OverTheWire', 'Linux', 'beginner'].map((tag) => (
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
                OverTheWire Bandit is a beginner-friendly wargame that teaches Linux command line fundamentals through 
                a series of progressively challenging levels. Each level requires you to find a password hidden on the server 
                to advance to the next level.
              </p>
            </div>
          </section>

          {/* Prerequisites */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎯 Prerequisites</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Basic understanding of command line interfaces</li>
              <li>SSH client installed on your system</li>
              <li>Willingness to learn and experiment</li>
            </ul>
          </section>

          {/* Level Walkthroughs */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Key className="h-6 w-6" />
              Level Walkthroughs
            </h2>

            {/* Level 0 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 0
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Connect to the bandit server via SSH.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3">
                <code className="text-primary font-mono text-sm">
                  ssh bandit0@bandit.labs.overthewire.org -p 2220
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Password: bandit0
              </p>
            </div>

            {/* Level 0→1 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 0 → 1
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find the password stored in a file called "readme" in the home directory.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">ls -la</code>
                <code className="block text-primary font-mono text-sm">cat readme</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                The password will be displayed: <code className="bg-secondary px-2 py-1 rounded">NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL</code>
              </p>
            </div>

            {/* Level 1→2 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 1 → 2
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Read the password from a file called "-" in the home directory.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">cat ./-</code>
                <code className="block text-muted-foreground font-mono text-sm"># or alternatively</code>
                <code className="block text-primary font-mono text-sm">cat &lt; -</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Files starting with "-" are treated as options. Use "./" or "&lt;" to read them.
              </p>
            </div>

            {/* Level 2→3 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 2 → 3
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Read the password from a file called "spaces in this filename".
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">cat "spaces in this filename"</code>
                <code className="block text-muted-foreground font-mono text-sm"># or</code>
                <code className="block text-primary font-mono text-sm">cat spaces\ in\ this\ filename</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Use quotes or escape characters for filenames with spaces.
              </p>
            </div>

            {/* Level 3→4 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 3 → 4
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find the password stored in a hidden file in the "inhere" directory.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">cd inhere</code>
                <code className="block text-primary font-mono text-sm">ls -la</code>
                <code className="block text-primary font-mono text-sm">cat .hidden</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Hidden files in Linux start with "." and require "-a" flag to be visible.
              </p>
            </div>

            {/* Level 4→5 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 4 → 5
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find the password in the only human-readable file in the "inhere" directory.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">cd inhere</code>
                <code className="block text-primary font-mono text-sm">file ./*</code>
                <code className="block text-primary font-mono text-sm">cat ./-file07</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Use the "file" command to determine file types.
              </p>
            </div>

            {/* Level 5→6 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 5 → 6
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find a file with specific properties: human-readable, 1033 bytes, not executable.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">find . -type f -size 1033c ! -executable</code>
                <code className="block text-primary font-mono text-sm">cat ./maybehere07/.file2</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> The "find" command with size and permission filters.
              </p>
            </div>

            {/* Level 6→7 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 6 → 7
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find a file owned by user "bandit7", group "bandit6", 33 bytes in size.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">find / -user bandit7 -group bandit6 -size 33c 2&gt;/dev/null</code>
                <code className="block text-primary font-mono text-sm">cat /var/lib/dpkg/info/bandit7.password</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Using find with user, group ownership and redirecting errors.
              </p>
            </div>

            {/* Level 7→8 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 7 → 8
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find the password in "data.txt" next to the word "millionth".
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">grep millionth data.txt</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Using grep to search for specific strings in files.
              </p>
            </div>

            {/* Level 8→9 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 8 → 9
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find the unique line in "data.txt" that occurs only once.
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">sort data.txt | uniq -u</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Combining sort and uniq commands to find unique occurrences.
              </p>
            </div>

            {/* Level 9→10 */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Level 9 → 10
              </h3>
              <p className="text-muted-foreground mb-3">
                <strong>Goal:</strong> Find the password in "data.txt" in human-readable strings preceded by "=".
              </p>
              <div className="bg-secondary/10 rounded-lg p-3 space-y-2">
                <code className="block text-primary font-mono text-sm">strings data.txt | grep "="</code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Learning:</strong> Using strings command to extract readable text from binary files.
              </p>
            </div>
          </section>

          {/* Tips and Tricks */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">💡 Tips and Tricks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">Command Reference</h3>
                <ul className="text-sm space-y-1">
                  <li><code className="bg-secondary px-1 rounded">ls -la</code> - List all files including hidden</li>
                  <li><code className="bg-secondary px-1 rounded">file *</code> - Check file types</li>
                  <li><code className="bg-secondary px-1 rounded">find</code> - Search for files with criteria</li>
                  <li><code className="bg-secondary px-1 rounded">grep</code> - Search text patterns</li>
                </ul>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-2">Best Practices</h3>
                <ul className="text-sm space-y-1">
                  <li>Read level instructions carefully</li>
                  <li>Use man pages for command help</li>
                  <li>Experiment with different approaches</li>
                  <li>Take notes of useful commands</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎯 Conclusion</h2>
            <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-accent">
              <p className="text-foreground leading-relaxed">
                The first 10 levels of Bandit provide a solid foundation in Linux command line basics. These skills are 
                essential for cybersecurity professionals and form the building blocks for more advanced penetration testing 
                techniques. Continue with higher levels to learn about networking, cryptography, and system exploitation.
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