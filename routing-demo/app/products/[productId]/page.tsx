import { Metadata } from "next";

//dynamic metadata
type Props={
    params:Promise<{productId:string}>;
};

export const generateMetadata=async({params}:Props):Promise<Metadata>=>{
    const id=(await params).productId
    return {
        title:`Product ${id}`
    }
}

//dynamic routes
export default async function ProductDetails({params}:Props){
    const productId=(await params).productId
    return <h1>Details about product {productId}</h1>
}