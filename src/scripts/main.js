AOS.init();

const dataDoEvento = new Date("dec 31, 2024 23:59:59");
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const intervaloTempoAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMileSegundos = 1000 * 60 * 60 * 24;
    const horaEmMileSegundos = 1000 * 60 * 60;
    const minutoEmMileSegundos = 1000 * 60;

    const diasAteEvento = Math.floor(intervaloTempoAteEvento / diaEmMileSegundos);
    const horasAteEvento = Math.floor((intervaloTempoAteEvento % diaEmMileSegundos) / horaEmMileSegundos);
    const minutosAteEvento = Math.floor((intervaloTempoAteEvento % horaEmMileSegundos) / minutoEmMileSegundos);
    const segundosAteEvento = Math.floor((intervaloTempoAteEvento % minutoEmMileSegundos) / 1000) + 1;

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    
    if (intervaloTempoAteEvento < 0){
        clearInterval(contador);
        document.getElementById('contador').innerHTML = "Feliz Ano Novo, Feliz 2025!!!";
    }
}, 1000);