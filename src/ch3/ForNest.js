import ForItem from "./ForItem";

export default function ForNest({src}) {
    // const lowPrice = src.filter(book => book.price > 30000);
    src.sort((m, n) => n.price - m.price)
    return (
        <dl>
            {src.map(elem =>
                <ForItem book={elem} key={elem.isbn}/>)
            }
        </dl>
    );
};