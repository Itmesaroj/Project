import  { useRef } from 'react';
import { Link } from 'react-router-dom';

const array = [
    { img:"https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto" },
    { img:"https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto"  },
    { img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443681_sexuall.webp?format=auto"},
    { img:"https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto" },
    { img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443705_elderly.webp?format=auto"},
    { img:"https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto" },
    { img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443735_menn.webp?format=auto" },
    { img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443722_womenn.webp?format=auto" },
    { img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443746_pett.webp?format=auto" }
];

function PresonalProduct() {
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

export default PresonalProduct;
