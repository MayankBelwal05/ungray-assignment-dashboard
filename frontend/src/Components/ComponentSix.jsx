import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ComponentSix() {
    const [tableData, setTableData] = useState([
        { id: 1, Product: "Camera Mi 360", sold_amount: 432, unit_price: 120, revenue: 51320, rating: 4.81 },
        { id: 2, Product: "Message Gun", sold_amount: 120, unit_price: 60, revenue: 23901, rating: 3.44 },
        { id: 3, Product: "Redmi Note 9", sold_amount: 190, unit_price: 87.6, revenue: 87211, rating: 2.5 },
        { id: 4, Product: "One Plus Nord CE Lite 2", sold_amount: 140, unit_price: 24.1, revenue: 29809, rating: 4.65 },
    ]);

    // const fetchComponentSixData = async () => {
    //     await axios.get(" ")
    //         .then((res) => {
    //             console.log("backend ", res.data.data)
    //             setTableData(res.data.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // };

    // useEffect(() => {
    //     fetchComponentSixData();
    // }, []);

    return (
        <div className='mt-4'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between bg-white shadow-md sm: overflow-x-auto p-2">
                    <h1 className="text-2xl font-medium text-slate-800">Top Products</h1>
                    <button
                        className="border border-gray-300  px-3 py-1 text-black"
                        style={{ borderRadius: "30px", fontSize: '14px', fontWeight: 'bold' }}
                        onClick={() => alert("Fetching full results...")}
                    >
                        Full Results
                    </button>
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-600 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-2"></th>
                            <th scope="col" className="px-4 py-2">Product</th>
                            <th scope="col" className="px-3 py-3">Sold amount</th>
                            <th scope="col" className="px-4 py-2">Unit price</th>
                            <th scope="col" className="px-4 py-2">Revenue</th>
                            <th scope="col" className="px-4 py-2">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr className="bg-white border-b hover:bg-gray-50" key={item.id}>
                                <td className="w-4 p-2"></td>
                                <th scope="row" className="flex items-center px-4 py-3 text-gray-900 whitespace-nowrap">
                                    <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt={`${item.Product} image`} />
                                    <div className="ps-3 text-slate-600">
                                        <div className="text-base font-semibold">{item.Product}</div>
                                    </div>
                                </th>
                                <td className="px-4 py-3 font-medium">{item.sold_amount}</td>
                                <td className="px-4 py-3 font-medium">{`$${item.unit_price}`}</td>
                                <td className="px-4 py-3 font-medium">{`$${item.revenue}`}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center font-medium">
                                        <div className="h-2.5 w-2.5 rounded-full me-2"></div> ⭐{item.rating}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
