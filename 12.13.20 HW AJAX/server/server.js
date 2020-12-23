var express = require("express"); 

var fs = require("fs"); // fs -- обтект который дает возможность читать файлы(например json)
var app = express();
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs

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

const port = 1234;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});


app.post('/users', function (req, res) {
  let body = req.body;
  // console.log(body);
  let { login = null, password = null } = JSON.parse(body);
  fs.readFile('users.json', 'utf-8', function ( err, dataToRead ) {
    
    let check = userCheck(dataToRead, { login, password}) ;
    if (check != false) {
      let { id } = check[0];
       
       res.send(JSON.stringify(id));
     
     
    }
    else {
  res.sendStatus(401, 'Unauthorized');
    
      // let goodsWay = `./goods/${check[0].id}.json`;
      // fs.readFile(goodsWay, 'utf-8', function (err, goods) {
      //   res.send(goods);
      // })
    }
    
  })
});

function userCheck(UserDataCheck, additionalInfo) {
  let { login , password } = additionalInfo;
  let filteredData =  JSON.parse(UserDataCheck).filter((user) => {
      if (user.login === login && user.password === password) {
        return user
    }
    
    
  });
 
  return filteredData
}