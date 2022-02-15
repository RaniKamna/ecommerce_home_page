import '../App.css';
import { useState, useEffect } from 'react';

export const Searchbar = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState("")

    useEffect(() => {
        fetch(`http://localhost:2342/products`)
            .then(x => x.json())
            .then((d) => {
                //console.log(d.item);
                setData(d.item);
            })
    }, []);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        setData(
            data.filter((item) => {
                return item.brandname == text
            })
        )
        setText("")
    }

    return (
        <>
            <div className='searchdiv'>
                <input type="search" id="searchbar" placeholder='Search Products' value={text} onChange={handleChange} />
                <button onClick={handleClick}>Enter</button>
            </div>
            {data.length !== 0 && <div className='result'>
                {data.map((item) => (
                    <div key={item.id}>
                        <div>
                            <p>{item.brandname}</p>
                        </div>
                    </div>
                ))}
            </div>}
        </>
    )
}