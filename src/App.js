import React, { useState } from 'react';
import Form from './Form'
import Member from './Member';
import { render } from 'react-dom'
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  //set state of team members
  const [teamMembers, setTeamMembers] = useState([]);
  //Step 1: set state to hold all form values
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newMember.name || !newMember.email || !newMember.role) {
      setError('You have to follow directions!');
      return;
    }

    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>Team Members Form</h1>
      <h3 className='error'>{error}</h3>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />  

{
        teamMembers.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
  }
