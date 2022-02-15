import { useEffect, useState } from 'react'
import '../App.css'

export const Carousel = () => {
    const [carou, setCarou] = useState([]);

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
        setCarou(carou === length - 1 ? 0 : carou + 1)
    }

    const prev = () => {
        setCarou(carou === 0 ? length - 1 : carou - 1)
    }

    return (
        <>
            <div className='slide'>
                {carou.map((e, i) => (
                    <img key={i} src={`${e.images}`} />
                ))}
                {/* <button className='prevbtn'>prev</button> */}
                {/* <button className='nextbtn'>next</button> */}
            </div>
        </>
    )
}