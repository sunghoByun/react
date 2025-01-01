import {Helmet} from "react-helmet-async";
import {useMatches} from "react-router-dom";

export default function MyHeader(props) {
    let {
        title = '리액트 입문',
        keywords = '리액트, 자바스크립트, 프레임워크',
        description = '리액트 입문용 샘플입니다.'
    } = useMatches().at(-1).handle ?? {};

    title = title.replace('%s', props.title);
    keywords = keywords.replace('%s', props.keywords);
    description = description.replace('%s', props.description);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name={"keywords"} content={keywords} />
            <meta name={"description"} content={description} />
        </Helmet>
    );
};