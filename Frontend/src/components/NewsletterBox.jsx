import React from 'react'

const NewsletterBox = () => {
    const onSubmithandler = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        if (email) {
            alert(`Subscribed with ${email}`)
            e.target[0].value = ''
        } else {
            alert('Please enter a valid email')
        }
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum is simple dummy text of the printing and typesetting industry.</p>
        <form onSubmit={onSubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none required' />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
