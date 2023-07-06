import React from "react";

const Loading = () => {
	return (
		<div className='flex min-h-screen flex-col items-center gap-14 justify-between p-24 bg-secondary'>
			<div className='w-full flex gap-6 animate-pulse'>
				<div className='flex flex-col gap-1'>
					<div className='bg-gray-200 h-20 w-16'></div>
				</div>
				<div className='flex w-full flex-col gap-4'>
					<div className='w-full h-10 bg-primary'></div>
					<div className='w-full flex gap-4'>
						<div className='w-4/5 h-6 bg-gray-200'></div>
						<div className='w-1/5 h-6 bg-gray-200'></div>
					</div>
					<div className='w-full flex gap-4'>
						<div className='w-2/5 h-6 bg-gray-200'></div>
						<div className='w-3/5 h-6 bg-gray-200'></div>
					</div>
					<div className='w-full flex gap-4'>
						<div className='w-3/5 h-6 bg-gray-200'></div>
						<div className='w-1/5 h-6 bg-gray-200'></div>
						<div className='w-1/5 h-6 bg-gray-200'></div>
					</div>
					<div className='w-full flex gap-4'>
						<div className='w-1/5 h-6 bg-gray-200'></div>
						<div className='w-1/5 h-6 bg-gray-200'></div>
						<div className='w-3/5 h-6 bg-gray-200'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
