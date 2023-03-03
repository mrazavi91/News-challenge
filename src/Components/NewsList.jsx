
import { Link } from 'react-router-dom'

const NewsList = ({ news }) => {

    const outputList = news.map(element =>
        
        <div className='container' key={element.id}>
            <img src={element.fields.thumbnail} style={{padding:  "10px"}} />
            <Link to={`/news/${element.sectionId}`}>
                <h2>{element.fields.headline}</h2>
            </Link>
        </div>

    )
  return (
      <div>{ outputList}</div>
  )
}

export default NewsList