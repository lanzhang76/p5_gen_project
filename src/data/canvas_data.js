// P5 is imperative, so all P5 variables will not require state management
export let data = {
    params: {
        string: { selected: false, value: null },
        shape: { selected: false, index: null },
        symbol: { selected: false, index: null, value: null, w: null },
    },
    canvas: null,
    fonts: [],
    specs: {
        backgroundColor: 255,
    },
    bouncyBall: {
        x: 60,
        y: 150,
        speedX: 3,
        speedY: 3,
    },
    colorGrid: {
        step: 20,
    },
    simpleCircle: {
        step: null,
        steps: [],
    },
    drawSymbol: {
        step: 20,
        w: 60,
        h: null,
    },
    textLayout: {
        string: '',
        fonts: [],
        repeat: 0,
        step: 0,
        size: null,
        sizes: [],
        layout: null,
    },
    colors: {
        tiltGrid: [
            ['FFFFFF', '000000'],
            ['C64D43', '000000'],
            ['DD8E3B', 'F6DC4A'],
            ['BAD748', '10197B'],
        ],
        row: [
            ['F6D4D6', '86D6F0'],
            ['C13F35', 'F7F7FA'],
            ['8FA9E0', 'F2FFFD'],
            ['4432CB', 'D3F18F'],
        ],
        upsideDown: [
            ['000000', 'FFFFFF', '4CA830'],
            ['F8D66C', 'D6B66B', '694D27'],
            ['88B273', 'E8EBE3', 'B4D4DF'],
            ['D66534', '2A6649', '4B2E21'],
        ],
        splash: [
            ['265BF6', 'FFFFFF'],
            ['606060', 'DBEC51'],
            ['87B844', 'F7F7F7'],
        ],
    },
};

export let preloadData = {
    0: {
        name: 'colors',
        w: 100,
        files: [
            './images/colors/color0.png',
            './images/colors/color1.png',
            './images/colors/color2.png',
            './images/colors/color3.png',
            './images/colors/color4.png',
            './images/colors/color5.png',
            './images/colors/color6.png',
        ],
    },
    1: {
        name: 'crosses',
        w: 230,
        files: [
            './images/crosses/cross0.png',
            './images/crosses/cross1.png',
            './images/crosses/cross2.png',
            './images/crosses/cross3.png',
            './images/crosses/cross4.png',
            './images/crosses/cross5.png',
        ],
    },
    2: {
        name: 'paws',
        w: 200,
        files: [
            './images/paws/paw0.png',
            './images/paws/paw1.png',
            './images/paws/paw2.png',
            './images/paws/paw3.png',
            './images/paws/paw4.png',
            './images/paws/paw5.png',
            './images/paws/paw6.png',
            './images/paws/paw7.png',
            './images/paws/paw8.png',
            './images/paws/paw9.png',
        ],
    },
    3: {
        name: 'faces',
        w: 150,
        files: [
            './images/faces/face0.png',
            './images/faces/face1.png',
            './images/faces/face2.png',
            './images/faces/face3.png',
            './images/faces/face4.png',
            './images/faces/face5.png',
            './images/faces/face6.png',
            './images/faces/face7.png',
            './images/faces/face8.png',
            './images/faces/face9.png',
        ],
    },
    4: {
        name: 'strokes',
        w: 200,
        files: [
            './images/strokes/stroke0.png',
            './images/strokes/stroke1.png',
            './images/strokes/stroke2.png',
            './images/strokes/stroke3.png',
            './images/strokes/stroke4.png',
            './images/strokes/stroke5.png',
            './images/strokes/stroke6.png',
            './images/strokes/stroke7.png',
            './images/strokes/stroke8.png',
            './images/strokes/stroke9.png',
            './images/strokes/stroke10.png',
            './images/strokes/stroke11.png',
            './images/strokes/stroke12.png',
        ],
    },
    5: {
        name: 'symbols',
        w: 150,
        files: [
            './images/symbols/symbol0.png',
            './images/symbols/symbol1.png',
            './images/symbols/symbol2.png',
            './images/symbols/symbol3.png',
            './images/symbols/symbol4.png',
        ],
    },
};
