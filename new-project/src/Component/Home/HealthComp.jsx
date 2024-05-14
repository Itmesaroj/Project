import  { useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Image/Shop-by-health-canser/img1.webp';
import img2 from '../../Image/Shop-by-health-canser/img2.webp';
import img3 from '../../Image/Shop-by-health-canser/img3.webp';
import img4 from '../../Image/Shop-by-health-canser/img4.webp';
import img5 from '../../Image/Shop-by-health-canser/img5.webp';
import img6 from '../../Image/Shop-by-health-canser/img6.webp';
import img7 from '../../Image/Shop-by-health-canser/img7.webp';
import img8 from '../../Image/Shop-by-health-canser/img8.webp';
import img9 from '../../Image/Shop-by-health-canser/img9.webp';

const array = [
    { img: img1, name: "Diabetes" },
    { img: img2, name: "Heart Care" },
    { img: img3, name: "Stomach Care" },
    { img: img4, name: "Liver Care" },
    { img: img5, name: "Bone, Joint & Muscle Care" },
    { img: img6, name: "Kidney Care" },
    { img: img7, name: "Dermatological Care" },
    { img: img8, name: "Respiratory Care" },
    { img: img9, name: "Eye Care" }
];

function HealthComp() {
    const boxRef = useRef(null);

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

    return (
        <div className="image-gallery">
          
             <div className="product-carousel">
            <button className="pre-btn" onClick={btnPressPrev}><p><i className="fa-solid fa-angle-left"></i></p></button>
            <button className="next-btn" onClick={btnPressNext}><p><i className="fa-solid fa-angle-right"></i></p></button>
            <div className="productImage" ref={boxRef}>
                {array.map((product, index) => (
                    <div className='card' key={index}>
                        <Link to="">
                            <img src={product.img} alt={product.name} id='card_img' />
                            <p className='info-title'>{product.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
       
    );
}

export default HealthComp;
