var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <li className="contactItem">
                <img className="contatctImg" src="http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"/>
                <div className="contactDesc">
                     <p className="contactLabel">
                        {this.props.item.firstName}
                    </p>
                    <p className="contactLabel">
                    {this.props.item.lastName}
                    </p>
                    <a href={'mailto:' + this.props.item.email}>
                        {this.props.item.lastName}
                    </a>
                 </div>
            </li>

        );
    }
});
