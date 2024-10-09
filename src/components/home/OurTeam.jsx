import React from "react";
import TeamCard from "../card/TeamCard";

export default function OurTeam() {
  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <span className="text-primary text-xl font-semibold">Team</span>
        <h1 className="lg:text-4xl font-bold my-3">Meet Our Team</h1>
        <h6 className="font-semibold text-gray-500 p-2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words <br /> which don't look even slightly
          believable.
        </h6>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}
