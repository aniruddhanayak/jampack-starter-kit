import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const blogPosts = [
  {
    id: 1,
    title: "How to Build a SaaS in 2024: The Complete Guide",
    excerpt: "Learn the essential steps to launch your SaaS product from idea to market-ready application. We cover everything from validation to deployment.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
  },
  {
    id: 2,
    title: "The Future of React: What's Coming in 2025",
    excerpt: "Explore the upcoming features and improvements that will shape the React ecosystem. From Server Components to new hooks.",
    date: "Jan 10, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  },
  {
    id: 3,
    title: "Scaling Your Startup: Lessons from 10x Growth",
    excerpt: "Real-world insights from founders who successfully scaled their products to millions of users. Learn their strategies.",
    date: "Jan 5, 2024",
    readTime: "12 min read",
    category: "Startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  },
  {
    id: 4,
    title: "Authentication Best Practices for Modern Apps",
    excerpt: "A deep dive into secure authentication patterns including OAuth, JWT, and passwordless login implementations.",
    date: "Dec 28, 2023",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  },
  {
    id: 5,
    title: "Why TypeScript is Essential for Large Codebases",
    excerpt: "Discover how TypeScript helps teams maintain code quality and developer productivity at scale.",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  },
  {
    id: 6,
    title: "Designing for Accessibility: A Practical Guide",
    excerpt: "Learn how to create inclusive user experiences that work for everyone, with practical tips and examples.",
    date: "Dec 15, 2023",
    readTime: "9 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    author: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Insights, guides, and updates from our team. Stay up to date with the latest in SaaS development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-muted-foreground">{post.author.name}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
