import express from "express";
import request from "request";

const servers = ["http://localhost:3000", "http://localhost:3001"];

let currentServer = 0;

const requestHandler = (req: express.Request, res: express.Response) => {
  const server = servers[currentServer];
  req.pipe(request({ url: server + req.url })).pipe(res);
  currentServer = (currentServer + 1) % servers.length;
};

const loadBalancerServer = express();

loadBalancerServer.use((req: express.Request, res: express.Response) => {
  requestHandler(req, res);
});

loadBalancerServer.listen(8080, () => {
  console.log("Load balancer listening on port 8080");
});
