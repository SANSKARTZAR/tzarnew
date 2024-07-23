/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useWindowSize } from "@react-hook/window-size/throttled";
import BannertxtSingup from "../Singup-page/BannertxtRSingup";
import SingupBannerText from "../Singup-page/SingupBannerText";
// import MumbaiForm from './MumbaiForm';

function SingupHeader() {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;

    if (width > breakpoint) {
        return (
            <>
                
                <div>
                    <SingupBannerText />
                    {/* <Bannertxt /> */}
                    <video autoPlay loop muted src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"></video>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <BannertxtSingup />
                <video autoPlay loop muted src='https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029'></video>
            </div>
        </>
    );
}
export default SingupHeader
