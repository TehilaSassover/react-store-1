import { useState, useEffect } from "react";
import { getProducts } from "../service/store.js";
function StoreItems() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const items = getProducts();
        setProducts(items);
    }, []);

    console.log(products);
    return (
        <div>
            <h1>Store Items</h1>
        </div >
    );
}

export default StoreItems;