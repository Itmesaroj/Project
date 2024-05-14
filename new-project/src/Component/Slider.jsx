import { useState ,useEffect} from "react";

let array=[
"https://cdn.shopify.com/s/files/1/0264/9980/9339/files/Gudi_Padwa_and_Ugadi_Sale_Web_Banner_1400x.jpg?v=1648190089",
"https://cdn.shopify.com/s/files/1/0264/9980/9339/files/Gudi_Padwa_Celebration_Kit_1400x.jpg?v=1648190153",
"https://assets.gadgets360cdn.com/pricee/assets/category/202006/cp-banner-patanjali-1280x250_1591165151.jpg?downsize=1280:*&output-quality=80",
"https://onemg.gumlet.io/53169746-f9c8-4b70-bde4-14de66ed61f8_1694422681.png?w=1013&h=250&format=auto",
"https://onemg.gumlet.io/99d6869f-bf43-4ba0-b75f-2ba51fa45447_1713851329.png?w=1013&h=250&format=auto","https://onemg.gumlet.io/3bae5085-de99-4170-b411-06118f562649_1711117731.jpg?w=1013&h=250&format=auto"
]
const delay=2500
function Slideshow() {
  const [index, setIndex] =useState(0);
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === array.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="main-wrapper-slider">
    <div className="slider">
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                
                {array.map((backgroundImage, index) => (
                <div className="slide" key={index}>
                    <img src={backgroundImage}/>
                </div>
                ))} 
            </div>

            <div className="slideshowDots">
                {array.map((_, idx) => (
                <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                ></div>
                ))}
            </div>
            
        </div>
        <div >
                <img src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" alt=""  className="fix-img"/>
        </div>
    </div>
    <div>
        <h2>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h2>
    </div>
</div>
  );
}

export default Slideshow;