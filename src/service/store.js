export async function getProducts() {
    try {
        let localProducts = localStorage.getItem("products");
        if (localProducts) {
            return JSON.parse(localProducts);
        }

        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        localStorage.setItem("products", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}
