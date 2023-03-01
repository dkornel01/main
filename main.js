window.addEventListener("load",init)

function init(){
    const objList = [
        {}
            nev: "Zoé",
            mondat: "Befejeztem tegnap a szobám kifestését!",
        },
        {
            nev: "Kornél",
            mondat: "Finom volt a gyros ebéd.",
        },
        { nev: "Bónó", mondat: "Vettem egy új síkesztyűt." },
        {
            nev: "Leila",
            mondat: "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
        },
        { nev: "Bence", mondat: "Hálát adtam az úrnak, hogy lementem edzeni." },
        {
            nev: "Hunor",
            mondat: "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
        },
        { nev: "Ádám", mondat: "Kirúgták a gyökér főnökömet." },
        {
            nev: "Dominik",
            mondat: "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
        },
        { nev: "Lél", mondat: "Finom volt a vacsi." },
        { nev: "Bónó", mondat: "Vettem egy új síkesztyűt." }
        {
            nev: "Laci",
            mondat: "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
        },
        {
            nev: "Ricsi",
            mondat: "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
        },
        { nev: "Dominik", mondat: "Az egyik lakótársam hozott nekem sütit." },
        { nev: "Martin", mondat: "Ember, most jöttem a templomból" },
        {
            nev: "Valentin",
            mondat: "Vezethettem a volt munkahelyem új céges autóját.",
        },
    ];
    /*const list=["Zóé","Befejeztem tegnap a szobám kifestését!",
    "Kornél","Finom volt a gyros ebéd.","Kirúgták a gyökér főnökömet.",
    "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    "Hálát adtam az úrnak, hogy lementem edzeni.", "Finom volt a vacsi.","Vettem egy új síkesztyűt.","Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke. ",
    "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
    "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.", "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
    "Az egyik lakótársam hozott nekem sütit."]*/
    const nev=[]
    const txt=osszeallit(objList)
    const szuloElem=document.querySelectorAll("article")
    kiir(txt,szuloElem)
    
    const obj3={
    nev: "kornél", mondat: "Finom volt a gyros ebéd.",
    nev: "Zoé",mondat: "Befejeztem tegnap a szobám kifestését!",
    nev: "Leila",mondat: "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    nev:"Bónó",mondat:"Vettem egy új síkesztyűt.",
    }

}

function osszeallit(list){
    let txt=""
    for (let index = 0; index < list.length; index++) {
        txt+="<div><p>"+list[index].mondat+"<\p><\div>"
        txt+="<div><p>"+list[index].nev+"<\p><\div>"
    }

    return txt
}
function kiir(txt,szuloElem){
    szuloElem[0].innerHTML=txt
}
