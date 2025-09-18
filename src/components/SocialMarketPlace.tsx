import React, { useState } from 'react';
import { Heart, MessageSquare, Share, Bookmark, Check, Users, Star, TrendingUp } from 'lucide-react';

// Social Marketplace Component
const SocialMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sellers');

  // Auto-switch to trending products after 6 seconds
  React.useEffect(() => {
    if (activeTab === 'sellers') {
      const timer = setTimeout(() => {
        setActiveTab('trending');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());

  // Sample data for top sellers with diverse representation
  const topSellers = [
    {
      id: 1,
      name: "Jordan Williams",
      username: "@jordanw",
      image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&w=150&h=150&q=80",
      products: 42,
      rating: 4.9,
      followers: "12.5K",
      isFollowing: true
    },
    {
      id: 2,
      name: "Aisha Mohammed",
      username: "@aisham",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80",
      products: 38,
      rating: 4.8,
      followers: "9.8K",
      isFollowing: true
    },
    {
      id: 3,
      name: "Marcus Johnson",
      username: "@marcusj",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      products: 56,
      rating: 4.7,
      followers: "15.3K",
      isFollowing: true
    },
    {
      id: 4,
      name: "Ling Chen",
      username: "@lingc",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      products: 29,
      rating: 5.0,
      followers: "8.7K",
      isFollowing: true
    },
  ];

  // Sample data for trending products
  const trendingProducts = [
    {
      id: 1,
      title: "African Print Dress",
      image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?auto=format&fit=crop&w=400&h=400&q=80",
      price: "$64.99",
      seller: {
        name: "Jordan Williams",
        image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&w=40&h=40&q=80"
      },
      likes: 245,
      comments: 32,
      isNew: true
    },
    {
      id: 2,
      title: "Handcrafted Wooden Sculpture",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&h=400&q=80",
      price: "$129.99",
      seller: {
        name: "Aisha Mohammed",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=40&h=40&q=80"
      },
      likes: 512,
      comments: 47,
      isNew: false
    },
    {
      id: 3,
      title: "Artisan Leather Bag",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&h=400&q=80",
      price: "$89.99",
      seller: {
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80"
      },
      likes: 187,
      comments: 23,
      isNew: true
    },
    {
      id: 4,
      title: "Minimalist Ceramic Set",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&h=400&q=80",
      price: "$45.99",
      seller: {
        name: "Ling Chen",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40&q=80"
      },
      likes: 321,
      comments: 41,
      isNew: false
    },
  ];

  // Toggle like status
  const toggleLike = (id: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(id)) {
      newLikedPosts.delete(id);
    } else {
      newLikedPosts.add(id);
    }
    setLikedPosts(newLikedPosts);
  };

  // Toggle save status
  const toggleSave = (id: number) => {
    const newSavedPosts = new Set(savedPosts);
    if (newSavedPosts.has(id)) {
      newSavedPosts.delete(id);
    } else {
      newSavedPosts.add(id);
    }
    setSavedPosts(newSavedPosts);
  };

  // Toggle follow status
  const toggleFollow = (id: number) => {
    const sellerIndex = topSellers.findIndex(seller => seller.id === id);
    if (sellerIndex !== -1) {
      const updatedSellers = [...topSellers];
      updatedSellers[sellerIndex].isFollowing = !updatedSellers[sellerIndex].isFollowing;
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Connect with Our Community
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover top sellers, trending products, and join a vibrant marketplace community
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'sellers' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('sellers')}
          >
            Top Sellers
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'trending' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending Products
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'sellers' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSellers.map(seller => (
              <div key={seller.id} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">{seller.name}</h3>
                <p className="text-gray-500 mb-3">{seller.username}</p>
                <div className="flex justify-between text-sm mb-4">
                  <div>
                    <p className="font-semibold">{seller.products}</p>
                    <p className="text-gray-500">Products</p>
                  </div>
                  <div>
                    <p className="font-semibold">{seller.rating}</p>
                    <p className="text-gray-500">Rating</p>
                  </div>
                  <div>
                    <p className="font-semibold">{seller.followers}</p>
                    <p className="text-gray-500">Followers</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleFollow(seller.id)}
                  className={`w-full py-2 rounded-full font-medium ${seller.isFollowing ? 'bg-gray-200 text-black' : 'bg-black text-white'} transition-colors duration-300`}
                >
                  {seller.isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => toggleSave(product.id)}
                      className={`p-2 rounded-full ${savedPosts.has(product.id) ? 'bg-black text-yellow-400' : 'bg-white text-gray-700'} transition-colors duration-300`}
                    >
                      <Bookmark className="w-4 h-4" fill={savedPosts.has(product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img
                      src={product.seller.image}
                      alt={product.seller.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{product.seller.name}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                  <p className="text-black font-semibold mb-4">{product.price}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => toggleLike(product.id)}
                        className="flex items-center space-x-1"
                      >
                        <Heart
                          className={`w-5 h-5 ${likedPosts.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'} transition-colors duration-300`}
                        />
                        <span className="text-sm text-gray-600">{product.likes + (likedPosts.has(product.id) ? 1 : 0)}</span>
                      </button>
                      <button className="flex items-center space-x-1">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">{product.comments}</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Community Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-light text-center mb-8">Our Growing Community</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">50K+</h4>
              <p className="text-gray-600">Active Community Members</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">4.8/5</h4>
              <p className="text-gray-600">Average Seller Rating</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">1.2M+</h4>
              <p className="text-gray-600">Monthly Transactions</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 max-w-xl mx-auto">
              Join our diverse community of creators and shoppers from around the world. 
              Discover unique products, connect with talented sellers, and be part of a marketplace that celebrates creativity and connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMarketplace;