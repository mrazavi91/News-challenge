import { useState } from "react"
import { useParams } from "react-router-dom"
import UseFetch from "./UseFetch"

const Filtering = () => {
    const { id } = useParams()
    // const url = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=4aa45470-7bc3-4465-8327-49285e3bf381";
    const url = "http://localhost:5000/response"
    const { data: news, isPending, error } = UseFetch(url)
    console.log(`Details:`, news)

    const result = news.filter(element => element.sectionId === id);
    console.log(`result`, result)
    let final = '';
    const semiFinal = result.map(element => {
        console.log(element.fields)
        final = element.fields
    })
    console.log(`final`, final)
    return final
  
}

export default Filtering