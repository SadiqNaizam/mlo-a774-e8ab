import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Clock, Star } from 'lucide-react';
import StarRatingInput from '@/components/StarRatingInput'; // Assuming this component exists

export interface RestaurantCardProps {
  slug: string;
  name: string;
  imageUrl: string;
  cuisine: string;
  rating: number;
  deliveryTime: number; // in minutes
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  slug,
  name,
  imageUrl,
  cuisine,
  rating,
  deliveryTime,
}) => {
  console.log('RestaurantCard loaded for:', name);

  return (
    <Link 
      to={`/restaurant-menu?restaurant=${slug}`} 
      className="block group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xl"
      aria-label={`View menu for ${name}`}
    >
      <Card className="w-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225?text=SnapEats'}
              alt={`Photo of ${name}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold tracking-tight line-clamp-1">{name}</h3>
            <Badge variant="secondary" className="whitespace-nowrap capitalize">{cuisine}</Badge>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5" title={`${rating} out of 5 stars`}>
              {/* Using the assumed StarRatingInput component in read-only mode */}
              <StarRatingInput rating={rating} readOnly={true} size="sm" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime} min</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;