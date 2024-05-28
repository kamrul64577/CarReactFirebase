import { useLoaderData } from "react-router-dom";
import Banner from "../components/HomePage/Banner";
import Cars from "../components/HomePage/Cars";
import TestimonialSection from "../components/TestimonialSection";
import FeaturesSection from "../components/FeatureSection";

export default function Home() {
  const carsData = useLoaderData();

  return (
    <div>
      <Banner/>
      <Cars data={carsData}/>
      <TestimonialSection/>
      <FeaturesSection/>
     
    </div>
  )
}
