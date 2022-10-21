import { useState } from "react";

const ImportarToJSON = () => {
    const clientesGuardados = JSON.parse(window.localStorage.getItem('clientesGuardados'))
    const clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    const porcentaje = JSON.parse(window.localStorage.getItem('porcentaje'))
    const idGuardada = JSON.parse(window.localStorage.getItem('idGuardada'))
    const registro = JSON.parse(window.localStorage.getItem('registro'))
    const dataToImport = [ 'clientesGuardados', 'clientesEliminados', 'porcentaje', 'idGuardada', 'registro'];

    const [dataMain, setDataMain] = useState('')

    const readFile = file => {
        if(!file) return
        const fileReader = new FileReader();
        
        fileReader.readAsText( file )
        
        fileReader.onload = () => {
            console.log(JSON.parse(fileReader.result))
            setDataMain(true)
            console.log(dataMain)
        }

    }


    return (
        <div>
            <input
                type="file"
                name="file"
                id=""
                onChange={e => readFile(e.target.files[0])} 
            />
        </div>
    );
};

export default ImportarToJSON;