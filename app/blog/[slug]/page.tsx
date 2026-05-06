import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User, ArrowLeft, Tag } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const blogPosts = [
  {
    id: 1,
    slug: "top-10-luxury-hotels-in-india",
    title: "Top 10 Luxury Hotels in India You Must Visit in 2026",
    excerpt: "From the palace hotels of Rajasthan to the serene backwater resorts of Kerala, India offers some of the most breathtaking luxury accommodations in the world.",
    image: "https://picsum.photos/seed/blog-feat/1200/600",
    category: "Hotel Reviews",
    author: "Priya Sharma",
    date: "May 01, 2026",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "India's hospitality landscape has undergone a remarkable transformation over the past decade. From the opulent palace hotels of Rajasthan to the intimate jungle lodges of Madhya Pradesh, the country now offers world-class luxury that rivals any destination on earth.",
      },
      {
        type: "heading",
        text: "1. The Leela Palace, Udaipur",
      },
      {
        type: "paragraph",
        text: "Perched on the shores of Lake Pichola, this architectural masterpiece draws inspiration from the City of Lakes. Guests are welcomed with rose petals and chilled nimbu paani before being escorted to palatial rooms with lake-facing balconies.",
      },
      {
        type: "heading",
        text: "2. Oberoi Wildflower Hall, Shimla",
      },
      {
        type: "paragraph",
        text: "At an elevation of 8,250 feet, this mountain retreat offers cedar-paneled rooms with views of the snow-dusted Himalayas. The spa treatments using Himalayan herbs and the infinity pool overlooking dense deodar forests make it truly unforgettable.",
      },
      {
        type: "heading",
        text: "3. Taj Lake Palace, Udaipur",
      },
      {
        type: "paragraph",
        text: "Rising from the middle of Lake Pichola like a marble dream, the Taj Lake Palace is accessible only by boat. Every corner of this 18th-century palace turned hotel tells a story of Rajput grandeur and timeless elegance.",
      },
      {
        type: "paragraph",
        text: "Whether you're celebrating a honeymoon, planning a family reunion, or simply seeking a world-class escape, these properties promise memories that will last a lifetime. India's luxury hotel scene continues to evolve, setting new benchmarks for service, design, and experience.",
      },
    ],
  },
  {
    id: 2,
    slug: "hidden-gems-of-rajasthan",
    title: "Hidden Gems of Rajasthan: Beyond the Tourist Trail",
    excerpt: "Explore lesser-known palaces, desert camps, and cultural experiences that make Rajasthan truly magical for the discerning traveler.",
    image: "https://picsum.photos/seed/blog-raj/1200/600",
    category: "Destinations",
    author: "Arjun Mehra",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "While Jaipur, Jodhpur, and Jaisalmer rightfully draw millions of visitors each year, Rajasthan's true magic lies in its overlooked corners. These hidden gems offer the same regal splendour without the tourist crowds.",
      },
      {
        type: "heading",
        text: "Bundi: The Poet's City",
      },
      {
        type: "paragraph",
        text: "Rudyard Kipling wrote about Bundi in his Letters of Marque, and for good reason. The town's stepped baolis (stepwells), the intricately frescoed Taragarh Fort, and the ancient havelis create an atmosphere that feels untouched by time.",
      },
      {
        type: "heading",
        text: "Shekhawati: The Open-Air Art Gallery",
      },
      {
        type: "paragraph",
        text: "This semi-arid region is home to hundreds of painted havelis built by wealthy Marwari merchants in the 18th and 19th centuries. The murals depict everything from mythological scenes to early automobiles — a fascinating cultural document painted across an entire landscape.",
      },
    ],
  },
];

