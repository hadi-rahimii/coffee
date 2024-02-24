import React from "react";
import Slider from "@/components/templates/Index/Slider";
import Services from "@/components/templates/Index/Services";
import About from "@/components/templates/Index/About";
import Offer from "@/components/templates/Index/Offer";
import Reservation from "@/components/templates/Index/reservation";
import Menu from "@/components/templates/Index/Menu";
import Testimonials from "@/components/templates/Index/Testimonials";
export default function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonials data={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();

  const commentsResponse = await fetch("http://localhost:4000/comments");
  const commentsData = await commentsResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comments: commentsData,
      },
    },
    revalidate: 60 * 60 * 12, // Second
  };
}
