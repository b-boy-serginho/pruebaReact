import { useFetchInvoice } from '../../hooks/useFetchInvoice'

function InvoiceList(){
    const {invoice, loading} = useFetchInvoice();
    console.log("Lista de facturas", invoice)

    if(loading) return <p> Cargando las facturas...</p>;

    return(
        <div>
            <h2>Lista de facturas</h2>
            <ul className='space-y-4'>
                {invoice.map((factura) => (
                    <li key={factura.id} className='border p-4 rounded shadow'>
                        <p className='font-bold text-lg'>{factura.id}</p>
                        <p className='text-sm text-gray-600'>{factura.cliente}</p>
                        <p className='font-bold text-lg'>{factura.importe_total}</p>
                        <p className='font-bold text-lg'>{factura.importe_descuento}</p>
                        <p className='font-bold text-lg'>{factura.fecha}</p>
                        <p className='font-bold text-lg'>{factura.hora}</p>
                        <p className='font-bold text-lg'>{factura.bloqueada}</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default InvoiceList;