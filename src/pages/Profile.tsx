import { useState } from "react";
import { User, MapPin, Package, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, updateProfile, addAddress, updateAddress, deleteAddress, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const [newAddress, setNewAddress] = useState({
    type: 'home' as const,
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    isDefault: false,
  });

  const handleProfileSave = () => {
    updateProfile(editedProfile);
    setIsEditing(false);
  };

  const handleAddAddress = () => {
    addAddress(newAddress);
    setNewAddress({
      type: 'home',
      name: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'US',
      isDefault: false,
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-elegant border border-border overflow-hidden">
            <div className="bg-gradient-primary p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-heading font-bold">{user.name}</h1>
                  <p className="opacity-90 font-body">{user.email}</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="profile" className="p-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </TabsTrigger>
                <TabsTrigger value="addresses" className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Addresses</span>
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center space-x-2">
                  <Package className="h-4 w-4" />
                  <span>Orders</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6 mt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-heading font-semibold">Profile Information</h2>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleProfileSave() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={isEditing ? editedProfile.name : user.name}
                      onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={isEditing ? editedProfile.email : user.email}
                      onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={isEditing ? editedProfile.phone : user.phone || ""}
                      onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Add phone number"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="addresses" className="space-y-6 mt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-heading font-semibold">Delivery Addresses</h2>
                </div>

                {user.addresses.length === 0 ? (
                  <div className="text-center py-8">
                    <MapPin className="h-12 w-12 text-foreground-light mx-auto mb-4" />
                    <p className="text-foreground-medium font-body">No addresses added yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {user.addresses.map((address) => (
                      <div key={address.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-body font-medium capitalize">{address.type}</span>
                          {address.isDefault && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="font-body text-sm text-foreground-medium">
                          {address.name}<br />
                          {address.street}<br />
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                        <div className="flex space-x-2 mt-3">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => deleteAddress(address.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-border pt-6">
                  <h3 className="font-heading font-medium mb-4">Add New Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Address Type</Label>
                      <select
                        value={newAddress.type}
                        onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value as any })}
                        className="w-full px-3 py-2 border border-input-border rounded-md"
                      >
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input
                        value={newAddress.name}
                        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                        placeholder="Recipient name"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label>Street Address</Label>
                      <Input
                        value={newAddress.street}
                        onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                        placeholder="Street address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>City</Label>
                      <Input
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                        placeholder="City"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>State</Label>
                      <Input
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                        placeholder="State"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>ZIP Code</Label>
                      <Input
                        value={newAddress.zipCode}
                        onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                        placeholder="ZIP code"
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddAddress} className="mt-4">
                    Add Address
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="orders" className="space-y-6 mt-6">
                <h2 className="text-xl font-heading font-semibold">Order History</h2>
                {user.orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-foreground-light mx-auto mb-4" />
                    <p className="text-foreground-medium font-body">No orders yet</p>
                    <Button className="mt-4" onClick={() => navigate("/products")}>
                      Start Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {user.orders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-body font-medium">Order #{order.id}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            order.status === 'delivered' ? 'bg-success text-success-foreground' :
                            order.status === 'shipped' ? 'bg-primary text-primary-foreground' :
                            'bg-secondary text-secondary-foreground'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-foreground-medium mb-2">{order.date}</p>
                        <p className="font-heading font-semibold">${order.total.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="settings" className="space-y-6 mt-6">
                <h2 className="text-xl font-heading font-semibold">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-body font-medium">Email Notifications</h3>
                      <p className="text-sm text-foreground-medium">Receive updates about your orders</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-body font-medium">Marketing Emails</h3>
                      <p className="text-sm text-foreground-medium">Get updates about new products and offers</p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="pt-6 border-t border-border">
                    <Button
                      variant="destructive"
                      onClick={handleLogout}
                      className="flex items-center space-x-2 hover-lift"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;