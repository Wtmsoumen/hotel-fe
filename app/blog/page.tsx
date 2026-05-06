"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User, Search } from "lucide-react";

const categories = ["All", "Travel Tips", "Hotel Reviews", "Destinations", "Lifestyle", "Deals"];

const blogPosts = [
  {
    id: 1,
    slug: "top-10-luxury-hotels-in-india",
    title: "Top 10 Luxury Hotels in India You Must Visit in 2026",
    excerpt: "From the palace hotels of Rajasthan to the serene backwater resorts of Kerala, India offers some of the most breathtaking luxury accommodations in the world.",
    image: "https://picsum.photos/seed/blog-feat/800/500",
    category: "Hotel Reviews",
    author: "Priya Sharma",
    date: "May 01, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "hidden-gems-of-rajasthan",
    title: "Hidden Gems of Rajasthan: Beyond the Tourist Trail",
    excerpt: "Explore lesser-known palaces, desert camps, and cultural experiences that make Rajasthan truly magical for the discerning traveler.",
    image: "https://picsum.photos/seed/blog-raj/600/400",
    category: "Destinations",
    author: "Arjun Mehra",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "packing-tips-for-beach-vacation",
    title: "The Ultimate Packing Guide for Your Dream Beach Vacation",
    excerpt: "Everything you need to pack for the perfect coastal getaway, from sunscreen to waterproof gear and beyond.",
    image: "https://picsum.photos/seed/blog-beach/600/400",
    category: "Travel Tips",
    author: "Neha Gupta",
    date: "Apr 22, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "best-mountain-retreats-himalayas",
    title: "Best Mountain Retreats in the Himalayas for 2026",
    excerpt: "Discover tranquil mountain lodges and wellness retreats nestled in the majestic Himalayan landscape.",
    image: "https://picsum.photos/seed/blog-himal/600/400",
    category: "Destinations",
    author: "Vikram Singh",
    date: "Apr 18, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "luxury-hotel-deals-summer-2026",
    title: "Exclusive Summer Hotel Deals You Cannot Miss This Season",
    excerpt: "Score incredible savings on 5-star properties across India with our curated selection of summer promotions.",
    image: "https://picsum.photos/seed/blog-deals/600/400",
    category: "Deals",
    author: "Ananya Roy",
    date: "Apr 15, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "solo-travel-guide-for-women",
    title: "The Complete Solo Travel Guide for Women in India",
    excerpt: "Safety tips, top destinations, and hotel recommendations for the adventurous solo female traveler exploring India.",
    image: "https://picsum.photos/seed/blog-solo/600/400",
    category: "Travel Tips",
    author: "Ritu Patel",
    date: "Apr 10, 2026",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "wellness-retreats-in-kerala",
    title: "Top Wellness Retreats in Kerala for Mind & Body Rejuvenation",
    excerpt: "Ayurvedic treatments, yoga retreats, and serene backwater resorts that restore your inner balance.",
    image: "https://picsum.photos/seed/blog-kerala/600/400",
    category: "Lifestyle",
    author: "Kavya Nair",
    date: "Apr 05, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    slug: "boutique-hotels-goa",
    title: "Boutique Hotels in Goa That Redefine Coastal Luxury",
    excerpt: "Move beyond the party scene and discover Goa's hidden side through its stunning boutique properties and heritage villas.",
    image: "https://picsum.photos/seed/blog-goa/600/400",
    category: "Hotel Reviews",
    author: "Sameer D'Souza",
    date: "Mar 30, 2026",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = blogPosts.find((p) => p.featured)!;

  const filtered = blogPosts.filter((p) => {
    if (p.featured) return false;
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const showFeatured =
    !searchQuery && (activeCategory === "All" || activeCategory === featured.category);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[320px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/banner1.png"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#001422cc] via-[#00427480] to-[#00427420]" />
        <div className="relative z-10 text-center px-4">
          <span className="section-tag" style={{ color: "#D8A95B" }}>Our Stories</span>
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-[60px] mt-1 tracking-tight leading-tight">
            Blog &amp; Articles
          </h1>
          <p className="text-white/75 mt-3 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Travel insights, hotel reviews, and expert tips for the modern explorer
          </p>
        </div>
      </section>

      {/* Search + Category Filter */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-lg mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full border border-gray-200 text-sm outline-none focus:border-[#D8A95B] transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#D8A95B] text-white"
                    : "border border-gray-200 text-gray-600 hover:border-[#D8A95B] hover:text-[#D8A95B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && (
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="section-tag">Featured Story</span>
              <span className="underline-amber" />
            </div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm">
                <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D8A95B] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-xl lg:text-2xl font-semibold text-[#000] leading-tight mb-4 group-hover:text-[#D8A95B] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-7">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-7">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#D8A95B]" />
                      {featured.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D8A95B]" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D8A95B]" />
                      {featured.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#D8A95B] text-sm font-semibold">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="section-tag">Latest Articles</span>
              <h2 className="section-title">Stories &amp; Insights</h2>
              <span className="underline-amber" />
            </div>
            <p className="text-xs text-gray-400">{filtered.length} article{filtered.length !== 1 ? "s" : ""} found</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 text-lg font-medium">No articles found.</p>
              <p className="text-gray-300 text-sm mt-1">Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
                  <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 flex flex-col h-full">
                    <div className="relative h-52 overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#D8A95B] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-[#000] text-sm leading-snug mb-2 group-hover:text-[#D8A95B] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-3 text-[10px] text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#D8A95B] -rotate-45 group-hover:rotate-0 transition-transform shrink-0" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20" style={{ background: "#16191C" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="section-tag">Stay in the Loop</span>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl mt-1 mb-3 leading-tight">
              Get Travel Inspiration in Your Inbox
            </h2>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Subscribe for the latest travel tips, hotel reviews, and exclusive deals delivered weekly.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-5 py-3 rounded-full border border-white/15 bg-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-[#D8A95B] transition-colors"
              />
              <button className="btn-amber px-6 py-3 rounded-full text-sm font-semibold shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
