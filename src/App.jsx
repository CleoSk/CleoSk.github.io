import {
  Container,
  Avatar,
  LinearProgress,
  Box,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box>
        <p variant="body2" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </p>
      </Box>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Container
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ width: 56, height: 56 }}>C</Avatar>
        <h1>CleoSk</h1>
        <p>Welcome to my page</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        My knowledge of programming languages
        <div style={{ paddingTop: "20px" }}>
          <p>HTML</p>
          <LinearProgressWithLabel value={72}></LinearProgressWithLabel>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <p>CSS</p>
          <LinearProgressWithLabel value={80}></LinearProgressWithLabel>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <p>VUE</p>
          <LinearProgressWithLabel value={70}></LinearProgressWithLabel>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <p>JS</p>
          <LinearProgressWithLabel value={60}></LinearProgressWithLabel>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <p>REACT</p>
          <LinearProgressWithLabel value={46}></LinearProgressWithLabel>
        </div>
      </div>
      <h2 style={{ marginTop: "20px" }}>My projects</h2>
      <Grid style={{ marginTop: "20px" }} container spacing={3}>
        <Grid item xs>
          <Item>
            <h2>This site</h2>
            <Link href="/">Go to site</Link>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <h2>Duino Coin wallet</h2>
            <Link
              href="https://cleosk.github.io/Duino-Coin-Wallet/"
              target="_blank"
            >
              Go to site
            </Link>
          </Item>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "20px" }} container spacing={3}>
        <Grid item xs>
          <Item>Nope</Item>
        </Grid>
        <Grid item xs>
          <Item>Nope</Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
