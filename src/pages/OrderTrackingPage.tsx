import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveOrderTracker from '@/components/LiveOrderTracker';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const OrderTrackingPage: React.FC = () => {
  console.log('OrderTrackingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Live Order Tracker */}
          <LiveOrderTracker />

          {/* Additional Info Card */}
          <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>
                While you wait, here are some helpful links.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <Button asChild variant="outline">
                <Link to="/">
                  Back to Homepage
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/contact"> {/* Assuming a contact page might exist */}
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;