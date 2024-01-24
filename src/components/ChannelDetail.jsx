import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Video";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "./utils/api";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const params = new URLSearchParams({
        part: "snippet",
        id: id,
        key: "AIzaSyADW0ggHjecelDNmE4nIWeKC-kjUTVr7Wc",
      });

      const data = await fetchFromAPI(params, `channels`);

      setChannelDetail(data?.items[0]);

      const nextParams = new URLSearchParams({
        part: "snippet",
        order: "date",
        maxResults: 200,
        channelId: id,
        key: "AIzaSyADW0ggHjecelDNmE4nIWeKC-kjUTVr7Wc",
      });

      const videosData = await fetchFromAPI(nextParams, `search`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
