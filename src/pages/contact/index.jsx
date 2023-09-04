import React, { useEffect, useState } from 'react';
import { Input } from '../../components/input';
import './styles.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const [active, setActive] = useState(false);

  const onChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const onFocus = () => {
    setActive(true);
  };

  const onBlur = () => {
    setActive(false);
  };

  useEffect(() => {
    console.log("Componente montado...");

    return () => {
      console.log("Componente desmontado...");
    };
  }, []);

  const inputClass = `container ${active ? 'active' : ''}`;

  return (
    <>
      <div className="contactContainer">
        <div className="input-wrapper">
          <label htmlFor="name">Nombre</label>
          <Input
            placeholder="Ex: Daniel"
            id="name"
            required={true}
            onChange={(e) => onChange(e, setName)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClass}
            value={name}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="surname">Surname</label>
          <Input
            placeholder="Ex: Benitez"
            id="surname"
            required={true}
            onChange={(e) => onChange(e, setSurname)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClass}
            value={surname}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Ex: cdanibenz@gmail.com"
            id="email"
            required={true}
            onChange={(e) => onChange(e, setEmail)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClass}
            value={email}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="address">Address</label>
          <Input
            placeholder="Ex: cdanibenz@gmail.com"
            id="address"
            required={true}
            onChange={(e) => onChange(e, setAddress)}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClass}
            value={address}
          />
        </div>
      
        
      </div>
    </>
  );
};
