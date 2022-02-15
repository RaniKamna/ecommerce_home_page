import { useEffect, useState } from 'react'
import '../App.css'

export const Carousel = () => {
    const [carou, setCarou] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:2342/carousels`)
            .then(x => x.json())
            .then((d) => {
                //console.log(d.item);
                setCarou(d.item);
            })
    }, []);

    const length = carou.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <>
            <div className='slide'>
                <button className='prevbtn' onClick={prev}>prev</button>
                <button className='nextbtn' onClick={next}>next</button>
                {carou.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slideactive' : 'slider'} key={index}>
                            {index === current && (<img src={slide.images} key={slide.id} alt='img' />)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}