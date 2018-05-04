var ContactForm = React.createClass({
    addContact(e) {
        e.preventDefault();
        let form = e.target;
        const contact = {
            firstName: form.childNodes[0].value,
            lastName: form.childNodes[1].value,
            email: form.childNodes[2].value
        }
        this.props.add(contact);
        form.childNodes[0].value = "";
        form.childNodes[1].value = "";
        form.childNodes[2].value = "";
    },
    render: function () {
        return (
            <form className="contactform" onSubmit={this.addContact}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <button type="submit">
                    Add contact
                </button>
            </form>
        );
    }
});
