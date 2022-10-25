import { saveAs } from "file-saver";

const ExportToJSON = () => {
    const clientesGuardados = JSON.parse(window.localStorage.getItem('clientesGuardados'))
    const clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    const porcentaje = JSON.parse(window.localStorage.getItem('porcentaje'))
    const idGuardada = JSON.parse(window.localStorage.getItem('idGuardada'))
    const registro = JSON.parse(window.localStorage.getItem('registro'))
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
            idGuardada: idGuardada
        },
        {
            registro: registro
        }
    ];


    const blob = new Blob([JSON.stringify(dataToExport)], {type: 'text/plain;charset=utf-8'})

    saveAs( blob, 'data-base')
};

export default ExportToJSON;