import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography
} from '@mui/material'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@radix-ui/react-tabs';
import { Button } from '@heroui/react';
import { Input } from '@heroui/react';
// import { Label } from '@heroui/react';
import { Switch } from '@heroui/react';
import { 
  Bell, 
  CreditCard, 
  Lock, 
  User,
} from 'lucide-react';

const AccountSettings: React.FC = () => {
  return (
    <Card className="shadow-sm animate-fade-in">
      <CardHeader className="pb-2">
        <Typography variant="h6" className="text-lg font-medium">Account Settings</Typography>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="profile" className="text-xs sm:text-sm">
              <User className="h-4 w-4 mr-1 hidden sm:block" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="payment" className="text-xs sm:text-sm">
              <CreditCard className="h-4 w-4 mr-1 hidden sm:block" />
              Payment
            </TabsTrigger>
            <TabsTrigger value="security" className="text-xs sm:text-sm">
              <Lock className="h-4 w-4 mr-1 hidden sm:block" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm">
              <Bell className="h-4 w-4 mr-1 hidden sm:block" />
              Notifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input id="fullName" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <Input id="username" defaultValue="johndoe123" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea 
                  id="bio" 
                  rows={3} 
                  className="w-full border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Passionate collector and bidder with over 5 years of experience in antiques and collectibles."
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button className="btn-blue-gradient">Save Changes</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="payment">
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-16 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-800 font-medium">VISA</span>
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-sm">Edit</Button>
                </div>
              </div>
              
              <Button variant="bordered" className="w-full">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="security">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="btn-blue-gradient">Update Password</Button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Outbid Notifications</p>
                  <p className="text-sm text-gray-500">Get notified when someone outbids you</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auction Ending Soon</p>
                  <p className="text-sm text-gray-500">Get notified when auctions you're watching are ending soon</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Items in Watchlist</p>
                  <p className="text-sm text-gray-500">Get notified when new items match your watchlist criteria</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-gray-500">Receive promotional emails and special offers</p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;