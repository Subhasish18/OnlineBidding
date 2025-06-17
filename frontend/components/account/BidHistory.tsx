import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography
} from '@mui/material'
import { Badge, TableHeader } from '@heroui/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

// Sample bid data
const bids = [
  {
    id: 1,
    item: 'Antique Wooden Cabinet',
    bid: '$850.00',
    currentBid: '$900.00',
    endTime: '6 hours',
    status: 'outbid'
  },
  {
    id: 2,
    item: 'Vintage Watch Collection',
    bid: '$1,200.00',
    currentBid: '$1,200.00',
    endTime: '2 days',
    status: 'winning'
  },
  {
    id: 3,
    item: 'Modern Art Painting',
    bid: '$3,500.00',
    currentBid: '$3,800.00',
    endTime: '1 day',
    status: 'outbid'
  },
  {
    id: 4,
    item: 'Rare Coin Collection',
    bid: '$620.00',
    currentBid: '$620.00',
    endTime: '4 hours',
    status: 'winning'
  },
  {
    id: 5,
    item: 'Designer Handbag',
    bid: '$450.00',
    currentBid: '$450.00',
    endTime: '12 hours',
    status: 'winning'
  }
];

const BidHistory: React.FC = () => {
  return (
    <Card className="shadow-sm animate-slide-in">
      <CardHeader className="pb-2">
        <Typography variant="h6" className="text-lg font-medium">Recent Bid Activity</Typography>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Your Bid</TableCell>
                <TableCell>Current Bid</TableCell>
                <TableCell>Ends In</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bids.map((bid) => (
                <TableRow key={bid.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{bid.item}</TableCell>
                  <TableCell>{bid.bid}</TableCell>
                  <TableCell>{bid.currentBid}</TableCell>
                  <TableCell>{bid.endTime}</TableCell>
                  <TableCell>
                    {bid.status === 'winning' ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Winning</Badge>
                    ) : (
                      <Badge variant="flat" className="text-red-600 border-red-300 hover:bg-red-50">Outbid</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default BidHistory;