import React from "react";

import "./style.css";

const Contact = () => {
  return (
    <section className="Section-Contact">
      <h1 className="Section-Title">Formulário</h1>

      <form className="Section-Form">
        <div>
          <label for="fname">Nome:</label>
          <input
            className="Section-Input"
            type="text"
            id="fname"
            name="fname"
          />
        </div>

        <div>
          <label for="email">Email:</label>
          <input
            className="Section-Input"
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label for="subject">Mensagem:</label>
          <textarea
            className="Section-Input"
            id="subject"
            name="subject"
            placeholder="Escreva sua mensagem aqui..."
            style={{ height: "200px" }}
          />
        </div>

        <input className="Section-Button"  type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Contact;