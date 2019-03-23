import app from "./app";
import * as cors from "cors";

const PORT = process.env.PORT || 3002;

// Enable cors
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: "sessionId",
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    preflightContinue: false
  })
);

// Listen on port
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
