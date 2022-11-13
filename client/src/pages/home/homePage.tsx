import React from "react";
import ApartmentList from "../../components/apartment/apartment-list/ApartmentList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./homePage.style.scss";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <ApartmentList></ApartmentList>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
