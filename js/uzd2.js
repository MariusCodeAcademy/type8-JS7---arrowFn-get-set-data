// parasyti visai budais funckija kuri paima 4 sk ir grazina
// 2 pirmus sudetus ir atimti likusiu 2

// sukurti funkcija kuri pavercia minutes i sekundes

function minTosec(minutes) {
  return minutes * 60;
}

const fiveMinIs = minTosec(5);
console.log('fiveMinIs ===', fiveMinIs);

// sukurti funkcija kuri ideda reiksme i html el kurio class === 'app'

function putValueToApp(reiksme) {
  // 1. paimti reiksme
  // 2. nusitaikyti i el su class app
  const appEl = document.querySelector('.app');
  if (appEl === null) {
    console.log('neradom el su klase app');
    // nutraukti funkcijos vygdyma
    return;
  }
  // 2. ideti i el kurio class app
  appEl.textContent = reiksme;
}

putValueToApp(`five minutes in sec is ${fiveMinIs}`);
