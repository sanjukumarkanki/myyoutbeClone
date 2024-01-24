import React from "react";
import {  useLocation } from "react-router-dom";


import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = (props) => {
  const { pathname } = useLocation();
  const path = pathname.slice(1, 6);

  if (!props.videos?.length) return <Loader />;
  return (
    <ul
      className={`grid gap-9 ${
        path === "video" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
      } `}
    >
      {props.videos.map((each, index) => (
        <VideoCard video={each} />
      ))}
    </ul>
  );
};

export default Videos;
