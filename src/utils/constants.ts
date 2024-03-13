const colors = {
  actionMain: '#f07c2f',
  light: '#F7E1CA',
}

const tickets = {
  regular: [
    { text: 'Deca mlađa od 3 godine', price: 'NE PLAĆAJU ulaz' },
    { text: 'Za decu od 3 - 12 godina', price: '450 din' },
    { text: 'Za odrasle', price: '700 din' },
    { text: 'GRUPNA KARTA (20+ posetilaca)', price: '300 din' },
  ],

  special: [
    {
      text: 'PORODIČNA KARTA 1 \n (dva roditelja i jedno dete)',
      price: '1700 din',
    },
    {
      text: 'PORODIČNA KARTA 2 \n (dva roditelja i dvoje dece)',
      price: '2100 din',
    },
    {
      text: 'PORODIČNA KARTA 3 \n (dva roditelja i troje dece)',
      price: '2500 din',
    },
    {
      text: 'PORODIČNA KARTA 4 \n (dva roditelja i četvoro dece)',
      price: '2900 din',
    },
    {
      text: 'GRUPNA KARTA (20+ posetilaca) \n Prirodnjački centar i kuća \n Stevana Sinđelića',
      price: '400 din',
    },
    {
      text: 'GRUPNA KARTA (20+ posetilaca) \n kuća Stevana Sinđelića',
      price: '200 din',
    },
    {
      text: 'POJEDINAČNA KARTA \n kuća Stevana Sinđelića',
      price: '300 din',
    },
    {
      text: 'GRUPNA KARTA (20+ posetilaca) \n Prirodnjački centar i dodatni sadržaj',
      price: '450 din',
    },
    {
      text: 'GRUPNA KARTA (20+ posetilaca) \n Prirodnjački centar, kuća Stevana Sinđelića i dodatni sadržaj',
      price: '600 din',
    },
  ],
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
  'Zabranjeno je uvođenje kućnih ljubimaca u muzej (zabrana se ne odnosi na psa vodiča osobe sa invaliditetom) .',
]

const specialRules = [
  'Učitelji, nastavnici, profesori i pratioci grupa dece su zaduženi za disciplinu svojih članova grupe i odgovorni su za njihovu bezbednost tokom celog trajanja posete Prirodnjačkom centru. Tokom obilaska zabavnog parka učitelji, nastavnici, profesori i pratioci grupa dece zaduženi su za pratnju svoje grupe i odgovorni za njihovo ponašanje i bezbednost.',
  'U interesu bezbednosti, sigurnosti i dobrobiti svih naših posetilaca zahtevamo da se pridržavaju ovih Pravila. Zakonske mere će biti preduzete protiv lica koja tokom posete ugrožavaju svoju i tuđu bezbednost. Svako kršenje Pravila ponašanja biće sankcionisano prekidom obilaska i napuštanjem objekta Prirodnjačkog centra.',
  'Nadamo se da ćete uživati u poseti kod nas. Ako vam je potrebna pomoć dok ste ovde slobodno pitajte naše vodiče na info pultu.',
  'Prirodnjački centar nije odgovoran za bilo koju štetu, bilo kojoj osobi koja je posetilac Prirodnjačkog centra, ukoliko je nastala šteta rezultat nepoštovanja propisanih Pravila ponašanja.    ',
]

const contacts = {
  emails: [
    'prirodnjackicentarsrbije@gmail.com',
    'office@prirodnjackicentar.rs',
    'info@prirodnjackicentar.rs',
  ],
  phones: [
    '035/8814001 (08:00 - 16:00 radnim danima)',
    '064/8912932 (10:00 - 17:00 radnim danima, vikendima i praznicima)',
  ],
}

