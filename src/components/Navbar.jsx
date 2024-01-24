import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/3670/3670209.png"
        className="h-10 w-10"
        alt="logo"
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
