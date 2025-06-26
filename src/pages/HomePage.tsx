import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard, { RestaurantCardProps } from '@/components/RestaurantCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Sample data for featured restaurants
const featuredRestaurants: RestaurantCardProps[] = [
  {
    slug: 'the-gourmet-kitchen',
    name: 'The Gourmet Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: 30,
  },
  {
    slug: 'sushi-world',
    name: 'Sushi World',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    cuisine: 'Japanese',
    rating: 4.6,
    deliveryTime: 25,
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: 20,
  },
  {
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: 35,
  },
];

const cuisineTypes = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Vegan'];

const HomePage = () => {
  console.log('HomePage loaded');
  const navigate = useNavigate();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you'd use the input value:
    // const formData = new FormData(event.currentTarget);
    // const searchQuery = formData.get('search') as string;
    // navigate(`/restaurant-listing?q=${searchQuery}`);
    navigate('/restaurant-listing'); // Navigate to the listing page as per user journey
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center py-24 sm:py-32 md:py-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Food for any mood, delivered.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-white/90">
              Discover and order from the best local restaurants with just a few clicks.
            </p>
            <form 
              onSubmit={handleSearchSubmit} 
              className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-2"
            >
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  name="search"
                  placeholder="Pizza, burgers, sushi..."
                  className="w-full pl-10 h-12 text-base text-gray-800"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 text-base">
                Find Food
              </Button>
            </form>
          </div>
        </section>

        {/* Featured Restaurants Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center">Featured Restaurants</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} {...restaurant} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Browse by Cuisine Section */}
        <section className="py-16 bg-muted/40">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center">Browse by Cuisine</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {cuisineTypes.map((cuisine) => (
                        <Button 
                            key={cuisine} 
                            variant="outline" 
                            size="lg"
                            onClick={() => navigate('/restaurant-listing')} // Simplified navigation
                        >
                            {cuisine}
                        </Button>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default HomePage;