import React from 'react'
import MessageTextArea from "./MessageTextArea";
import CustomListDropDown from "./CategoriesDropdown";
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { message, category } = e.target.elements
        let conFom = {
            message: message.value,
            category: category.value
        }
        console.log(conFom)
        try {
            let res = await fetch('https://x9pjbaafwf.execute-api.us-west-1.amazonaws.com/dev/notifications', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(conFom),
            });
            console.log('response from the backend')
            console.log(res)
            let resJson = await res.json();
            console.log('response in json format')
            console.log(resJson)
            // if (res.status === 200) {
            //     setFormStatus('Send...')
            // } else {
            //     setFormStatus('Send...')
            // }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="container mt-5">
            <h2>Frontend challenge</h2>
            <form onSubmit={onSubmit}>
                <CustomListDropDown />
                <MessageTextArea />
                <div className="container mt-4">
                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default ContactForm