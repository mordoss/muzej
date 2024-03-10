 const colors = {
    actionMain: '#f07c2f',
    light: '#F7E1CA'
}

const tickets = {
    regular: [{text:'Deca mlađa od 3 godine', price:'NE PLAĆAJU ulaz'},
        {text:'Za decu od 3 - 12 godina', price:'450 din'},
        {text:'Za odrasle', price:'700 din'},
        {text:'GRUPNA KARTA (20+ posetilaca)', price:'300 din'}],

    special: [{
        text:'PORODIČNA KARTA 1 \n (dva roditelja i jedno dete)',
        price:'1700 din'
    },{
        text:'PORODIČNA KARTA 2 \n (dva roditelja i dvoje dece)',
        price:'2100 din'
    },{
        text:'PORODIČNA KARTA 3 \n (dva roditelja i troje dece)',
        price:'2500 din'
    },{
        text:'PORODIČNA KARTA 4 \n (dva roditelja i četvoro dece)',
        price:'2900 din'
    },{
        text:'GRUPNA KARTA (20+ posetilaca) \n Prirodnjački centar i kuća \n Stevana Sinđelića',
        price:'400 din'
    },{
        text:'GRUPNA KARTA (20+ posetilaca) \n kuća Stevana Sinđelića',
        price:'200 din'
    },{
        text:'POJEDINAČNA KARTA \n kuća Stevana Sinđelića',
        price:'300 din'
    },{
        text:'GRUPNA KARTA (20+ posetilaca) \n Prirodnjački centar i dodatni sadržaj',
        price:'450 din'
    },{
        text:'GRUPNA KARTA (20+ posetilaca) \n Prirodnjački centar, kuća Stevana Sinđelića i dodatni sadržaj',
        price:'600 din'
    }]
}

const rules = [
  'Zabranjeno je dodirivanje svih eksponata, uključujući i eksponate u parku.',
  'Najstrože je zabranjeno preskakanje ograde u zabavnom parku kao i penjanje na izložene eksponate.', 
  'Budite na odstojanju najmanje 50 cm od eksponata i omogućite drugima nesmetano uživanje u posmatranju izložbe.',
  'Zabranjeno je trčanje u prostoru Prirodnjačkog centra i zabavnog parka.',
  'Zabranjeno je unošenje rekvizita za igru (lopte, vijače, pištaljke itd.).',
  'Zabranjeno je uvoženje bilo kakve vrste vozila (zabrana se ne odnosi na invalidska kolica i kolica za bebe).',
  'Fotografisanje je dozvoljeno, dok je snimanje kamerom i mobilnim telefonom zabranjeno.',
  'Konzumiranje hrane, pića i duvana zabranjeno je u celom prostoru Prirodnjačkog centra (uključujući i zabavni park), osim u bašti Restorana.',
  'Zabranjeno je uvođenje kućnih ljubimaca u muzej (zabrana se ne odnosi na psa vodiča osobe sa invaliditetom) .']

