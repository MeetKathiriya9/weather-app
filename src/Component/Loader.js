import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className='container mt'>
            <div className='d-flex justify-content-center'>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </div>
    )
}
