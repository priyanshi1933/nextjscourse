//metadata only allows in server components, not use in the client components

import { Counter } from "./counter";

export const metadata={
    title:"Counter",
}

export default function CounterPage(){
    return <Counter/>
}