import React from 'react'

const Reset = () => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Reset logic here, for demonstration purposes, just logging the email
        console.log('Reset email:', email);
    }

    return (
        <form className='account-form' onSubmit={handleSubmit}>
            <div className='account-form-fields forgot'>
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    required
                />
            </div>
            <button className='btn-submit-form' type='submit'>Reset password</button>
        </form>
    );
}

export default Reset
