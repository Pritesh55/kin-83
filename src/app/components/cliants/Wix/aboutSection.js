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
            <h1 className="">

                {aboutSectionProp.data.title}

            </h1>

            <p className="">
                {aboutSectionProp.data.descrptionShort}

            </p>

            <Image src={aboutSectionImageURL2} alt='' width={400} height={400}></Image>
         

        </>
    )
}

export default AboutSection