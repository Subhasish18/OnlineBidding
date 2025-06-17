import React from 'react';
import { Bell, MessageCircle, User, ChevronDown } from 'lucide-react';
import { Button } from '@heroui/react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';

const AccountHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm animate-fade-in">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-blue-600 text-white rounded-md flex items-center justify-center">
              <span className="font-bold text-lg">AB</span>
            </div>
            <h1 className="text-2xl font-bold text-blue-800 hidden md:block">BidMaster</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="md" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-blue-600 rounded-full"></span>
            </Button>
            
            <Button variant="ghost" size="md">
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="hidden sm:inline-block">John Doe</span>
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Bids & Offers</DropdownMenuItem>
                <DropdownMenuItem>Watchlist</DropdownMenuItem>
                <DropdownMenuItem>Purchase History</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;