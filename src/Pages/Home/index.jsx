import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
    <Layout>
        Home
        <div className="grid gat-4 grid-cols-4 w-full max-w-screen-lg">
            {
                items?.map((item, index) => (
                    <Card data={item} key={index}/>
                    ))
            }
        </div>
    </Layout>
    )
}

export default Home
