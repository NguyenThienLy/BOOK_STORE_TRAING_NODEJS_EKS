import { config } from './config';
import app from "./app";
const PORT = config.server.port;

app.listen(PORT, (err: any) => {
  if (err) {
    console.log(err)
  }
  console.log("Listening on port " + PORT);
});
