import { useState, useEffect } from 'react'
import API_KEY from './Keys'
import { db } from './firebase'
const CONTEXT_KEY = ''

//term is a data layer variable
const useGoogleSearch = (term) => {
  const [data, setdata] = useState(null)
  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://customsearch.googleapis.com/customsearch/v1?cx=${CONTEXT_KEY}&q=${term}&safe=high&key=${API_KEY}`
      )
        .then((request) => request.json())
        .then((result) => {
          setdata(result)
          db.collection('googlesearch').doc(term).set({
            totalresults: result.searchInformation.formattedTotalResults,
            timetaken: result.searchInformation.formattedSearchTime,
            items: result.items,
            totalsearches: 1,
          })
        })
    }
    fetchdata()
  }, [term])
  return { data }
}

export default useGoogleSearch