const specialRules = [
    'Učitelji, nastavnici, profesori i pratioci grupa dece su zaduženi za disciplinu svojih članova grupe i odgovorni su za njihovu bezbednost tokom celog trajanja posete Prirodnjačkom centru. Tokom obilaska zabavnog parka učitelji, nastavnici, profesori i pratioci grupa dece zaduženi su za pratnju svoje grupe i odgovorni za njihovo ponašanje i bezbednost.',
    'U interesu bezbednosti, sigurnosti i dobrobiti svih naših posetilaca zahtevamo da se pridržavaju ovih Pravila. Zakonske mere će biti preduzete protiv lica koja tokom posete ugrožavaju svoju i tuđu bezbednost. Svako kršenje Pravila ponašanja biće sankcionisano prekidom obilaska i napuštanjem objekta Prirodnjačkog centra.',
    'Nadamo se da ćete uživati u poseti kod nas. Ako vam je potrebna pomoć dok ste ovde slobodno pitajte naše vodiče na info pultu.',
    'Prirodnjački centar nije odgovoran za bilo koju štetu, bilo kojoj osobi koja je posetilac Prirodnjačkog centra, ukoliko je nastala šteta rezultat nepoštovanja propisanih Pravila ponašanja.    ',
 ]

 const contacts = {
    emails: ['prirodnjackicentarsrbije@gmail.com', 'office@prirodnjackicentar.rs', 'info@prirodnjackicentar.rs'], 
    phones: ['035/8814001 (08:00 - 16:00 radnim danima)', '064/8912932 (10:00 - 17:00 radnim danima, vikendima i praznicima)']
 }

 const bikeRentalConditions = [
    "1. USLOVI ZA IZNAJMLjIVANjE BICIKLA \n Bicikl može iznajmiti svako fizičko lice starije od 18 godina koje poseduje važeću ličnu kartu ili drugi identifikacioni dokument i sklopilo je ugovor o iznajmljivanju sa Upravom SVI-BAJK sistema.",
    "Iznajmljivanje bicikala iz sistema SVI-BAJK biće moguća od 01.07.2017. do 31.10.2017. u vremenskom periodu od 10:00 do 20:00 sati. Rok korišćenja može biti produžen ili skraćen. Odluku o promeni termina korišćenja sistema donosi Uprava sistema u zavisnosti od vremenskih prilika.",
    "2. REGISTRACIJA KORISNIKA \n Fizičko lice može se registrovati za korišćenje usluga SVI-BAJK sistema lično u biletarnici Prirodnjačkog centra Srbije, Kralja Petra I br. 111, 35210 Svilajnac.",
    "Nakon prihvaćene registracije, korisnik mora sklopiti ugovor o iznajmljivanju sa Upravom SVI-BAJK sistema. Potpisom ugovora o iznajmljivanju bicikla, korisnik prihvata sve opšte uslove korišćenja usluga SVI-BAJK sistema, potvrđuje da je sa njima bio upoznat pre sklapanja ugovora o iznajmljivanju bicikla, kao i da je saglasan sa njihovom primenom zajedno sa ugovorom o iznajmljivanju bicikla.",
    "3. IZNAJMLjIVANjE BICIKLA I POČETAK KORIŠĆENjA SVI-BAJK \n USLUGE\nFizičko lice koristi bicikl na temelju potpisanog ugovora o iznajmljivanju i preuzete RFID kartice za iznajmljivanje bicikla od odgovorne osobe imenovane od uprave SVI-BAJK sistema. Upravnik SVI-BAJK sistema i korisnik sklopiće ugovor o iznajmljivanju bicikla ukoliko je ispunjen uslov za iznajmljivanje iz tačke 1. opštih uslova. Tom prilikom će uprava SVI-BAJK sistema korisniku izdati RFID karticu za iznajmljivanje bicikla koju korisnik zadržava za ceo vremenski period trajanja ugovora, a koja će biti aktivirana odmah po izdavanju.",
    "Upravnik SVI-BAJK sistema će prilikom sklapanja ugovora o iznajmljvianju bicikla od korisnika uzimati sledeće podatke:",
    "a. Ime i prezime",
    "b. JMBG",
    "c. Adresu (ulica i kućni broj, naselje, poštanski broj, e-mail)",
    "d. Broj mobilnog telefona / kućni broj telefona",
    "Ugovorene strane konstatuju da postoji saglasnost korisnika usluge da se njegova lična karta skenira/kopira za potrebe ugovora, u skladu sa članom 15. Zakona o zaštiti podataka o ličnosti.",
    "Prikupljene podatke o korisniku, upravnik SVI-BAJK sistema sme koristiti isključivo za potrebe SVI-BAJK sistema i korisnika uređene opštim uslovima korišćenja, kao i ugovorom o iznajmljivanju bicikla.",
    "Početak korišćenja bicikla je trenutak kada korisnik isti preuzme tako što prethodno prisloni RFID karticu za iznajmljivanje bicikla na označeno mesto na postolju (totemu), ili unese jednokratni kod na pilonu SVI-BAJK terminala.",
    "4. OGRANIČENjA ZA IZNAJMLjIVANjE I KORIŠĆENjE SVI-BAJK \n SISTEMA\nKorisnik ima pravo da iznajmi samo jedan bicikl.",
    "SVI-BAJK bicikli su bicikli za javnu upotrebu i kao takvi trebaju biti dostupni što većem broju korisnika, pa stoga korisnik može isti bicikl koristiti najviše koliko je i radno vreme Prirodnjačkog centra Srbije u Svilajncu, nakon čega je dužan da bicikl vrati na predviđeno mesto (terminal). Ukoliko se korisnik ne pridržava pravila korišćenja uprava može preduzeti sledeće mere:",
    "1. Za prvo prekoračenje roka korišćenja, upravnik SVI-BAJK sistema naplaćuje za svaki sat prekoračenja iznos utvrđen cenovnikom.",
    "2. Ukoliko korisnik ne plati iznos prekoračenja korišćenja, uprava SVI-BAJK sistema će deaktivirati RFID karticu.",
    "5. USLOVI KORIŠĆENjA BICIKLA \n 1. Iznajmljeni bicikl je dozvoljeno koristiti isključivo za sopstveni prevoz u okviru grada Svilajnca.",
    "2. Korisnik je lično odgovoran za poštovanje saobraćajnih propisa.",
    "3. Korisnik mora voziti bicikl sa obe ruke koje prilikom vožnje moraju biti na upravljaču.",
    "4. Korpa na biciklu služi za prevoz stvari maksimalno do pet kilograma. Prilikom smeštanja stvari u korpu potrebno je voditi računa da se korpa ne preoptereti, kao i da stvari budu dobro učvršćene kako ne bi ispale prilikom vožnje.",
    "5. Korisniku nije dozvoljeno izvođenje bilo kakvih prepravki, popravki ili promena na biciklu.",
    "6. Korisniku se preporučuje upotreba zaštitne kacige.",
    "7. Korisniku je zabranjeno dalje pozajmljivanje, iznajmljivanje ili davanje bicikla na korišćenje trećem fizičkom ili pravnom licu.",
    "8. Pre korišćenja bicikla, korisnik je dužan da proveri ispravnost bicikla, odnosno da proveri da li je bicikl u voznom stanju (ispravnost pedala, lanaca, upravljača, guma, kočnica, svetala i sve drugo što bi moglo uticati na sigurnost vožnje biciklom).",
    "9. Eventualni kvar na biciklu kojeg je korisnik iznajmio, a primeti ga prilikom korišćenja bicikla, dužan je da bez odlaganja prijavi upravi SVI-BAJK sistema. Tom prilikom, uprava SVI-BAJK sistema će dati korisniku drugi, ispravan, bicikl na korišćenje, ukoliko ga ima na raspolaganju.",
    "10. Iznajmljeni bicikl nije dozvoljeno koristiti:",
    "a. za prevoz osobama mlađim od 18 godina",
    "b. za prevoz drugih osoba osim vozača (iz sigurnosnih razloga, naročito dece)",
    "c. za prevoz izvan granica grada Svilajnca",
    "d. za prevoz zapaljivih stvari, eksploziva, otrovnog ili opasnog materijala",
    "e. za učestvovanje u biciklističkim trkama ili druga testiranja bicikli",
    "f. prilikom jakog vetra ili lošeg vremena",
    "g. pod uticajem alkohola ili opojnih sredstava",
    "Radno vreme za mogućnost javljanja upravi SVI-BAJK sistema je svakog dana od 10:00 do 20:00 časova.",
    "6. PARKIRANjE IZNAJMLjENOG BICIKLA \n Za vreme korišćenja bicikla korisnik je dužan parkirati bicikl na predviđenom mestu za to - SVI-BAJK terminalu. Korisnik se obavezuje da će poštovati pomenute saobraćajne propise prilikom parkiranja, kao i da parkirani bicikl ne utiče na sigurnost drugih.",
    "Zabranjeno je parkirati iznajmljeni bicikl:",
    "1. na semaforu",
    "2. prolazima užim od 1.5 metara",
    "3. na prostorima izlaza u slučaju opasnosti",
    "4. na način da bicikl prekriva nečije oglasne površine/prostor za oglašavanje",
    "5. u kućama, dvorištima ili na vozilima",
    "6. na automatu za karte za parkiranje",
    "7. na saobraćajnim znakovima",
    "8. na pešačkom prelazu",
    "7. DUŽNOSTI I ODGOVORNOSTI KORISNIKA\nOdgovornost korisnika za bicikl počinje od trenutka preuzimanja bicikla sa postolja SVI-BAJK terminala i traje do trenutka kada je bicikl ispravno vraćen, te je samim time registrovan u sistemu. Proveriti oznaku na pilonu da je bicikl pravilno zaključan (tek onda je pravilno razdužen).",
    "Korisnik koristi iznajmljeni bicikl na sopstvenu odgovornost .",
    "Uprava SVI-BAJK sistema i Prirodnjačkog centra Srbije u Svilajncu ne odgovaraju za povrede korisnika ili trećih osoba uzrokovane korišćenjem bicikla.",
    "Korisnik preuzima potpunu odgovornost za štetu na biciklu kao i štetu koju iznajmljeni bicikl može prouzrokovati trećim licima i stvarima trećih lica, na način opisan ugovorom o iznajmljivanju bicikla."
  ];

