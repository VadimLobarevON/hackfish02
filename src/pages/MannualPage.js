import React, { useState } from "react";
import axios from "axios";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  let data = ""
  
  
  const [values, setValues] = useState({
    SIE_PRIMARY_IDENTIFIER: 1000004333,
      MIGRATED: "No",
      YEAR_INCORPORATION: 2021,
      ENTITY_TYPE: "R",
      STATUS: "active",
      SUB_STATUS: "registered",
      NAICS_CODE: 611620,
      NAICS_DESC: "Not Provided",
      CERTOFSTATUS_REQUEST: "Yes",
      PROFRPT_REQUEST: "No",
      ADP_REQUEST: "No",
      ADP_ONLY_SRCH_PDTS_REQUEST: "Not Applicable",
      LIST_FUNC_DATE: ""
  });
  const handleChange = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    console.log('change')
    // data = [{
    //     SIE_PRIMARY_IDENTIFIER: values.SIE_PRIMARY_IDENTIFIER,
    //         MIGRATED: values.MIGRATED,
    //         YEAR_INCORPORATION: values.YEAR_INCORPORATION,
    //         ENTITY_TYPE: values.ENTITY_TYPE,
    //         STATUS: values.STATUS,
    //         SUB_STATUS: values.SUB_STATUS,
    //         NAICS_CODE: values.NAICS_CODE,
    //         NAICS_DESC: values.NAICS_DESC,
    //         CERTOFSTATUS_REQUEST: values.CERTOFSTATUS_REQUEST,
    //         PROFRPT_REQUEST: values.PROFRPT_REQUEST,
    //         ADP_REQUEST: values.ADP_REQUEST,
    //         ADP_ONLY_SRCH_PDTS_REQUEST: values.ADP_ONLY_SRCH_PDTS_REQUEST,
    //         LIST_FUNC_DATE: values.LIST_FUNC_DATE
    // }]
    // console.log(data)
}

  const handleSubmit = (event) => {

    axios
      .post("https://prod-00.canadacentral.logic.azure.com:443/workflows/f415988cb9a6422b8d07ab7f31c5d25b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7JqGwfI7AieTHvrppkByryKNlfQIqHQVIRPP0kmxYzU", {
        Amount: 1,
        Data : [{
            SIE_PRIMARY_IDENTIFIER: values.SIE_PRIMARY_IDENTIFIER,
            MIGRATED: values.MIGRATED,
            YEAR_INCORPORATION: values.YEAR_INCORPORATION,
            ENTITY_TYPE: values.ENTITY_TYPE,
            STATUS: values.STATUS,
            SUB_STATUS: values.SUB_STATUS,
            NAICS_CODE: values.NAICS_CODE,
            NAICS_DESC: values.NAICS_DESC,
            CERTOFSTATUS_REQUEST: values.CERTOFSTATUS_REQUEST,
            PROFRPT_REQUEST: values.PROFRPT_REQUEST,
            ADP_REQUEST: values.ADP_REQUEST,
            ADP_ONLY_SRCH_PDTS_REQUEST: values.ADP_ONLY_SRCH_PDTS_REQUEST,
            LIST_FUNC_DATE: values.LIST_FUNC_DATE
        }],
      })
      .then(function (response) {
        console.log(response);
        // console.log(responseData);
        // console.log(excelData);
        navigate("/results", { state: { results: response.data, info: data } });
      })
      .catch(function (error) {
        console.log(error, "error");
      });
  };

  return (
    <div className="center">
      <div>
        <h1>No more MicroFish</h1>
      </div>
        <div className="mainContainer">
        <div className="container">
          <div>
            <h2>1. Fill the fields and enjoy prediction</h2>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
            <label className="" for="SIE_PRIMARY_IDENTIFIER">SIE_PRIMARY_IDENTIFIER</label>
                <input name="SIE_PRIMARY_IDENTIFIER" type="SIE_PRIMARY_IDENTIFIER" onChange={handleChange} id="SIE_PRIMARY_IDENTIFIER" className="" placeholder="Enter your SIE_PRIMARY_IDENTIFIER" />
                
            </div>

            <div className="form-group">
            <label className="" for="MIGRATED">Is MIGRATED?</label>

                <input name="MIGRATED" type="MIGRATED" onChange={handleChange} id="MIGRATED" className="" placeholder="Is MIGRATED(Yes/No)" />
            </div>

            <div className="form-group">
            <label className="" for="YEAR_INCORPORATION">YEAR_INCORPORATION</label>
                <input name="YEAR_INCORPORATION" type="YEAR_INCORPORATION"onChange={handleChange} id="YEAR_INCORPORATION" className="" placeholder="Enter your YEAR_INCORPORATION" />
            </div>

            <div className="form-group">
            <label className="" for="ENTITY_TYPE">ENTITY_TYPE</label>
                <input name="ENTITY_TYPE" type="ENTITY_TYPE" onChange={handleChange} id="ENTITY_TYPE" className="" placeholder="Enter your ENTITY_TYPE" />
                
            </div>

            <div className="form-group">
            <label className="" for="STATUS">STATUS</label>
                <input name="STATUS" type="STATUS" onChange={handleChange} id="STATUS" className="" placeholder="Enter your STATUS(active/inactive)" />
                
            </div>

            <div className="form-group">
            <label className="" for="SUB_STATUS">SUB_STATUS</label>
                <input name="SUB_STATUS" type="SUB_STATUS" onChange={handleChange} id="SUB_STATUS" className="" placeholder="Enter your SUB_STATUS" />
                
            </div>
 
            <div className="form-group">
            <label className="" for="NAICS_CODE">NAICS_CODE</label>
                <input name="NAICS_CODE" type="NAICS_CODE" onChange={handleChange} id="NAICS_CODE" className="" placeholder="Enter a NAICS_CODE" />
                
            </div>
            <div className="form-group">
            <label className="" for="NAICS_DESC">NAICS_DESC</label>
                <input name="NAICS_DESC" type="NAICS_DESC" onChange={handleChange} id="NAICS_DESC" className="" placeholder="Enter your NAICS_DESC" />
                
            </div>

            <div className="form-group">
            <label className="" for="CERTOFSTATUS_REQUEST">CERTOFSTATUS_REQUEST</label>
                <input name="CERTOFSTATUS_REQUEST" type="CERTOFSTATUS_REQUEST" onChange={handleChange} id="CERTOFSTATUS_REQUEST" className="" placeholder="Enter your CERTOFSTATUS_REQUEST" />
                
            </div>

            <div className="form-group">
            <label className="" for="PROFRPT_REQUEST">PROFRPT_REQUEST</label>
                <input name="PROFRPT_REQUEST" type="PROFRPT_REQUEST" onChange={handleChange} id="PROFRPT_REQUEST" className="" placeholder="Enter your PROFRPT_REQUEST" />
                
            </div>
            <div className="form-group">
            <label className="" for="ADP_REQUEST">ADP_REQUEST</label>
                <input name="ADP_REQUEST" type="ADP_REQUEST" onChange={handleChange} id="ADP_REQUEST" className="" placeholder="Enter your ADP_REQUEST" />
                
            </div>
            <div className="form-group">
            <label className="" for="ADP_ONLY_SRCH_PDTS_REQUEST">ADP_ONLY_SRCH_PDTS_REQUEST</label>
                <input name="ADP_ONLY_SRCH_PDTS_REQUEST" type="ADP_ONLY_SRCH_PDTS_REQUEST" onChange={handleChange} id="ADP_ONLY_SRCH_PDTS_REQUEST" className="" placeholder="Enter your ADP_ONLY_SRCH_PDTS_REQUEST" />
                
            </div>
 
            
 
            <div className="form-group">
                <button type="submit" className="login-button" >Predict Mannualy</button>
                <p className="">Have a lot of Data? <a href="/home" className="">Use excel</a></p>
            </div>
        </form>
        </div>
 

      </div>
    </div>
  );
}
