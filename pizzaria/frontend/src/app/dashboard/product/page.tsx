import { Form } from "./components/form"
import { getCookieServer } from "@/lib/cookieServer"
import { api } from "@/services/api"

export default async function Product(){

    const token = getCookieServer();

    const response = await api.get("/categorys", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return(

        <main>
            <Form categories={response.data} />
        </main>

    )
}