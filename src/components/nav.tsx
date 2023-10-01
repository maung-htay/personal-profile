'use client'

import React, { useState } from 'react'
import ModeToggle from './ModeToggle'
import { Label } from "@/components/ui/label"
import Link from 'next/link'

const Nav = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed w-full  bg-slate-50 border-b-2 dark:bg-gray-900">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3 md:p-3">

                <div className='cursor-pointer'>

                    <h2 className='cursor-pointer'><Link href='/'>Home</Link></h2>
                </div>
                <div className="flex items-baseline gap-4">
                    <div className="hidden gap-4 space-x-4 md:block">
                        <Label htmlFor="/resume" className='cursor-pointer'></Label>
                        <Link href="/resume">Resume</Link>
                        <Link href="/history">Work Background</Link>
                        {/* <ModeToggle /> */}
                    </div>
                    <ModeToggle />

                    <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-default" type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {
                    open && (
                        <div className='fixed right-3 top-14 border border-gray-400 rounded-md p-4 bg-gray-200 dark:text-white dark:bg-gray-800'>
                            <ul>

                                <li><Link href="/resume" onClick={() => setOpen(!open)}>Resume</Link></li>
                                <li><Link href="/history" onClick={() => setOpen(!open)}>Work History</Link></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>

    )
}

export default Nav