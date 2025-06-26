import React, { useState } from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import RestaurantCard, { RestaurantCardProps } from '@/components/RestaurantCard';

// shadcn/ui Components for Filtering
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// Placeholder data for restaurants
const restaurants: RestaurantCardProps[] = [
  {
    slug: 'luigis-pizzeria',
    name: "Luigi's Pizzeria",
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Pizza',
    rating: 4.7,
    deliveryTime: 25,
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Burger',
    rating: 4.5,
    deliveryTime: 20,
  },
  {
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Sushi',
    rating: 4.9,
    deliveryTime: 35,
  },
  {
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Mexican',
    rating: 4.4,
    deliveryTime: 30,
  },
  {
    slug: 'the-wok-house',
    name: 'The Wok House',
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: 40,
  },
  {
    slug: 'pastaria',
    name: 'Pastaria',
    imageUrl: 'https://images.unsplash.com/photo-1598866594240-a_1f8b2c4c4a?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: 30,
  },
];

const cuisines = ['Pizza', 'Burger', 'Sushi', 'Mexican', 'Chinese', 'Italian'];

const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');
  const [deliveryTime, setDeliveryTime] = useState(60);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Restaurants</h1>
          <p className="text-muted-foreground">Find your next meal from our curated list of restaurants.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-24">
              <Card>
                <CardHeader>
                  <CardTitle>Filter & Sort</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Sort By */}
                  <div className="space-y-2">
                    <Label htmlFor="sort-by">Sort by</Label>
                    <Select defaultValue="recommended">
                      <SelectTrigger id="sort-by" className="w-full">
                        <SelectValue placeholder="Recommended" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="delivery-time">Delivery Time</SelectItem>
                        <SelectItem value="rating">Rating (High to Low)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  {/* Cuisine Filter */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Cuisine</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cuisines.map((cuisine) => (
                        <div key={cuisine} className="flex items-center space-x-2">
                          <Checkbox id={`cuisine-${cuisine.toLowerCase()}`} />
                          <Label htmlFor={`cuisine-${cuisine.toLowerCase()}`} className="font-normal text-sm">{cuisine}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Delivery Time Filter */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="delivery-time" className="font-semibold text-sm">Max Delivery Time</Label>
                      <span className="text-sm font-medium text-primary">{deliveryTime} min</span>
                    </div>
                    <Slider
                      id="delivery-time"
                      defaultValue={[60]}
                      max={90}
                      step={5}
                      onValueChange={(value) => setDeliveryTime(value[0])}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Restaurant Grid */}
          <section className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.slug} {...restaurant} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;