const relatedPosts = [
  {
    slug: "hidden-gems-of-rajasthan",
    title: "Hidden Gems of Rajasthan: Beyond the Tourist Trail",
    image: "https://picsum.photos/seed/blog-raj/400/250",
    category: "Destinations",
    date: "Apr 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "wellness-retreats-in-kerala",
    title: "Top Wellness Retreats in Kerala for Mind & Body",
    image: "https://picsum.photos/seed/blog-kerala/400/250",
    category: "Lifestyle",
    date: "Apr 05, 2026",
    readTime: "6 min read",
  },
  {
    slug: "boutique-hotels-goa",
    title: "Boutique Hotels in Goa That Redefine Coastal Luxury",
    image: "https://picsum.photos/seed/blog-goa/400/250",
    category: "Hotel Reviews",
    date: "Mar 30, 2026",
    readTime: "5 min read",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug) ?? blogPosts[0];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[380px] sm:h-[480px] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#000000dd] via-[#00000055] to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="mb-3">
            <span className="bg-[#D8A95B] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
          </div>
          <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl max-w-3xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 mt-4 text-white/60 text-xs">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#D8A95B]" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D8A95B]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D8A95B]" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#D8A95B]" />
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#D8A95B] transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              <div className="prose max-w-none">
                <p className="text-gray-500 text-sm leading-relaxed mb-6 text-base italic border-l-2 border-[#D8A95B] pl-5">
                  {post.excerpt}
                </p>
                {post.content.map((block, i) =>
                  block.type === "heading" ? (
                    <h2
                      key={i}
                      className="text-[#000] font-semibold text-lg mt-8 mb-3"
                    >
                      {block.text}
                    </h2>
                  ) : (
                    <p
                      key={i}
                      className="text-gray-600 text-sm leading-[1.9] mb-5"
                    >
                      {block.text}
                    </p>
                  )
                )}
              </div>

              {/* Share + Tags */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-gray-400 font-medium">Tags:</span>
                  {[post.category, "India", "Travel"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] border border-[#D8A95B] text-[#D8A95B] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Share:</span>
                  {["Facebook", "Twitter", "LinkedIn"].map((s) => (
                    <button
                      key={s}
                      className="text-[10px] border border-gray-200 hover:border-[#D8A95B] hover:text-[#D8A95B] text-gray-500 px-3 py-1 rounded-full transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-10 bg-gray-50 rounded-2xl p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#D8A95B]/20 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-[#D8A95B]" />
                </div>
                <div>
                  <p className="text-xs text-[#D8A95B] uppercase tracking-wide font-medium mb-0.5">
                    Written by
                  </p>
                  <h4 className="font-semibold text-[#000] text-sm">{post.author}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mt-1">
                    A passionate travel writer and hotel connoisseur with over a decade of experience exploring the finest destinations across India and Southeast Asia.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Popular Posts */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-[#000] text-sm mb-1">Popular Articles</h3>
                <span className="underline-amber mb-5 block" />
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={rp.image}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-[#D8A95B] font-medium mb-0.5">
                          {rp.category}
                        </p>
                        <p className="text-xs font-medium text-[#000] leading-snug line-clamp-2 group-hover:text-[#D8A95B] transition-colors">
                          {rp.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">{rp.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-[#000] text-sm mb-1">Categories</h3>
                <span className="underline-amber mb-5 block" />
                <div className="space-y-2">
                  {["Hotel Reviews", "Destinations", "Travel Tips", "Lifestyle", "Deals"].map((cat) => (
                    <Link
                      key={cat}
                      href="/blog"
                      className="flex items-center justify-between text-xs text-gray-600 hover:text-[#D8A95B] transition-colors py-1.5 border-b border-gray-50 group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#D8A95B] transition-colors" />
                        {cat}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8A95B]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-2xl p-6" style={{ background: "#16191C" }}>
                <h3 className="text-white font-semibold text-sm mb-1">Newsletter</h3>
                <span className="underline-amber mb-4 block" />
                <p className="text-white/50 text-xs leading-relaxed mb-5">
                  Get the best travel articles delivered straight to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email..."
                  className="w-full px-4 py-2.5 rounded-full border border-white/15 bg-white/10 text-white placeholder-white/30 text-xs outline-none focus:border-[#D8A95B] transition-colors mb-3"
                />
                <button className="btn-amber w-full py-2.5 rounded-full text-xs font-semibold">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <div className="mb-8">
            <span className="section-tag">Read More</span>
            <h2 className="section-title">Related Articles</h2>
            <span className="underline-amber" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#D8A95B] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {rp.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#000] text-sm leading-snug mb-3 group-hover:text-[#D8A95B] transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <div className="flex items-center justify-between text-[10px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {rp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {rp.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 btn-amber px-8 py-3 rounded-full text-sm font-semibold"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
