import axios from "axios";
import { useEffect, useState } from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { minusCounter, plusCounter } from "../../reducers/Count";

const Cards = () => {
  const [data, setData] = useState(null);
  const state = useSelector((state) => state.count);
  const dispach = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);
  return (
    <>
      <main className='main'>
        <div className='main__wrapper'>
          <ul className='main__list'>
            {data?.map((item) => {
              //1 ta malumoyni  chiqa un if yozildi yozilmasa ham bo'lar edi nu yozgim keldi )
              if (item.id <= 1) {
                return (
                  <li key={item.id} className='main__item'>
                    <img
                      className='main__imgs'
                      src={item.thumbnailUrl}
                      alt='jsonplaceholder img'
                    />
                    <p className='main__imgs-tite'>{item.title}</p>
                    <div className='main__item-wrapper'>
                      <span>purchases</span>
                      <button
                        className='main__addition'
                        onClick={() => dispach(plusCounter())}
                      >
                        +
                      </button>
                      <button
                        className='main__subtraction'
                        onClick={() => dispach(minusCounter())}
                      >
                        -
                      </button>
                      <span id={item.id} className='main__miniWIndow'>
                        {state}
                      </span>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Cards;
