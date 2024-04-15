import React from 'react'
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

// Define interface for the props
interface SampleEmail {
  data: string
}

// Define type for the parsed data
type ParsedData = Record<string, string>

// Email component
const Email: React.FC<SampleEmail> = ({ data }) => {
  // Style definitions
  const styles = {
    main: {
      backgroundColor: '#ffffff',
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
    container: {
      margin: '0 auto',
      padding: '20px 0 48px',
    },
  }

  // Parse data and render email content
  const renderEmailContent = () => {
    let parsedData: ParsedData = {}
    try {
      parsedData = JSON.parse(data)
      return (
        <Container style={styles.container}>
          {Object.entries(parsedData).map(([key, value]) => (
            <Section key={key}>
              <Text style={{ color: 'red' }}>{key}:</Text>
              <Text>{value}</Text>
            </Section>
          ))}
        </Container>
      )
    } catch (error) {
      console.error('Error parsing JSON:', error)
      return null
    }
  }

  return (
    <Html>
      <Head />
      <Preview>Poruka korisnika</Preview>
      <Body style={styles.main}>{renderEmailContent()}</Body>
    </Html>
  )
}

export default Email
