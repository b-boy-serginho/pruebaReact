import { useFetchDetail } from '../../hooks/useFetchDetail'

function DetailList(){
    const {detail, loading} = useFetchDetail();
    console.log("Lista de detalles de la factura", detail)

    if(loading) return <p> Cargando los detalles de la factura...</p>;

    return(
        <div>
            <h2>Lista de detalles de la factura</h2>
            <ul className='space-y-4'>
                {detail.map((detalle) => (
                    <li key={detalle.id} className='border p-4 rounded shadow'>
                        <p className='font-bold text-lg'>{detalle.factura}</p>
                        <p className='font-bold text-lg'>{detalle.producto}</p>
                        <p className='font-bold text-lg'>{detalle.cantidad}</p>
                        <p className='text-sm text-gray-600'>{detalle.precio}</p>
                        <p className='text-sm text-gray-600'>{detalle.subtotal}</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default DetailList;