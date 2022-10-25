import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import users from "../json/users.json"

const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const submit = userIn => {
        const searchUser = users.find(user => user.email === userIn.email && String(user.password) === String(userIn.password))
        if(searchUser) {
            if (userIn.remember) {
                window.localStorage.setItem('token', userIn.remember)
            } else {
                window.sessionStorage.setItem('token', true)
            }
            reset('')
        }
        console.log(searchUser);
    }

    return (
        <Form className="form-login" onSubmit={handleSubmit(submit)}>
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
            <Button variant="primary" type="submit">Entrar</Button>
        </Form>
    );
};

export default Login;