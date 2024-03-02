import React from "react";
import Slider from "react-slick";
import Header from "../common/Header";
import { bloglist } from "../data/BlogData";
import { Link } from "react-router-dom";

let slickSliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Home() {
  let finalBlog = bloglist.map((items, index) => {
    return <Blogcards details={items} key={index} />;
  });

  return (
    <div>
      <Header />

      <div className=" max-w-[1320px] mx-auto ">
        <Slider {...slickSliderSettings}>{finalBlog}</Slider>
      </div>

      <h1 className="text-[30px] py-7 font-bold text-center">Our Blogs</h1>
      <div className=" max-w-[1320px] py-7 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[25px] mx-auto">
        {finalBlog}
      </div>
    </div>
  );
}

function Blogcards({ details }) {
  return (
    <div className="shadow-lg text-center flex flex-col justify-center content-center bg-stone-200 ">
      <img src={details.thumbnail} style={{ height: "200px" }} alt="" />
      <h1 className=" text-[18px] font-semibold py-3 bg-slate-500 text-yellow-50 ">
        {details.title}
      </h1>
      <Link to={`/blog-details/${details.id}`}>
        <button className=" text-left font-semibold block py-2 text-[green] bg-yellow-200 mx-auto ">
          Read More
        </button>
      </Link>
    </div>
  );
}
