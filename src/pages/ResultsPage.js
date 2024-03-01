import {  useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('before')
    let info = location.state?.info;
    let results = location.state?.results;
    console.log(info , results)
    // let info = [
    //     {
    //     "SIE_PRIMARY_IDENTIFIER": "1000004333",
    //     "MIGRATED": "No",
    //     "YEAR_INCORPORATION": 2021,
    //     "ENTITY_TYPE": "R",
    //     "STATUS": "active",
    //     "SUB_STATUS": "registered",
    //     "NAICS_CODE": "611620",
    //     "NAICS_DESC": "Not Provided",
    //     "CERTOFSTATUS_REQUEST": "Yes",
    //     "PROFRPT_REQUEST": "No",
    //     "ADP_REQUEST": "No",
    //     "ADP_ONLY_SRCH_PDTS_REQUEST": "Not Applicable",
    //     "LIST_FUNC_DATE": ""
    //   },
    //   {
    //     "SIE_PRIMARY_IDENTIFIER": "1000005006",
    //     "MIGRATED": "No",
    //     "YEAR_INCORPORATION": 2023,
    //     "ENTITY_TYPE": "S",
    //     "STATUS": "active",
    //     "SUB_STATUS": "registered",
    //     "NAICS_CODE": "611620",
    //     "NAICS_DESC": "Not Provided",
    //     "CERTOFSTATUS_REQUEST": "Yes",
    //     "PROFRPT_REQUEST": "Yes",
    //     "ADP_REQUEST": "Yes",
    //     "ADP_ONLY_SRCH_PDTS_REQUEST": "Not Applicable",
    //     "LIST_FUNC_DATE": ""
    //   }]
    //     let results = {
    //           data: ["Yes", "No"]
    //         }

    const renderInfoList = () => {
        if (!info || !results) return null;

        return (
            <div className='container-500'>
                <h1>Needs a scan?</h1>
                <ul>
                    {info.map((item, index) => (
                        <li key={item.SIE_PRIMARY_IDENTIFIER}>
                            <span>{item.SIE_PRIMARY_IDENTIFIER}</span>     
                            <span >{results[index]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div >
            {renderInfoList()}
            <button className="login-button" onClick={() => navigate('/home')}>Analyze more</button>
        </div>
    );
}

export default ResultsPage;
