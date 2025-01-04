import {Route, createBrowserRouter, createRoutesFromElements, redirect} from "react-router-dom";
import RouterParam from './RouterParam';
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import InvalidParamsPage from "./InvalidParmasPage";
import WeatherPage from "./WeatherPage";
import BookFormPage from "./BookFormPage";
import yup from '../ch4/yup.kr';
import {date, number, string} from 'yup';
import {BookDetailsPage} from "./BookNest";
const sleep = ms => new Promise(res => setTimeout(res, ms));
const fetchWeather = async ({params}) => {
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=5c63281c236a72165e0bcab8cd0fd8fc`);

    if (res.ok) {
        return res;
    }
    // return ({
    //     "status": res.status,
    //     "weather": [
    //         {"id": 803, "main": "Unknown", "description": "알 수 없음", "icon": "50d"}
    //     ],
    //     "name": "알 수 없음"
    // });
}

const bookAction = async ({request}) => {
    const form = await request.formData();

    const bookScehma = yup.object({
        title: string().label('도서명').required().max(100),
        price: number().label('가격').integer().positive(),
        published: date().label('출간일').required().max(new Date(2100, 0, 1)),

    });
    let info;

    try {
        info = await bookScehma.validate({
            title: form.get('title'),
            price: form.get('price') || 0,
            published: new Date(form.get('published') || Date.now()),
        }, {
            abortEarly: false
        });
        console.log(info);
        return redirect('/');
    } catch (e) {
        return e.errors;
    }
};

const routeParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam/>} errorElement={<InvalidParamsPage/>}>
            <Route path={'/'} element={<TopPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>

            <Route path={'/book/:isbn?'} element={<BookPage/>}/>
            <Route path={'/search/*'} element={<SearchPage/>}/>
            <Route path={"/weather/:city"} lazy={() => import('./WeatherLazyPage')}
            />
            <Route path={"/books"} lazy={async ()=>{
                const {BookListPage} = await import('./BookNest');
                return {Component: BookListPage};
            }}>
                <Route path={":isbn"} lazy={async ()=>{
                    const {BookDetailsPage} = await import('./BookNest');
                    return {Component: BookDetailsPage}

                }}/>
            </Route>
            <Route path={'/bookQuery'} element={<BookQueryPage/>}/>
            <Route path={'/book/form'} element={<BookFormPage/>} action={bookAction}/>
        </Route>
    )
);

export default routeParam;
