import React from "react";
import ApartmentList from "../components/apartment/apartment-list/ApartmentList";
import Header from "../components/header/Header";

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="container">
                <ApartmentList></ApartmentList>
            </main>
        </>
    );
};

export default HomePage;
