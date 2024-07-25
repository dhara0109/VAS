const Photo = () => {
    return (
        <>
           
           <div className='gallery'>
                <figure className='gallery__item gallery__item--1'>
                    <img src="assets/img/blog/oldc.jpg" className="gallery__img" alt="Image 1" />
                </figure>
                <figure className='gallery__item gallery__item--2'>
                    <img src="assets/img/blog/s.jpg" className="gallery__img" alt="Image 2" />
                </figure>
                <figure className='gallery__item gallery__item--3'>
                    <img src="assets/img/blog/kbjc.jpg" className="gallery__img" alt="Image 3" />
                </figure>
                <figure className='gallery__item gallery__item--4'>
                    <img src="assets/img/blog/management.jpg" className="gallery__img" alt="Image 4" />
                </figure>
                <figure className='gallery__item gallery__item--5'>
                    <img src="assets/img/blog/foodb.jpg" className="gallery__img" alt="Image 5" />
                </figure>
                <figure className='gallery__item gallery__item--6'>
                    <img src="assets/img/blog/sg.jpg" className="gallery__img" alt="Image 6" />
                </figure>
            </div>


        </>
    );
};

export default Photo;