const bikeRentalConditions = [
  '1. USLOVI ZA IZNAJMLjIVANjE BICIKLA \n Bicikl može iznajmiti svako fizičko lice starije od 18 godina koje poseduje važeću ličnu kartu ili drugi identifikacioni dokument i sklopilo je ugovor o iznajmljivanju sa Upravom SVI-BAJK sistema.',
  'Iznajmljivanje bicikala iz sistema SVI-BAJK biće moguća od 01.07.2017. do 31.10.2017. u vremenskom periodu od 10:00 do 20:00 sati. Rok korišćenja može biti produžen ili skraćen. Odluku o promeni termina korišćenja sistema donosi Uprava sistema u zavisnosti od vremenskih prilika.',
  '2. REGISTRACIJA KORISNIKA \n Fizičko lice može se registrovati za korišćenje usluga SVI-BAJK sistema lično u biletarnici Prirodnjačkog centra Srbije, Kralja Petra I br. 111, 35210 Svilajnac.',
  'Nakon prihvaćene registracije, korisnik mora sklopiti ugovor o iznajmljivanju sa Upravom SVI-BAJK sistema. Potpisom ugovora o iznajmljivanju bicikla, korisnik prihvata sve opšte uslove korišćenja usluga SVI-BAJK sistema, potvrđuje da je sa njima bio upoznat pre sklapanja ugovora o iznajmljivanju bicikla, kao i da je saglasan sa njihovom primenom zajedno sa ugovorom o iznajmljivanju bicikla.',
  '3. IZNAJMLjIVANjE BICIKLA I POČETAK KORIŠĆENjA SVI-BAJK \n USLUGE\nFizičko lice koristi bicikl na temelju potpisanog ugovora o iznajmljivanju i preuzete RFID kartice za iznajmljivanje bicikla od odgovorne osobe imenovane od uprave SVI-BAJK sistema. Upravnik SVI-BAJK sistema i korisnik sklopiće ugovor o iznajmljivanju bicikla ukoliko je ispunjen uslov za iznajmljivanje iz tačke 1. opštih uslova. Tom prilikom će uprava SVI-BAJK sistema korisniku izdati RFID karticu za iznajmljivanje bicikla koju korisnik zadržava za ceo vremenski period trajanja ugovora, a koja će biti aktivirana odmah po izdavanju.',
  'Upravnik SVI-BAJK sistema će prilikom sklapanja ugovora o iznajmljvianju bicikla od korisnika uzimati sledeće podatke:',
  'a. Ime i prezime',
  'b. JMBG',
  'c. Adresu (ulica i kućni broj, naselje, poštanski broj, e-mail)',
  'd. Broj mobilnog telefona / kućni broj telefona',
  'Ugovorene strane konstatuju da postoji saglasnost korisnika usluge da se njegova lična karta skenira/kopira za potrebe ugovora, u skladu sa članom 15. Zakona o zaštiti podataka o ličnosti.',
  'Prikupljene podatke o korisniku, upravnik SVI-BAJK sistema sme koristiti isključivo za potrebe SVI-BAJK sistema i korisnika uređene opštim uslovima korišćenja, kao i ugovorom o iznajmljivanju bicikla.',
  'Početak korišćenja bicikla je trenutak kada korisnik isti preuzme tako što prethodno prisloni RFID karticu za iznajmljivanje bicikla na označeno mesto na postolju (totemu), ili unese jednokratni kod na pilonu SVI-BAJK terminala.',
  '4. OGRANIČENjA ZA IZNAJMLjIVANjE I KORIŠĆENjE SVI-BAJK \n SISTEMA\nKorisnik ima pravo da iznajmi samo jedan bicikl.',
  'SVI-BAJK bicikli su bicikli za javnu upotrebu i kao takvi trebaju biti dostupni što većem broju korisnika, pa stoga korisnik može isti bicikl koristiti najviše koliko je i radno vreme Prirodnjačkog centra Srbije u Svilajncu, nakon čega je dužan da bicikl vrati na predviđeno mesto (terminal). Ukoliko se korisnik ne pridržava pravila korišćenja uprava može preduzeti sledeće mere:',
  '1. Za prvo prekoračenje roka korišćenja, upravnik SVI-BAJK sistema naplaćuje za svaki sat prekoračenja iznos utvrđen cenovnikom.',
  '2. Ukoliko korisnik ne plati iznos prekoračenja korišćenja, uprava SVI-BAJK sistema će deaktivirati RFID karticu.',
  '5. USLOVI KORIŠĆENjA BICIKLA \n 1. Iznajmljeni bicikl je dozvoljeno koristiti isključivo za sopstveni prevoz u okviru grada Svilajnca.',
  '2. Korisnik je lično odgovoran za poštovanje saobraćajnih propisa.',
  '3. Korisnik mora voziti bicikl sa obe ruke koje prilikom vožnje moraju biti na upravljaču.',
  '4. Korpa na biciklu služi za prevoz stvari maksimalno do pet kilograma. Prilikom smeštanja stvari u korpu potrebno je voditi računa da se korpa ne preoptereti, kao i da stvari budu dobro učvršćene kako ne bi ispale prilikom vožnje.',
  '5. Korisniku nije dozvoljeno izvođenje bilo kakvih prepravki, popravki ili promena na biciklu.',
  '6. Korisniku se preporučuje upotreba zaštitne kacige.',
  '7. Korisniku je zabranjeno dalje pozajmljivanje, iznajmljivanje ili davanje bicikla na korišćenje trećem fizičkom ili pravnom licu.',
  '8. Pre korišćenja bicikla, korisnik je dužan da proveri ispravnost bicikla, odnosno da proveri da li je bicikl u voznom stanju (ispravnost pedala, lanaca, upravljača, guma, kočnica, svetala i sve drugo što bi moglo uticati na sigurnost vožnje biciklom).',
  '9. Eventualni kvar na biciklu kojeg je korisnik iznajmio, a primeti ga prilikom korišćenja bicikla, dužan je da bez odlaganja prijavi upravi SVI-BAJK sistema. Tom prilikom, uprava SVI-BAJK sistema će dati korisniku drugi, ispravan, bicikl na korišćenje, ukoliko ga ima na raspolaganju.',
  '10. Iznajmljeni bicikl nije dozvoljeno koristiti:',
  'a. za prevoz osobama mlađim od 18 godina',
  'b. za prevoz drugih osoba osim vozača (iz sigurnosnih razloga, naročito dece)',
  'c. za prevoz izvan granica grada Svilajnca',
  'd. za prevoz zapaljivih stvari, eksploziva, otrovnog ili opasnog materijala',
  'e. za učestvovanje u biciklističkim trkama ili druga testiranja bicikli',
  'f. prilikom jakog vetra ili lošeg vremena',
  'g. pod uticajem alkohola ili opojnih sredstava',
  'Radno vreme za mogućnost javljanja upravi SVI-BAJK sistema je svakog dana od 10:00 do 20:00 časova.',
  '6. PARKIRANjE IZNAJMLjENOG BICIKLA \n Za vreme korišćenja bicikla korisnik je dužan parkirati bicikl na predviđenom mestu za to - SVI-BAJK terminalu. Korisnik se obavezuje da će poštovati pomenute saobraćajne propise prilikom parkiranja, kao i da parkirani bicikl ne utiče na sigurnost drugih.',
  'Zabranjeno je parkirati iznajmljeni bicikl:',
  '1. na semaforu',
  '2. prolazima užim od 1.5 metara',
  '3. na prostorima izlaza u slučaju opasnosti',
  '4. na način da bicikl prekriva nečije oglasne površine/prostor za oglašavanje',
  '5. u kućama, dvorištima ili na vozilima',
  '6. na automatu za karte za parkiranje',
  '7. na saobraćajnim znakovima',
  '8. na pešačkom prelazu',
  '7. DUŽNOSTI I ODGOVORNOSTI KORISNIKA\nOdgovornost korisnika za bicikl počinje od trenutka preuzimanja bicikla sa postolja SVI-BAJK terminala i traje do trenutka kada je bicikl ispravno vraćen, te je samim time registrovan u sistemu. Proveriti oznaku na pilonu da je bicikl pravilno zaključan (tek onda je pravilno razdužen).',
  'Korisnik koristi iznajmljeni bicikl na sopstvenu odgovornost .',
  'Uprava SVI-BAJK sistema i Prirodnjačkog centra Srbije u Svilajncu ne odgovaraju za povrede korisnika ili trećih osoba uzrokovane korišćenjem bicikla.',
  'Korisnik preuzima potpunu odgovornost za štetu na biciklu kao i štetu koju iznajmljeni bicikl može prouzrokovati trećim licima i stvarima trećih lica, na način opisan ugovorom o iznajmljivanju bicikla.',
  'U slučaju oštećenja ili nestanka kartice za korišćenje bicikla, korisnik je dužan da nadoknadi troškove izdavanja nove kartice za iznajmljivanje bicikala. U slučaju da Uprava SVI-BAJK sistema, nakon vraćanja bicikla, proverom kompjuterskog sistema i stvarnog stanja bicikla, uoči štetu koju je isključivo mogao uzrokovati korisnik koji je poslednji put po redu vratio bicikl, uprava SVI-BAJK sistema će tog korisnika pisanim putem, na adresu iz ugovora o iznajmljivanju bicikli, obavestiti o visini pričinjene štete, te zatražiti naknadu štete u određenom roku, uz upozorenje o prinudnoj naplati.',
  'Navedeno se odnosi i na štete nastale grubom neodgovornošću ili zbog krađe. Gruba neodgovornost korisnika predstavlja ponašanje korisnika suprotno definisanom u opštim uslovima, nemaran odnos prema biciklu, namerno oštećenje bicikla, oštećenje bicikla uzrokovano grubom nepažnjom korisnika, ostavljanje istog na zabranjeninm mestima, kao i nezaključavanje bicikla koje je dovelo do krađe istog.',
  'Korisnik je odgovoran i za svu dodatnu štetu i troškove koji mogu nastati u slučaju da ne sarađuje sa komisijom prilikom utvrđivanja štete i/ili potrage za počiniteljem krađe bicikla ili štete na biciklu.',
  'U slučaju oštećenja bicikla, korisnik je dužan da u najkraćem mogućem roku obavesti upravu SVI-BAJK sistema. Ukoliko tokom korišćenja bicikla taj isti bicikl bude ukraden, korisnik mora u najkraćem mogućem roku o krađi obavestiti upravu SVI-BAJK sistema (broj telefona 064/8912931) ili Policijsku upravu Svilajnac (broj telefona 192).',
  '8. DUŽNOST I ODGOVORNOST UPRAVE SVI-BIKE SISTEMA',
  'Uprava SVI-BAJK sistema jamči da su svi bicikli, koji se stavljaju na raspolaganje za iznajmljivanje, u voznom stanju, ali ne isključuje mogućnost kvarova koji mogu da nastanu njihovom redovnom upotrebom ili prećutkivanjem korisnika.',
  'Uprava SVI-BAJK sistema ne odgovara za lične stvari koje korisnik prevozi na biciklu.',
  'Uprava SVI-BAJK sistema ne odgovara za štetu koju korisnik pretrpi u slučaju da bicikl ne koristi na propisan način, te za neovlašćenu upotrebu bicikla.',
  'U slučaju krađe bicikla, uprava SVI-BAJK sistema je od nadležnih tela dužna zatražiti broj predmeta pod kojim se vodi prijava o krađi, te formirati spis o ukradenom biciklu, u koji se pod obavezno moraju nalaziti sledeći dokumenti:',
  '- kartica vrednosti bicikla u poslovnim knjigama vlasnika bicikla,',
  '- ugovor sa korisnikom kojem je bicikl ukraden za vreme korišćenja bicikla,',
  '- zapisnik komisije o okolnostima pod kojim je bicikl ukraden,',
  '- prijava nadležnim organima o krađi bicikla.',
  'Uprava SVI-BAJK sistema je odgovorna za sprečavanje neovlašćene upotrebe podataka korisnika od strane trećeg lica. Podaci korisnika, koje je korisnik bicikla dao prilikom zasnivanja ugovornog odnosa o iznajmljivanju bicikla temeljem ovih opštih uslova i ugovora, smeju se koristiti isključivo u svrhu određenu ovim opštim uslovima, a u protivnom, uprava SVI-BAJK sistema odgovara korisniku za neovlašćeno korišćenje ličnih podataka. U slučaju da korisnik primeti da su njegovi podaci zloupotrebljeni, dužan je da o tome pisanim putem odmah obavesti upravu SVI-BAJK sistema, koja je obavezna proveriti navedeni prigovor korisnika, ispitati njegove navode, te ga o nalazu obavestiti, a eventualne zloupotrebe podataka sankcionisati vlastitim aktima, kojim je uređena disciplinska odgovornost zaposlenih za povredu radnih dužnosti.',
  '9. OBAVEŠTENjE U SLUČAJU NEZGODE',
  'U slučaju saobraćajne nezgode, korisnik je dužan odmah prijaviti nezgodu upravi SVI-BAJK sitema na broj telefona 064/8912931 ili Policijskoj upravi u Svilajncu na broj telefona 192.',
  'Ukoliko korisnik ne izvrši prijavu nezgode, biće odgovoran upravi SVI-BAJK sistema za svu štetu na biciklu koja bude prouzrokovana zbog saobraćajne nezgode.',
  '10. ZAVRŠETAK KORIŠĆENjA I VRAĆANjE IZNAJMLjENOG BICIKLA',
  'Završetkom korišćenja bicikla smatra se trenutak kada je korisnik ispravno vratio bicikl na postolje SVI-BAJK terminala. Korisnik je dužan da prakira/vrati bicikl na način da bude vidljiv na jednom od službenih SVI-BAJK terminala. Prilikom vraćanja bicikl mora biti zaključan na način da se ispravno odloži u odgovarajuće postolje SVI-BAJK terminala.',
  'Proveriti oznaku na pilonu da je bicikl pravilno zaključan (tek onda je pravilno razdužen).',
  'Ukoliko korisnik ne vrati bicikl nakon isteka roka od 24 časa od trenutka registracije na SVI-BAJK terminalu, smatraće se da je bicikl otuđen, a uprava SVI-BAJK sistema odmah će izvršiti prijavu Policijskoj upravi u Svilajncu.',
  '11. NAKNADE I CENE',
  'Korisnici SVI-BAJK usluge mogu koristiti SVI-BAJK uslugu besplatno od 01.07.2017 do 31.10. 2017 godine.',
  'Ova uredba se ne odnosi na naknadu štete, skladno uredbama ovih opštih uslova.',
  '12. ZAŠTITA LIČNIH PODATAKA',
  'Uprava SVI-BAJK sistema jamči tajnost ličnih podataka koje mu je na bilo koji način korisnik učinio dostupnima, pod čime se podrazumevaju: ime i prezime, JMBG, adresa i broj mobilnog telefona. Navedene podatke uprava SVI-BAJK sistema nikome neće učiniti dostupnim, osim po nalogu suda, državnog tužilaštva, redarstvenih tela ili u izvršavanju drugih zakonskih obaveza.',
  'Takve će podatke uprava SVI-BAJK sistema koristiti isključivo za potrebe opštih uslova i ugovornog odnosa sa korisnikom, a nakon prestanka korišćenja usluga uprave SVI-BAJK sistema, ti podaci neće više biti korišćeni. Ova zaštita podataka se temelji na Zakonu o zaštiti ličnih podataka i ostalim podzakonskim aktima koji uređuju zaštitu ličnih podataka.',
  '13. OSTALE ODREDBE',
  'Obe ugovorne strane mogu raskinuti ugovor o iznajmljivanju bicikala u bilo kojem trenutku. Za sve eventualne sporove u korišćenju SVI-BAJK sistema nadležan je Opštinski sud u Despotovcu, sudska jedinica Svilajnac. Za sve što nije utvrđeno ovim opštim uslovima, primenjuje se Zakon o obligacionim odnosima.',
  '14. OBAVLjANjE OPŠTIH USLOVA',
  '1. Ovi opšti uslovi biće dostupni u središtu uprave SVI-BAJK sistema i internet',
  'stranici www.prirodnjackicentar.rs',
  '2. U slučaju potrebe za informacijama o SVI-BAJK sistemu, uprava SVI-BAJK',
  'sistema dostupna je na e-mail adresi info@prirodnjackicentar.rs, kao i na broj',
  'telefona 035/8814001 radnim danima od 08:00 do 16:00 časova.',
]

