import React from 'react';
import '../style/AdsAndProduct4.css';

function AdsAndProduct4({ blog }) {
  const body4Style = {
    backgroundImage: `url(${blog.imgThree})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  };

  const body4styleh1 = {
 
    color: 'white',
  };

  const body4styleh3 = {

    color: 'white',
  };

  return (
    <div className="body4" style={body4Style}>
      <div className="body4part1">
        <div className="titlebody">
          {blog.title === "" ? (
            <img src={blog.imgOne} alt={blog.imgOne} />
          ) : blog.title === "iPad Pro" || blog.title === "iPhone 15 Pro" ? (
            <h1 style={body4styleh1}>{blog.title}</h1>
          ) : (
            <h1>{blog.title}</h1>
          )}
        </div>
        <div className="subtitlebody">
          {blog.title === "iPad Pro" || blog.title === "iPhone 15 Pro" ? (
            <h3 style={body4styleh3}>{blog.subTitle}</h3>
          ) : (
            <h3>{blog.subTitle}</h3>
          )}

        </div>
        <div className="buttonbody">
          {blog.changeBtn === true ? (
            <button className="btn2">Get your estimate</button>
          ) : (
            <>
              <button className="btn1">Learn More</button>
              <button className="btn2">Buy</button>
            </>
          )}
        </div>
      </div>
      <div className="body4part2"></div>
    </div>
  );
}

export default AdsAndProduct4;
