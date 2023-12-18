import { AppBar } from "@/components/AppBar/AppBar"
import Header from "@/components/Header"

export default function Test() {

    return(
        <>
        <AppBar title={"App Bar"} />
        <div style={{ display: 'flex', paddingTop: 60}}>
            <p>TEST Page</p>
        </div>
        </>
        )
}