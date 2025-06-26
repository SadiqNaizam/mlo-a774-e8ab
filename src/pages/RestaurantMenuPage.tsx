import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Star, MapPin, Clock } from 'lucide-react';

// --- Placeholder Data ---

const restaurantInfo = {
  name: "Luigi's Pizzeria",
  rating: 4.5,
  address: '123 Pizza Lane, Flavor Town, USA',
  hours: '11:00 AM - 10:00 PM',
  cuisine: 'Italian',
};

const menuData = {
  appetizers: [
    {
      id: 1,
      name: 'Garlic Bread with Cheese',
      description: 'Toasted baguette with garlic butter, herbs, and melted mozzarella cheese.',
      price: 6.99,
      imageUrl: 'https://images.unsplash.com/photo-1626082894353-500350a3597b?q=80&w=800',
      isCustomizable: false,
    },
    {
      id: 2,
      name: 'Bruschetta',
      description: 'Grilled bread topped with fresh tomatoes, garlic, basil, and balsamic glaze.',
      price: 8.50,
      imageUrl: 'https://images.unsplash.com/photo-1572452477936-9a28037b58a1?q=80&w=800',
      isCustomizable: false,
    },
  ],
  mainCourses: [
    {
      id: 3,
      name: 'Margherita Pizza',
      description: 'Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, salt, and extra-virgin olive oil.',
      price: 14.00,
      imageUrl: 'https://images.unsplash.com/photo-1598021680133-eb3a737d0342?q=80&w=800',
      isCustomizable: true,
    },
    {
      id: 4,
      name: 'Pepperoni Pizza',
      description: 'A timeless favorite with a generous layer of spicy pepperoni and mozzarella cheese.',
      price: 16.50,
      imageUrl: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800',
      isCustomizable: true,
    },
    {
      id: 5,
      name: 'Spaghetti Carbonara',
      description: 'Pasta with eggs, hard cheese, cured pork, and black pepper.',
      price: 15.00,
      imageUrl: 'https://images.unsplash.com/photo-1608796326410-435035f07324?q=80&w=800',
      isCustomizable: false,
    },
  ],
  desserts: [
      {
        id: 6,
        name: 'Tiramisu',
        description: 'A coffee-flavoured Italian dessert. Ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese.',
        price: 7.50,
        imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800',
        isCustomizable: false,
    },
  ]
};

type MenuItem = typeof menuData.mainCourses[0];

const RestaurantMenuPage = () => {
  console.log('RestaurantMenuPage loaded');
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    if (item.isCustomizable) {
      setSelectedItem(item);
      setDialogOpen(true);
    } else {
      // Directly add to cart logic would go here
      toast({
        title: "Added to Cart!",
        description: `${item.name} has been successfully added to your cart.`,
      });
    }
  };

  const handleConfirmCustomization = () => {
    if (selectedItem) {
        toast({
            title: "Added to Cart!",
            description: `${selectedItem.name} has been customized and added to your cart.`,
        });
        setDialogOpen(false);
        setSelectedItem(null);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Restaurant Info Header */}
        <Card className="mb-8 shadow-sm">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{restaurantInfo.name}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-medium text-gray-700">{restaurantInfo.rating}</span>
                <span className="text-sm">(500+ ratings)</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{restaurantInfo.address}</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{restaurantInfo.hours}</span>
              </div>
            </div>
            <div className="mt-4">
              <Badge>{restaurantInfo.cuisine}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Menu Sections */}
        {Object.entries(menuData).map(([category, items]) => (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-semibold capitalize border-b pb-2 mb-6 text-gray-800">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  {...item}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />

      {/* Customization Dialog */}
      {selectedItem && (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Customize {selectedItem.name}</DialogTitle>
              <DialogDescription>{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-6">
               <div className="space-y-3">
                    <Label className="font-semibold">Size</Label>
                    <RadioGroup defaultValue="medium" className="flex gap-4">
                        <div>
                            <RadioGroupItem value="medium" id="size-medium" className="sr-only"/>
                            <Label htmlFor="size-medium" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">Medium (12")</Label>
                        </div>
                        <div>
                            <RadioGroupItem value="large" id="size-large" className="sr-only" />
                            <Label htmlFor="size-large" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">Large (16")</Label>
                        </div>
                    </RadioGroup>
                </div>
              <div className="space-y-3">
                <Label className="font-semibold">Extra Toppings (+$2.00 each)</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="extra-cheese" />
                  <Label htmlFor="extra-cheese">Extra Cheese</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mushrooms" />
                  <Label htmlFor="mushrooms">Mushrooms</Label>
                </div>
              </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">Cancel</Button>
                </DialogClose>
              <Button type="submit" onClick={handleConfirmCustomization}>Add to Cart</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RestaurantMenuPage;