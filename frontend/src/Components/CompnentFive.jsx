import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'flowbite/dist/flowbite.min.css'; 
import 'flowbite'; 

const username = "trial";
const password = "assignment123";

const url = "http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/";

export default function ComponentFive() {

    const [compFiveData, setCompFiveData] = useState({ negative: 0, positive: 0, neutral: 0 });

    const component5Data = async () => {
        try {
            const res = await axios.get(url, {
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ":" + password)
                }
            });
            console.log(res.data);
            setCompFiveData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        component5Data();
    }, []);

    const total = compFiveData.negative + compFiveData.positive + compFiveData.neutral;
    const negativeWidth = (compFiveData.negative / total) * 100 + "%";
    const positiveWidth = (compFiveData.positive / total) * 100 + "%";
    const neutralWidth = (compFiveData.neutral / total) * 100 + "%";

    return (
        <div className="bg-white rounded-2xl my-2 px-6 py-6" style={{borderRadius:'20px'}}>
            <p className="text-grey-600" style={{color:'grey'}}> Community feedback</p>
            <p className="text-2xl mb-4 mt-1 font-bold">Mostly positive</p>

            <div style={{ display: "flex", width: "100%", height: "12px", gap: "3px" }}>
                <div style={{ width: negativeWidth }} className="bg-red-400 rounded-lg"></div>
                <div style={{ width: neutralWidth }} className="bg-yellow-300 rounded-lg"></div>
                <div style={{ width: positiveWidth }} className="bg-green-300 rounded-lg"></div>
            </div>

            <div className="flex gap-6 py-3 mt-4">
                <div>
                    <p className="text-slate-600" style={{color:'grey'}}>Negative</p>
                    <p className="font-semibold mt-3 text-center">{compFiveData.negative}</p>
                </div>
                <div>
                    <p className="text-slate-600" style={{color:'grey'}}>Neutral</p>
                    <p className="font-semibold mt-3 text-center">{compFiveData.neutral}</p>
                </div>
                <div>
                    <p className="text-slate-600" style={{color:'grey'}}>Positive</p>
                    <p className="font-semibold mt-3 text-center">{compFiveData.positive}</p>
                </div>
            </div>
        </div>
    )
}
