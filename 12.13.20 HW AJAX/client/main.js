class ServerRequest  {
    constructor (dataUrl, loginInfo, callback)
    {
        this.address = dataUrl;
        this.method = 'POST';
        this.formInfo = loginInfo;
        this.callback = callback;
        this.ajax = this.ajax(this.address, this.method, this.formInfo, this.callback);
 
    };

    ajax(url, method, infoForServer, ToDo_replyFromServer) {
        if (url, method, infoForServer) {
            let xhr = new XMLHttpRequest();
            xhr.addEventListener('load', function () {
                ToDo_replyFromServer.call(xhr, xhr.response, url);
            });
            xhr.addEventListener('error', function (error) {
                console.log(error);
            });
            xhr.open(method, url);

            if (method === 'GET') {
                xhr.send();
            }
            else if (method === 'POST') {
                xhr.send(JSON.stringify(infoForServer));
            }
        }
        
    };
  
}

class RegData {
    constructor( id, url, callbackForAjax) {
        this.form = document.querySelector(id);
        this.info = this.button();
        this.url = url;
        this.callBack = callbackForAjax;
    };

    button(logPassInfo) {
        this.requestAjax(this.url, logPassInfo, this.callBack); 
    };
 
    getData() { // сбор инфы с полей
        let sendData = {};    
        [].forEach.call(this.form, ({ name, value, tagName }) => {
                if (tagName !== 'INPUT') {
                    return
                }
                sendData[name] = value;
        });
        return sendData
    };
     
    requestAjax(urlAdress, LoginPassword, callBackAjax) {
        if (urlAdress, LoginPassword) {
            new ServerRequest(urlAdress, LoginPassword,callBackAjax);
        }
    }
   
};


function createAnswerStep1(respondFromServer, generalURL) {
    if (respondFromServer != 'Unautorized') {
       new ServerRequest (`${generalURL}/goods`,respondFromServer,createAnswerStep2 )
    }
    createAnswerStep2(respondFromServer);
}

function createAnswerStep2(addToBoxAnswer) {
        let boxToDel = document.querySelector('div.answer');
    if (boxToDel) {
        boxToDel.remove();
    };
        let box = document.createElement('div');
        box.innerText = addToBoxAnswer;
        box.classList.add('answer');
        document.body.append(box);
}
    
let myUrl = 'http://localhost:1234/users';
let newData = new RegData('#regForm', myUrl, createAnswerStep1);
let subBut = newData.form;


subBut.addEventListener('submit',
    (e) => {
    e.preventDefault();
        let logPassInfo = newData.getData();
        newData.button(logPassInfo);
    }
);
