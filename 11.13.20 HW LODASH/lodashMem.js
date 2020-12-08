function createGif(link) {
    console.log('gif from func');
    let gifbox = document.createElement('img');
      gifbox.setAttribute('src', link);
    let w = 100;
      gifbox.style.width = `${w}px`;
    let frag = document.createDocumentFragment();
      frag.append(gifbox);
      document.body.append(frag);
      return document;
}

let pokemon = 'http://www.youloveit.ru/uploads/posts/2019-04/1556556969_youloveit_ru_gifki_pokemon_detektiv_pikachu08.gif';
let cat = 'https://sweetytextmessages.com/wp-content/uploads/2018/02/Funny-Cat-Gifs-for-Laugh-2.gif';


let toMemGif = _.memoize(createGif);

toMemGif(pokemon);
toMemGif(pokemon);
toMemGif(pokemon);
toMemGif(cat);
toMemGif(cat);



