import React  from 'react'

const Movie = (()=>{
    return (
        <div class="flex  overflow-hidden flex-wrap">
        <a class="flex flex-col justify-center items-center bg-slate-900 w-80 px-5 py-3 my-4 mx-1" href="https://google.com" target="_blank">
<figure class="bg-re-400 flex flex-col items-center">
<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="" class=" w-[90%] m-4 transition-all hover:scale-110 border-2 border-yellow-600 shadow-md hover:shadow-gray-400"/>
<figcaption class="font-bold text-xl text-gray-100 text-center">Spider-Man: No Way Home</figcaption>
</figure>
<section class="w-60 h-20 flex flex-col overflow-auto text-lg  text-yellow-500 ">
<p><span class=" capitalize font-semibold">Release date:</span>  <span class="text-gray-400 text-sm ">December 15, 2021</span></p>
<p><span class=" capitalize font-semibold">Rating:</span>  <span class="text-gray-400 text-sm ">4.2</span>  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
</p>
</section>
</a>


</div>
    )
})

export default Movie;
