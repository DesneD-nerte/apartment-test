import React from "react";
import { ApartmentItemCard } from "../Apartment.entity";
import "./ApartmentItem.style.scss";

const ApartmentItem = (apartmentItemCard: ApartmentItemCard) => {
    return (
        <div className="col-4">
            <a
                href={apartmentItemCard.id}
                className="d-flex flex-column border rounded justify-content-center align-items-center"
            >
                <div className="fluid bg-white">
                    <img className="fluid" src={apartmentItemCard.layoutImage}></img>
                </div>
                <div className="d-flex flex-column justify-content-center p-3 fluid bg-white border-top">
                    <div className="fs-5">
                        <strong>{apartmentItemCard.price} &#8381;</strong>
                    </div>
                    <div>{apartmentItemCard.rooms}</div>
                    <div>{apartmentItemCard.areaTotal}</div>
                    <div>{apartmentItemCard.areaLive}</div>
                    <div>{apartmentItemCard.areaKitchen}</div>
                    <div>{apartmentItemCard.floor}</div>
                </div>
            </a>
        </div>
    );
};

export default ApartmentItem;
