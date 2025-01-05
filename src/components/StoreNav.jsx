/* --------------------------------------------------- BY using React--------------------------------------------------- */


// 'use client'

// import { Fragment, useState } from 'react'
// import {
//     Dialog,
//     DialogBackdrop,
//     DialogPanel,
//     Popover,
//     PopoverButton,
//     PopoverGroup,
//     PopoverPanel,
//     Tab,
//     TabGroup,
//     TabList,
//     TabPanel,
//     TabPanels,
// } from '@headlessui/react'
// import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = {
//     categories: [
//         {
//             id: 'women',
//             name: 'Women',
//             featured: [
//                 {
//                     name: 'New Arrivals',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
//                     imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//                 },
//                 {
//                     name: 'Basic Tees',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
//                     imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//                 },
//             ],
//             sections: [
//                 {
//                     id: 'clothing',
//                     name: 'Clothing',
//                     items: [
//                         { name: 'Tops', href: '#' },
//                         { name: 'Dresses', href: '#' },
//                         { name: 'Pants', href: '#' },
//                         { name: 'Denim', href: '#' },
//                         { name: 'Sweaters', href: '#' },
//                         { name: 'T-Shirts', href: '#' },
//                         { name: 'Jackets', href: '#' },
//                         { name: 'Activewear', href: '#' },
//                         { name: 'Browse All', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'accessories',
//                     name: 'Accessories',
//                     items: [
//                         { name: 'Watches', href: '#' },
//                         { name: 'Wallets', href: '#' },
//                         { name: 'Bags', href: '#' },
//                         { name: 'Sunglasses', href: '#' },
//                         { name: 'Hats', href: '#' },
//                         { name: 'Belts', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'brands',
//                     name: 'Brands',
//                     items: [
//                         { name: 'Full Nelson', href: '#' },
//                         { name: 'My Way', href: '#' },
//                         { name: 'Re-Arranged', href: '#' },
//                         { name: 'Counterfeit', href: '#' },
//                         { name: 'Significant Other', href: '#' },
//                     ],
//                 },
//             ],
//         },
//         {
//             id: 'men',
//             name: 'Men',
//             featured: [
//                 {
//                     name: 'New Arrivals',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//                     imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//                 },
//                 {
//                     name: 'Artwork Tees',
//                     href: '#',
//                     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
//                     imageAlt:
//                         'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//                 },
//             ],
//             sections: [
//                 {
//                     id: 'clothing',
//                     name: 'Clothing',
//                     items: [
//                         { name: 'Tops', href: '#' },
//                         { name: 'Pants', href: '#' },
//                         { name: 'Sweaters', href: '#' },
//                         { name: 'T-Shirts', href: '#' },
//                         { name: 'Jackets', href: '#' },
//                         { name: 'Activewear', href: '#' },
//                         { name: 'Browse All', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'accessories',
//                     name: 'Accessories',
//                     items: [
//                         { name: 'Watches', href: '#' },
//                         { name: 'Wallets', href: '#' },
//                         { name: 'Bags', href: '#' },
//                         { name: 'Sunglasses', href: '#' },
//                         { name: 'Hats', href: '#' },
//                         { name: 'Belts', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'brands',
//                     name: 'Brands',
//                     items: [
//                         { name: 'Re-Arranged', href: '#' },
//                         { name: 'Counterfeit', href: '#' },
//                         { name: 'Full Nelson', href: '#' },
//                         { name: 'My Way', href: '#' },
//                     ],
//                 },
//             ],
//         },
//     ],
//     pages: [
//         { name: 'Company', href: '#' },
//         { name: 'Stores', href: '#' },
//     ],
// }

// export default function StoreNav() {
//     const [open, setOpen] = useState(false)

//     return (
//         <div className="bg-white">
//             {/* Mobile menu */}
//             <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
//                 <DialogBackdrop
//                     transition
//                     className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
//                 />

