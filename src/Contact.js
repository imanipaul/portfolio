import React from 'react'

function Contact(props) {
    return (
        <div className='contact-container'>
            <form>
                <input name='name' type='text' placeholder='Name' />
                <input name='email' type='text' placeholder='Email' />
                <input name='message' type='text' placeholder='Message' />
            </form>
        </div>
    )
}

export default Contact