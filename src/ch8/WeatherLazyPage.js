import {useLoaderData} from "react-router-dom";

const sleep = ms => new Promise(res => setTimeout(res, ms));
export async function loader({params}) {
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

export function Component() {
    const data =  useLoaderData();
    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                 alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}

// Component.displayName = 'WeatherLazyPage';

export function ErrorBoundary() {

}