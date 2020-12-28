import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import Response from './response'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { db } from './firebase'

//AIzaSyAlbLfAK3G1QP2d2sjl_mTh1YxGEo4STsw
//3dc54ba28d9733c14

function SearchPage() {
  const [{ term }, dispatch] = useStateValue()
  /* db.collection('googlesearch')
    .doc(term)
    .then(function (doc) {
      if (doc.exists) {
        const data = doc.data()
      }
      else{
        //API CALL
        
      }
    })*/
  //const { data } = useGoogleSearch(term)
  const data = Response
  console.log(data)
  return (
    <div className='searchpage'>
      <div className='searchpage__header'>
        <Link to='/'>
          <img
            className='searchpage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='logo'
          ></img>
        </Link>
        <div className='searchpage__headerbody'>
          <Search hidebuttons />
          <div className='searchpage__options'>
            <div className='searchpage__optionsleft'>
              <div className='searchpage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchpage__option'>
                <ImageIcon />
                <Link to='/images'>images</Link>
              </div>
              <div className='searchpage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className='searchpage__option'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>
              <div className='searchpage__option'>
                <MoreVertIcon />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className='searchpage__optionsright'>
              <div className='searchpage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchpage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchpage__results'>
          <p className='searchpage__resultcount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchpage__result'>
              <a
                className='searchpage__resultlink'
                style={{ marginLeft: '0px' }}
                href={item.link}
              >
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchpage__resultimage'
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=''
                    ></img>
                  )}
                {item.displayLink} ^
              </a>
              <a className='searchpage__resulttitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchpage__resultsnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
