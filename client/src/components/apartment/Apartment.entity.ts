import axios from "axios";

const backendApi = process.env.BACKEND_API_URL;

export interface Apartment {
    id: string;
    floor: number;
    posOnFloor: number;
    price: number;
    rooms: number;
    areaTotal: number;
    areaKitchen: number;
    areaLive: number;
    layoutImage: string;
}

export interface ApartmentDTO {
    id: string;
    floor: number;
    pos_on_floor: number;
    price: number;
    rooms: number;
    area_total: number;
    area_kitchen: number;
    area_live: number;
    layout_image: string;
}

export type ApartmentItemCard = Omit<Apartment, "posOnFloor">;

export const fetchApartments = async (page?: number): Promise<Apartment[]> => {
    const res = await axios.get(`${backendApi}/apartments`, { params: { page: page } });
    const result: ApartmentDTO[] = res.data;

    return result.map((oneApartment) => {
        return transformDTO(oneApartment);
    });
};

export const fetchOneApartment = async (apartmentId: string): Promise<Apartment> => {
    const res = await axios.get(`${backendApi}/apartments/${apartmentId}`);
    const result: ApartmentDTO = res.data;

    return transformDTO(result);
};

const transformDTO = (apartment: ApartmentDTO): Apartment => {
    return {
        id: apartment.id,
        floor: apartment.floor,
        posOnFloor: apartment.pos_on_floor,
        price: apartment.price,
        rooms: apartment.rooms,
        areaTotal: apartment.area_total,
        areaLive: apartment.area_live,
        areaKitchen: apartment.area_kitchen,
        layoutImage: apartment.layout_image,
    };
};
