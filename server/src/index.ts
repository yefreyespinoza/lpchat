import server from "./app/app";
import config from "./config/config";

server.listen(config.port, () =>
  console.log("server is open on port", config.port)
);
