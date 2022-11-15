import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { PlanPanel } from "../../components/planPanel/PlanPanel";
import "./planPage.style.css";

const planPage = () => {
    return (
        <>
            <Header />
            <main>
                <PlanPanel></PlanPanel>
            </main>
            <Footer />
        </>
    );
};

export default planPage;
