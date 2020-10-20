import React from 'react'
import ChildHeader from './ChildHeader'
import Banner from './Banner'
import Header from './Header'



export default function HomePage() {
    return (
        <div>
            <Header />
            <ChildHeader />
            <Banner />
        </div>
    )
}
