var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules


var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
const { send } = require("process");
const { read } = require("./helper/helper");

//Настройки
//(https://overcoder.net/q/7302/%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-body-parser-%D1%81-express)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 1235;

app.listen(port, function () {
  console.log(`Example app listening on port http://localhost:${port}/`);
});



// app.get('/get-user-info', function (req, resp) {

// // в объекте request  есть query req.query
//   // console.log(req.query);
//   // let {page=0, code=111 } = req.query;
//   // console.log(page);
//   // console.log(code);

//   fs.readFile('./models/any.json', 'utf-8', function (err, cor) {
   
//    let { maxQuantity,minQuantity } = req.query;
//     if (maxQuantity && minQuantity) {
     
//           resp
//             .status(200)
//             .send( JSON.parse(cor).filter((data) => (data.quantity < maxQuantity && minQuantity < data.quantity)));
//             return
      
//     }
//     resp
//       .status(200)
//       .send(cor)
    
//   })
    
// });


app.post('/reg', function (req, resp) {
  let body = req.body // тело пост запроса , мешочек куда можно что-то положить в BODY POSTMAN!!!  и отправить 
  console.log(body);
  
  fs.readFile('./models/any.json', 'utf-8', function (error, dataToRead) {
    console.log(dataToRead);
    let data = JSON.parse(dataToRead);// из JSON делаем объект
    data.push(JSON.parse(body));
    console.log(data);
     
    fs.writeFile('./models/any.json', JSON.stringify(data), function (err) { console.log(err) });
        // write('./models/any.json', data);
        resp.send('ok');
     
   
 })
  // resp
  //   .status(200)
  //   .send('ok')
});



