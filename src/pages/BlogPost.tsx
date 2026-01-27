import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a SaaS in 2024: The Complete Guide",
    excerpt: "Learn the essential steps to launch your SaaS product from idea to market-ready application.",
    content: `
      <p>Building a successful SaaS product in 2024 requires a strategic approach that combines technical excellence with deep market understanding. In this comprehensive guide, we'll walk you through every step of the journey.</p>
      
      <blockquote>
        <p>"The best time to start building your SaaS was yesterday. The second best time is today."</p>
      </blockquote>
      
      <h2>1. Validate Your Idea</h2>
      <p>Before writing a single line of code, you need to validate your idea. Talk to potential customers, understand their pain points, and ensure there's a real market need for your solution. This step alone can save you months of wasted effort.</p>
      <p>Consider running surveys, conducting interviews, and analyzing competitor products. The goal is to find a problem worth solving that people will pay to have fixed.</p>
      
      <h3>Key Validation Methods</h3>
      <p>There are several proven methods to validate your SaaS idea before investing significant resources:</p>
      
      <h2>2. Choose Your Tech Stack</h2>
      <p>Your technology choices will impact development speed, scalability, and maintenance costs. For most SaaS applications in 2024, we recommend:</p>
      <ul>
        <li><strong>Frontend:</strong> React or Next.js for a modern, responsive UI</li>
        <li><strong>Backend:</strong> Node.js, Go, or Python depending on your team's expertise</li>
        <li><strong>Database:</strong> PostgreSQL for relational data, with Redis for caching</li>
        <li><strong>Infrastructure:</strong> Cloud providers like AWS, GCP, or Vercel for easy scaling</li>
      </ul>
      
      <h2>3. Build Your MVP</h2>
      <p>Focus on the core features that solve your users' primary pain point. Resist the temptation to add nice-to-have features. Your MVP should be minimal but functional, allowing you to gather real user feedback quickly.</p>
      
      <blockquote>
        <p>"If you're not embarrassed by the first version of your product, you've launched too late." — Reid Hoffman</p>
      </blockquote>
      
      <h2>4. Implement Authentication & Security</h2>
      <p>Security is non-negotiable. Implement robust authentication from day one, including:</p>
      <ul>
        <li>Secure password hashing with bcrypt or Argon2</li>
        <li>OAuth integration for social logins</li>
        <li>Two-factor authentication</li>
        <li>Rate limiting and CSRF protection</li>
      </ul>
      
      <h3>Security Checklist</h3>
      <p>Before launching, ensure you've addressed all critical security concerns. A single vulnerability can destroy user trust.</p>
      
      <h2>5. Set Up Payments</h2>
      <p>Integrate a payment processor like Stripe early in your development. This allows you to test the complete user journey and ensures you can monetize from launch day.</p>
      
      <h2>6. Launch and Iterate</h2>
      <p>Launch early, even if it feels uncomfortable. Real user feedback is invaluable and will guide your product development more effectively than any amount of planning. Set up analytics, gather feedback, and iterate quickly.</p>
      
      <h2>Conclusion</h2>
      <p>Building a SaaS in 2024 is more accessible than ever, but it still requires dedication, strategic thinking, and relentless focus on user needs. Follow this guide, stay agile, and you'll be well on your way to building a successful product.</p>
    `,
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "Head of Product",
    },
  },
  {
    id: 2,
    title: "The Future of React: What's Coming in 2025",
    excerpt: "Explore the upcoming features and improvements that will shape the React ecosystem.",
    content: `
      <p>React continues to evolve at a rapid pace. As we look ahead to 2025, several exciting developments are on the horizon that will change how we build web applications.</p>
      
      <blockquote>
        <p>"React is not just a library, it's a way of thinking about building user interfaces." — Dan Abramov</p>
      </blockquote>
      
      <h2>React Server Components</h2>
      <p>Server Components are maturing and becoming the default way to build React applications. They allow you to render components on the server, reducing bundle sizes and improving performance significantly.</p>
      
      <h3>Benefits of Server Components</h3>
      <p>The key advantage is the ability to keep large dependencies on the server, dramatically reducing the JavaScript sent to the client.</p>
      
      <h2>Improved Suspense</h2>
      <p>Suspense is getting more powerful, with better support for data fetching, streaming, and progressive rendering. This means smoother user experiences with less loading state management code.</p>
      
      <h2>The Compiler (React Forget)</h2>
      <p>The React team is working on an automatic compiler that will eliminate the need for manual memoization. No more useMemo, useCallback, or React.memo — the compiler will handle optimization automatically.</p>
      
      <blockquote>
        <p>"The best optimization is the one you don't have to think about."</p>
      </blockquote>
      
      <h2>Concurrent Features</h2>
      <p>Concurrent rendering is becoming more stable and widely adopted. Features like useTransition and useDeferredValue are helping developers build more responsive interfaces.</p>
      
      <h3>When to Use Concurrent Features</h3>
      <p>These features shine in scenarios with expensive computations or complex UI updates that shouldn't block user input.</p>
      
      <h2>Conclusion</h2>
      <p>The future of React is bright. These improvements will make it easier to build fast, maintainable applications while reducing the cognitive overhead for developers.</p>
    `,
    date: "Jan 10, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      role: "Senior Engineer",
    },
  },
  {
    id: 3,
    title: "Scaling Your Startup: Lessons from 10x Growth",
    excerpt: "Real-world insights from founders who successfully scaled their products to millions of users.",
    content: `
      <p>Scaling a startup is one of the most challenging phases of company growth. Having worked with dozens of startups through their 10x growth phases, here are the key lessons learned.</p>
      
      <h2>Infrastructure First</h2>
      <p>Before you scale users, scale your infrastructure. Invest in observability, automated deployments, and database optimization. The worst time to fix scaling issues is when you're actively losing customers.</p>
      
      <h2>Hire Ahead of the Curve</h2>
      <p>Start hiring before you desperately need people. The best candidates take time to find and onboard. Build your team proactively, not reactively.</p>
      
      <h2>Maintain Culture</h2>
      <p>As you grow, your culture will be tested. Document your values, be intentional about hiring for culture fit, and create systems that reinforce the behaviors you want to see.</p>
      
      <h2>Customer Success is Everything</h2>
      <p>At scale, customer success becomes your growth engine. Happy customers refer others, expand their usage, and provide invaluable feedback. Invest heavily in this function.</p>
      
      <h2>Conclusion</h2>
      <p>Scaling successfully requires preparation, intentionality, and a willingness to change how you operate. The companies that thrive are those that treat growth as a skill to be developed, not just a result to be achieved.</p>
    `,
    date: "Jan 5, 2024",
    readTime: "12 min read",
    category: "Startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      role: "Founder & CEO",
    },
  },
  {
    id: 4,
    title: "Authentication Best Practices for Modern Apps",
    excerpt: "A deep dive into secure authentication patterns including OAuth, JWT, and passwordless login implementations.",
    content: `
      <p>Authentication is the foundation of application security. Get it wrong, and everything else becomes vulnerable. Here's how to implement authentication correctly in 2024.</p>
      
      <h2>Use Established Libraries</h2>
      <p>Don't roll your own auth. Use battle-tested libraries like NextAuth, Auth0, or Clerk. They handle the complexity and security considerations that are easy to get wrong.</p>
      
      <h2>Implement Passwordless When Possible</h2>
      <p>Magic links and passkeys reduce friction and eliminate password-related vulnerabilities. Users appreciate the convenience, and you benefit from better security.</p>
      
      <h2>JWT Best Practices</h2>
      <p>If using JWTs, keep them short-lived, use refresh token rotation, and never store sensitive data in the payload. Always validate tokens on every request.</p>
      
      <h2>Conclusion</h2>
      <p>Modern authentication doesn't have to be complicated, but it does require careful implementation. Follow these practices to protect your users and your business.</p>
    `,
    date: "Dec 28, 2023",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      role: "Security Lead",
    },
  },
  {
    id: 5,
    title: "Why TypeScript is Essential for Large Codebases",
    excerpt: "Discover how TypeScript helps teams maintain code quality and developer productivity at scale.",
    content: `
      <p>TypeScript has evolved from a nice-to-have to an essential tool for serious software development. Here's why every large codebase should use TypeScript.</p>
      
      <h2>Catch Errors Early</h2>
      <p>TypeScript catches errors at compile time that would otherwise only appear at runtime. This alone can prevent countless bugs from reaching production.</p>
      
      <h2>Better Developer Experience</h2>
      <p>Autocompletion, refactoring tools, and inline documentation make developers more productive. The investment in types pays off quickly in development speed.</p>
      
      <h2>Self-Documenting Code</h2>
      <p>Types serve as documentation that never goes stale. New team members can understand code faster, and everyone benefits from clearer interfaces.</p>
      
      <h2>Conclusion</h2>
      <p>The overhead of TypeScript is minimal compared to the benefits. For any project that will grow beyond a few files, TypeScript is the right choice.</p>
    `,
    date: "Dec 20, 2023",
    readTime: "7 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=600&fit=crop",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      role: "Staff Engineer",
    },
  },
  {
    id: 6,
    title: "Designing for Accessibility: A Practical Guide",
    excerpt: "Learn how to create inclusive user experiences that work for everyone, with practical tips and examples.",
    content: `
      <p>Accessibility isn't just a legal requirement—it's good design. Making your product work for everyone expands your market and creates better experiences for all users.</p>
      
      <h2>Start with Semantic HTML</h2>
      <p>Before adding ARIA attributes, ensure you're using the right HTML elements. Buttons should be buttons, links should be links, and headings should follow a logical hierarchy.</p>
      
      <h2>Color and Contrast</h2>
      <p>Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text). Don't rely solely on color to convey information—use icons, patterns, or text labels as well.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Every interactive element should be accessible via keyboard. Test your app by unplugging your mouse and navigating with Tab, Enter, and arrow keys.</p>
      
      <h2>Conclusion</h2>
      <p>Accessibility benefits everyone. The principles that help disabled users—clear navigation, good contrast, logical structure—improve the experience for all users.</p>
    `,
    date: "Dec 15, 2023",
    readTime: "9 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    author: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      role: "Design Lead",
    },
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="hero">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.1),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container mx-auto px-6 mb-12"
      >
        <div className="aspect-[21/9] rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Content */}
      <article className="container mx-auto px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-primary
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-muted-foreground prose-ul:my-4
              prose-li:my-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5
              prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:my-8
              prose-blockquote:italic prose-blockquote:text-foreground/90
              [&_blockquote_p]:text-lg [&_blockquote_p]:font-medium [&_blockquote_p]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Share this article</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-card border border-border">
            <div className="flex items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <p className="font-semibold text-lg">{post.author.name}</p>
                <p className="text-sm text-primary mb-2">{post.author.role}</p>
                <p className="text-muted-foreground text-sm">
                  Passionate about building great products and sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[16/10]">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                <h3 className="font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
