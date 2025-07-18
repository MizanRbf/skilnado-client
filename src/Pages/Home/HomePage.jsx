import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import FeaturedCard from "./FeaturedCard";
import EliteFreelancers from "./EliteFreelancers";
import Testimonials from "./Testimonials";
import NewsLetter from "./Newsletter/Newsletter";
import Slider from "./NewsLetter/Slider";

const HomePage = () => {
  const featuredTasks = useLoaderData();

  return (
    <div className="max-w-[1500px] mx-auto">
      <Helmet>
        <title>Skilnado || Home</title>
      </Helmet>
      {/* Slider */}
      <div>
        <Slider></Slider>
      </div>
      {/* Featured Tasks Section */}
      <div className="mt-30">
        <div>
          <h1 className="mb-4 py-1 text-white  bg-secondary inline-block px-6 rounded-r-full">
            Featured Tasks
          </h1>

          {/* Featured Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredTasks.map((featuredTask) => (
              <FeaturedCard
                key={featuredTask._id}
                featuredTask={featuredTask}
              ></FeaturedCard>
            ))}
          </div>
        </div>
      </div>

      {/* Elite Freelancers */}
      <div className="mt-30">
        <div>
          <h1 className="mb-4 py-1 text-white inline-block px-6 rounded-r-full bg-secondary">
            Elite Freelancers
          </h1>
        </div>
        <EliteFreelancers></EliteFreelancers>
      </div>

      {/* Testimonials */}
      <div className="mt-30">
        <div>
          <h1 className="mb-4 py-1 text-white inline-block px-6 rounded-r-full bg-secondary">
            Testimonials
          </h1>

          <Testimonials></Testimonials>
        </div>
      </div>

      {/* NewsLetter */}
      <div className="mt-30 mb-20">
        <div>
          <h1 className="mb-4 py-1 text-white inline-block px-6 rounded-r-full bg-secondary">
            Stay Updated
          </h1>

          <NewsLetter></NewsLetter>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
