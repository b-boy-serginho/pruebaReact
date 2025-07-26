import { useFetchLocation } from '../../hooks/useFetchLocation'

function LocationList(){
    const {location, loading} = useFetchLocation();
    console.log("Lista de ubicaiones", location)

    if(loading) return <p> Cargando las ubicaciones...</p>;

    return(
        <div>
            <h2>Lista de ubicaciones de los clientes</h2>
            <ul className='space-y-4'>
                {location.map((ubicacion) => (
                    <li key={ubicacion.id} className='border p-4 rounded shadow'>
                        <img src={ubicacion.foto} className='w-16 h-16 object-cover rounded-full border'/>                        
                        <p className='font-bold text-lg'>{ubicacion.id}</p>
                        <p className='text-sm text-gray-600'>{ubicacion.cliente}</p>
                        <p className='font-bold text-lg'>{ubicacion.longitud}</p>
                        <p className='font-bold text-lg'>{ubicacion.latitud}</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default LocationList;