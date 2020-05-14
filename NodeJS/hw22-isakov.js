let http = require("http");
let url = require("url");
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'content-type');
    if (req.url == '/') res.end(JSON.stringify("HELLO"))
    const methods = ["POST", "OPTIONS"];
    if (methods.includes(req.method) && req.url === "/user") {
      let body = [];
      req.on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = Buffer.concat(body).toString();
          console.log(body);
          if(body) {
            const result = JSON.parse(body);
            result.teacher = 'Sergei';
            res.end(JSON.stringify(result));
          }
          res.end(JSON.stringify({}))
        });
    }
  })
  .listen(3000, () =>
    console.log("Server is listening on port:3000" )
  );