import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RouterParam from './RouterParam';
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import InvalidParamsPage from "./InvalidParmasPage";
import WeatherPage from "./WeatherPage";

const fetchWeather = async ({params}) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=5c63281c236a72165e0bcab8cd0fd8fc`);

    if (res.ok) {
        return res;
    }

    return ({
        "status": res.status,
        "weather": [
            {"id": 803, "main": "Unknown", "description": "알 수 없음", "icon": "50d"}
        ],
        "name": "알 수 없음"
    });
}

const routeParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam/>} errorElement={<InvalidParamsPage/>}>
            <Route path={'/'} element={<TopPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
            <Route path={'/book/:isbn?'} element={<BookPage/>}/>
            <Route path={'/search/*'} element={<SearchPage/>}/>
            <Route path={"/weather/:city"} element={<WeatherPage/>}
                   loader={fetchWeather}
            />
            <Route path={'/bookQuery'} element={<BookQueryPage/>}/>
        </Route>
    )
);

export default routeParam;
