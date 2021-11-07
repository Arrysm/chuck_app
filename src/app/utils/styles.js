const styles = {
    main: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    search: {
        width: '30%'
    },
    image: {
        width: '400px',
        height: '300px',
        background: 'url(./chucknorris_logo.png) no-repeat center center',
        backgroundSize: 'contain',
        animation: '$drag 4s ease-in-out infinite'
    },
    select: {
        width: '30%',
        marginTop: '20px'
    },
    divider: {
        width: '60%',
        marginTop: '20px'
    },
    btn: {
        marginTop: '20px'
    },
    itemlist: {
        width: '60%'
    },

    item: {
        width: '90%',
        margin: '0 auto 10px auto',
        padding: '10px 15px'
    },

    '@keyframes drag': {
        '0%': {
            transform: 'translateX(0)'
        },
        '9%': {
            transform: 'translateX(0)'
        },
        '10%': {
            transform: 'translateX(-35px)'
        },
        '15%': {
            transform: 'translateX(35px)'
        },
        '20%': {
            transform: 'translateX(-25px)'
        },
        '25%': {
            transform: 'translateX(25px)'
        },
        '30%': {
            transform: 'translateX(-10px)'
        },
        '35%': {
            transform: 'translateX(10px)'
        },
        '37%': {
            transform: 'translateX(-3px)'
        },
        '40%': {
            transform: 'translateX(3px)'
        },
        '41%': {
            transform: 'translateX(0)'
        },
        '100%': {
            transform: 'translateX(0)'
        },
    }
}

export default styles;