import React from 'react'
import { useParams } from 'react-router-dom' // useParams is a hook that returns an object of key/value pairs of URL parameters

function User() {
    const { id } = useParams() // useParams returns an object of key/value pairs of URL parameters
    return (
        <div className="bg-gray-600 text-white text-3xl p-4">User: {id}</div>
    )
}

export default User