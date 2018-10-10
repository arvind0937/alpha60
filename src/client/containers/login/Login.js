import React from 'react'

import withStyles from 'isomorphic-style-loader/lib/withStyles'

import styles from './login.scss'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.userEmailRef = React.createRef();
        this.userPasswordRef = React.createRef();
    }

    _onSubmit = () => {
        const inputEmail = this.userEmailRef.current.value;
        const inputPassword = this.userPasswordRef.current.value;
        debugger;
    }

    render() {
        return (
            <div className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="logo">
                                <img src="img/logo.png" />
                            </div>
                            <div className="box">
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-large"
                                            type="email"
                                            placeholder="Your Email"
                                            ref={this.userEmailRef}
                                            autofocus="" />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            className="input is-large"
                                            type="password"
                                            placeholder="Your Password"
                                            ref={this.userPasswordRef}
                                        />
                                    </div>
                                </div>
                                <button
                                    className="button is-block is-info is-large is-fullwidth"
                                    onClick={this._onSubmit}
                                >
                                    Login
                    </button>
                            </div>
                            <p className="has-text-grey">
                                <a href="../">Sign Up</a>  ·&nbsp
                    <a href="../">Forgot Password</a>  ·&nbsp
                    <a href="../">Need Help?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Login)
