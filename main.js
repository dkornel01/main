window.addEventListener("load", init);

function init() {
  const objList = [
    {
      nev: "Zoé",
      mondat: "Befejeztem tegnap a szobám kifestését!",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Kornél",
      mondat: "Finom volt a gyros ebéd.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Leila",
      mondat:
        "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Bence",
      mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Hunor",
      mondat:
        "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Ádám",
      mondat: "Kirúgták a gyökér főnökömet.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Dominik",
      mondat:
        "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Lél",
      mondat: "Finom volt a vacsi.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Laci",
      mondat:
        "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Ricsi",
      mondat:
        "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Dominik",
      mondat: "Az egyik lakótársam hozott nekem sütit.",
      kor: 23,
      teso: 1,
      szemszín: "kék",
    },
    {
      nev: "Martin",
      mondat: "Ember, most jöttem a templomból",
      kor: 23,
      teso: 0,
      szemszín: "zöld",
    },
    {
      nev: "Valentin",
      mondat: "Vezethettem a volt munkahelyem új céges autóját.",
      kor: 23,
      teso: 31,
      szemszín: "kék",
    },
  ];

  /*
    for (let index = 0; index < objList.length; index++) {
        console.log(objList[index].nev)
        console.log(objList[index].mondat)
        
    }
    let objektum=objList[2]
    for (const x in objektum[x]) {
        console.log(x);
        console.log("érték",objektum[x]);
        
    }
    for (let index = 0; index < array.length; index++) {
        let objektum=list[index]
        console.log("_________________")
        for (const x in objektum){
            console.log(x,":",objektum[x])
        }
        
    }*/
  /*const list=["Zóé","Befejeztem tegnap a szobám kifestését!",
    "Kornél","Finom volt a gyros ebéd.","Kirúgták a gyökér főnökömet.",
    "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    "Hálát adtam az úrnak, hogy lementem edzeni.", "Finom volt a vacsi.","Vettem egy új síkesztyűt.","Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke. ",
    "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
    "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.", "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
    "Az egyik lakótársam hozott nekem sütit."]*/
  const nev = [];
  const txt = osszeallit(objList);
  const tab = tablazat(objList);
  const szuloElem = document.querySelector("article");
  const tabal = document.querySelector("#tablazat");
  kiir(txt, szuloElem);
  kiirtablazat(tab, tabal);

  const obj3 = {
    nev: "kornél",
    mondat: "Finom volt a gyros ebéd.",
    nev: "Zoé",
    mondat: "Befejeztem tegnap a szobám kifestését!",
    nev: "Leila",
    mondat:
      "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    nev: "Bónó",
    mondat: "Vettem egy új síkesztyűt.",
  };
}

function osszeallit(list) {
  let txt = "";
  for (let index = 0; index < list.length; index++) {
    txt += "<div><p>" + list[index].mondat + "</div>";
    txt += "<div><p>" + list[index].nev + "</div>";
  }

  return txt;
}
function kiir(txt, szuloElem) {
  szuloElem.innerHTML = txt;
}

/*function tablazat(objList) {
  let tablazatszoveg = "<table><tr>";
  ("<th>Név<th>");
  ("<th>Mondat<th>");
  ("</tr>");
  for (let index = 0; index < objList.length; index++) {
    tablazatszoveg += "<tr>";
    tablazatszoveg += "<td>" + objList[index].nev + "</td>";
    tablazatszoveg += "<td>" + objList[index].mondat + "</td>";
    tablazatszoveg += "</tr>";
  }
  tablazatszoveg += "</table>";
  return tablazatszoveg;*/
//}

function tablazat(objList) {
    let tablazatszoveg = "<table><tr>";
    let object=objList[0] //az éppen aktuális ember adatai
      for (const x in object) {
            const element = object[x];
            tablazatszoveg += "<td>" + x + "</td>";
      }
    tablazatszoveg+=("</tr>");
    for (let index = 0; index < objList.length; index++) {
      tablazatszoveg += "<tr>";
      let object=objList[index] //az éppen aktuális ember adatai
      for (const x in object) {
            const element = object[x];
            tablazatszoveg += "<td>" + object[x] + "</td>";
      }
      tablazatszoveg += "</tr>";
    }
    tablazatszoveg += "</table>";
    return tablazatszoveg;
}

function kiirtablazat(tab, tabal) {
  tabal.innerHTML = tab;
}
