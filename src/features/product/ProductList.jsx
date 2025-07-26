import { useFetchProduct } from '../../hooks/useFetchProduct'

function ProductList(){
    const {product, loading} = useFetchProduct();
    console.log("Lista de productos", product)

    if(loading) return <p> Cargando los productos...</p>;

    return(
        <div>
            <h2>Lista de productos</h2>
            <ul className='space-y-4'>
                {product.map((producto) => (
                    <li key={producto.id} className='border p-4 rounded shadow'>
                        <img src={producto.imagen} className='w-16 h-16 object-cover rounded-full border'/>                        
                        <p className='text-sm text-gray-600'>{producto.nombre}</p>
                        <p className='font-bold text-lg'>{producto.descripcion}</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default ProductList;