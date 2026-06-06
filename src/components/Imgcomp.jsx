function ImageComponent({image_url,name,price}) {
    return <div className="bg-white col-span-1 h-fit rounded-lg">
        <img src={image_url} alt="def Image" className='w-full h-auto rounded-lg shadow-lg'/>
        <div className='flex justify-between items-center
mt-4 m-2'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
        
    </div>
}

export default ImageComponent