import React, {useEffect, useRef} from 'react';
import TeamMember from '../TeamMember/TeamMember';
import {TweenLite, Power3} from 'gsap';

const Slider = () => {

    const sliderWrapRef = useRef(null);
    let sliderRef = useRef(null);
    let selectedIndex = 0;
    let cardWidth;
    let selected;

    useEffect(() => {
        TweenLite.to(
            [sliderRef.children[selectedIndex], sliderRef.children[selectedIndex + 1], sliderRef.children[selectedIndex + 2]],
            .7,
            {opacity: 1, ease: Power3.easeOut}
        );
    }, [selectedIndex]);

    const slideRight = () => {
        TweenLite.to(sliderRef.children, .7, {opacity: .3, ease: Power3.easeOut});
        cardWidth = sliderRef.firstElementChild.clientWidth;
        if (selectedIndex < (sliderRef.children.length - 1)) {
            selectedIndex++;
            TweenLite.to(sliderRef, .7, {x: -selectedIndex * cardWidth, ease: Power3.easeOut});
        }
        selected = [sliderRef.children[selectedIndex], sliderRef.children[selectedIndex + 1], sliderRef.children[selectedIndex + 2]]
        TweenLite.to(selected, .7, {opacity: 1, ease: Power3.easeOut});
    };

    const slideLeft = () => {
        TweenLite.to(sliderRef.children, .7, {opacity: .3, ease: Power3.easeOut});
        cardWidth = sliderRef.firstElementChild.clientWidth;
        if (selectedIndex > 0) {
            selectedIndex--;
            TweenLite.to(sliderRef, .7, {x: -selectedIndex * cardWidth, ease: Power3.easeOut});
        }
        selected = [sliderRef.children[selectedIndex], sliderRef.children[selectedIndex + 1], sliderRef.children[selectedIndex + 2]]
        TweenLite.to(selected, .7, {opacity: 1, ease: Power3.easeOut});
    };

    return (
        <div className="slider" ref={sliderWrapRef}>
            <div className="slider-cards" ref={el => sliderRef = el}>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Manuel Cossio" job="Medical genetician"/>
                </div>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Jannis Born" job=" Deep learning expert"/>
                </div>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Marion Disdier" job="Data scientist"/>
                </div>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Dr. Gabriel Brändle" job="Medical doctor"/>
                </div>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Julie Goulet" job="Theoretical biophysicist & data scientist"/>
                </div>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Jérémie Roulin" job="Software engineer"/>
                </div>
                <div className="slide-card col-6 col-md-4 fadeIn">
                    <TeamMember fullName="Nina Wiedemann" job="Neuroscientist & data scientist"/>
                </div>
            </div>
            <div className="controls d-flex justify-content-between">
                <button className="left" onClick={slideLeft}>left</button>
                <button className="right" onClick={slideRight}>right</button>
            </div>
        </div>
    );
};

export default Slider;
