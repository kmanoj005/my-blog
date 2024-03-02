import React from "react";
import Header from "../common/Header";
import { useParams } from "react-router-dom";
import { bloglist } from "../data/BlogData";

export default function BlogDetails() {

  let urlParams=useParams();
  let blogId=urlParams.id;
  let singleBlogDetails=bloglist.filter((v,i)=>v.id==blogId)[0]
  console.log(singleBlogDetails)
  return (
    <div>
      <Header />
      <div className="relative mx-auto ">
        <a href="#">
          <img
            className=" max-w-[500px] flex justify-center content-center  mx-auto my-4"
            src={singleBlogDetails.thumbnail}
            alt="Sunset in the mountains" 
          />
        </a>
        <div className="max-w-3xl  rounded overflow-hidden flex flex-col mx-auto text-center ">
          <div className=" mx-auto text-xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
            {singleBlogDetails.title}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto font-kudo ">
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <p className=" text-center leading-8 my-5">
            {singleBlogDetails.description}
            </p>    
          </div>
        </div>
      </div>
    </div>
  );
}
