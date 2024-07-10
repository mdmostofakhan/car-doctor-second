import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => SetServices(data));
  }, []);

  return (
    <div className="text-center space-y-3">
      <h1 className="text-2xl text-orange-500 fond-bold">Services</h1>
      <h1 className="text-4xl font-bold">Our Service Area</h1>
      <p>
        the majority have suffered alteration in some form, by injected humour
        or randomised <br /> words which do nt look even slightly believable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
