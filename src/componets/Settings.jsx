import { Accordion } from "react-bootstrap";
import colors from '../json/colors.json';
import fonts from '../json/fonts.json';
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImportarToJSON from "./ImportarToJSON";
import ExportToJSON from "./ExportToJSON";
import Porcentaje from "./Porcentaje";


const Settings = () => {
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const user = JSON.parse(window.localStorage.getItem('users'))
    const userId = window.localStorage.getItem('userId')

    const changeColor = color => {
        window.localStorage.setItem('color', color)
        window.location.reload()
    }

    const changeFont = font => {
        window.localStorage.setItem('font', font)
        window.location.reload()
    }

    const submit = newUser => {
        user[userId].name = newUser.name;
        user[userId].surname = newUser.surname;
        user[userId].date = newUser.date;
        user[userId].email = newUser.email;
        
        window.localStorage.setItem('users', JSON.stringify(user));
        window.location.reload()
    }

    const closeSession = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        window.sessionStorage.removeItem('token');
        window.location.reload()
    }

    const resetData = () => {
        reset({})
    }

    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Perfil</Accordion.Header>
                <Accordion.Body>
                    <form className='profile-form' onSubmit={handleSubmit(submit)}>
                        {
                            edit ? (
                                <>
                                    <input className='profile-fields' placeholder={user?.[userId].name} type='text' {...register('name')} required/>
                                    <input className='profile-fields' placeholder={user?.[userId].surname} type='text' {...register('surname')} required/>
                                    <input className='profile-fields' type='date' {...register('date')} required/>
                                    <input className='profile-fields' placeholder={user?.[userId].email} type='email' {...register('email')} required/>
                                    <button className='btn-profile'><span className="material-symbols-outlined">save</span>Guardar Cambios</button>
                                </>
                            ) : (
                                <>
                                    <label className='profile-fields'>{user[userId].name}</label>
                                    <label className='profile-fields'>{user[userId].surname}</label>
                                    <label className='profile-fields'>{user[userId].date}</label>
                                    <label className='profile-fields'>{user[userId].email}</label>
                                </>
                            )
                        }
                        <button type="button" onClick={() => setEdit(!edit)} className='btn-profile'><span className="material-symbols-outlined">{user === null ? 'add' : 'edit'}</span>{user === null ? 'Agregar' : 'Editar'} usuario</button>
                        <button type="button" onClick={() => closeSession()} className='btn-profile'><span className="material-symbols-outlined">logout</span>Cerrar sesión</button>
                    </form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Temas</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-colors">
                        {
                            colors.map(color => (
                                <li onClick={() => changeColor(color.name)} key={color.name} className="item-color">
                                    <span style={{ background: `${color.tres}` }}>{color.tres}</span>
                                    <span style={{ background: `${color.uno}` }}>{color.uno}</span>
                                    <span style={{ background: `${color.dos}` }}>{color.dos}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Fuentes</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-font">
                        {
                            fonts.map(font => (
                                <li onClick={() => changeFont(font.name)} key={font.name} className={`item-font ${font.name}`}>{font.name}</li>
                            ))
                        }
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Porcentaje</Accordion.Header>
                <Accordion.Body>
                    <Porcentaje />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Exportar</Accordion.Header>
                <Accordion.Body>
                    <ExportToJSON />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Importar</Accordion.Header>
                <Accordion.Body>
                    <ImportarToJSON />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Settings;
