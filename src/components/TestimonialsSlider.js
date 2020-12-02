import React, { Component } from "react";

// Data
import testimonialsData from "../assets/data/testimonials.json"

// Vendors
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles, Images
import styles from "../styles/components/testimonials.module.scss";

class Slick extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const TestimonialBlock = ({ testimonial }) => {
            return (
                <div className={styles.testimonialBlock}>
                    <p>{testimonial.text}</p>
                    <h5> - {testimonial.client}</h5>
                </div>
            )
        }

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover: true,
            swipeToSlide: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        arrows: false
                    }
                }
            ]
        };
        return (
            <>
                <Slider ref={c => (this.slider = c)} {...settings} className={styles.slider}>
                    {testimonialsData.map((testimonial, index) => {
                        return <TestimonialBlock key={index}
                            testimonial={testimonial}
                        />
                    })}
                </Slider>
                <div className={styles.arrows}>
                    <button className={styles.arrow} onClick={this.previous}>
                        <i className="material-icons">
                            keyboard_arrow_left
                                </i>
                    </button>
                    <button className={styles.arrow} onClick={this.next}>
                        <i className="material-icons">
                            keyboard_arrow_right
                                </i>
                    </button>
                </div>
            </>
        );
    }
}

const TestimonialsSlider = () => {
    return (
        <Slick />
    )
}

export default TestimonialsSlider;