const workingHours = {
  weekday: '10 - 19h',
  weekend: '10 - 20h',
}

const indexInfo = [
  'U Prirodnjačkom centru vas očekuje NAJVREDNIJE PUTOVANJE koje možete da priuštite vašoj porodici. Pitate se kakvo putovanje, zar to nije muzej?',
  'Da, Prirodnjački centar ima muzejski prostor sa 9 stalnih postavki, ali one vas vode na najvrednije putovanje – PUTOVANJE KROZ VREME, koje vas vodi do samog nastanka planete Zemlje, pojave dinosaurusa i njihovog izumiranja, evolucije hominida, pa do egzotičnih Afričkih životinja i raznovrsnosti biodiverziteta Srbije. Ovo je sigurno jedno od vrednijih putovanja koje ćete prirediti vama i vašoj porodici.',
  'Vremensko putovanje vas odvodi u park gde ste okruženi najneverovatnijim bićima koja su živela na našoj planeti – DINOSAURUSI. Dok se krećete kroz pažljivo uređen park dinosaurusa možete ući u VULKAN. Park vam takođe nudi objekte poput suvenirnice, igraonice na otvorenom pored autentičnog ambijenta restorana.',
  'Pružite svojim namilijima jedinstveno i nezaboravno putovanje.',
]

const indexCards = [
  { link: 'izložbe', text: 'Izložbe' },
  { link: 'dinosville', text: 'Dinosville' },
  { link: 'igraonica', text: 'Igraonica' },
  { link: 'restoran', text: 'Restoran' },
  { link: 'suvenirnica', text: 'Suvenirnica' },
]

export {
  colors,
  tickets,
  rules,
  specialRules,
  bikeRentalConditions,
  contacts,
  workingHours,
  indexInfo,
  indexCards,
}
