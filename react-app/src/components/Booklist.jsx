import React,{useState,useEffect} from 'react';

const Booklist = props => {
    const [bookData,setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    },[props])

    //const result = props.getData?.(props.language);
    console.log(bookData);

    return (
        <div>
            <ul>
                {bookData === null ? (
                    <p>now looading</p>
                    ):(
                    bookData.data.items.map((x,index) => (
                    <li key={index}>タイトル：{x.volumeInfo.title}/著者：{x.volumeInfo.authors}/
                    出版社：{x.volumeInfo.publisher}
                    </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Booklist;