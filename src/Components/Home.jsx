import NewsList from "./NewsList"
import UseFetch from "./UseFetch"


const Home = () => {
    // const url = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=4aa45470-7bc3-4465-8327-49285e3bf381";
    const url = 'http://localhost:5000/response';
    const { data: news, isPending, error } = UseFetch(url)
    // console.log(`news are`,news)
  return (
      <div className='Home'>
          <br />
          <h2>Today's News:</h2>
          {error && <div> {error} </div>}
          {isPending && <div>Loading...</div>}
          <br />
          {news && <NewsList news={news} />}
          
      </div>
  )
}

export default Home