import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHHKHak6oJyHw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=NQvBEyuK7CrLGudfqWoUIKDdXW7LNwy7ybA4c8Exi1M" alt="Augusto"/>
        <div>
          <strong>Augusto Borges</strong>
          <span>Vue</span>
        </div>
      </header>
      
      <p>
        Aulas de vue com o mais brabo.
        <br /><br />
        Bora de aulinha com o pai.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem