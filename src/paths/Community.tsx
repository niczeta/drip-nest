import React from "react";
import { Button } from "../components/Button";
import { Heart, MessageCircle, Share2, Zap } from "lucide-react";

type TabType = "drip-feed" | "fits" | "culture";

export const Community = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>("fits");

  // Community fits/lookbook
  const communityFits = [
    {
      id: 1,
      username: "gullyguyleo",
      avatar: "/community/fits/gullyguyleo-propic.jpg",
      outfit: "/community/fits/gullyguyleo-1.jpg",
      who: "Streetwear Influencer",
      brand: "Carhartt x BAPE",
      likes: 1240,
      comments: 48,
      description: "New pickup hit different 🔥",
    },
    {
      id: 2,
      username: "serenstone",
      avatar: "/community/fits/serenstone-propic.jpg",
      outfit: "/community/fits/serenstone.jpg",
      who: "Streetwear Influencer",
      brand: "Carhartt x BAPE",
      likes: 892,
      comments: 34,
      description: "Minimal fit energy ✨",
    },
    {
      id: 3,
      username: "gullyguyleo",
      avatar: "/community/fits/gullyguyleo-propic.jpg",
      outfit: "/community/fits/gullyguyleo-2.jpg",
      who: "Streetwear Influencer",
      brand: "Carhartt x BAPE",
      likes: 765,
      comments: 42,
      description: "90s nostalgia never dies 👟",
    },
    {
      id: 4,
      username: "stefano_boscariol",
      avatar: "/community/fits/stefano_boscariol-propic.jpg",
      outfit: "/community/fits/stefano_boscariol.jpg",
      who: "Streetwear Influencer",
      brand: "Carhartt x BAPE",
      likes: 1045,
      comments: 56,
      description: "Timeless is always in style",
    },
    {
      id: 5,
      username: "gullyguyleo",
      avatar: "/community/fits/gullyguyleo-propic.jpg",
      outfit: "/community/fits/gullyguyleo-3.jpg",
      who: "Streetwear Influencer",
      brand: "Carhartt x BAPE",
      likes: 2103,
      comments: 89,
      description: "Summer vibes locked in 🌞",
    },
    {
      id: 6,
      username: "tomthewalker",
      avatar: "/community/fits/tomthewalker-propic.jpg",
      outfit: "/community/fits/tomthewalker.jpg",
      who: "Streetwear Influencer",
      brand: "Carhartt x BAPE",
      likes: 634,
      comments: 28,
      description: "Less is more, always",
    },
  ];

  // Drip feed - latest activity/news
  const dripFeed = [
    {
      id: 1,
      type: "community",
      title: "gullyguyleo just posted a new fit",
      image: "/community/fits/gullyguyleo-1.jpg",
      timestamp: "4 hours ago",
      engagement: 128,
    },
    {
      id: 2,
      type: "article",
      title: "How to Authenticate Vintage Sneakers",
      image: "/community/feed/lc.jpg",
      timestamp: "6 hours ago",
      engagement: 521,
    },
    {
      id: 3,
      type: "release",
      title: "New Jordan 1 Retro High OG 85 Just Dropped",
      image: "/shop/j-black.webp",
      timestamp: "2 hours ago",
      engagement: 342,
    },
  ];

  // Culture - articles, interviews, trends
  const cultureContent = [
    {
      id: 1,
      type: "trend",
      title: "Why Vintage Nike Dunks Became the Currency of Streetwear",
      author: "Style Correspondent",
      date: "November 8, 2025",
     image: "/community/culture/3.webp",
      reads: 4892,
    },
    {
      id: 2,
      type: "interview",
      title: "Interview: The Rise of Independent Sneaker Designers",
      author: "Creative Director Team",
      date: "November 10, 2025",
      image: "/community/culture/2.webp",
      reads: 2156,
    },
    {
      id: 3,
      type: "article",
      title: "Y2K Streetwear Is Back: How To Style 2000s Sneakers Today",
      author: "Drip-Nest Editorial",
      date: "November 14, 2025",
      image: "/community/culture/1.webp",
      reads: 3421,
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="bg-neutral-900 text-white py-16 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={24} className="text-red-500" />
            <span className="text-red-500 font-semibold uppercase">
              Community
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Crew
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Connect with sneaker enthusiasts, share your fits, and discover the
            culture. This is where the community lives.
          </p>
        </div>
      </section>

      {/* Tab navigation */}
      <section className="bg-neutral-950 text-white sticky top-16 z-40 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 flex gap-8">
          <button
            onClick={() => setActiveTab("fits")}
            className={`py-4 px-2 font-semibold uppercase text-sm transition-colors border-b-2 ${
              activeTab === "fits"
                ? "border-red-500 text-red-500"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            Fits
          </button>
          <button
            onClick={() => setActiveTab("drip-feed")}
            className={`py-4 px-2 font-semibold uppercase text-sm transition-colors border-b-2 ${
              activeTab === "drip-feed"
                ? "border-red-500 text-red-500"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          > 
            Drip Feed
          </button>
          <button
            onClick={() => setActiveTab("culture")}
            className={`py-4 px-2 font-semibold uppercase text-sm transition-colors border-b-2 ${
              activeTab === "culture"
                ? "border-red-500 text-red-500"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            Culture
          </button>
        </div>
      </section>

      {/* Content sections */}
      <section className="bg-neutral-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Fits Tab */}
          {activeTab === "fits" && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Community Fits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityFits.map((look) => (
                  <div
                    key={look.id}
                    className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                  >
                    {/* Outfit image - taller */}
                    <div className="relative h-96 overflow-hidden group flex-shrink-0">
                      <img
                        src={look.outfit}
                        alt={`${look.username} outfit`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay with stats */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-white">
                          <Heart size={20} fill="currentColor" />
                          <span className="font-semibold">{look.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <MessageCircle size={20} />
                          <span className="font-semibold">{look.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Look details */}
                    <div className="p-4 flex flex-col gap-3 flex-grow">
                      {/* User info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={look.avatar}
                          alt={look.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">
                            {look.username}
                          </p>
                          <p className="text-xs text-neutral-400">{look.who}</p>
                        </div>
                      </div>

                      {/* Sneaker info */}
                      <div className="border-l-2 border-red-500 pl-3 py-1">
                        <p className="text-sm font-semibold text-white">
                          {look.brand}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-300">
                        {look.description}
                      </p>

                      {/* Spacer */}
                      <div className="flex-grow" />

                      {/* Engagement buttons */}
                      <div className="flex gap-2 pt-2 border-t border-neutral-800">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-neutral-800 rounded transition-colors text-xs font-semibold text-neutral-300 hover:text-white">
                          <Heart size={16} />
                          Like
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-neutral-800 rounded transition-colors text-xs font-semibold text-neutral-300 hover:text-white">
                          <MessageCircle size={16} />
                          Reply
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-neutral-800 rounded transition-colors text-xs font-semibold text-neutral-300 hover:text-white">
                          <Share2 size={16} />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

                    {/* Drip Feed Tab */}
          {activeTab === "drip-feed" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">What's Happening</h2>
              {dripFeed.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row gap-6 p-4 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full sm:w-96 h-64 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-red-500 text-xs font-semibold uppercase">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-400 mt-4">
                      <span>{item.timestamp}</span>
                      <span>•</span>
                      <span>{item.engagement} interactions</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Culture Tab */}
          {activeTab === "culture" && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Culture & Articles</h2>
              <div className="space-y-6">
                {cultureContent.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-auto object-cover"
                    />
                    <div className="sm:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-red-500 text-xs font-semibold uppercase">
                          {item.type}
                        </span>
                        <h3 className="text-2xl font-bold mt-2">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-400 mt-4">
                        <span>By {item.author}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.reads.toLocaleString()} reads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Submit section - with bottom margin to separate from footer */}
      <section className="bg-neutral-900 text-white py-16 px-4 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Show Us Your Drip</h2>
          <p className="text-lg text-neutral-400 mb-8">
            Submit your best fits and get featured in the community. Tag
            #DripsNestFit on Instagram or send your photos directly to us.
          </p>
          <Button
            label="Submit Your Fit"
            link="#"
            variant="primary"
            size="lg"
          />
        </div>
      </section>
    </>
  );
};
