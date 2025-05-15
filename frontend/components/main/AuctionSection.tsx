import React from "react";
import AuctionCards from "../sub/AuctionCards";

const AuctionSection = () => {
  const now = new Date();
  const startTime = now.toISOString(); // starts now

  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Featured Auctions
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 px-10">
        <AuctionCards
          src="/p1.jpg"
          title="Chaos Within"
          description="A faceless portrait painted with wild, impasto strokes representing emotional turmoil and inner fragmentation."
          currentbid={1500}
          startTime={startTime}
        />
        <AuctionCards
          src="/p2.jpg"
          title="The Artist and Death"
          description="A haunting depiction of an artist with Death playing the violin over his shoulder, symbolizing the ever-present shadow of mortality in creativity."
          currentbid={2200}
          startTime={startTime}
        />
        <AuctionCards
          src="/p3.jpg"
          title="Mona Lisa & Her Cat"
          description="A humorous reimagining of Da Vinci’s masterpiece featuring a chubby orange tabby cat cradled in Mona Lisa’s arms, blending classic art with modern whimsy."
          currentbid={900}
          startTime={startTime}
        />
      </div>
    </div>
  );
};

export default AuctionSection;
