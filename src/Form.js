import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props;
//create onChange function after creating form inputs
    const onChange = event => {
        const name = event.target.name;
        const value= event.target.value;
        update(name, value);
    }
//create onSubmit function 
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
                <label>Name
                    <input 
                        type='text'
                        name='name'
                        value={values.username}
                        placeholder="Name here!"
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Email here!'
                    onChange={onChange}
                    />
                </label>
                <label>Role
                    <select values={values.role} name='role' onChange={onChange}>
                        <option value=''>--Chose a Role--</option>
                        <option values='Backend'>Backend Engineer</option>
                        <option value='Frontend'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}