import React from 'react'
import ChildHeader from './ChildHeader'
import Banner from './Banner'
import Header from './Header'
import Items from './Items'



export default function HomePage() {
    return (
        <div>
            <Header />
            <ChildHeader />
            <Banner />
            <Items />
        </div>
    )
}
