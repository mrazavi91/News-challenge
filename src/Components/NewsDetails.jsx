import { useState } from "react"
import { useParams } from "react-router-dom"
import Filtering from "./Filtering"
import UseFetch from "./UseFetch"

const NewsDetails = () => {
    const list = Filtering();
    console.log(`list:`,list)
  return (
      <div className="news-details">
          {/* {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>} */}
          <article>
              <img src={list.thumbnail} style={{
                  padding: "20px",
                  margin: "20px"
              }} />
              <br />
              <h2>{list.headline}</h2>
              <br />
              <div style={{
                  padding: "20px",
                  margin: "20px",
                  lineHeight: "30px",
                  wordSpacing: "auto"
              }}>{ list.bodyText}</div>
          </article>
    </div>

  )
}

export default NewsDetails