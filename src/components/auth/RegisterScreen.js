import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);
    console.log(msgError);

    const [ formValues, handleInputChange ] = useForm({
        name: 'Efrain',
        email: 'efrain@gmail.com',
        password: '123456',
        password2: '123456'
    });

    //extraer los datos con la desestructuracion
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if(isFormValid()){
            console.log('Formulario correcto');
        }
    }

    const isFormValid = () => {

        if(name.trim().length === 0){
            dispatch(setError('El nombre es requerido'))
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('El correo no es valido'))
            return false;
        }else if(password !== password2 || password2.length < 5){
            dispatch(setError('Las contraseñas no son iguales y/o se nesecita una contraseña con al menos 6 caracteres'))
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title"></h3>

            {
                msgError && 
                (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }

            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" value={name} onChange={handleInputChange} />
                <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" value={email} onChange={handleInputChange} />
                <input type="password" placeholder="password" name="password" className="auth__input" value={password} onChange={handleInputChange} />
                <input type="password" placeholder="confirm password" name="password2" className="auth__input" value={password2} onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    ¿Ya estás registrado?
                </Link>
            </form>   
        </>
    )
}
