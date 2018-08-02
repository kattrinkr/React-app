const Styles = theme => ({
    h1: {
        color: '#757575',
        fontSize: '45px',
        textAlign: 'center'
    },

    instruction: {
        fontSize: '20px',
        textAlign: 'center'
    },

    form: {
        width: '15%',
        margin: '70px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'static'
    },

    input: {
        width: '100%',
        flex: '1 1 70px',
        fontSize: '18px'
    },

    button: {
        margin: '20px',
        width: '110px'
    },

    realTime: {
        position: 'absolute',
        top: '270px',
        left: '1110px',
        display: 'flex',
        flexDirection: 'column',
    },

    p: {
        fontSize: '18px'
    },

    emailError: {
        position: 'absolute',
        fontSize: '14px',
        color: 'red',
        top: '300px',
        left: '808px'
    },

    passwordError: {
        position: 'absolute',
        fontSize: '14px',
        color: 'red',
        top: '368px',
        left: '808px'
    }
  });
  
  export default Styles;