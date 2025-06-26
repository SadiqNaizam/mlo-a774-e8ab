import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Package, ChefHat, Truck, CheckCircle, Loader } from "lucide-react";

// Define the stages of the order
const orderStages = [
  {
    name: "Placed",
    description: "Your order has been confirmed.",
    icon: Package,
  },
  {
    name: "In Progress",
    description: "The restaurant is preparing your food.",
    icon: ChefHat,
  },
  {
    name: "On its way",
    description: "Your order is out for delivery.",
    icon: Truck,
  },
  {
    name: "Delivered",
    description: "Enjoy your meal!",
    icon: CheckCircle,
  },
];

const LiveOrderTracker: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    console.log('LiveOrderTracker component loaded');

    // Simulate order progress
    const interval = setInterval(() => {
      setCurrentStageIndex(prevIndex => {
        if (prevIndex < orderStages.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval); // Stop interval when order is delivered
        return prevIndex;
      });
    }, 3000); // Advance to the next stage every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const isCompleted = currentStageIndex === orderStages.length - 1;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Order Tracking</CardTitle>
        <CardDescription className="text-center">
          {isCompleted ? "Your order has been delivered. Thank you!" : "Your order is currently:"}
          <span className="font-semibold text-primary"> {orderStages[currentStageIndex].name}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <div className="flex justify-between items-start relative">
          {/* Progress Bar */}
          <div className="absolute top-5 left-0 w-full h-1 bg-gray-200" />
          <div
            className="absolute top-5 left-0 h-1 bg-primary transition-all duration-500"
            style={{ width: `calc(${currentStageIndex} / ${orderStages.length - 1} * 100%)` }}
          />
          
          {/* Stage Icons and Text */}
          {orderStages.map((stage, index) => {
            const isActive = index === currentStageIndex;
            const isDone = index < currentStageIndex;

            return (
              <div key={stage.name} className="flex flex-col items-center text-center z-10 w-1/4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    isDone ? "bg-primary text-white" : "bg-gray-200 text-gray-500",
                    isActive && "bg-primary ring-4 ring-primary/30 text-white"
                  )}
                >
                  {isActive ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <stage.icon className="w-5 h-5" />
                  )}
                </div>
                <p className={cn(
                  "mt-2 text-sm font-semibold",
                  (isActive || isDone) ? "text-primary" : "text-gray-500"
                )}>
                  {stage.name}
                </p>
                <p className="mt-1 text-xs text-gray-600 hidden sm:block">{stage.description}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveOrderTracker;