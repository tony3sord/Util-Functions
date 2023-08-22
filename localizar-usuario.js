const d=document;

export function localizar(div) {
    const $div=d.querySelector(div);
    const options={
        enableHighAcurracy:true,
        timeout:5000,
        maximumAge:0
    }

    const success = position => {
        let coords=position.coords;
        $div.innerHTML=`
        <p>Tu posición actual es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.acurracy}</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.lalitude},${coords.longitude},12z" target="_blank" rel="noopener">Ver en GoogleMaps</a>
        `
    }
    const err= (err) => {
        $div.innerHTML=`<h3>Ocurrió un error <mark>${err.code}:${err.message}</mark></h3>`;
    };
    navigator.geolocation.getCurrentPosition(success,err,options);
}
