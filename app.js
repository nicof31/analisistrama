function procesarTrama1() {
    const trama = document.getElementById('trama1').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
    //-------------- latitud------------
        let latitudUno = trama.substring(44, 47); 
        let latitudDos = trama.substring(47, 52); 
        let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
        console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
       let longitudUno = trama.substring(52, 53); 
        let longitudDos = trama.substring(54, 56); 
        let longitudTres = trama.substring(56, 61); 
        let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
        console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

        posicionesTramas.push({ latitud: latitud, longitud: longitud});

    let tipoUnidad = document.getElementById('unidad1').value; 
  

   
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(1, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }
  
  function procesarTrama2() {
    const trama = document.getElementById('trama2').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
  //-------------- latitud------------
  let latitudUno = trama.substring(44, 47); 
  let latitudDos = trama.substring(47, 52); 
  let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
  console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
 let longitudUno = trama.substring(52, 53); 
  let longitudDos = trama.substring(54, 56); 
  let longitudTres = trama.substring(56, 61); 
  let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
  console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

  posicionesTramas.push({ latitud: latitud, longitud: longitud });

    let tipoUnidad = document.getElementById('unidad2').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(2, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }
  
  function procesarTrama3() {
    const trama = document.getElementById('trama3').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
   //-------------- latitud------------
   let latitudUno = trama.substring(44, 47); 
   let latitudDos = trama.substring(47, 52); 
   let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
   console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
  let longitudUno = trama.substring(52, 53); 
   let longitudDos = trama.substring(54, 56); 
   let longitudTres = trama.substring(56, 61); 
   let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
   console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

   posicionesTramas.push({ latitud: latitud, longitud: longitud });

    let tipoUnidad = document.getElementById('unidad3').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(3, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }

  function procesarTrama4() {
    const trama = document.getElementById('trama4').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
    //-------------- latitud------------
    let latitudUno = trama.substring(44, 47); 
    let latitudDos = trama.substring(47, 52); 
    let latitud  = latitudUno +"."+ latitudDos ; 

//-------------- longitud------------
   let longitudUno = trama.substring(52, 53); 
    let longitudDos = trama.substring(54, 56); 
    let longitudTres = trama.substring(56, 61); 
    let longitud= longitudUno +  longitudDos +"."+ longitudTres; 

    let tipoUnidad = document.getElementById('unidad4').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(4, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }
  
  function procesarTrama5() {
    const trama = document.getElementById('trama5').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
    //-------------- latitud------------
    let latitudUno = trama.substring(44, 47); 
    let latitudDos = trama.substring(47, 52); 
    let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
    console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
   let longitudUno = trama.substring(52, 53); 
    let longitudDos = trama.substring(54, 56); 
    let longitudTres = trama.substring(56, 61); 
    let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
    console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

    posicionesTramas.push({ latitud: latitud, longitud: longitud });

    let tipoUnidad = document.getElementById('unidad5').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(5, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }

  function procesarTrama6() {
    const trama = document.getElementById('trama6').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
     //-------------- latitud------------
     let latitudUno = trama.substring(44, 47); 
     let latitudDos = trama.substring(47, 52); 
     let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
     console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
    let longitudUno = trama.substring(52, 53); 
     let longitudDos = trama.substring(54, 56); 
     let longitudTres = trama.substring(56, 61); 
     let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
     console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

     posicionesTramas.push({ latitud: latitud, longitud: longitud });

    let tipoUnidad = document.getElementById('unidad6').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(6, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }

  function procesarTrama7() {
    const trama = document.getElementById('trama7').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
    //-------------- latitud------------
    let latitudUno = trama.substring(44, 47); 
    let latitudDos = trama.substring(47, 52); 
    let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
    console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
   let longitudUno = trama.substring(52, 53); 
    let longitudDos = trama.substring(54, 56); 
    let longitudTres = trama.substring(56, 61); 
    let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
    console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

    posicionesTramas.push({ latitud: latitud, longitud: longitud });

    let tipoUnidad = document.getElementById('unidad7').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(7, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }

  function procesarTrama8() {
    const trama = document.getElementById('trama8').value;
    const tipoTrama = trama.substring(26, 31);
    let fecha = trama.substring(0, 10);
    let horaServidor = trama.substring(11, 19);
    let fechaPosicion = trama.substring(32, 38);
    let horaPosicion = trama.substring(38, 44);
    horaPosicion = formatearHora(horaPosicion);
     //-------------- latitud------------
     let latitudUno = trama.substring(44, 47); 
     let latitudDos = trama.substring(47, 52); 
     let latitud  = parseFloat(latitudUno +"."+ latitudDos) ; 
     console.log("🚀 ~ file: app.js:13 ~ procesarTrama1 ~ latitud:", latitud)

//-------------- longitud------------
    let longitudUno = trama.substring(52, 53); 
     let longitudDos = trama.substring(54, 56); 
     let longitudTres = trama.substring(56, 61); 
     let longitud= parseFloat(longitudUno +  longitudDos +"."+ longitudTres); 
     console.log("🚀 ~ file: app.js:20 ~ procesarTrama1 ~ longitud:", longitud)

     posicionesTramas.push({ latitud: latitud, longitud: longitud });

    let tipoUnidad = document.getElementById('unidad8').value; // Obtener el valor seleccionado del desplegable
  
    let evento;
    if (tipoTrama === "RUS08") {
      evento = trama.substring(72, 74);
    } else if (tipoTrama === "RUS06") {
      evento = trama.substring(76, 78);
    }
  
    // Calcular hora de servidor en formato "HH:mm:ss"
    let horaCalcServidorArg = calcularHoraArg(-3, horaServidor);
  
    // Calcular hora de posición en formato "HH:mm:ss"
    let horaCalcPosicionArg = calcularHoraArg(-3, horaPosicion);
  
    agregarFilaATabla(8, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud);
  }
  
// Variables para almacenar los datos de las tramas procesadas
let tramas = [];
let tiposUnidad = [];
let horasServidor = [];
let horasPosicion = [];
let posicionesTramas = [];

  function agregarFilaATabla(numeroTrama, tipoUnidad, tipoTrama, fecha, horaServidor, horaCalcServidorArg, fechaPosicion, horaPosicion, horaCalcPosicionArg, evento, latitud, longitud) {
    const tablaResultados = document.getElementById('tablaResultados');
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${numeroTrama}</td>
      <td>${tipoUnidad}</td>
      <td>${tipoTrama}</td>
      <td>${fecha}</td>
      <td>${horaServidor}</td>
      <td>${horaCalcServidorArg}</td>
      <td>${fechaPosicion}</td>
      <td>${horaPosicion}</td>
      <td>${horaCalcPosicionArg}</td>
      <td>${calcularDiferenciaHora(horaServidor, horaPosicion)}</td>
      <td>${evento}</td>
      <td>${latitud}</td>
      <td>${longitud}</td>
    `;
    tablaResultados.appendChild(fila);
    // Almacenar datos para comparación
  tramas.push(numeroTrama);
  tiposUnidad.push(tipoUnidad);
  horasServidor.push(horaServidor);
  horasPosicion.push(horaPosicion);
  }
  

/*
  function mostrarComparacionTramas() {
    const comparacionServidorBody = document.getElementById('comparacionServidorBody');
    const comparacionPosicionBody = document.getElementById('comparacionPosicionBody');
    comparacionServidorBody.innerHTML = '';
    comparacionPosicionBody.innerHTML = '';
  
    // Mostrar comparación Hora Servidor vs. Hora Servidor
    for (let i = 0; i < tramas.length; i++) {
      const tramaActual = tramas[i];
      const tipoUnidadActual = tiposUnidad[i];
      const horaServidorActual = horasServidor[i];
  
      const filaServidor = document.createElement('tr');
      filaServidor.innerHTML = `
        <td>${tramaActual}</td>
        <td>${tipoUnidadActual}</td>
        <td>${horaServidorActual}</td>
      `;
      comparacionServidorBody.appendChild(filaServidor);
    }
  
    // Mostrar comparación Hora Posición vs. Hora Posición
    for (let i = 0; i < tramas.length; i++) {
      const tramaActual = tramas[i];
      const tipoUnidadActual = tiposUnidad[i];
      const horaPosicionActual = horasPosicion[i];
  
      const filaPosicion = document.createElement('tr');
      filaPosicion.innerHTML = `
        <td>${tramaActual}</td>
        <td>${tipoUnidadActual}</td>
        <td>${horaPosicionActual}</td>
      `;
      comparacionPosicionBody.appendChild(filaPosicion);
    }
  }*/
  function mostrarComparacionTramas() {
    const comparacionServidorBody = document.getElementById('comparacionServidorBody');
    const comparacionPosicionBody = document.getElementById('comparacionPosicionBody');
    comparacionServidorBody.innerHTML = '';
    comparacionPosicionBody.innerHTML = '';
  
    // Mostrar comparación Hora Servidor vs. Hora Servidor
    for (let i = 0; i < tramas.length; i++) {
      for (let j = 0; j < tramas.length; j++) {
        const tramaActual = tramas[i];
        const tipoUnidadActual = tiposUnidad[i];
        const horaServidorActual = horasServidor[i];
        const tramaComparacion = tramas[j];
        const tipoUnidadComparacion = tiposUnidad[j];
        const horaServidorComparacion = horasServidor[j];
  
        const diferenciaServidor = calcularDiferenciaHora(horaServidorActual, horaServidorComparacion);
  
        const filaServidor = document.createElement('tr');
        filaServidor.innerHTML = `
          <td>${tramaActual} vs. ${tramaComparacion}</td>
          <td>${tipoUnidadActual} vs. ${tipoUnidadComparacion}</td>
          <td>${horaServidorActual} vs. ${horaServidorComparacion}</td>
          <td>${diferenciaServidor}</td>
        `;
        comparacionServidorBody.appendChild(filaServidor);
      }
    }
  
    // Mostrar comparación Hora Posición vs. Hora Posición
    for (let i = 0; i < tramas.length; i++) {
      for (let j = 0; j < tramas.length; j++) {
        const tramaActual = tramas[i];
        const tipoUnidadActual = tiposUnidad[i];
        const horaPosicionActual = horasPosicion[i];
        const tramaComparacion = tramas[j];
        const tipoUnidadComparacion = tiposUnidad[j];
        const horaPosicionComparacion = horasPosicion[j];
  
        const diferenciaPosicion = calcularDiferenciaHora(horaPosicionActual, horaPosicionComparacion);
  
        const filaPosicion = document.createElement('tr');
        filaPosicion.innerHTML = `
          <td>${tramaActual} vs. ${tramaComparacion}</td>
          <td>${tipoUnidadActual} vs. ${tipoUnidadComparacion}</td>
          <td>${horaPosicionActual} vs. ${horaPosicionComparacion}</td>
          <td>${diferenciaPosicion}</td>
        `;
        comparacionPosicionBody.appendChild(filaPosicion);

      }
    }
     
    // Llamada a la función para mostrar las posiciones en el mapa
 mostrarPosicionesEnMapa();
  }
  
  function formatearHora(hora) {
    // Separar las partes de la hora
    let horas = hora.substring(0, 2);
    let minutos = hora.substring(2, 4);
    let segundos = hora.substring(4, 6);
  
    // Construir la hora formateada
    let horaFormateada = `${horas}:${minutos}:${segundos}`;
    return horaFormateada;
  }
  
  function calcularHoraArg(offset, hora) {
    // Convertir hora a objetos Date
    let date = new Date();
    let partesHora = hora.split(':');
    date.setHours(parseInt(partesHora[0]), parseInt(partesHora[1]), parseInt(partesHora[2]));
  
    // Aplicar el offset en horas
    date.setHours(date.getHours() + offset);
  
    // Obtener hora en formato "HH:mm:ss"
    let horaArg = `${formatoDosDigitos(date.getHours())}:${formatoDosDigitos(date.getMinutes())}:${formatoDosDigitos(date.getSeconds())}`;
    return horaArg;
  }
  
  function calcularDiferenciaHora(hora1, hora2) {
    // Convertir horas a objetos Date
    let date1 = new Date();
    let partesHora1 = hora1.split(':');
    date1.setHours(parseInt(partesHora1[0]), parseInt(partesHora1[1]), parseInt(partesHora1[2]));
  
    let date2 = new Date();
    let partesHora2 = hora2.split(':');
    date2.setHours(parseInt(partesHora2[0]), parseInt(partesHora2[1]), parseInt(partesHora2[2]));
  
    // Calcular diferencia en segundos
    let diferenciaSegundos = Math.abs((date1 - date2) / 1000);
  
    // Obtener diferencia en formato "HH:mm:ss"
    let horas = Math.floor(diferenciaSegundos / 3600);
    let minutos = Math.floor((diferenciaSegundos % 3600) / 60);
    let segundos = diferenciaSegundos % 60;
  
    let diferenciaFormateada = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
    return diferenciaFormateada;
  }
  
  function formatoDosDigitos(numero) {
    return numero.toString().padStart(2, '0');
  }


  function mostrarPosicionesEnMapa() {

    // Crea el mapa y centra la vista en una posición inicial

   let map = L.map('map').setView([-23.83577, -64.74592], 13);

   
    // Agrega el mapa base de OpenStreetMap
    L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let basemaps = {
    
        'Satelital': L.tileLayer.wms('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',  {
            layers: 'TOPO-OSM-WMS',
        }),
        'Hybrid': L.tileLayer.wms('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',  {
            layers: 'TOPO-OSM-WMS',
        }),
        
        'Calles': L.tileLayer.wms('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            layers: '© OpenStreetMap',
        }),
    
        'Topografia': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
            layers: 'TOPO-OSM-WMS',
        }), 
               
    };
    L.control.layers(basemaps).addTo(map);

   // Iterating over the positions in posicionesTramas
   for (let i = 0; i < posicionesTramas.length; i++) {
    const latitud = posicionesTramas[i].latitud;
    const longitud = posicionesTramas[i].longitud;


    // Create a marker at the position of the trama
    let marker = L.marker([latitud, longitud]).addTo(map);
   marker.bindPopup(`<b>Trama ${i + 1}</b><br>Latitud: ${latitud}<br>Longitud: ${longitud}`).openPopup();
  }
}

  
  function procesarTodasLasTramas() {
    procesarTrama1();
    procesarTrama2();
    procesarTrama3();
    procesarTrama4();
    procesarTrama5();
    procesarTrama6();
    procesarTrama7();
    procesarTrama8();
    mostrarPosicionesEnMapa();

  }
  
  function limpiarTramas() {
    document.getElementById('trama1').value = '';
    document.getElementById('trama2').value = '';
    document.getElementById('trama3').value = '';
    document.getElementById('trama4').value = '';
    document.getElementById('trama5').value = '';
    document.getElementById('trama6').value = '';
    document.getElementById('trama7').value = '';
    document.getElementById('trama8').value = '';
    document.getElementById('tablaResultados').innerHTML = '';
    horasServidor = [];
    horasPosicion = [];
    tramas = [];
    tiposUnidad = [];
    posicionesTramas = [];
    // Recargar la página
  location.reload();
  }