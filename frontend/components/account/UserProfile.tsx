import React from 'react';
import { Button } from '@mui/material';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography
} from '@mui/material'
import { User, Edit, Star } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <Card className="shadow-sm animate-fade-in">
      <CardHeader className="pb-2">
        <div className="text-lg font-medium flex justify-between items-center">
          <span>Account Overview</span>
          <Button variant="text" size="small">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-shrink-0">
            <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          
          <div className="space-y-2 flex-1">
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-gray-500 text-sm">Member since May 2023</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
              <span className="ml-2 text-sm text-gray-600">4.8 (120 reviews)</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg space-y-2 w-full sm:w-auto">
            <div>
              <p className="text-xs text-gray-500">Available Balance</p>
              <p className="text-lg font-bold text-blue-800">$2,450.00</p>
            </div>
            <div className="flex gap-2">
              <Button className="btn-blue-gradient text-xs py-1 h-8">Deposit</Button>
              <Button variant="outlined" size="small" className="text-xs py-1 h-8">Withdraw</Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Active Bids</p>
            <p className="text-2xl font-bold text-blue-800">12</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Won Auctions</p>
            <p className="text-2xl font-bold text-blue-800">28</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Watchlist Items</p>
            <p className="text-2xl font-bold text-blue-800">34</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;