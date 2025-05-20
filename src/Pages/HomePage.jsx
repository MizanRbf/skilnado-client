import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import FeaturedCard from "../Components/FeaturedCard";
import Testimonials from "../Components/Testimonials";

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

      {/* Featured Tasks Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h1 className="mb-3 text-center text-primary">Featured Tasks</h1>
          <p className="text-sm">
            Discover the joy of monthly surprises! Our curated subscription
            boxes deliver handpicked items straight to your door, offering
            convenience, <br className="hidden lg:block" /> excitement, and
            value—loved by our loyal subscribers everywhere.
          </p>
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
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">Elite Freelancers</h1>
          <p className="text-sm">
            Our customers love what we do! Their feedback reflects the quality,
            care,
            <br className="hidden lg:block" /> and commitment we bring to every
            service. Read their stories and see why they trust us.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-30 mb-20">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">Testimonials</h1>
          <p className="text-sm">
            Enjoy monthly deliveries filled with handpicked goodies you'll love.
            From exclusive items to everyday essentials, our subscription boxes
            <br className="hidden lg:block" />
            bring excitement, value, and a personalized touch right to your
            doorstep.
          </p>
          <Testimonials></Testimonials>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
