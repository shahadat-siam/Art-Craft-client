import "./baner.css";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="./image/slider1.jpg"
            className="w-full lg:h-[100vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="./image/slider2.jpg"
            className="w-full lg:h-[100vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="./image/slider3.jpg"
            className="w-full lg:h-[100vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="./image/slider4.jpg"
            className="w-full lg:h-[100vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="cerosul">
    //     <div className="list">
    //         <div className="item">
    //             <img   src="./image/slider1.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //         <div className="item">
    //             <img   src="./image/slider2.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //         <div className="item">
    //             <img   src="./image/slider3.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //         <div className="item">
    //             <img   src="./image/slider4.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //         <div className="item">
    //             <img   src="./image/slider5.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //         <div className="item">
    //             <img   src="./image/slider6.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //         <div className="item">
    //             <img   src="./image/slider7.jpg" alt="" />
    //             <div className="content">
    //                 <a href="">Luck Febric</a>
    //                 <a href="">Design slider</a>
    //                 <a href="">Art and Craft</a>
    //                 <p>Usually made from cotton, linen or hemp, it's popular as a painting surface when stretched across a wooden frame (called a 'stretcher') and coated with gesso to prevent the paint from coming into direct contact with the canvas fibres (which would eventually cause the canvas to decay).</p>
    //                 <button>View More</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Banner;
