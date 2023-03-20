import http, { request } from 'http';
import fs from 'fs';
import fromModuleObjectHtmlGen from './htmlGenerator.js';
import formModuleFuncFileNameGen from './fileNameGenerator.js';

const server = http.createServer(function(req, res) {
  if(req.method === "GET" && req.url === '/') {
    let body = fromModuleObjectHtmlGen.body(fromModuleObjectHtmlGen.formTag);
    res.statusCode = 200;
    res.setHeader = ('content-Type', 'text/plain');
    res.write(body);
    res.end();
  }
  if(req.url.startsWith('/make')) {
    // let Year;
    // let Month;
    // let Day;
    // let Name;
    // <---------------  post 방식으로 데이터를 가져올 때  --------------->
    // request.on('data', function()) 데이터 입력을 받아오는 메서드
    req.on('data', function(data){
      // data를 받아왔으나 buffer(?) 형식으로 받아오므로 문자열로 바꿔줌
      let inputData = data.toString();
      console.log(inputData); // Year=1999&Month=06&day=30&name=rosumin 문자열 형식으로 출력되는 것 확인
      // 문자열로 바꾼 데이터를 GET 방식 때와 동일하게 split() 메서드를 이용해 원하는 부분 추출
      const splitstring = inputData.split('&');
      console.log(splitstring); // [ 'Year=1999', 'Month=06', 'day=30', 'name=rosumin' ]
      let Year = splitstring[0].split('=')[1];
      let Month = splitstring[1].split('=')[1];
      let Day = splitstring[2].split('=')[1];
      let Name = splitstring[3].split('=')[1];

      console.log(Year);
      console.log(Month);
      console.log(Day);
      console.log(Name);

      console.dir(formModuleFuncFileNameGen);

      const makeTextFiles = formModuleFuncFileNameGen.fileName(Year, Month, Day, Name, function(date, name){
        return date + name;
      });

      // 모듈로 따로 뺌
      // function folderName(year, month, day, name, callback) {
      //   let date = year + "-" + month + "-" + day + "_";
      //   return callback(date, name);
      // }
      // const makeTextFiles = folderName(Year, Month, Day, Name, function(date, name){
      //   return date + name;
      // });

      fs.mkdirSync('./' + makeTextFiles);
      fs.writeFileSync('./' + makeTextFiles + '/' + makeTextFiles + ".txt", "생성완료");
    })
    // <---------------  post 방식으로 데이터를 가져올 때  --------------->

    // <---------------  get 방식으로 데이터를 가져올 때  --------------->
    // req.end('data', function(){
    //   let post = qs.parse(body);
    //   console.log(post);
    // })

    // console.log(req.url.split('='));
    // const splitFirst = req.url.split('=');
    // const splitYear = splitFirst[1].split("&");
    // const splitMonth = splitFirst[2].split("&");
    // const splitDay = splitFirst[3].split("&");

    // const Year = splitYear[0];
    // const Month = splitMonth[0];
    // const Day = splitDay[0];
    // const Name = req.url.split('=')[4];
    // console.log("Year " + Year);
    // console.log("month " + Month);
    // console.log("day " + Day);
    // console.log("name " + Name);

    // function folderName(year, month, day, name, callback) {
    //   let date = year + "-" + month + "-" + day + "_";
    //   return callback(date, name);
    // }
    
    // const makeTextFiles = folderName(Year, Month, Day, Name, function(date, name){
    //   return date + name;
    // });
    // fs.mkdirSync('./' + makeTextFiles);
    // fs.writeFileSync('./' + makeTextFiles + '/' + makeTextFiles + ".txt", "생성완료");
    // <---------------  get 방식으로 데이터를 가져올 때  --------------->

    res.statusCode = 200;
    res.setHeader = ('content-Type', 'text/plain');
    res.write("success");
    res.end();
  }
  
});

server.listen(2080, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });

  // 폴더를 조회해서 안에 파일들을 리스트로 만들어보기
  // 1. 폴더를 읽어보고
  // 2. 안에 있는 파일들의 이름을 데이터로 저장
  // 3. 서버에서 출력