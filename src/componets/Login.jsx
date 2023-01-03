import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isLogged, setIsLogged] = useState(true);
    const usersLocal =  JSON.parse(window.localStorage.getItem('users')) || JSON.parse(window.sessionStorage.getItem('users')) || [];
    const navigate = useNavigate();

    const submit = userIn => {
        if (usersLocal.length < 1) return alert("Haven't users in local storage, first register a user")
        const searchUser = usersLocal.findIndex(user => user.email === userIn.email && String(user.password) === String(userIn.password));
        
        window.localStorage.setItem('userId', searchUser);
        
        if (searchUser !== -1) {
            if (userIn.remember) {
                window.localStorage.setItem('token', userIn.remember)
            } else {
                window.sessionStorage.setItem('token', true)
            }
            reset('')
            navigate('/');
        } else {
            alert('Usuario no encontrado')
        }
    }

    const singUp = newUser => {
        delete newUser.remember;
        const { email, password, passwordRepeat } = newUser;
        if (password !== passwordRepeat) return alert('Las contraseñas no coinciden');
        const searchUser = usersLocal.find(user => user.email === email);
        if (searchUser) return alert('Este usuario ya existe');
        delete newUser.passwordRepeat;
        usersLocal.unshift(newUser);
        window.localStorage.setItem('users', JSON.stringify(usersLocal));
        alert('Usuario creado con exito');
        setIsLogged(!isLogged);
    }

    return (
        <main>
            {
                isLogged ? (
                    <Form className="form-login" onSubmit={handleSubmit(submit)}>
                        <h2>Hello welcome to app.</h2>
                        <h4>Login now</h4>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control {...register('email')} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Nunca compartiremos su correo con nadie más.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control {...register('password')} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check {...register('remember')} type="checkbox" label="Recordar" />
                        </Form.Group>
                        <p onClick={() => setIsLogged(!isLogged)} style={{ color: '#0055ff', textDecoration: 'underline' }}>You need an acount?</p>
                        <Button variant="primary" type="submit">Entrar</Button>
                    </Form>
                ) : (
                    <Form className="form-login" onSubmit={handleSubmit(singUp)}>
                        <h2>Hi! Sing up here.</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre y Apellido:</Form.Label>
                            <Form.Control {...register('name')} type="text" placeholder="Enter name" />
                            <Form.Control {...register('surname')} type="text" placeholder="Enter surname" />
                            <Form.Label>Fecha de nacimiento:</Form.Label>
                            <Form.Control {...register('date')} type="date" placeholder="Enter date of birth" />
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control {...register('email')} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control {...register('password')} type="password" placeholder="Password new" />
                            <Form.Control {...register('passwordRepeat')} type="password" placeholder="Password repeat" />
                        </Form.Group>
                        
                        <p onClick={() => setIsLogged(!isLogged)} style={{ color: '#0055ff', textDecoration: 'underline' }}>You have an acount?</p>
                        <Button variant="primary" type="submit">Entrar</Button>
                    </Form>
                )
            }
        </main>
    );
};

export default Login;