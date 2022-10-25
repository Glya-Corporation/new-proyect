import React, { useEffect } from 'react';

const Porcentaje = () => {
    const savedPercentage = JSON.parse(window.localStorage.getItem('porcentaje'))

    useEffect(() => {
        if (savedPercentage === null) p()
    }, [])

    const p = () => {
        let porcentaje = prompt('Ingresa el porcentaje de ganancia con un formato de numero entero!!');

        if (porcentaje) {
            window.localStorage.setItem('porcentaje', JSON.stringify(porcentaje));
            alert(`Listo! has cambiado el porsentaje de ganancias, ahora es del: ${porcentaje}%`)
            location.reload();
        } else {
            alert('No has guardado ningun valor')
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
            }}
        >
            <p>{savedPercentage} %</p>
            <button
                onClick={p}
                style={{
                    border: 'transparent',
                    padding: '.5rem',
                    background: 'var(--primario)',
                    borderRadius: '.5rem',
                    color: 'var(--blanco)'
                }}
            >Cambiar Porcentaje</button>
        </div>
    );
};

export default Porcentaje;