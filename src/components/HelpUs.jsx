import React from "react";
import petFood from "../assets/icons/icon-pet-food.svg";
import transport from "../assets/icons/icon-transportation.svg";
import toys from "../assets/icons/icon-toys.svg";
import bowls from "../assets/icons/icon-bowls-and-cups.svg";
import shampoos from "../assets/icons/icon-shampoos.svg";
import vitamins from "../assets/icons/icon-vitamins.svg";
import medicines from "../assets/icons/icon-medicines.svg";
import collars from "../assets/icons/icon-collars-leashes.svg";
import sleepingArea from "../assets/icons/icon-sleeping-area.svg";

function HelpUs() {
    return (
        <section className="help-us">
            <h3 className="title-h3">How you can help our shelter</h3>

            <div className="container">
                <div className="container__item">
                    <div className="icon-box">
                        <img src={petFood} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Pet food</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={transport} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Transportation</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={toys} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Toys</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={bowls} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Bowls and cups</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={shampoos} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Shampoos</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={vitamins} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Vitamins</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={medicines} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Medicines</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={collars} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Collars / leashes</h4>
                </div>
                <div className="container__item">
                    <div className="icon-box">
                        <img src={sleepingArea} alt="an icon" />
                    </div>
                    <h4 className="title-h4">Sleeping areas</h4>
                </div>
            </div>
        </section>
    );
}

export default HelpUs;
