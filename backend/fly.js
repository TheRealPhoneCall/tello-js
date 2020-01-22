const dgram = require('dgram');
const wait = require('waait');
const readline = require('readline');
const commandDelays = require('./constants')

const PORT = 8889;
const STATE_PORT = 8890;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

drone.on('message', (message) => {
    console.log(`msg: ${message}`);
})

const droneState = dgram.createSocket('udp4');
droneState.bind(STATE_PORT);

// droneState.on('message', (message) => {
//     console.log(`state msg: ${message}`);
// })

function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}

async function sendCommand(command, val, delay) {
    if (val) {
        const commandVal = `${command} ${val}`;
        console.log(`running command: ${commandVal}`);
        drone.send(`${commandVal}`, 0, commandVal.length, PORT, HOST, handleError);
        await wait(delay);
        console.log(`command done: ${commandVal} \n\n`);
    }
    else {
        console.log(`running command: ${command}`);
        drone.send(`${command}`, 0, command.length, PORT, HOST, handleError);
        await wait(delay);
        console.log(`command done: ${command} \n\n`);

    }
}

// try starting commands
async function startingCommands() {
    drone.send('command', 0, 7, PORT, HOST, handleError);
    await wait(commandDelays['command']);
    drone.send('battery?', 0, 8, PORT, HOST, handleError);
    await wait(commandDelays['battery?']);
}

// run a recursive command listener
async function runCommand() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log(`Input the tello command: `);
    rl.on('line', async (input) => {
        if (commandDelays[input]) {
            const command = input;
            console.log(`Running: ${command}`);
            const val = commandDelays[command]['val'];
            const delay = commandDelays[command]['delay'];
            await sendCommand(command, val, delay);
            console.log(`Input the tello command: `);
        }
        else {
            console.log(`Command does not exist. \n\n`);
            console.log(`Input the tello command: `);
        }
    });
}

// try more async commands
// const commands = ['command', 'battery?'];
// const commands = ['command', 'battery?', 'takeoff', 'land'];
const commands = ['command', 'battery?', 'takeoff', 'up', 'flip', 'down', 'land'];

let i = 0;
async function runCommands(commands) {
    for (const command of commands) {
        const delay = commandDelays[command];
        console.log(`running command: ${command}`);
        drone.send(command, 0, command.length, PORT, HOST, handleError);
        await wait(delay);
        console.log(`command done: ${command}`);
    }
    console.log(`commands completed!`);
}

// runCommands(commands);
runCommand();