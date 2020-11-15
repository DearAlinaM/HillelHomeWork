let mainQuestion = prompt('Кто пришел?', '');
if (mainQuestion === 'Admin') {
  console.log('URA ADMIN');
  let adminLogIn = prompt('Password', '');
  if (adminLogIn === 'Черный Властелин') {
    alert('wellcome', '');
    console.log('Добро Пожаловать!');
  } else if (adminLogIn === null) {
    alert('вход отменен');
    console.log('вход отменен');
  } else {
    alert('Pass is Not Correct');
    console.log('Пароль неверен');
  }
} else if (mainQuestion === null) {
  alert('вход отменен');
  console.log('вход отменен');
} else {
  alert('Vy Kto', '');
  console.log('Я Вас не знаю');
}
