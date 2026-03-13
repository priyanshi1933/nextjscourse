import { resolve } from "path"

//nested route
export default async function Blog(){
    //Loading
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve("intentional delay")
        },2000)
    })
    return <h1>My blog</h1>
}