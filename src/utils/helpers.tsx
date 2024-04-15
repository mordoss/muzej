import { render } from '@react-email/render'
import Email from '../components/Email'

function createSlug(input: string): string {
  const slug = input.trim().toLowerCase().replace(/\s+/g, '-')
  return slug
}

const handleSendForm = async (data: any) => {
  const finalHtml = render(<Email data={JSON.stringify(data)} />)

  const response = await fetch('/methods.json', {
    method: 'POST',
    body: JSON.stringify({
      from: 'milos@mordoss.xyz',
      to: 'milos8petrovic8@gmail.com',
      subject: 'Zahtev',
      html: finalHtml,
      text: 'JSON.stringify(formData)',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
}

export { createSlug, handleSendForm }
