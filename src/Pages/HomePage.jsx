import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Helmet>
        <title>Skilnado || Home</title>
      </Helmet>
      {/* Slider */}
      <div>
        <Header></Header>
      </div>

      {/* Featured Tasks Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h1 className="mb-3 text-center text-primary">Available Tasks</h1>
          <p className="text-sm">
            Discover the joy of monthly surprises! Our curated subscription
            boxes deliver handpicked items straight to your door, offering
            convenience, <br className="hidden lg:block" /> excitement, and
            value—loved by our loyal subscribers everywhere.
          </p>
        </div>
      </div>

      {/* Extra - 1 */}
      <div className="mt-30">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">Extra - 1</h1>
          <p className="text-sm">
            Our customers love what we do! Their feedback reflects the quality,
            care,
            <br className="hidden lg:block" /> and commitment we bring to every
            service. Read their stories and see why they trust us.
          </p>
        </div>
      </div>

      {/* Extra - 2 */}
      <div className="mt-30 mb-20">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">Extra - 2</h1>
          <p className="text-sm">
            Enjoy monthly deliveries filled with handpicked goodies you'll love.
            From exclusive items to everyday essentials, our subscription boxes
            <br className="hidden lg:block" />
            bring excitement, value, and a personalized touch right to your
            doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
