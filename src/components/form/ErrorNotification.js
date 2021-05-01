const ErrorNotification = ({ field, msg = "To pole jest wymagane" }) => {
    const invalidStyled = {
        fontSize: '11px',
        color: '#dc3545',
        fontWeight: '500',
    };

    if (field?.type === 'required') {
        return (
            <span style={invalidStyled}>To pole jest wymagane</span>
        )
    }

    return (
        field && <span style={invalidStyled}>{ msg }</span>
    )
}

export default ErrorNotification;