//                 <div className="fixed inset-0 z-40 flex">
//                     <DialogPanel
//                         transition
//                         className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
//                     >
//                         <div className="flex px-4 pb-2 pt-5">
//                             <button
//                                 type="button"
//                                 onClick={() => setOpen(false)}
//                                 className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                             >
//                                 <span className="absolute -inset-0.5" />
//                                 <span className="sr-only">Close menu</span>
//                                 <XMarkIcon aria-hidden="true" className="size-6" />
//                             </button>
//                         </div>

//                         {/* Links */}
//                         <TabGroup className="mt-2">
//                             <div className="border-b border-gray-200">
//                                 <TabList className="-mb-px flex space-x-8 px-4">
//                                     {navigation.categories.map((category) => (
//                                         <Tab
//                                             key={category.name}
//                                             className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
//                                         >
//                                             {category.name}
//                                         </Tab>
//                                     ))}
//                                 </TabList>
//                             </div>
//                             <TabPanels as={Fragment}>
//                                 {navigation.categories.map((category) => (
//                                     <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//                                         <div className="grid grid-cols-2 gap-x-4">
//                                             {category.featured.map((item) => (
//                                                 <div key={item.name} className="group relative text-sm">
//                                                     <img
//                                                         alt={item.imageAlt}
//                                                         src={item.imageSrc}
//                                                         className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
//                                                     />
//                                                     <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                                         <span aria-hidden="true" className="absolute inset-0 z-10" />
//                                                         {item.name}
//                                                     </a>
//                                                     <p aria-hidden="true" className="mt-1">
//                                                         Shop now
//                                                     </p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         {category.sections.map((section) => (
//                                             <div key={section.name}>
//                                                 <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                                                     {section.name}
//                                                 </p>
//                                                 <ul
//                                                     role="list"
//                                                     aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                                                     className="mt-6 flex flex-col space-y-6"
//                                                 >
//                                                     {section.items.map((item) => (
//                                                         <li key={item.name} className="flow-root">
//                                                             <a href={item.href} className="-m-2 block p-2 text-gray-500">
//                                                                 {item.name}
//                                                             </a>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}
//                                     </TabPanel>
//                                 ))}
//                             </TabPanels>
//                         </TabGroup>

//                         <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                             {navigation.pages.map((page) => (
//                                 <div key={page.name} className="flow-root">
//                                     <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
//                                         {page.name}
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                             <div className="flow-root">
//                                 <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                                     Sign in
//                                 </a>
//                             </div>
//                             <div className="flow-root">
//                                 <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
//                                     Create account
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="border-t border-gray-200 px-4 py-6">
//                             <a href="#" className="-m-2 flex items-center p-2">
//                                 <img
//                                     alt=""
//                                     src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
//                                     className="block h-auto w-5 shrink-0"
//                                 />
//                                 <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
//                                 <span className="sr-only">, change currency</span>
//                             </a>
//                         </div>
//                     </DialogPanel>
//                 </div>
//             </Dialog>

//             <header className="relative bg-white">
//                 <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//                     Get free delivery on orders over $100
//                 </p>

//                 <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                     <div className="border-b border-gray-200">
//                         <div className="flex h-16 items-center">
//                             <button
//                                 type="button"
//                                 onClick={() => setOpen(true)}
//                                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                             >
//                                 <span className="absolute -inset-0.5" />
//                                 <span className="sr-only">Open menu</span>
//                                 <Bars3Icon aria-hidden="true" className="size-6" />
//                             </button>

//                             {/* Logo */}
//                             <div className="ml-4 flex lg:ml-0">
//                                 <a href="#">
//                                     <span className="sr-only">Your Company</span>
//                                     <img
//                                         alt=""
//                                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//                                         className="h-8 w-auto"
//                                     />
//                                 </a>
//                             </div>

//                             {/* Flyout menus */}
//                             <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
//                                 <div className="flex h-full space-x-8">
//                                     {navigation.categories.map((category) => (
//                                         <Popover key={category.name} className="flex">
//                                             <div className="relative flex">
//                                                 <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
//                                                     {category.name}
//                                                 </PopoverButton>
//                                             </div>

