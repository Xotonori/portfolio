import React from 'react'
import classes from './Contacts.module.scss'
import Input from "../Input/Input";

class Contacts extends React.Component {

    state = {};

    isInputError = text => text.length === 0;

    render() {
        let errorClass = this.props.errorClass;

        return (
            <div id={this.props.id} className={`${classes.Contacts} ${this.props.projectWidth}`}>
                <div className={classes.myContacts}>
                    gfdhgfnfnhg
                </div>
                <div className={classes.callBackForm}>
                    <div className={classes.inputsWrapper}>
                        <Input
                            placeholder={'Ваше имя'}
                            value={this.props.yourName}
                            className={classes.yourName}
                            errorClass={errorClass}
                            onChange={this.props.onChange}
                        />
                        <Input
                            placeholder={'Ваш email'}
                            value={this.props.yourEmail}
                            className={classes.yourEmail}
                            errorClass={errorClass}
                            onChange={this.props.onChange}
                        />
                        <Input
                            placeholder={'Ваш телефон'}
                            value={this.props.yourPhoneNumber}
                            className={classes.yourPhoneNumber}
                            errorClass={errorClass}
                            onChange={this.props.onChange}
                        />
                        <Input
                            placeholder={'Тема'}
                            value={this.props.themeOfMessage}
                            className={classes.themeOfMessage}
                            errorClass={errorClass}
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className={classes.messageWrapper}>
                        <textarea
                            placeholder={'Ваше сообщение'}
                            value={this.props.yourMessage}
                            className={`${classes.yourMessage} ${errorClass}`}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default Contacts;