const workingHours = {
    weekday: '10 - 19h',
    weekend: '10 - 20h'
}

const indexInfo = ['U Prirodnjačkom centru vas očekuje NAJVREDNIJE PUTOVANJE koje možete da priuštite vašoj porodici. Pitate se kakvo putovanje, zar to nije muzej?', 'Da, Prirodnjački centar ima muzejski prostor sa 9 stalnih postavki, ali one vas vode na najvrednije putovanje – PUTOVANJE KROZ VREME, koje vas vodi do samog nastanka planete Zemlje, pojave dinosaurusa i njihovog izumiranja, evolucije hominida, pa do egzotičnih Afričkih životinja i raznovrsnosti biodiverziteta Srbije. Ovo je sigurno jedno od vrednijih putovanja koje ćete prirediti vama i vašoj porodici.',
 'Vremensko putovanje vas odvodi u park gde ste okruženi najneverovatnijim bićima koja su živela na našoj planeti – DINOSAURUSI. Dok se krećete kroz pažljivo uređen park dinosaurusa možete ući u VULKAN. Park vam takođe nudi objekte poput suvenirnice, igraonice na otvorenom pored autentičnog ambijenta restorana.',
 'Pružite svojim namilijima jedinstveno i nezaboravno putovanje.' ]

const indexCards = [{link: 'izložbe', text: 'Izložbe'}, {link: 'dinosville', text: 'Dinosville'},{link:'igraonica', text:'Igraonica'}, 
{link:'restoran', text: 'Restoran'}, {link: 'suvenirnica', text: 'Suvenirnica' }
]

export {colors, tickets, rules, specialRules, bikeRentalConditions, contacts, workingHours, indexInfo, indexCards}
