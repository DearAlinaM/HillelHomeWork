

class RegData {
    constructor(name, id, infoAjax) {
        this.name = name,
        this.id = id;
        this.form = document.querySelector(this.id);
        // this.submit = this.submit.bind(this);
        // this.getData = this.getData.bind(this);
        // this.ajaxObj = infoAjax;
        // this.dataToSend = this.dataToSend.bind(this);
        // this.ajaxFunction = this.ajaxFunction.bind(this);  
        // this.submit= this.submit(this);
        this.getData = this.getData(this);
        this.ajaxObj = infoAjax;
        this.dataToSend = this.dataToSend(this);
        this.ajaxFunction = this.ajaxFunction(this);   
 
    };


    dataToSend(info1, loginPass) { /// отправка инфы на сервер
        console.log('data To send')
        // console.log(this);
    //  let generalInfo = { ...info1,  loginPass}
    //  console.log(generalInfo, 'generalInfo');
    //             this.ajaxFunction(generalInfo);
    };

    submit(e) { // клик на кнопку 
        console.log('submit');
        // console.log(this);
        // this.dataToSend();
        //     let { login, password } = this.getData();
        // console.log(login, password);
        // console.log(e);
        // //     this.dataToSend( this.ajaxObj, { login, password });
        //     e.preventDefault();
        
    };

    getData() { // сбор инфы с полей
            // console.log('GET DATA');
                let sendData = {};
                [].forEach.call(this.form, ({ name, value, tagName }) => {
                    if (tagName !== 'INPUT') {
                        return
                    }
                    sendData[name] = value;
                });
                return sendData
    };
    
    ajaxFunction({ method, url, succ, error, loginPass }) {
        // console.log({ method, url, succ, error, loginPass }, '{ method, url, succ, error, postInfo }')
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            succ.call(xhr, this.response);
            console.log(this.response);
        })
        xhr.addEventListener('error', function () {
            console.log(error);
        })
        xhr.open(method, url);
        if (method === 'GET') {
            xhr.send();
        }
        else if (method === 'POST') {
            xhr.send(JSON.stringify(loginPass));
        }
    };
}

 function  createAnswer(respondFromServer) {
        console.log('answerCreator');
        let box = document.createElement('div');
        box.innerText = respondFromServer;
        box.classList.add('answer');
        document.body.append(box);
        }

   let xhrObj = {
        method: 'POST',
        url: 'http://localhost:1234/users',
        succ(responce) {
            createAnswer(responce);
        },
        error(err) {
            createAnswer(err);
        }
    };
    

let newData = new RegData('newData', '#regForm', xhrObj);
// console.log(newData.form);
newData.form.addEventListener('submit', newData.submit.bind(newData)  )
    // (e) => {
    //     newData.submit.bind(newData, e)
    //     // newData.submit(e)
    // });





   
 


    