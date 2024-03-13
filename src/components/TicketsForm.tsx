import Checkbox from './Checkbox'
import Button from './Button'
import Input from './Input'

const remark =
  'Trajanje obilaska Centra ograničeno je na 90 minuta osim u slučaju organizovanog ručka u restoranu Centra, kada je poseta ograničena na 120 minuta. Za nepoštovanje dogovorenog termina posete, Centar ne garantuje ulazak i obilazak (bez obzira na izvršenu uplatu).'
const rules = [
  '- Grupnu posetu je neophodno najaviti najkasnije nedelju dana pre planiranog dolaska;',
  '- Željeni termin posete određuje se u zavisnosti od slobodnih termina;',
  '- Plaćanje se vrši avansno najkasnije dan pred dolazak ili gotovinom na bileternici;',
  '- Dokaz o avansnoj uplati neophodno je pokazati na biletarnici Prirodnjačkog centra pre ulaska;',
]
const remarkSecond =
  'Podnošenje ovog zahteva istovremeno predstavlja i podnošenje zahteva za izradu e-fakture za pravno lice - podnosioca zahteva. To podrazumeva sledeću proceduru: evidencija prometa na fiskalnoj kasi, refundacija tog fiskalnog isečka u istom danu i izrada e-fakture sa istim datumom prometa i iznosom prometa. Procedura će se sprovoditi sve do trenutka kada se programski omogući da evidencija prometa na fiskalnoj kasi podrazumeva i automatsku izradu e-fakture, odnosno dođe do drugih uputstava nadležnih državnih organa.'

const TicketsForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'milos@mordoss.xyz',
          to: 'milos@mordoss.xyz',
          subject: '`Hi, ${d.name}`',
          html: 'finalHtml',
          text: 'finalText',
        }),
      })
      const data = await res.json()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form>
      <div className="grid-2">
        <Input
          type="date"
          label="Datum planirane posete:"
          placeholder="Unesite datum"
        />
        <Input
          type="time"
          label="Željeno vreme posete:"
          placeholder="Unesite vreme"
        />
        <Input
          type="number"
          label="Ukupan broj posetilaca:"
          placeholder="Unesite ukupan broj posetilaca"
        />
        <Input type="number" label="Uzrast posetilaca:" placeholder="" />
        <Checkbox label="Da li želite ručak u restoranu?" />
        <a href="zahtev-za-rucak">
          Popunite zahtev za ručak u restoranu Centra.
        </a>
        <Checkbox label="Da li želite dodatni sadržaj (bioskop/predstavu)?" />
        <p>
          Grupe koje ručaju u restoranu Centra imaju gratis dodatan sadržaj.
        </p>
        <Checkbox label="Da li želite posetu spomen kući Stevana Sinđelića?" />
      </div>
      <Input type="textarea" label="Napomena:" placeholder="" />
      <p>
        GRATIS ulazak odobrava se prosvetnim radnicima na sledeći način:
        Predškolci - 1 vaspitač na 10 dece, Đaci - 1 učitelj/nastavnik na 20
        dece; Lekar i vodič po grupi.
      </p>
      <br />
      <p>NAPOMENA:</p>
      <p>{remark}</p>
      <h4>Podaci o agenciji koja organizuje posetu</h4>
      <div className="grid-2">
        <Input
          type="text"
          label="Naziv agencije:"
          placeholder="Unesite naziv agencije"
        />
        <Input
          type="text"
          label="Adresa agencije:"
          placeholder="Unesite adresu agencije"
        />
      </div>
      <div className="grid-3">
        <Input type="text" label="PIB:" placeholder="Unesite PIB" />
        <Input
          type="text"
          label="Matični broj:"
          placeholder="Unesite matični broj"
        />
        <Input type="text" label="JBKJS:" placeholder="Unesite JBKJS" />
      </div>
      <div className="grid-2">
        <Input
          type="text"
          label="Vlasnik/direktor agencije:"
          placeholder="Unesite ime i prezime"
        />
        <div></div>
        <Input
          type="tel"
          label="Kontakt telefon:"
          placeholder="Unesite kontakt telefon"
        />
        <Input
          type="email"
          label="E-mail adresa:"
          placeholder="Unesite e-mail adresu"
        />
        <Input
          type="text"
          label="Vodič grupe:"
          placeholder="Unesite ime i prezime"
        />
        <Input
          type="tel"
          label="Kontakt telefon:"
          placeholder="Unesite kontakt telefon"
        />
        <Input type="text" label="Način plaćanja:" placeholder="" />
      </div>
      <h4>Podaci o instituciji / školi / ustanovi koja dolazi posetu</h4>
      <div className="grid-2">
        <Input
          type="text"
          label="Naziv institucije / škole / ustanove:"
          placeholder="Unesite naziv"
        />
        <Input
          type="text"
          label="Mesto institucije / škole / ustanove:"
          placeholder="Unesite mesto"
        />
        <Input
          type="tel"
          label="Kontakt telefon:"
          placeholder="Unesite kontakt telefon"
        />
        <Input
          type="email"
          label="E-mail adresa:"
          placeholder="Unesite e-mail adresu"
        />
        <Input
          type="text"
          label="Odgovorno lice:"
          placeholder="Unesite ime i prezime"
        />
      </div>
      <p>
        {rules.map((rule, i) => (
          <p key={i}>{rule}</p>
        ))}
      </p>
      <br />
      <p>NAPOMENA:</p>
      <p>{remarkSecond}</p>
      <Button text="Pošaljite zahtev" marginTop="4rem" wide />
    </form>
  )
}

export default TicketsForm
