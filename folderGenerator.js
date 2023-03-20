import http from 'http';
import fs from 'fs';
import fromModuleObjectHtmlGen from './htmlGenerator.js';

const server = http.createServer(function(req, res) {
  if(req.method === "GET" && req.url === '/') {
    let body = fromModuleObjectHtmlGen.body(fromModuleObjectHtmlGen.formTag);
    res.statusCode = 200;
    res.setHeader = ('content-Type', 'text/plain');
    res.write(body);
    res.end();
  }
  if(req.url.startsWith('/make')) {
    // console.log(req.getParameter("name"));
    console.log(req.url.split('='));
    const splitFirst = req.url.split('=');
    const splitYear = splitFirst[1].split("&");
    const splitMonth = splitFirst[2].split("&");
    const splitDay = splitFirst[3].split("&");

    const Year = splitYear[0];
    const Month = splitMonth[0];
    const Day = splitDay[0];
    const Name = req.url.split('=')[4];
    console.log("Year " + Year);
    console.log("month " + Month);
    console.log("day " + Day);
    console.log("name " + Name);

    function folderName(year, month, day, name, callback) {
      let date = year + "-" + month + "-" + day + "_";
      return callback(date, name);
    }

    const makeTextFiles = folderName(Year, Month, Day, Name, function(date, name){
      return date + name;
    });

    fs.mkdirSync('./' + makeTextFiles);
    fs.writeFileSync('./' + makeTextFiles + '/' + makeTextFiles + ".txt", "생성완료");
    res.statusCode = 200;
    res.setHeader = ('content-Type', 'text/plain');
    res.write("success");
    res.end();
  }
  
});

server.listen(2080, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });