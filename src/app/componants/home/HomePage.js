import CounterOne from "./CounterOne";
import DesignStudio from "./DesignStudio";
import MainHerobanner from "./MainHerobanner";
import OurServices from "./OurServices";
import WebDesignMock from "./WebDesignMock";
import WelcomeOne from "./WelCome";
import WhyChoose from "./WhyChoose";


export default function about() {
    return (
        <>
            <MainHerobanner/>
            <OurServices/>
            <WelcomeOne/>
            <DesignStudio/>
            <CounterOne/>
            <WebDesignMock/>
            <WhyChoose/>
        </>
    )
}