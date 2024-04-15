import Checkbox, { Options } from './Checkbox'
import Button from './Button'
import Input from './Input'
import '../styles/TicketsForm.css'
import { useForm } from 'react-hook-form'
import { handleSendForm } from '../utils/helpers'
import { useState } from 'react'

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
  const [Rucak, setRucak] = useState<Options | null>(null)
  const [PredstavaBioskop, setPredstavaBioskop] = useState<Options | null>(null)
  const [ObilazakKuce, setObilazakKuce] = useState<Options | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = (data: any) => {
    handleSendForm({ ...data, Rucak, ObilazakKuce, PredstavaBioskop })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid-2 grid">
        <Input
          type="date"
          label="Datum planirane posete:"
          register={register}
          errors={errors}
          placeholder="Unesite datum"
        />
        <Input
          type="time"
          label="Željeno vreme posete:"
          register={register}
          errors={errors}
          placeholder="Unesite vreme"
        />
        <Input
          type="number"
          label="Ukupan broj posetilaca:"
          placeholder="Unesite ukupan broj posetilaca"
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          label="Uzrast posetilaca:"
          placeholder=""
          register={register}
          errors={errors}
        />
        <Checkbox
          label="Da li želite ručak u restoranu?"
          value={Rucak}
          setSelectedOption={setRucak}
        />
        <a href="zahtev-za-rucak">
          Popunite zahtev za ručak u restoranu Centra.
        </a>
        <Checkbox
          label="Da li želite dodatni sadržaj (bioskop/predstavu)?"
          value={PredstavaBioskop}
          setSelectedOption={setPredstavaBioskop}
        />
        <p>
          Grupe koje ručaju u restoranu Centra imaju gratis dodatan sadržaj.
        </p>
        <Checkbox
          label="Da li želite posetu spomen kući Stevana Sinđelića?"
          value={ObilazakKuce}
          setSelectedOption={setObilazakKuce}
        />
      </div>
      <Input
        type="textarea"
        label="Napomena:"
        placeholder=""
        register={register}
        errors={errors}
        required={false}
      />
      <p>
        GRATIS ulazak odobrava se prosvetnim radnicima na sledeći način:
        Predškolci - 1 vaspitač na 10 dece, Đaci - 1 učitelj/nastavnik na 20
        dece; Lekar i vodič po grupi.
      </p>
      <br />
      <p>NAPOMENA:</p>
      <p>{remark}</p>
      <h4 className="sub-heading">Podaci o agenciji koja organizuje posetu</h4>
      <div className="grid-2 grid">
        <Input
          type="text"
          label="Naziv agencije:"
          placeholder="Unesite naziv agencije"
          register={register}
          errors={errors}
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Adresa agencije:"
          placeholder="Unesite adresu agencije"
        />
      </div>
      <div className="grid-3 grid">
        <Input
          register={register}
          errors={errors}
          type="text"
          label="PIB:"
          placeholder="Unesite PIB"
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Matični broj:"
          placeholder="Unesite matični broj"
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="JBKJS:"
          placeholder="Unesite JBKJS"
        />
      </div>
      <div className="grid-2">
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Vlasnik/direktor agencije:"
          placeholder="Unesite ime i prezime"
        />
        <div></div>
        <Input
          register={register}
          errors={errors}
          type="tel"
          label="Kontakt telefon:"
          placeholder="Unesite kontakt telefon"
        />
        <Input
          register={register}
          errors={errors}
          type="email"
          label="E-mail adresa:"
          placeholder="Unesite e-mail adresu"
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Vodič grupe:"
          placeholder="Unesite ime i prezime"
        />
        <Input
          register={register}
          errors={errors}
          type="tel"
          label="Kontakt telefon:"
          placeholder="Unesite kontakt telefon"
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Način plaćanja:"
          placeholder=""
        />
      </div>
      <h4 className="sub-heading">
        Podaci o instituciji / školi / ustanovi koja dolazi posetu
      </h4>
      <div className="grid-2">
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Naziv institucije / škole / ustanove:"
          placeholder="Unesite naziv"
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Mesto institucije / škole / ustanove:"
          placeholder="Unesite mesto"
        />
        <Input
          register={register}
          errors={errors}
          type="tel"
          label="Kontakt telefon:"
          placeholder="Unesite kontakt telefon"
        />
        <Input
          register={register}
          errors={errors}
          type="email"
          label="E-mail adresa:"
          placeholder="Unesite e-mail adresu"
        />
        <Input
          register={register}
          errors={errors}
          type="text"
          label="Odgovorno lice:"
          placeholder="Unesite ime i prezime"
        />
      </div>
      <div className="rules">
        {rules.map((rule, i) => (
          <p key={i}>{rule}</p>
        ))}
      </div>
      <br />
      <p>NAPOMENA:</p>
      <p>{remarkSecond}</p>
      <Button text="Pošaljite zahtev" style={{ marginTop: '4rem' }} />
    </form>
  )
}

export default TicketsForm
