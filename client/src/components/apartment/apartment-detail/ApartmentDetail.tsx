import React from "react";
import { Apartment } from "../Apartment.entity";
import "./ApartmentDetail.style.scss";

interface ApartmentDetailProps {
    oneApartment: Apartment;
}

const ApartmentDetail = ({ oneApartment }: ApartmentDetailProps) => {
    return (
        <div className="container">
            <div className="detail-container">
                <div>
                    <img
                        className="detail-container__img fluid"
                        src={oneApartment.layoutImage}
                    ></img>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between border-top p-3">
                    <div className="fs-4 ">
                        <strong>
                            <span>{oneApartment.rooms}-комн. квартира, </span>
                            <span>
                                {oneApartment.areaTotal}м<sup className="fs-6">2</sup>,
                            </span>
                            <span> {oneApartment.floor} этаж</span>
                        </strong>
                    </div>
                    <div className="fs-4 mt-2 mt-md-0">
                        <strong>
                            {new Intl.NumberFormat("ru-RU").format(oneApartment.price)} &#8381;
                        </strong>
                    </div>
                </div>
                <div className="border-top p-3">
                    <div className="fs-5 ">
                        <strong>
                            <span>Характеристика</span>
                        </strong>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6 col-md-4">Комнатность</div>
                        <div className="col-6 col-md-8">{oneApartment.rooms}-комн.</div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6 col-md-4">Этаж</div>
                        <div className="col-6 col-md-8">{oneApartment.floor} этаж</div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6 col-md-4">Общая площадь </div>
                        <div className="col-6 col-md-8">
                            {oneApartment.areaTotal}м<sup>2</sup>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6 col-md-4">Жилая площадь</div>
                        <div className="col-6 col-md-8">
                            {oneApartment.areaLive}м<sup>2</sup>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6 col-md-4">Площадь кухни</div>
                        <div className="col-6 col-md-8">
                            {oneApartment.areaKitchen}м<sup>2</sup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetail;
