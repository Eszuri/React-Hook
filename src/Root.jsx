import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
    return (
        <>
            <div className='bg-emerald-800 w-[90%] mr-auto ml-auto rounded mt-5 mb-5'>
                <Link to={props.URL} className='text-2xl p-5 text-center hover:bg-emerald-900 inline-block w-full'>{props.nameURL}</Link>
            </div >
        </>
    )
}

export default function Root() {
    return (
        <>
            <section className='fixed w-full h-screen overflow-hidden bg-neutral-800 text-white'>
                <h1 className='text-5xl font-bold text-center uppercase mt-5 mb-5'>React Hook</h1>
                <List URL='/usestate' nameURL='UseState' />
            </section>
        </>
    )
}
