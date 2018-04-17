var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('li', { className: 'contactItem' },
                React.createElement('img', {
                    src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico',
                    className: 'contactImg'
                }),
                React.createElement('div', { className: 'contactDesc' },
                    React.createElement('p', { className: 'contactLabel' }, this.props.item.firstName),
                    React.createElement('p', { className: 'contactLabel' }, this.props.item.lastName),
                    React.createElement('a', { className: 'contactEmail', href: 'mailto' + this.props.item.email }, this.props.item.email)
                )
            )
        );
    }
});
