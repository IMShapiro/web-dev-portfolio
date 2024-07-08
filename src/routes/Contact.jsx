import "../assets/styles/Contact.css"

const Contact = () => {
    return (
        <div className="container">
            <h2 className="p-2">Contact Us</h2>
            <form className="container" action="https://formsubmit.co/3380ff4b47603584c420359ddf77932d" method="POST">
                <div className="row">
                    <div className="col">
                        <label className="form-label">First Name</label>
                        <input className="form-control" type="text" name="name" placeholder="Name" required/>
                    </div>

                    <div className="col">
                        <label className="form-label">Surname</label>
                        <input className="form-control" type="text" name="surname" placeholder="Surname"/>
                    </div>  
                </div>
                <label className="form-label">Email</label>
                <input className="form-control" type="text" name="email" placeholder="Email" required/>
                <label className="form-label">Phone number</label>
                <input className="form-control" type="tel" name="number" placeholder="Phone Number"/>
                <label className="form-label">Message</label>
                <input type="hidden" name="_subject" value="New submission!"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <textarea className="form-control" name="message" id="message" placeholder="Your message..." required/>
                <button className="btn bg-teal rounded-pill">Submit</button>
            </form>
        </div>
    )
}

export default Contact