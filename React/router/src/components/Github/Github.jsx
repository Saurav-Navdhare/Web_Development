import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});        // can be used in loaders
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Saurav-Navdhare")
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //         })
    //         .catch((err) => console.log(err));
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="GitHub profile picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = (await fetch("https://api.github.com/users/Saurav-Navdhare")).json();
    return res;
}