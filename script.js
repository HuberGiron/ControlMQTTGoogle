const broker = "wss://34.46.107.172:9001/mqtt"; // Usar ws:// si no se usa TLS
let topic = "huber/R1/";
const client = mqtt.connect(broker);

client.on("connect", function() {
    console.log("Conectado al broker MQTT");
});

function updateTopic() {
    const robot = document.getElementById("robotPicker").value;
    topic = `huber/${robot}/`;
    console.log("Cambiado a:", topic);
}

function sendCommand(command) {
    client.publish(topic, command);
    document.getElementById("status").textContent = command;
    console.log("Enviado:", command);
}
