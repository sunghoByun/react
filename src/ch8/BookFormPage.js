import {Form, useActionData} from 'react-router-dom';

export default function BookFormPage() {
    const errors = useActionData();
    return (
        <Form method={"POST"} noValidate>
            <ul>
                {errors?.map(msg=> <li key={msg}>{msg}</li>)}
            </ul>
            <div>
                <label htmlFor={"title"}>제목 : </label><br/>
                <input id={"title"} name={"title"} type={"text"} size={"20"}/>
            </div>
            <div>
                <label htmlFor={"price"}>가격 : </label><br/>
                <input id={"price"} name={"price"} type={"number"}/> 원
            </div>
            <div>
                <label htmlFor={"published"}>제목 : </label><br/>
                <input id={"published"} name={"published"} type={"date"}/>
            </div>
            <div>
                <button type={"submit"}>등록하기</button>
            </div>
        </Form>
    )
};