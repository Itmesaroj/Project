import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function HomeProdcuts({category}) {
    const [data, setData] = useState([]);
    const boxRef = useRef(null);
    function truncateTitle(title) {
        const words = title.split(' ');
        if (words.length >10) {
            return words.slice(0, 10).join(' ') + '...';
        }
        return title;
    }
    
    const btnPressPrev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
        }
    };

    const btnPressNext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://capsule-web-server.onrender.com/${category}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []); 

    return (
            <div className="image-gallery">
            <div className="product-carousel">
                <button className="pre-btn" onClick={btnPressPrev}><p><i className="fa-solid fa-angle-left"></i></p></button>
                <button className="next-btn" onClick={btnPressNext}><p><i className="fa-solid fa-angle-right"></i></p></button>
                <div className="productImage" ref={boxRef}>
                    {data.length > 0 && data.map((item) => (
                      <Link to={`/${category}/${item.id}`} key={item.id} >
                        <div className='item-card card'>
                            <img src={item.src} alt="" />
                            <div className='item-info'>
                            <p className="item-titel">{truncateTitle(item.title)}</p>
                                <p className='item-subtile'>{item.packsize}</p>
                                <p className='price' style={{display:"flex",gap:"2rem",fontWeight:"700",padding:".5rem"}}>
                                    <span style={{color:"green",padding:".5rem"}}>Rs.{item.price}</span>
                                    <span style={{color:"rgb(255,111,97)",padding:".5rem",textDecoration:"line-through"}}>Rs.{item["strike-price"]}</span>
                                </p>
                                <p className="discount" style={{color:"rgb(255,111,97)"}}>{item["discount-percent"]}</p>
                                </div>
                        </div>
                        </Link>
                    ))}
                </div>
             </div>
           </div>
       
    );
}

export default HomeProdcuts;
