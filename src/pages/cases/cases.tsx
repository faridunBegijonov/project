import React from 'react'
import { Link } from 'react-router-dom'

export const Cases = () => {
    return (
        <>
            <p>Cases</p>
            <Link to="/cases/amb" className='text-[black]'>Amb</Link>
        </>
    )
}