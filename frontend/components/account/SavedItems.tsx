import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography
} from '@mui/material'
import { Button } from '@mui/material';
import { Heart, Clock } from 'lucide-react';

const savedItems = [
  {
    id: 1,
    name: 'Vintage Camera Collection',
    image: 'https://via.placeholder.com/150',
    currentBid: '$320',
    endTime: '2d 4h',
    bids: 18
  },
  {
    id: 2,
    name: 'Antique Wooden Chair',
    image: 'https://via.placeholder.com/150',
    currentBid: '$180',
    endTime: '6h 15m',
    bids: 9
  },
  {
    id: 3,
    name: 'Classic Vinyl Records',
    image: 'https://via.placeholder.com/150',
    currentBid: '$95',
    endTime: '1d 12h',
    bids: 12
  },
  {
    id: 4,
    name: 'Mid-Century Modern Lamp',
    image: 'https://via.placeholder.com/150',
    currentBid: '$75',
    endTime: '5h 30m',
    bids: 5
  }
];

const SavedItems: React.FC = () => {
  return (
    <Card className="shadow-sm animate-fade-in">
      <CardHeader className="pb-2">
        <Typography variant="h6" className="text-lg font-medium flex items-center">
          <Heart className="h-4 w-4 mr-2 text-red-500" />
          Saved Items
        </Typography>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {savedItems.map(item => (
            <div key={item.id} className="border rounded-lg overflow-hidden card-hover bg-white">
              <div className="h-36 bg-gray-100 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                <p className="text-blue-700 font-semibold mt-1">{item.currentBid}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{item.endTime}</span>
                  <span className="mx-1">•</span>
                  <span>{item.bids} bids</span>
                </div>
                <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-xs h-8">
                  Bid Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SavedItems;