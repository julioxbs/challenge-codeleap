import { useEffect, useRef, useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../../redux/features/user';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './signup.css';

export default function Signup() {
    let [username, setUsername] = useState('');
    const textInput = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        textInput.current.focus();
    })
    
    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(username, username);
        
        dispatch(login({name: username}));

        // Clear inputs
        setUsername(username = '');
        textInput.current.value = '';

        navigate("/post");
    }

    const inputName = (e) => {
        setUsername(e.target.value);
    }

    return (
        <div className='content__signin'>
            <h2 className='title__signin'>
                Welcome to CodeLeap network!
            </h2>

            <form className='form__signin' onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="username">
                    Please enter your username
                </label>

                <Input
                    className={'input__signin'}
                    id={'username'}
                    placeholder={'John Doe'}
                    type={'text'}
                    onChange={(e) => inputName(e)}
                    ref={textInput} />

                <div className='button__box'>
                    <Button
                        style={username === '' ? { backgroundColor: '#ddd', cursor: 'not-allowed' } : { backgroundColor: '#000' }}
                        type={"submit"}
                        className={'btn'}>
                        ENTER
                    </Button>
                </div>
            </form>
        </div>
    );
}