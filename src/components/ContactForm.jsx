import React from 'react'

export const ContactForm = () => {
    return (
        <div className='contact'>
            <div className="contact__container">
                <div className="contact__left">
                    <h2 className="contact__title">Have a Question ? <br /> Get in Touch with us 👋</h2>
                    <h4 className="contact__subtitle">Fill up the Form  and ou team will get back to within 24 hrs</h4>

                    <form>
                        <div className='contact__form'>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' />
                            <textarea cols="30" rows="6" placeholder='Message'></textarea>
                        </div>

                        <button onClick={(e) => e.preventDefault()} className='contact__submit'>Send Message</button>


                    </form>
                </div>

                <div className="contact__right">
                    <img src="../../design/Contact Image 1.png" alt="contact" />
                    <img src="../../design/Contact Image 2.png" alt="contact" />
                </div>


            </div>

        </div>
    )
}
