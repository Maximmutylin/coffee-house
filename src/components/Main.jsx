import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from '../pages/About'
import { HomePage } from '../pages/HomePage'
import { Menu } from '../pages/Menu'
import { Story } from '../pages/Story'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'
import { Post } from './Post';

export const Main = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <div className='main__container'>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='menu' element={<Menu />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='story' element={<Story />}></Route>
                    <Route path='blog' element={<Blog />}></Route>
                    <Route path='blog/:id' element={<Post />}></Route>
                    <Route path='contact' element={<Contact />}></Route>
                </Routes>
            </div>
        </>
    )
}
