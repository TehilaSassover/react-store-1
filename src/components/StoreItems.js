import { useState, useEffect } from "react";
import { getProducts } from "../service/store.js";
function StoreItems() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const items = await getProducts();
            setProducts(items);
        }
        fetchData();
    }, []);



    console.log(products);
    return (
        <div>
            <h1>Store Items</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <li>{product.title}</li>
                </div>
            ))
            }
        </div>
    );
}

export default StoreItems;