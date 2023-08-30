import React, { useEffect, useState } from 'react'
import { Input } from '../../components/input'
import './styles.css'
export const ContactForm = () => {

  const [task, setTask] = useState('');
  const [active, setActive] = useState(false);

  const onChange = (event) => {
    const value = event.target.value;
    setTask(value)
  }

  const onFocus = () => {
    setActive(true);
  }

  const onBlur = () => {
    setActive(false);
  }

  useEffect(() => {
    console.log("Hi function useEffect mount..");

    return () => {
      console.log("Dismount..");
    }
  }, [])

  const inputClass = `container ${active ? active : ''}`

  return (
    <div className='contactContainer'>

      <Input
        placeholder='Add a new task'
        id='task'
        required={true}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={inputClass}
        name='Task'
      />

      <Input
        placeholder='Add a new task'
        id='a'
        required={true}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={inputClass}
        name='a'
      />

     
    </div>
  )
}
