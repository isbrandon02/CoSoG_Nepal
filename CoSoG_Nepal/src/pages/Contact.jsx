import "./Contact.css"

function Contact() {
    return(
        <>
            <div className="form--page">
                <div className="form">
                    <h3>Send a message</h3>
                    <p>Email</p>
                    <input type="text" />
                    <p>Phone number</p>
                    <input type="text" />
                    <p>Message</p>
                    <input type="text"/>
                </div>
            </div>
        </>
    )
}

export default Contact