//                                             <PopoverPanel
//                                                 transition
//                                                 className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
//                                             >
//                                                 {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                                                 <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

//                                                 <div className="relative bg-white">
//                                                     <div className="mx-auto max-w-7xl px-8">
//                                                         <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
//                                                             <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                                                 {category.featured.map((item) => (
//                                                                     <div key={item.name} className="group relative text-base sm:text-sm">
//                                                                         <img
//                                                                             alt={item.imageAlt}
//                                                                             src={item.imageSrc}
//                                                                             className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
//                                                                         />
//                                                                         <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                                                             <span aria-hidden="true" className="absolute inset-0 z-10" />
//                                                                             {item.name}
//                                                                         </a>
//                                                                         <p aria-hidden="true" className="mt-1">
//                                                                             Shop now
//                                                                         </p>
//                                                                     </div>
//                                                                 ))}
//                                                             </div>
//                                                             <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
//                                                                 {category.sections.map((section) => (
//                                                                     <div key={section.name}>
//                                                                         <p id={`${section.name}-heading`} className="font-medium text-gray-900">
//                                                                             {section.name}
//                                                                         </p>
//                                                                         <ul
//                                                                             role="list"
//                                                                             aria-labelledby={`${section.name}-heading`}
//                                                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                                                         >
//                                                                             {section.items.map((item) => (
//                                                                                 <li key={item.name} className="flex">
//                                                                                     <a href={item.href} className="hover:text-gray-800">
//                                                                                         {item.name}
//                                                                                     </a>
//                                                                                 </li>
//                                                                             ))}
//                                                                         </ul>
//                                                                     </div>
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </PopoverPanel>
//                                         </Popover>
//                                     ))}

//                                     {navigation.pages.map((page) => (
//                                         <a
//                                             key={page.name}
//                                             href={page.href}
//                                             className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                                         >
//                                             {page.name}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </PopoverGroup>

//                             <div className="ml-auto flex items-center">
//                                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                                     <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                                         Sign in
//                                     </a>
//                                     <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
//                                     <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                                         Create account
//                                     </a>
//                                 </div>

//                                 <div className="hidden lg:ml-8 lg:flex">
//                                     <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
//                                         <img
//                                             alt=""
//                                             src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
//                                             className="block h-auto w-5 shrink-0"
//                                         />
//                                         <span className="ml-3 block text-sm font-medium">CAD</span>
//                                         <span className="sr-only">, change currency</span>
//                                     </a>
//                                 </div>

//                                 {/* Search */}
//                                 <div className="flex lg:ml-6">
//                                     <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                                         <span className="sr-only">Search</span>
//                                         <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
//                                     </a>
//                                 </div>

//                                 {/* Cart */}
//                                 <div className="ml-4 flow-root lg:ml-6">
//                                     <a href="#" className="group -m-2 flex items-center p-2">
//                                         <ShoppingBagIcon
//                                             aria-hidden="true"
//                                             className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
//                                         />
//                                         <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
//                                         <span className="sr-only">items in cart, view bag</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         </div>
//     )
// }




/* --------------------------------------------------- BY using HTML--------------------------------------------------- */


