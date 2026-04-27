const mqtt = require('mqtt');

// Conectando usando o nome do serviço definido no compose
const client = mqtt.connect('mqtt://mosquitto:1883');

client.on('connect', () => {
    console.log('--- API ONLINE E CONECTADA AO BROKER ---');
    client.subscribe('projeto/sensor');
});

client.on('message', (topic, message) => {
    console.log(`[DADO RECEBIDO]: ${message.toString()} no tópico: ${topic}`);
});