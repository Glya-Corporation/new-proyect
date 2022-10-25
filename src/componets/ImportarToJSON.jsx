const   ImportarToJSON = () => {
    const dataToImport = [ 'clientesGuardados', 'clientesEliminados', 'porcentaje', 'registro', 'advances', 'user'];

    let dataMain = null

    const readFile = file => {
        if(!file) return
        const fileReader = new FileReader();
        
        fileReader.readAsText( file )
        
        fileReader.onload = () => {
            dataMain = JSON.parse(fileReader.result)
        }

    }

    const sendData = () => {
        for (let i = 0; i < dataToImport.length; i++) {
            let text = dataToImport[i]
            window.localStorage.setItem(`${text}`, JSON.stringify(dataMain[i][`${text}`]))
            location.reload();
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
            <button
                onClick={() => sendData()}
                style={{
                    border: 'transparent',
                    padding: '.5rem',
                    background: 'var(--primario)',
                    borderRadius: '.5rem',
                    color: 'var(--blanco)',
                    marginTop: '1rem'
                }}    
            >Cargar</button>
        </div>
    );
};

export default ImportarToJSON;