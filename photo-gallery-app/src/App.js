import {useState, useEffect} from 'react';
import axios from 'axios';
import { InfiniteGallery } from './InfiniteGallery';
import { Circles } from 'react-loading-icons'


const App = () => {
  const [data, setData] = useState([])
  let [url, setUrl] = useState(0)
  const urls= ['https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1',
                'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/2',
                'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/3']

  const fetchGallery = () => url< 3 ? setUrl(++url) : null

  useEffect(() => {
    axios.get(`http://localhost:4000/fetchGallery?url=${urls[url]}`)
        .then(response => setData(prevData => [...prevData, ...response.data.nodes]))
        .catch(err=> console.log(err))
  }, [url])

  return (
    <div >
      {data.length === 0 ? 
        <Circles/> :
        <InfiniteGallery gallery= {data} fetchGallery={fetchGallery}/>
      }
    </div>
  );
}

export default App;
