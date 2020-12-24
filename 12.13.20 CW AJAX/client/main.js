// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', function () {
//     // console.log(this.response, 'this.response'); // как respond app.get respond ;то что получаем из серверной папки
//     let data = JSON.parse(this.response);
//     console.log(data);
// })




// const button = document.querySelector('button');
// // console.log(button);

// button.addEventListener('click', function () {
//     // xhr.open('GET', 'http://localhost:1234/get-user-info') // настройка метода, (метод (ГЕТ/ПОСТ) и куда)
//     // xhr.send();
// });


/*
 ajaxObj = {
 method http: POST, GET, etc;
 url: http://...
 success:
 error:
 }

*/

function ajax({ method, url, success, error }) {
    const xhr = new XMLHttpRequest();
    console.log(this);
    // xhr.addEventListener('load', () => { success.call(xhr, xhr.response) });

    // xhr.addEventListener('error', error.bind(xhr, xhr.response));
    // xhr.open(method, url) // настройка метода, (метод (ГЕТ/ПОСТ) и куда)
    // xhr.send();
    // console.log({ method, url, success, error });
}


let obj  = {
    method: 'GET',
    url: 'http://localhost:1234/',
    // get-user-info?maxQuantity=8&minQuantity=2',
    success: function (respond) {
        // console.log(respond);       
         let data = JSON.parse(respond);
         console.log(data);
        
    },
    error: function (error) {
        console.log(error)
    },
}

ajax(obj);
/*
REPEAT
 ajaxObj = {
 method http: POST, GET, etc;
 url: http://...
 success:
 error:
 }

*/


// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//   ajax(obj);
// });
//-==================================================================
/*
function ajax({ method, url, payload, success, error }) {
    console.log(payload);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => { success.call(xhr, xhr.response) });
    xhr.addEventListener('error', error.bind(xhr, xhr.response));
    xhr.open(method, url) // настройка метода, (метод (ГЕТ/ПОСТ) и куда)

     method.toUpperCase() === "GET"? xhr.send() : xhr.send(payload);
       
}


function regForm(selector) {
   
    const config = {
        
        form: document.querySelector(selector), // откуда отправляем
        config: null, //каким методом куда = все что передаем в ф-йию ajax

        init(config) {
            this.config = config; // передаем объект ajaxObj
            // console.log(config);
            this.bindEvent();
        },
        signIn() {
            let payload = JSON.stringify(this.prepare()); // что будем отправлять
            // let payload = this.prepare();
            console.log(payload);
            ajax(
                {
                    ... this.config,
                    payload,
                },
            );
            console.log('work');
        },
        bindEvent() {
            this.form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.signIn()
            })
        },
        prepare() {

            let data = {};
            
            [].forEach.call(this.form, ({ name, value, tagName }) => {
                //  console.log(name, value)
                 if (tagName === 'BUTTON') {
                    return
                 }
                data[name] = value;
               
            })
            console.log(data);
            return data
}
            
             
        
    }

    return { init: config.init.bind(config) };
    
}

let ajaxObj = {
           method: 'POST',
           url: 'http://localhost:1235/reg',
           success (respose) {   
        //    let data = JSON.parse(respose);
           console.log(respose);// от сервера
            },
           error (error) {
           console.log(error)
                },   
    }

regForm('form')
.init(ajaxObj )
           
//========================

*/