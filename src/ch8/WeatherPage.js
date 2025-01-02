import { useLoaderData } from 'react-router-dom';

export default function WeatherPage() {
  // 로더를 통해 획득한 데이터를 가져온다.
  const data =  useLoaderData();
  return (
    <figure>
      <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main} />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}