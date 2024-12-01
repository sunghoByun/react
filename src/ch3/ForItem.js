import DownloadIcon from '@mui/icons-material/Download';

export default function ForItem({book}) {
    // let dd;
    // if (book.download) {
    //     dd =
    //         <dd>
    //             {book.summary}
    //
    //         </dd>;
    // } else {
    //     dd = <dd>{book.summary}</dd>;
    // }
    return (
        <>
            <dt>
                <a href={`https://wikibook.co.kr/images/cover/s/${book.isbn}.jpg`}>
                    {book.title} ({book.price} 원)
                </a>
            </dt>
            {book.summary}
            {/*{book.download && <a href={`https://github.com/wikibook/${book.slug}/`}><DownloadIcon/></a>}*/}
            {book.download || 'x'}
        </>

    );
};