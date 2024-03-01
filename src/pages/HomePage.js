import React, { useState } from "react";
import axios from "axios";
import "../styles/home.css";
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  
  
  const [values, setValues] = useState({
    number: 0, // Initial value for the number input
    excelFile: null, // Initial value for the file input
  });

  const [excelData, setExcelData] = useState([]); // State to store converted Excel data

  let file = NaN;
  let yesNo = ["Yes", "No"]

  const handleSubmit = (event) => {
    event.preventDefault()
    
    

    setValues((prev) => ({ ...prev, excelFile: file }));

    // Convert the uploaded Excel file to JSON
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log(values.number);
        if (values.number === 0) {
            values.number = jsonData.length
        }
        
        const limitedData = jsonData.slice(0, values.number);
        setExcelData(limitedData);
        console.log(limitedData);
      };
      reader.readAsArrayBuffer(file);
    }

    console.log(excelData)
    
    // console.log(values.number)
    axios
      .post("https://prod-00.canadacentral.logic.azure.com:443/workflows/f415988cb9a6422b8d07ab7f31c5d25b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7JqGwfI7AieTHvrppkByryKNlfQIqHQVIRPP0kmxYzU", {
        Amount: parseInt(values.number, 4),
        Data : excelData,
      },{timeout:600000})
      .then(function (response) {
        console.log(response);
        // console.log(responseData);
        // console.log(excelData);
        yesNo = response.data.map(num => num === 1 ? "Yes" : "No");
        console.log(response.data)
        console.log(yesNo)
        console.log(excelData)
        navigate("/results", { state: { results: yesNo, info: excelData } });
      })
      .catch(function (error) {
        console.log(error, "error");
      });
  };

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    // console.log("change");
    // console.log(values.number)
    
  };

  const handleFileChange = (event) => {

    file = event.target.files[0];
    setValues((prev) => ({ ...prev, excelFile: file }));

    // Convert the uploaded Excel file to JSON
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log(values.number);
        const limitedData = jsonData.slice(0, values.number);
        setExcelData(limitedData);
        console.log(limitedData);
      };
      reader.readAsArrayBuffer(file);
    }

  };



  return (
    <div className="center">
      <div>
        <h1>No more MicroFish</h1>
      </div>
        <div className="mainContainer">
        <div className="container">
          <div>
            <h2>Excel analyze</h2>
          </div>
          <div>
            <p>1. Upload your excel file</p>
            <p>2. Enter a number</p>
            <p>3. Choose how many rows to analyze and let AI do the predictions</p>
            <p>4. Enjoy your results!</p>
          </div>
          <form onSubmit={handleSubmit}>


            <div className="form-group width-40">
              <label htmlFor="number">Amount of rows to analyze</label>
              <input
                type="number"
                name="number"
                // value={values.number}
                onChange={handleChange}
                id="number"
                placeholder="Enter a number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="excelFile">Excel File</label>
              <input
                type="file"
                name="excelFile"
                onChange={handleFileChange}
                id="excelFile"
                accept=".xlsx, .xls"
              />
            </div>
      
            <div className="form-group">
              <button type="submit" className="login-button">
                Predict from excel
              </button>
              <p className="">Do not have an Excel <a href="/mannual" className="">Type mannualy</a></p>
            </div>
          </form>
        </div>
 

      </div>
    </div>
  );
}
