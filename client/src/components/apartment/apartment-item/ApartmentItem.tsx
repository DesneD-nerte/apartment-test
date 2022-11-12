import React from "react";
import { ApartmentItemCard } from "../Apartment.entity";
import "./ApartmentItem.style.scss";

const ApartmentItem = React.memo(function ApartmentItem(apartmentItemCard: ApartmentItemCard) {
    return (
        <div className="col-xl-3 col-md-4 col-6">
            <a
                href={apartmentItemCard.id}
                className="d-flex flex-column border rounded justify-content-center align-items-center"
            >
                <div className="fluid bg-white">
                    <img className="fluid" src={apartmentItemCard.layoutImage}></img>
                </div>
                <div className="d-flex flex-column justify-content-center p-3 fluid bg-white border-top">
                    <div className="fs-5">
                        <strong>
                            {new Intl.NumberFormat("ru-RU").format(apartmentItemCard.price)} &#8381;
                        </strong>
                    </div>
                    <div className="text-primary fw-500">
                        {apartmentItemCard.rooms}-комн. квартира
                    </div>
                    <div>
                        <strong>
                            {apartmentItemCard.areaTotal} м<sup>2</sup>
                        </strong>
                        - общая площадь
                    </div>
                    <div>
                        <strong>
                            {apartmentItemCard.areaLive} м<sup>2</sup>
                        </strong>
                        - жилая площадь
                    </div>
                    <div>
                        <strong>
                            {apartmentItemCard.areaKitchen} м<sup>2</sup>
                        </strong>
                        - площадь кухни
                    </div>
                </div>
            </a>
        </div>
    );
});

export default ApartmentItem;
