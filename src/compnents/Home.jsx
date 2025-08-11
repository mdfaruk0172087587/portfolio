import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-center items-center flex-col lg:flex-row-reverse'>
             {/* image */}
           <div className='mb-8'>
            <img className='h-[300px] w-[300px] ' src="https://i.ibb.co.com/WNFjN16K/profile.jpg" alt="" />
            
           </div>
           {/* text div */}
           <div className='w-1/2'>
            <h3 className='text-lg mb-3'>Hello, I am</h3>
            <h1 className='font-bold text-xl mb-3'>Omar Faruk</h1>
            <h5 className='text-lg font-medium mb-3'>Frontend Developer</h5>
            <p className='text-lg'>I make beautiful website</p>
            {/* links */}
            <div className='flex gap-3'>
                <li>li 1</li>
                <li>li 2</li>
                <li>li 3</li>
            </div>
            <button className='btn mt-3'>Resume</button>
           </div>
          
        </div>

    );
};

export default Home;