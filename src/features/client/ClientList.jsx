import { useFetchClient } from '../../hooks/useFetchClient'

function ClientList(){
    const {client, loading} = useFetchClient();
    console.log("Lista de clientes", client)

    if(loading) return <p> Cargando los clientes...</p>;

    return(
        <div>
            <h2>Lista de clientes</h2>
            <ul className='space-y-4'>
                {client.map((cliente) => (
                    <li key={cliente.id} className='border p-4 rounded shadow'>
                        <img src={cliente.foto} className='w-16 h-16 object-cover rounded-full border'/>                        
                        <p className='font-bold text-lg'>{cliente.id}</p>
                        <p className='font-bold text-lg'>{cliente.user}</p>
                        <p className='font-bold text-lg'>{cliente.telefono}</p>
                        <p className='text-sm text-gray-600'>{cliente.direccion}</p>                        
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default ClientList;