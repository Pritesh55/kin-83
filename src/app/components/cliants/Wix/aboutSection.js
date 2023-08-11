"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';


import { createClient, OAuthStrategy, media } from '@wix/api-client';
import { items } from '@wix/data';

import Cookies from 'js-cookie';
import Image from 'next/image';

const myWixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: "2eff6b4d-1b04-4e39-af28-fb92fb191b2c",
        tokens: JSON.parse(Cookies.get('session') || null),
    }),
});



const AboutSection = () => {

    const [fetchCount, setFetchCount] = useState(0)

    // Define a state variable by adding the following code in the component function:
    const [aboutSection, setAboutSection] = useState([]);
    // In the steps that follow, the examples state variable stores the data retrieved by querying the Wix project's examples collection.


    // Define a function to fetch data
    async function fetchAboutSection() {
        const aboutSectionCollectionData = await myWixClient.items
            .queryDataItems({ dataCollectionId: 'aboutSection' })
            .ascending('Title')
            .find();

        // This function uses queryDataItems() with chained "DataItemsQueryBuilder functions :: ascending,find " to retrieve all items in the "aboutSection" collection, 
        // Then, DATA is sorted by Title in ascending order.
        // THis data is stored in temporary variable "aboutSectionCollectionData"

        setAboutSection(aboutSectionCollectionData.items);
        // Then, The function then stores the resulting items ("aboutSectionCollectionData") in the "aboutSection" state variable by setAboutSection().
    }


    // useEffect() to run the fetchAboutSection() function after the component is rendered. 
    // This ensures that the data is retrieved when the component mounts.
    useEffect(() => {
        fetchAboutSection();






    }, []);

    const { url: aboutSectionImageURL } = media.getImageUrl("wix:image://v1/cbd623_8ed4af7fd5294e53a27d0be307628ed5~mv2.jpg/str-office-front-view-photo.jpg#originWidth=639&originHeight=436")




    return (
        <>
            <div>
                {/* Click on "Manage fields" button  */}
                {/* click on respective Field's "Setting (...) Icon" */}
                {/* Then choose "Edit option" */}
                {/* copy the "Field key" in the dilogue box*/}
                {/* {collectionName.data.fieldKey} */}
                {aboutSection.map((aboutSection) => (
                    <>
                        <h1 className="">

                            {aboutSection.data.title}
                            {/* collectionName = aboutSection */}
                            {/* fieldKey =  title */}
                        </h1>

                        <p className="">
                            {aboutSection.data.descrptionShort}
                            {/* collectionName = aboutSection */}
                            {/* fieldKey =  descrptionShort */}
                        </p>

                        {/* <Image src={`${aboutSection.data.sectionImage}`} alt="" width={400} height={400}></Image> */}

                        <div className="my-2">
                            {/* {aboutSection.data.sectionImage} */}

                        </div>




                        <Image src={`${aboutSectionImageURL}`} alt='aboutSectionImage'
                            width={400} height={400} >

                        </Image>
                    </>
                ))}
            </div>
        </>

    )
}

export default AboutSection