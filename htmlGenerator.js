const htmlGen = {
  body: function(data) {
    return `<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      ${data}
    </body>
    </html>
    `
  },
  
  formTag: `
  <form method="GET" action="/make">
    <input type="text" name="Year" placeholder="Year">
    <input type="text" name="Month" placeholder="Month">
    <input type="text" name="day" placeholder="day">
    <input type="text" name="name" placeholder="이름을 입력해주세요">
    <input type="submit" value="만들기">
  </form>
  `
}

export default htmlGen;