import React from "react";
import "../styles/imageslider.css";
import emptyImg from "../img/empty.jpg";
var hasOwn = {}.hasOwnProperty;

function classNames() {
  var classes = "";

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes += " " + arg;
    } else if (Array.isArray(arg)) {
      classes += " " + classNames.apply(null, arg);
    } else if (argType === "object") {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes += " " + key;
        }
      }
    }
  }

  return classes.substr(1);
}

class SlideShow extends React.Component {
  constructor() {
    super();
    this.state = { activeIndex: 0 };
  }
  jumpToSlide(index) {
    this.setState({ activeIndex: index });
  }
  render() {
    return (
      <div className="slideshow">
        <ul className="slideshow-slides">
          {this.props.slides.length === 0 ? (
            <img src={emptyImg} width="480px" height="240px" alt="" />
          ) : (
            this.props.slides.map((slide, index) => (
              <li
                key={index}
                className={classNames({
                  active: index === this.state.activeIndex
                })}
              >
                <img src={slide.url} width="480px" height="240px" alt="" />
              </li>
            ))
          )}
        </ul>
        <ul className="slideshow-dots">
          {this.props.slides.map((slide, index) => (
            <li
              key={index}
              className={index === this.state.activeIndex ? "active" : ""}
            >
              <a onClick={event => this.jumpToSlide(index)}>{index + 1}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const ImageSlider = props => {
  return <SlideShow slides={props.info} />;
};

export default ImageSlider;
