
var App = React.createClass({
    getInitialState() {
        return {
            contacts: [
                {
                    id: 1,
                    firstName: 'Jan',
                    lastName: 'Nowak',
                    email: 'jan.nowak@example.com',
                },
                {
                    id: 2,
                    firstName: 'Adam',
                    lastName: 'Kowalski',
                    email: 'adam.kowalski@example.com',
                },
                {
                    id: 3,
                    firstName: 'Zbigniew',
                    lastName: 'Koziol',
                    email: 'zbigniew.koziol@example.com',
                }
            ]
        };
    },
    add(obj) {
        const others = this.state.contacts;
        const nContact = {
            id:uuidv4(),
            firstName: obj.firstName,
            lastName: obj.lastName,
            email:obj.email
        };
        this.setState({contacts:[nContact,...others]});
    },
    render: function () {
        return (
            <div className="app">
                <ContactForm add={this.add} />
                <Contacts items={this.state.contacts} />
            </div>
        );
    }
});
