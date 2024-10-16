import React from "react";

const ServiceFecility = ({ service }) => {
  const { name, details } = service;
  return (
    <div className="bg-gray-100 border-4  border-t-orange-500 rounded p-10">
      <div>
        <h className="text-2xl font-bold">{name}</h>
        <p className="text-gray-500">{details}</p>
      </div>
    </div>
  );
};

export default ServiceFecility;
