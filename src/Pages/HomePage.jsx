import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import FeaturedCard from "../Components/FeaturedCard";
import Testimonials from "../Components/Testimonials";
import EliteFreelancers from "../Components/EliteFreelancers";
import DarkMode from "../Components/DarkMode";

const HomePage = () => {
  const featuredTasks = useLoaderData();

  return (
    <div className="max-w-[1200px] mx-auto">
      <Helmet>
        <title>Skilnado || Home</title>
      </Helmet>
      {/* Slider */}
      <div>
        <Banner></Banner>
      </div>

      {/* Theme Controller */}
      <DarkMode></DarkMode>
      {/* Featured Tasks Section */}
      <div className="mt-20">
        <div>
          <h1 className="mb-4 py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary">
            Featured Tasks
          </h1>

          {/* Featured Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTasks.map((featuredTask) => (
              <FeaturedCard featuredTask={featuredTask}></FeaturedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Elite Freelancers */}
      <div className="mt-30">
        <div className="mb-6">
          <h1 className="mb-4 py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary">
            Elite Freelancers
          </h1>
        </div>
        <EliteFreelancers></EliteFreelancers>
      </div>

      {/* Testimonials */}
      <div className="mt-30 mb-20">
        <div className=" mb-6">
          <h1 className="mb-4 py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary">
            Testimonials
          </h1>

          <Testimonials></Testimonials>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
