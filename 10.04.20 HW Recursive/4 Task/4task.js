/* Cоздать конвертер-функцию которая получает на вход массив вида: 
mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
 а на выходе получим переобразованый массив: [1,2,3,3.1,4,5,6,7,8] */

var mass = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8,]]];

function loop(arr, arraB = []) {
  
  for (var i = 0; i < arr.length; i++) {

  if (Array.isArray(arr[i])) { // это массив 
    console.log((arr[i]), 'eto massiv');
     loop(arr[i], arraB);
          } 
      else { // не массив, дно рекурсии
       arraB.push(arr[i]);
        console.log(arraB);      
      }    
       }
   return arraB;
}

console.log(loop(mass));

