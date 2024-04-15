import { useForm } from 'react-hook-form'
import Button from './Button'
import Input from './Input'
import '../styles/ContactForm.css'
import { handleSendForm } from '../utils/helpers'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = (data: any) => {
    handleSendForm(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="name-email">
        <div>
          <Input
            placeholder="Vaše ime"
            type="text"
            label="Vaše ime"
            register={register}
            errors={errors}
            hiddenLabel
          />
        </div>
        <div>
          <Input
            placeholder="Vaša e-mail adresa"
            type="email"
            register={register}
            errors={errors}
            label="Vaša e-mail adresa"
            hiddenLabel
          />
        </div>
      </div>
      <Input
        hiddenLabel
        placeholder="Vaša poruka"
        type="textarea"
        register={register}
        errors={errors}
        label="Vaša poruka"
      />
      <div className="social">
        <Button text="Pošaljite poruku" />
        <a
          href="https://www.facebook.com/prirodnjackicentar.svilajnac/?locale=sr_RS"
          target="blank"
        >
          <img src="fb.svg" alt="" />
        </a>
        <a
          href="https://www.instagram.com/prirodnjackicentarsrbije/?hl=en"
          target="blank"
        >
          <img src="ig.svg" alt="" />
        </a>
      </div>
    </form>
  )
}

export default ContactForm
