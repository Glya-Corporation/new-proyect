import { saveAs } from "file-saver";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ExportToJSON = () => {
    const clientesGuardados = JSON.parse(window.localStorage.getItem('clientesGuardados'))
    const clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    const porcentaje = JSON.parse(window.localStorage.getItem('porcentaje'))
    const registro = JSON.parse(window.localStorage.getItem('registro'))
    const advances = JSON.parse(window.localStorage.getItem('advances'))
    const user = JSON.parse(window.localStorage.getItem('user'))

    const dataToExport = [
        {
            clientesGuardados: clientesGuardados
        },
        {
            clientesEliminados: clientesEliminados
        },
        {
            porcentaje: porcentaje
        },
        {
            registro: registro
        },
        {
            advances: advances
        },
        {
            user: user
        }
    ];

    const theData = JSON.stringify(dataToExport)

    const downloadData = () => {
        const blob = new Blob([JSON.stringify(dataToExport)], { type: 'application/json' })

        saveAs(blob, 'data-base')
    }

    return (
        <article className='data-export'>
            <CopyToClipboard text={theData}>
                <p onClick={() => alert('text copied')} className='material-symbols-outlined'>content_copy</p>
            </CopyToClipboard>
            <p onClick={() => downloadData()} className='material-symbols-outlined'>file_download</p>
        </article>
    );
};

export default ExportToJSON;