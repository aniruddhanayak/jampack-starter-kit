import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "How to Build a SaaS in 2024: The Complete Guide",
    excerpt: "Learn the essential steps to launch your SaaS product from idea to market-ready application.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "The Future of React: What's Coming in 2025",
    excerpt: "Explore the upcoming features and improvements that will shape the React ecosystem.",
    date: "Jan 10, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Scaling Your Startup: Lessons from 10x Growth",
    excerpt: "Real-world insights from founders who successfully scaled their products to millions of users.",
    date: "Jan 5, 2024",
    readTime: "12 min read",
    category: "Startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Blog
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Latest{" "}
              <span className="text-gradient">Insights</span>
            </h2>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="mt-6 md:mt-0">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
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

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
