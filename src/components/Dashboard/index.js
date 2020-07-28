import React, { useEffect, useState, Fragment} from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import fb from '../Firebase/index';
var uniqid = require('uniqid');
require('firebase/auth');
require('firebase/database');
 
const Dashboard = () => {
  const db = fb.database().ref()
  const [data, setData] = useState([])
  const [funds, setFunds] = useState([])
  const [load, setLoad] = useState(0)
  const [date, setDate] = useState(new Date('05-04-2020'))
  const history = useHistory();

  const showDetails = (fund) => {
    history.push(`/dashboard/${fund}`)
  }


  useEffect (()=>{
    setLoad(0)
    db.orderByChild('date').equalTo(`${moment(date).format("YYYYMMDD")}`).once('value')
    .then((snap)=>{
      setData(Object.values(snap.val()))
    }) 
  },[db, date])

  useEffect (()=>{
    if (data.length>0){
      let uniqueFunds = [...new Set(data.map(item => item.fund_name))]
      setFunds(uniqueFunds)
    setLoad(1)
}
  },[db, data])


  return(
    <>
    {load===0?
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:
      <>
        <div className="justify-start">
          <h3>Overview of 
          <DatePicker
            dateFormat="dd-MM-yyyy"
            selected={date}
            onSelect={(e)=>setDate(e)}
            minDate={new Date('01-05-2020')}
            maxDate={new Date('31-05-2020')}
          />
          </h3>
      </div>
        <div className="table">
          <h4>Fund</h4>
          <h4>No. reports</h4>
          <h4>No. alerts</h4>
          <h4>Info</h4>
            {
            funds.map(fund =>
            <Fragment key={uniqid()}>
            <p key={uniqid()}>{fund}</p>
            <p key={uniqid()}>{data.filter(item => item.report_status === true && item.fund_name === fund).length}</p>
            <p key={uniqid()}>{data.filter(item => item.nb_alerts>1 && item.fund_name === fund).length}</p>
            <img key={uniqid()} className="details" src="./img/details.png" alt="more details" onClick={()=>showDetails(fund.replace(/\s/g, '_'))}/>
            </Fragment>)}
        </div>
      </>}
    </>
  );
}
export default Dashboard;