let StoreNav = () => {
    return (
     <>
     <div className="bg-white">
    {/*
      Mobile menu
  
      Off-canvas menu for mobile, show/hide based on off-canvas menu state.
    */}
    <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
      {/*
  Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
  Entering: "transition-opacity ease-linear duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "transition-opacity ease-linear duration-300"
    From: "opacity-100"
    To: "opacity-0"
      */}
      <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
      <div className="fixed inset-0 z-40 flex">
        {/*
    Off-canvas menu, show/hide based on off-canvas menu state.
  
    Entering: "transition ease-in-out duration-300 transform"
      From: "-translate-x-full"
      To: "translate-x-0"
    Leaving: "transition ease-in-out duration-300 transform"
      From: "translate-x-0"
      To: "-translate-x-full"
  */}
        <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
          <div className="flex px-4 pb-2 pt-5">
            <button
              type="button"
              className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Links */}
          <div className="mt-2">
            <div className="border-b border-gray-200">
              <div
                className="-mb-px flex space-x-8 px-4"
                aria-orientation="horizontal"
                role="tablist"
              >
                {/* Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" */}
                <button
                  id="tabs-1-tab-1"
                  className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                >
                  Women
                </button>
                {/* Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-900" */}
                <button
                  id="tabs-1-tab-2"
                  className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                  aria-controls="tabs-1-panel-2"
                  role="tab"
                  type="button"
                >
                  Men
                </button>
              </div>
            </div>
            {/* 'Women' tab panel, show/hide based on tab state. */}
            <div
              id="tabs-1-panel-1"
              className="space-y-10 px-4 pb-8 pt-10"
              aria-labelledby="tabs-1-tab-1"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="grid grid-cols-2 gap-x-4">
                <div className="group relative text-sm">
                  <img
                    src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg"
                    alt="Models sitting back to back, wearing Basic Tee in black and bone."
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                  />
                  <a href="#" className="mt-6 block font-medium text-gray-900">
                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                    New Arrivals
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
                <div className="group relative text-sm">
                  <img
                    src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg"
                    alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                  />
                  <a href="#" className="mt-6 block font-medium text-gray-900">
                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                    Basic Tees
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
              </div>
              <div>
                <p
                  id="women-clothing-heading-mobile"
                  className="font-medium text-gray-900"
                >
                  Clothing
                </p>
                <ul
                  role="list"
                  aria-labelledby="women-clothing-heading-mobile"
                  className="mt-6 flex flex-col space-y-6"
                >
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Tops
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Dresses
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Pants
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Denim
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Sweaters
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      T-Shirts
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Jackets
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Activewear
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Browse All
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  id="women-accessories-heading-mobile"
                  className="font-medium text-gray-900"
                >
                  Accessories
                </p>
                <ul
                  role="list"
                  aria-labelledby="women-accessories-heading-mobile"
                  className="mt-6 flex flex-col space-y-6"
                >
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Watches
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Wallets
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Bags
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Sunglasses
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Hats
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Belts
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  id="women-brands-heading-mobile"
                  className="font-medium text-gray-900"
                >
                  Brands
                </p>
                <ul
                  role="list"
                  aria-labelledby="women-brands-heading-mobile"
                  className="mt-6 flex flex-col space-y-6"
                >
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Full Nelson
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      My Way
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Re-Arranged
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Counterfeit
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Significant Other
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 'Men' tab panel, show/hide based on tab state. */}
            <div
              id="tabs-1-panel-2"
              className="space-y-10 px-4 pb-8 pt-10"
              aria-labelledby="tabs-1-tab-2"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="grid grid-cols-2 gap-x-4">
                <div className="group relative text-sm">
                  <img
                    src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                  />
                  <a href="#" className="mt-6 block font-medium text-gray-900">
                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                    New Arrivals
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
                <div className="group relative text-sm">
                  <img
                    src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg"
                    alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                  />
                  <a href="#" className="mt-6 block font-medium text-gray-900">
                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                    Artwork Tees
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
              </div>
              <div>
                <p
                  id="men-clothing-heading-mobile"
                  className="font-medium text-gray-900"
                >
                  Clothing
                </p>
                <ul
                  role="list"
                  aria-labelledby="men-clothing-heading-mobile"
                  className="mt-6 flex flex-col space-y-6"
                >
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Tops
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Pants
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Sweaters
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      T-Shirts
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Jackets
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Activewear
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Browse All
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  id="men-accessories-heading-mobile"
                  className="font-medium text-gray-900"
                >
                  Accessories
                </p>
                <ul
                  role="list"
                  aria-labelledby="men-accessories-heading-mobile"
                  className="mt-6 flex flex-col space-y-6"
                >
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Watches
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Wallets
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Bags
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Sunglasses
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Hats
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Belts
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  id="men-brands-heading-mobile"
                  className="font-medium text-gray-900"
                >
                  Brands
                </p>
                <ul
                  role="list"
                  aria-labelledby="men-brands-heading-mobile"
                  className="mt-6 flex flex-col space-y-6"
                >
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Re-Arranged
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Counterfeit
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      Full Nelson
                    </a>
                  </li>
                  <li className="flow-root">
                    <a href="#" className="-m-2 block p-2 text-gray-500">
                      My Way
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Company
              </a>
            </div>
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Stores
              </a>
            </div>
          </div>
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Sign in
              </a>
            </div>
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Create account
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6">
            <a href="#" className="-m-2 flex items-center p-2">
              <img
                src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                alt=""
                className="block h-auto w-5 shrink-0"
              />
              <span className="ml-3 block text-base font-medium text-gray-900">
                CAD
              </span>
              <span className="sr-only">, change currency</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <header className="relative bg-white">
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* Mobile menu toggle, controls the 'mobileMenuOpen' state. */}
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            {/* Flyout menus */}
            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                <div className="flex">
                  <div className="relative flex">
                    {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                    <button
                      type="button"
                      className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                      aria-expanded="false"
                    >
                      Women
                    </button>
                  </div>
                  {/*
              'Women' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100"
                To: "opacity-0"
            */}
                  <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />
                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                            <div className="group relative text-base sm:text-sm">
                              <img
                                src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg"
                                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <a
                                href="#"
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                New Arrivals
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                            <div className="group relative text-base sm:text-sm">
                              <img
                                src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg"
                                alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <a
                                href="#"
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                Basic Tees
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          </div>
                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            <div>
                              <p
                                id="Clothing-heading"
                                className="font-medium text-gray-900"
                              >
                                Clothing
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="Clothing-heading"
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Tops
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Dresses
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Pants
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Denim
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Sweaters
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    T-Shirts
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Jackets
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Activewear
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Browse All
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p
                                id="Accessories-heading"
                                className="font-medium text-gray-900"
                              >
                                Accessories
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="Accessories-heading"
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Watches
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Wallets
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Bags
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Sunglasses
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Hats
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Belts
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p
                                id="Brands-heading"
                                className="font-medium text-gray-900"
                              >
                                Brands
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="Brands-heading"
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Full Nelson
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    My Way
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Re-Arranged
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Counterfeit
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Significant Other
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative flex">
                    {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}
                    <button
                      type="button"
                      className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                      aria-expanded="false"
                    >
                      Men
                    </button>
                  </div>
                  {/*
              'Men' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100"
                To: "opacity-0"
            */}
                  <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />
                    <div className="relative bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                            <div className="group relative text-base sm:text-sm">
                              <img
                                src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <a
                                href="#"
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                New Arrivals
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                            <div className="group relative text-base sm:text-sm">
                              <img
                                src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg"
                                alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <a
                                href="#"
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                Artwork Tees
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          </div>
                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            <div>
                              <p
                                id="Clothing-heading"
                                className="font-medium text-gray-900"
                              >
                                Clothing
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="Clothing-heading"
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Tops
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Pants
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Sweaters
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    T-Shirts
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Jackets
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Activewear
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Browse All
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p
                                id="Accessories-heading"
                                className="font-medium text-gray-900"
                              >
                                Accessories
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="Accessories-heading"
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Watches
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Wallets
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Bags
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Sunglasses
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Hats
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Belts
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p
                                id="Brands-heading"
                                className="font-medium text-gray-900"
                              >
                                Brands
                              </p>
                              <ul
                                role="list"
                                aria-labelledby="Brands-heading"
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Re-Arranged
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Counterfeit
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    Full Nelson
                                  </a>
                                </li>
                                <li className="flex">
                                  <a href="#" className="hover:text-gray-800">
                                    My Way
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Stores
                </a>
              </div>
            </div>
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>
              <div className="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  className="flex items-center text-gray-700 hover:text-gray-800"
                >
                  <img
                    src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </a>
              </div>
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <svg
                    className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
  
     </>
    );
  }
  
  export default StoreNav;




  