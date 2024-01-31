// import { useEffect, useState } from "react"
import { useContext } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDelail from "../../Components/ProductDetail"
import { ShoppingCardContext } from "../../Context";

function Home() {

    const context = useContext(ShoppingCardContext)

    const renderView = () => {
        if (context.searchByTitle?.length > 0){
            if (context.filteredItems?.length > 0){
                return(
                    context.filteredItems?.map((item, index) => (
                        <Card data={item} key={index}/>
                    ))
                )
            }else{
                return(
                    <div>We dont have anything</div>
                )
            }
        }else{
            return(
                context.items?.map((item, index) => (
                    <Card data={item} key={index}/>
                    ))
            )
        }
    }

    return (
    <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl">Home</h1>
        </div>
        <input 
            type="text"    
            placeholder="Search a product"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" 
            onChange={(event)=> context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gat-4 grid-cols-4 w-full max-w-screen-lg">
            {
                renderView()
            }
        </div>
        <ProductDelail/>
    </Layout>
    )
}

export default Home
