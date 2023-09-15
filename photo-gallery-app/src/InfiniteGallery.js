import { useCallback } from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import './Style.css'

export const InfiniteGallery = ({gallery, fetchGallery}) => {

  // call to fetch gallery from next url at the end of page
  const handleOnBottom = useCallback(() => {
    fetchGallery()
  }, [fetchGallery]);
  useBottomScrollListener(handleOnBottom);

  // format date and time 
  const formatDate = (date) => {
    let options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);

    options = { timeZone: "UTC", timeZoneName: "short" };
    const formattedTime = new Date(date).toLocaleTimeString("en-US", options);
    const [hour, min, rest] = formattedTime.split(':')
 
    return `${formattedDate} ${hour.padStart(2, '0')}:${min.padStart(2, '0')} ${rest.slice(2)} `;
  }

  return (
    <div >
      {gallery.map( item => {
        return (
          <div >
            <div style={{display: 'flex', justifyContent: "space-around", }}>
              <div style={{  width: "10px", padding: "20px" }} >
                <img  style={{ borderRadius: "45px", maxWidth: "400px", maxHeight: "200px"}} src={item.node.field_photo_image_section}></img>
              </div>

              <div style={{ padding: "10px"  }}>
                <p className='Title' style={{ maxWidth: "250px" }}>{item.node.title}</p>
                <p>{formatDate(item.node.last_update)}</p>
             
              </div>
            </div> 
          </div>
        )
      })}
    </div>
  );
};