"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DisplayResult from './_components/DisplayResult'
import Header from './_components/Header'
import { supabase } from '../../../../services/supabase'





function SearchQueryResult() {
    const { libId } = useParams();
    const [searchInputRecord, setsearchInputRecord]=useState();

    useEffect(() => {
        GetSearchQueryRecord();
      }, [])

    const GetSearchQueryRecord = async () => {
        let { data: Library, error } = await supabase
            .from('Library')
            .select('*')
            .eq('libId', libId);

        console.log(Library[0]);
        setsearchInputRecord(Library[0]);
    }
    return(
        <div>
            <Header searchInputRecord={searchInputRecord}/>
            <div className='px-10 md:px-20 lg:px-36 xl:px-56 mt-5'>
                <DisplayResult searchInputRecord={searchInputRecord} />
            </div>
        </div>
    )
}


export default SearchQueryResult