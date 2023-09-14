"use client"
import Reactm, { useState, Fragment } from 'react'
import { usePopper } from 'react-popper'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import Link from 'next/link'

type Props = {}
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    UserCircleIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Menu = [
    { name: 'User Profile', description: 'Muestra la informacion del usuario', href: '/profile', icon: UserCircleIcon },
    { name: 'Cerrar Sesion', description: 'Speak directly to your customers', href: '/api/auth/signout', icon: CursorArrowRaysIcon },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [referenceElement, setReferenceElement] = useState<any>()
    const [popperElement, setPopperElement] = useState<any>()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { styles, attributes } = usePopper(referenceElement, popperElement)
    return (
        <header className="bg-white sticky top-0 z-50">
            <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Poke Monoma</span>
                        <Image className="h-8 w-auto" src={Logo} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        id="menu-btn"
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Popover className="relative">
                        <Popover.Button ref={setReferenceElement} className="flex items-end gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                ref={setPopperElement}
                                style={styles.popper}
                                {...attributes.popper}
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-2">
                                    {Menu.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex flex-row-reverse items-center gap-x-0 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="text-right block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </Popover.Panel>
                        </Transition>
                    </Popover>

                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Poke Monoma</span>
                            <Image className="h-8 w-auto" src={Logo} alt="" />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                <Link
                                    href="/profile"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    User Profile
                                </Link>
                                <Link
                                    href="/api/auth/signout"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Cerrar Sesion
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
