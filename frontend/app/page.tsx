import AuctionSection from "@/components/main/AuctionSection";
import Categories from "@/components/main/Categories";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Working from "@/components/main/Working";
import Mail from "@/components/main/Mail";
import AccountHeader from "@/components/account/AccountHeader";
import AccountSettings from "@/components/account/AccountSettings";
import BidHistory from "@/components/account/BidHistory";
import SavedItems from "@/components/account/SavedItems";
import UserProfile from "@/components/account/UserProfile";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
        <AuctionSection />
        <Categories />
        <Working />
        <Mail />
        <Footer />
        <AccountHeader />
        <UserProfile />
        <AccountSettings />
        <BidHistory />
        <SavedItems />
        
      </div>
    </main>
  );
}
