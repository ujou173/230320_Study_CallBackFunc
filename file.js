import fs from 'fs';

// [ 파일 이름 생성기 ] //
let name = 'rosumin';
let date = new Date();
// let fileName = date.getFullYear() + name;
// let fileName = date.getMinutes() + name;
// let fileName = date.getSeconds() + name;
let year = "2023";
let month = "03";
let day = "20";
let fileName = year + month + day + "-" + name;
fs.writeFileSync("./" + fileName + ".txt", name);
