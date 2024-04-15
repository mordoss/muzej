import { useForm } from 'react-hook-form'
import Input from './Input'
import type { MenuItem } from '../pages/zahtev-za-rucak.astro'
import type { FC } from 'react'
import ButtonCard from './ButtonCard'

interface IProps {
  meals: MenuItem[]
  paragraphes: string[]
}

const MealForm: FC<IProps> = ({ meals, paragraphes }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-2">
        <Input
          type="date"
          label="Datum obroka:"
          register={register}
          errors={errors}
          placeholder="Unesite datum"
        />
        <Input
          type="time"
          label="Vreme obroka:"
          register={register}
          errors={errors}
          placeholder="Unesite vreme"
        />
        <Input
          type="text"
          label="Naručilac:"
          placeholder="Unesite naziv naručioca"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          placeholder="Unestite e-mail"
          label="E-mail:"
          register={register}
          errors={errors}
        />
      </div>
      <div className="grid grid-2 meals">
        {meals.map((meal) => (
          <ButtonCard
            heading={meal.heading}
            options={meal.options}
            dropdowns={meal.dropdowns}
            prices={meal.prices}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <p>Sve cene su sa uračunatim PDV-om.</p>
      <p>{paragraphes[0]}</p>
      <br />
      <Input
        type="textarea"
        label="Napomena:"
        register={register}
        errors={errors}
        placeholder=""
      />
    </form>
  )
}

export default MealForm
