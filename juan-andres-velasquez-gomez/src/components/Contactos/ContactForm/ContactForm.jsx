import { useState } from 'react';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';

function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  function handleClick() {
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="nombre">Nombre Completo</label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Ej. Ana María Gómez"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="nombre@ejemplo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="asunto">Motivo de Consulta</label>
        <select
          id="asunto"
          className="form-control"
          value={asunto}
          onChange={(event) => setAsunto(event.target.value)}
          required
        >
          <option value="">Selecciona un motivo...</option>
          <option value="prestamo">Consulta de libro en sala</option>
          <option value="donacion">Donación de archivo</option>
          <option value="investigacion">Apoyo en investigación académica</option>
          <option value="general">Información general</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          className="form-control"
          placeholder="Describe brevemente tu solicitud..."
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
          required
        />
      </div>

      <Button type="button" className="btn btn-primary" onClick={handleClick}>
        <Icon name="send" className="icon-sm" />
        <span>Enviar Formulario</span>
      </Button>
    </form>
  );
}

export default ContactForm;