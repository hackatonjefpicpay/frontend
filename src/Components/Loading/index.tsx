import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#000000",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export { Loading };
