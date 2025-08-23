"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import LoginButton from './LoginButton'


export default function Navbar() {

    // Created a NavLink Function So that It can show active routing
    function NavLink({ href, children }) {
        const pathname = usePathname()
        const isActive = pathname === href

        return (
            <Link
                href={href}
                className={isActive ? "text-black font-bold" : "text-gray-600"}
            >
                {children}
            </Link>
        )
    }
    const links = <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/products">Products</NavLink></li>
        <li><NavLink href="/products/add">Add Product</NavLink></li>

    </>
    return (
        <div className='bg-base-100 shadow-sm sticky z-50 top-0'>
            <div className="navbar max-w-11/12 mx-auto px-0 min-w-sm">
                <div className="navbar-start">
                    <div className="dropdown mr-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost px-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        {/* For mobile view */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-2xl">Snack<span className='font-bold'>Panda</span></a>
                </div>
                {/* For Desktop View */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Conditionally showing login or logout when a user is present or not */}
                    
                    <div>
                        <LoginButton></LoginButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
