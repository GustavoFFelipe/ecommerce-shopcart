import React, {useState, useEffect} from "react";
import '../../styles/clock.css';

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDOwn = () => {
        const destination = new Date('April 27, 2023').getTime(); // Data objetivo

        interval = setInterval(() => {
            const now = new Date().getTime(); // data atual para calculo do intervalo
            const difference  = destination - now // calculo de intervalo
            const days = Math.floor(difference /(1000 * 60 * 60 * 24)); // calculo dos dias

            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // horas
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60 ));//minutos
            const seconds = Math.floor(difference % (1000 * 60 ) / 1000);//segundos
            // usando o modulo somos capazes de calcular os segundos atrvaés do resto dos dias.
            if(destination < 0 ) clearInterval(interval.current);
            else{
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds)
            }


        })
    }

    useEffect(() =>{
        countDOwn();
    })


  return (
    <div className="clock__wrapper">
        <div className="clock__data">
            <h1>{days}</h1>
            <h5>Dias</h5>
        </div>
        <span className="clock__text">:</span>
        <div className="clock__data">
            <h1>{hours}</h1>
            <h5>Horas</h5>
        </div>
        <span className="clock__text">:</span>
        <div className="clock__data">
            <h1 >{minutes}</h1>
            <h5 >Minutos</h5>
        </div>
        <span className="clock__text">:</span>
        <div className="clock__data">
            <h1>{seconds}</h1>
            <h5>Segundos</h5>
        </div>
        
    </div>
  );
};

export default Clock;
