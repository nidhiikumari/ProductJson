import React, { useEffect, useState } from 'react'
function Apiget() {
    const [apidata, setData] = useState([])

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2").then((result) => {
            result.json().then((resp) => {
               // console.warn("result is", resp)
                setData(resp)
            })

        });

    }, [])
    console.warn("data is ", apidata);


    return (
        <div>
            <h1>
                Get API Call
            </h1>
            <table border = "1">
                <tr>
                    <td>page</td>
                    <td>per_page</td>
                    <td>total</td>
                    <td>total_pages</td>
                    <td>data</td>
                </tr>

                {/* { 
                    apidata.map((item)=> 
                        <tr>
                            <td>{item.page}</td>
                            <td>{item.per_page}</td>
                            <td>{item.total}</td>
                            <td>{item.total_pages}</td>
                            <td>{item.data.firtsname}</td>
                        </tr>
                    ) */}
                } 


            </table>
        </div>
    );
}
export default Apiget;