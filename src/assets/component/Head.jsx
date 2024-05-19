import React from 'react'

function Head() {
  return (
    <>
    
    <section className="dark:bg-gray-100 text-white bg-[#0A192F]">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-full lg:text-left">
            <p className='pl-3'>Hi, my name is</p>
			<h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-violet-600">
				<span className="text-rose-500">Sweta Sharma</span>                
			</h1>
            <h1 className="text-5xl font-bold leading-none sm:text-6xl pt-3"> I build things for the web.</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">I am front-End web developer from last 2yrs.
				<br  className="" />Currently,i'm focused on myself more productive abd smart working.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-rose-600 text-gray-50">GitHub</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Resume</a>
			</div>
		</div>
		{/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div> */}
	</div>
</section>
    
    
    </>
  )
}

export default Head