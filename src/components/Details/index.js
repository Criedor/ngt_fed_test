import React, { useEffect, useState, Fragment} from 'react';
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import fb from '../Firebase/index';
var uniqid = require('uniqid');
require('firebase/auth');
require('firebase/database');
 
const Details = ( { match }) => {
  const db = fb.database().ref()
  const [data, setData] = useState([])
  const [subFunds, setSubFunds] = useState([])
  const [shareClasses, setShareClasses] = useState([])
  const [load, setLoad] = useState(0)
  const [selectedFund, setSelectedFund] = useState()
  const history = useHistory();

  
  useEffect (()=>{
    let id = match.params.details.toLowerCase()
    setSelectedFund(match.params.details.replace(/_/g, ' '))
    setLoad(0)
    db.orderByChild('fund_id').equalTo(`${id}`).once('value')
    .then((snap)=>{
      setData(Object.values(snap.val()))
    }) 
  },[db, match.params.details])

  useEffect (()=>{
    if (data.length>0){
      let uniqueSubFunds = [...new Set(data.map(item => item.subfund_name))]
      setSubFunds(uniqueSubFunds)
      let uniqueShareClasses = [...new Set(data.map(item => item.share_class_name))]
      setShareClasses(uniqueShareClasses)

      setLoad(1)
    }
  },[data])


  return(
    <>
    {load===0?
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
      <Fragment key={uniqid()}>
        <div className="justify">
          <h3>{selectedFund}</h3>
          <h3 className="back" onClick={()=>history.push('../dashboard')}>...back</h3>
        </div>
        <div className="table table2">
          <h4>Subfund</h4>
          <h4>Share Class</h4>
          <div className="details_list">
            {subFunds.map(subFund =>
              <p key={uniqid()}>{subFund}</p>)}
          </div>
          <div className="details_list">
              {shareClasses.map(shareClass =>
                <p key={uniqid()}>{shareClass} </p>)}
          </div>
        </div>
      </Fragment>}
    </>
  );
}
export default Details;