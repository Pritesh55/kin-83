"use client"

import React from 'react'
import { media } from '@wix/api-client';
import Image from 'next/image';




const AboutSection = ({ aboutSectionProp }) => {

    var aboutSectionImageURL2 = '';

    if (aboutSectionProp.data.sectionImage != undefined) {
        const { url: aboutSectionImage } = media.getImageUrl(aboutSectionProp.data.sectionImage);
        aboutSectionImageURL2 = aboutSectionImage;
    }

    console.log(aboutSectionImageURL2);

    return (
        <>

            <div className="flex flex-wrap">


                <div className="flex flex-col gap-y-4 w-1/2">

                    <h1 className="text-4xl font-bold">

                        {aboutSectionProp.data.title}

                    </h1>

                    <p className="text-sm">
                        {aboutSectionProp.data.descrptionShort}

                    </p>
                </div>


                <div className="lg:w-1/2 flex justify-center items-center">
                    <Image src={aboutSectionImageURL2} alt='' width={800} height={800} className='w-4/5 ' ></Image>
                </div>
            </div>





        </>
    )
}

export default AboutSection