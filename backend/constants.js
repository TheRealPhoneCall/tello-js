const commandDelays = {
    command: {delay: 500},
    takeoff: {delay: 5000},
    land: {delay: 5000},
    up: {val: 50, delay: 7000},
    down: {val: 50, delay: 5000},
    left: {val: 100, delay: 5000},
    go: {val: '25 25 25 25', delay: 7000},
    right: {val: 100, delay: 5000},
    forward: {val: 100, delay: 5000},
    back: {val: 100, delay: 5000},
    cw: {val: 90, delay: 5000},
    ccw: {val: 90, delay: 5000},
    flip: {val: 'l', delay: 3000},
    speed: {delay: 3000},
    'battery?': {delay: 500},
    'speed?': {delay: 500},
    'time?': {delay: 500}
}

module.exports = commandDelays;