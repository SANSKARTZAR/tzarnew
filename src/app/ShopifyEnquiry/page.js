import AboutShopify from "../componants/ShopifyEnquiry/AboutShopify";
import ClientShopify from "../componants/ShopifyEnquiry/ClientShopify";
import FaqShopify from "../componants/ShopifyEnquiry/FaqShopify";
import Herobanner from "../componants/ShopifyEnquiry/HeroBanner";
import PlanShopify from "../componants/ShopifyEnquiry/PlanShopify";

export default function ShopifyEnquiry() {
    return (
       <>
        <Herobanner/>
        <AboutShopify/>
        <ClientShopify/>
        <PlanShopify/>
        <FaqShopify/>
       </>
    )
}