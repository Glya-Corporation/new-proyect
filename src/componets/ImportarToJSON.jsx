const ImportarToJSON = () => {
    const clientesGuardados = JSON.parse(window.localStorage.getItem('clientesGuardados'))
    const clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    const porcentaje = JSON.parse(window.localStorage.getItem('porcentaje'))
    const idGuardada = JSON.parse(window.localStorage.getItem('idGuardada'))
    const registro = JSON.parse(window.localStorage.getItem('registro'))
    const dataToImport = [ 'clientesGuardados', 'clientesEliminados', 'porcentaje', 'idGuardada', 'registro'];

    const readFile = file => {
        if(!file) return
        const fileReader = new FileReader();
        
        fileReader.readAsText( file )
        
        fileReader.onload = () => {
            const dataMain = JSON.parse(fileReader.result)
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