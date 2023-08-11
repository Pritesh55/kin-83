"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';


import { createClient, OAuthStrategy, media } from '@wix/api-client';
import { items } from '@wix/data';

import Cookies from 'js-cookie';
import Image from 'next/image';
import AboutSection from './AboutSection';



const myWixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: "2eff6b4d-1b04-4e39-af28-fb92fb191b2c",
        tokens: JSON.parse(Cookies.get('session') || null),
    }),
});



const AboutSectionCall = () => {

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






    return (
        <>
            <div className='flex flex-col gap-y-20'>
                {/* Click on "Manage fields" button  */}
                {/* click on respective Field's "Setting (...) Icon" */}
                {/* Then choose "Edit option" */}
                {/* copy the "Field key" in the dilogue box*/}
                {/* {collectionName.data.fieldKey} */}
                {



                    (Array.isArray(aboutSection) && aboutSection.length > 0) &&
                    aboutSection.map((aboutSection) => (
                        <>

                            <AboutSection aboutSectionProp={aboutSection}></AboutSection>

                        </>
                    ))}
            </div>
        </>

    )
}

export default AboutSectionCall