// store-block/react/Countdown.tsx
import React, {useState} from 'react'
import { useCssHandles } from 'vtex.css-handles'
import api from './services/api'

interface CountdownProps {
}

const CSS_HANDLES = ['leadDiv','leadName','leadEmail','leadPhone', 'leadButton', 'leadMsg']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {

  const handles = useCssHandles(CSS_HANDLES)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [funcionou, setFuncionou] = useState(false)

  function registerLeads (e: any) {
    e.preventDefault()
    const dados = {
      "name": name,
      "email": email,
      "phone": phone
    }
    api.post("leadresource", dados).then(() => {
      setFuncionou(true)
    })

  }

  function guardaNome(e: any) {
    const value = e.target.value
    setName(value)
  }
  function guardaEmail(e: any) {
    const value = e.target.value
    setEmail(value)
  }
  function guardaPhone(e: any) {
    const value = e.target.value
    setPhone(value)
  }

  return (
    <>
    {funcionou? 
    (<div className={`${handles.leadMsg}`}>Sucesso! Confira seu Email!</div>)
    :
      <form className={`${handles.leadDiv}`} onSubmit={registerLeads}>
        <label htmlFor="lead-name"></label>
        <input type="text" name="name" id="lead-name" onChange={guardaNome} className={`${handles.leadName}`} placeholder="Nome"/>
        <label htmlFor="lead-email"></label>
        <input type="text" name="email" id="lead-email" onChange={guardaEmail} className={`${handles.leadEmail}`} placeholder="Email"/>
        <label htmlFor="lead-phone"></label>
        <input type="text" name="phone" id="lead-phone" onChange={guardaPhone} className={`${handles.leadPhone}`} placeholder="Telefone"/>
        <button type="submit" className={`${handles.leadButton}`}>Cadastrar</button>
      </form>
    }
    </>
  )
}



Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object'
}

export default Countdown