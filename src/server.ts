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

// Middleware for setting cors related headers in response
app.use(function(req, res, next) {
  res
    .header("Access-Control-Allow-Origin", "*")
    .header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    .header("Access-Control-Allow-Headers", "SessionId, Content-Type");
  next();
});

// Listen on port
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
