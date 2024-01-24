import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "./utils/api";
import Sidebar from "./Sidebar";
import Video from "./Video";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);

    const params = new URLSearchParams({
      part: "snippet",
      chart: "mostPopular",
      maxResults: "150",
      locale: "India",
      key: "AIzaSyADW0ggHjecelDNmE4nIWeKC-kjUTVr7Wc",
      regionCode: "IN",
      q: selectedCategory,
    });

    fetchFromAPI(params, "search")
      .then((data) => setVideos(data.items))

  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
