import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from 'lucide-react';

/**
 * Props for the MenuItemCard component.
 */
interface MenuItemCardProps {
  /** The name of the menu item. */
  name: string;
  /** A short description of the menu item. */
  description: string;
  /** The price of the menu item. */
  price: number;
  /** Optional URL for the item's image. */
  imageUrl?: string;
  /** Optional flag to indicate if the item can be customized. */
  isCustomizable?: boolean;
  /** Callback function to handle adding the item to the cart. */
  onAddToCart: () => void;
}

/**
 * A card component to display a single menu item for a restaurant.
 * It shows the item's details, an optional image, and an "Add" button.
 */
const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  price,
  imageUrl,
  isCustomizable = false,
  onAddToCart
}) => {
  console.log(`MenuItemCard loaded for: ${name}`);

  return (
    <Card className="w-full overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-start p-4">
        {/* Item Details Section */}
        <div className="flex-1 pr-4">
          <h3 className="font-bold text-lg text-gray-800">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
          <div className="mt-3 flex items-center gap-3">
            <p className="font-semibold text-base">${price.toFixed(2)}</p>
            {isCustomizable && (
              <Badge variant="outline">
                Customizable
              </Badge>
            )}
          </div>
        </div>

        {/* Image and Action Section */}
        <div className="flex flex-col items-end w-[120px] flex-shrink-0">
          {imageUrl && (
            <div className="w-full h-[80px] bg-muted rounded-md overflow-hidden mb-2">
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
          )}
          <Button onClick={onAddToCart} size="sm" className="w-full mt-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;