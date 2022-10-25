import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = ({ clientes }) => {
    if (clientes === null) clientes = []

    const { register, handleSubmit, reset } = useForm();
    const [service, setService] = useState('');


    const submit = nuevoCliente => {
        nuevoCliente.id = Number(new Date())
        nuevoCliente.service = service
        nuevoCliente.estado = 'activo'
        
        console.log(nuevoCliente)

        clientes.unshift(nuevoCliente)
        window.localStorage.setItem('clientesGuardados', JSON.stringify(clientes));
        resetForm()
        alert(`${nuevoCliente.name} a sido añadio con exito`);
    }

    const resetForm = () => {
        reset(
            {
                date: '',
                name: '',
                price: '',
                colaborador: '',
                description: ''
            }
        )
        setService('')
    }

return (

    <div>
        <main className="contenedor">
            <section className="section-form">
                <form onSubmit={handleSubmit(submit)}>
                    <h2 className="titulo">Ingrese los datos del nuevo cliente</h2>
                    <input  {...register('date')} className="input-form" type="date" required />
                    <input  {...register('name')} className="input-form" type="text" placeholder="* Nombre y Apellido" required />
                    <select defaultValue={"default"} onChange={e => setService(e.target.value)} className="input-form" required >
                        <option disabled value="default">* Seleccionar...</option>
                        <option value="Manicure">Manicure</option>
                        <option value="Pedicure">Pedicure</option>
                        <option value="Depilaciones">Depilaciones</option>
                        <option value="Facial">Limpieza Facial</option>
                        <option value="Masajes">Masajes</option>
                    </select>
                    <input  {...register('price')} className="input-form" type="text" placeholder="* Precio" required />
                    <input  {...register('colaborador')} className="input-form" type="text" placeholder="Colaboradora" />
                    <textarea {...register('description')}  className="input-form description" cols="30" rows="10"></textarea>
                    <input className="input-form btn_form" type="submit" value="Registrar" id="btn_form" />
                </form>
            </section>
        </main>
    </div>
);
};

export default Register;