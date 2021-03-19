const http = require("http");
http
    .get("http://www.omdbapi.com/?apikey=trilogy&", res => {
      let data ="";    
      res.on("data", chunk => {
        data += chunk;
    });
  })
  res.on("end",()=> {
    let url = JSON.parse(data);
    console.log(res);
  });

  res.sendFile(path.join(__dirname, "../public/index.html"));
