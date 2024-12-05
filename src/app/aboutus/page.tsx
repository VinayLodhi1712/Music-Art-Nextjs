"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/utils/cn";

export default function BackgroundBoxesDemo() {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Master the art of music
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Dive into our comprehensive music courses and transform your musical
          journey today with us.
        </p>
      </div>

      <div className="w-full flex items-center mt-8">
        <div className="w-1/2 p-6 border shadow-md rounded-lg mr-2 bg-white flex flex-col">
          <h2 className="text-orange-500 text-2xl font-bold">How it Started</h2>
          <h1 className="text-black text-4xl  font-semibold mt-4">
            Our Dream is to built a global music school for everyone
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            
          </p>
        </div>
        <div className="w-1/2 p-4 border shadow-md rounded-lg ml-2 bg-white">
          <h2 className="text-lg font-semibold">Second</h2>
          <p className="text-sm text-gray-600">
            This is the right section content.
          </p>
        </div>
      </div>
    </>
  );
}
