// P5 is imperative, so all P5 variables will not require state management
export let data = {
    params: {
        string: { selected: false, value: null },
        shape: { selected: false, index: null },
        symbol: { selected: false, index: null, value: null, w: null },
    },
    canvas: null,
    fonts: [],
    filters: [],
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
        shapeDUAL: [
            ['2D50AF', 'AD4126'],
            ['2D683D', '12181f'],
            ['E7D765', '949397'],
            ['88BE39', 'EE8650'],
            ['FFFFFF', '000000'],
            ['F4F4F4', 'B4C7E7'],
            ['F4F4F4', 'B1CC7C'],
            ['EEC75E', 'F5F5F5'],
            ['B69AA8', 'E4AF49'],
            ['DAC3F9', '9DC2EB'],
            ['FDF2F2', 'F09289'],
            ['377FED', 'F6D248'],
        ],
        shapeTri: [
            ['000000', '75FB9A', '1A43E7'],
            ['F1A2B6', 'EA4753', 'BFE5E9'],
            ['F9EDC7', '5AC463', 'F6CA45'],
            ['B8CAD4', 'F09035', 'F4C142'],
            ['D5C6CD', 'ACB7D7', 'BBD3C0'],
            ['FFFE61', 'D6E957', 'EEBE40'],
            ['F1A760', 'F5C086', 'EADA80'],
            ['5470DB', '95A5E6', '3F8D83'],
        ],
        shapeQuad: [
            ['EDD047', 'E08530', 'EBB93F', '85AE35'],
            ['54B7F0', '53B56F', 'E588A3', 'F5F3EE'],
            ['BEA7F4', 'F9D949', 'F1A2D3', 'ABDCF1'],
            ['BEA7F4', 'D8D4FC', 'FAE5C4', 'DBECFE'],
        ],
        shapeQuad2: [
            ['E4933C', 'D5C5CD', 'ACB7D7', 'BAD2C2'],
            ['F4C744', '5C8DEC', '5FB066', 'DC5946'],
            ['C0AD9D', '7B8287', 'CEAB85', '5C4B30'],
            ['E4933C', 'BC8F5E', '857842', 'A1552E'],
        ],
        shapeTri2: [
            ['FFFFFF', '000000', '3432E2'],
            ['4C6639', 'D8B55A', 'CCCF95'],
            ['E5E5DA', '29292A', 'C6C7BA'],
            ['E68D37', '6A8CCE', 'F1CCC2'],
        ],
        textTriangle: [
            ['1e7b4e', '34358f', '46a0fc', 'ffae27'],
            ['B5D543', 'F4F552', 'D0BCA2', '2E2B2C'],
            ['E0444A', 'E9B454', '55AFEE', 'FFFFFF'],
            ['E2A054', 'B0D3DE', 'C7C76F', '89A6DE'],
            ['E7A19F', 'F0D64C', 'ECEDE8', '708A8A'],
            ['E1593A', '5175EC', 'E8BA53', 'EBEC6A'],
        ],
        symbolCircle: [
            ['DE8031', '908FD7', 'F5CC4E', '609D46', 'FDFDFC', 'E37233', '070708'],
            ['AEEFF1', 'E8CED9', 'A9B2DC', 'D3B3D0', 'D1D1DB', '976073', 'EBEAE6'],
            ['BCCBD1', 'A3CDD1', 'F5CC4E', '70B5B6', 'F2E494', 'E1C262', 'EAE0AA'],
            ['EDD293', 'C6D1A8', 'B78B70', '9AD3CF', 'FDFDFC', 'EADBDB', 'BBD4E4'],
            ['8088A1', 'EDEDE5', 'DED18F', 'B4C0DF', 'FDFDFC', '8E6023', 'D4DAF1'],
        ],
        symbolTriangle: [
            ['E0BF43', 'D3DAD0', 'ACC7AB', '558D35', 'CFADFA', '3A689C'],
            ['8CC5B1', '7A97B8', 'E2B940', 'DE4E25', 'DDD2C7', 'B6A89E'],
            ['86A3DB', 'C4C46D', 'E2A054', 'AFD2DB', 'DFDFE1', 'DCD1C1'],
            ['D6E8AA', 'F1E356', 'BADEF0', 'B4B5B7', 'E8A73B', 'DC7E3F'],
            ['9BBEE4', 'B5D543', 'CEC3E2', '6D8DC6', 'FFFFFF', '3A689C'],
        ],
        symbolLine: [
            ['894D3F', 'B99988', '3D312F', '2E2B2C'],
            ['2B3F7D', '8CA8C2', 'CD9052', 'FFFFFF'],
            ['141F22', 'D6D2C0', 'DEF450', 'A1B8BB'],
            ['CB6B4F', 'C7BF91', 'A57D70', '708A8A'],
            ['B3CBEF', '528C60', 'E1593A', 'EBEC6A'],
        ],
        symbolSquare: [
            ['D1B27E', '9E9C7B'],
            ['8A9FD4', '5B6FBA'],
            ['CC802D', 'E0AD4B'],
            ['C6C565', 'D8D6D1'],
            ['E1DFD2', 'C1C5AE'],
            ['C0C0BE', '1A4290'],
            ['A2B8D1', '809743'],
            ['FFFFFF', '000000'],
            ['A8A4FF', 'EEC75E'],
            ['E25B3D', 'EEC75E'],
            ['F4F4F4', 'B1CC7C'],
            ['CB9C55', 'EEC75E'],
        ],
        symbolQuad: [
            [['E4933C', 'BC8F5E', '857842', 'A1552E'], 'E0AD4B'],
            [['B8D2EA', '8A9FD4', '5B6FBA', '33499E'], 'E6E5E8'],
            [['B8D2EA', 'D4D3F0', 'A39BD0', 'C4F3DC'], 'D4D3F0'],
            [['CC802D', 'E0AD4B', 'EBC94E', 'E9BF41'], 'EBC94E'],
            [['C6C565', 'D8D6D1', 'B8B69B', 'D4BF4B'], 'C6C565'],
            [['E1DFD2', 'C1C5AE', 'B8B69B', 'C7D3BA'], 'BCBCBA'],
            [['181912', '524D3B', '6D6957', '6D7570'], 'F5F5F5'],
            [['5B6FBA', 'C0C0BE', '1A4290', 'EEEDE9'], '71A6DB'],
            [['9AC94B', 'A2B8D1', '809743', '606749'], 'BF643D'],
            [['C2E084', 'A3EDEA', '9AC94B', 'EBEC6A'], 'C2E084'],
        ],
        symbolRandom: ['F9D764', '7969F6', '85FBDF', '97FC68', 'ED72ED', 'EE7A47', 'EB4B41'],
        symbolString_surround: [
            ['A9C4B3', 'D985C5'],
            ['1941EA', '75FB9C'],
            ['E7A19F', 'B1CC7C'],
            ['9585DA', 'D4F361'],
            ['210F80', 'EB7348'],
        ],
        sss_circle: [
            ['391AF5', 'FFFFFF', 'E7793C'],
            ['94A639', '000000', 'D1D1D1'],
            ['EF893A', 'FFFFFF', '76C779'],
            ['65D0EE', 'FFFFFF', 'D583AD'],
            ['BDBFD2', '000000', 'D94544'],
        ],
        sss_square: [
            ['2D5F25', 'FFFFFF', '65AEF9', 'B57E2C', 'F3B248'],
            ['F8EB4E', 'FFFFFF', 'A4ABAB', '7DC0FF', '33499E'],
            ['2D69B8', 'FFFFFF', '3D32F4', '97F1DC', '56BE83'],
            ['191E23', 'FFFFFF', 'F0955D', 'E0803A', '923C2B'],
            ['E35F3D', 'FFFFFF', 'B8B69B', 'B7E5F3', '7AC0C6'],
        ],
        sss_quad: [
            ['6B5895', 'FFFFFF', 'C25551', 'D79F43', 'E2B940'],
            ['769A5D', 'FFFFFF', '5B6FBA', 'C86D51', '955B49'],
            ['7F8D97', 'FFFFFF', 'A39BD0', 'ADD560', '839E50'],
            ['E8C3F0', 'FFFFFF', 'E09DC0', 'A2D3F5', '7BADF5'],
            ['B7D7E4', 'FFFFFF', '3F4C2D', 'CF393C', 'A13838'],
        ],
        sss_triangle: [
            ['EC5654', '53ADA5', '99FCE6', 'FFFFFF'],
            ['F09957', '3A77AB', '8DD7FB', 'FFFFFF'],
            ['C0DD78', '4D3790', '998DE0', 'FFFFFF'],
            ['62D7FF', '985231', 'E69A84', 'FFFFFF'],
            ['6E5AE5', 'FFA01B', 'FDCF1B', 'FFFFFF'],
        ],
        sss_line: [
            ['6B5895', 'FFFFFF', 'C25551', 'F3B453', '7FE2EA'],
            ['F5C065', 'FFFFFF', '7D8AF7', '8AD8FB', 'EE8255'],
            ['7C54F6', 'FFFFFF', 'C6FD8B', 'FDF786', '4A53F6'],
            ['4A53F6', 'FFFFFF', '718E4A', 'E6DECF', '79504B'],
            ['DEF69F', 'FFFFFF', '82AE9D', '958757', 'DBBF52'],
        ],
        symbolText_twoLines: [
            ['578B50', 'F4B96B', 'EE7963', 'EE80F1', 'FFFFFF', '000000'],
            ['F5F5F5', 'C7D0BF', 'E5C2A4', 'CFC5D6', 'BE79D6', 'B6A89E'],
            ['86A3DB', '96D7C7', 'E2A054', 'EFD598', 'E3887B', 'BFA5CF'],
            ['DFC24A', 'E4D49B', 'A5D4D6', '6E8E34', 'FFFFFF', '92AC74'],
            ['9BBEE4', 'E7AFB1', 'CEC3E2', '6D8DC6', 'FFFFFF', '913D33'],
        ],
        symbolText_one: [
            ['C73322', '111111', 'E4E4E4'],
            ['94A639', '0F1411', 'D1D1D1'],
            ['18193C', 'FFFFFF', '91F9FD'],
            ['CB923B', '080808', 'EBEDEC'],
            ['BDBFD2', 'EAEAF1', '5A9AE3'],
            ['6351CD', '9585DA', 'D4F361'],
        ],
        symbolText_allLines: [
            ['E4933C', 'D5C5CD', 'ACB7D7', 'BAD2C2', 'A4D291'],
            ['F4C744', '5C8DEC', '5FB066', 'DC5946', 'AC936B'],
            ['C0AD9D', '7B8287', 'CEAB85', '5C4B30', '5A4B7D'],
            ['BC8F5E', '857842', '464D36', 'A1552E', '79942E'],
            ['FAE27E', '9FFCD0', '5C61F6', 'FFFFFF', '000000'],
            ['7069B3', '957DC1', 'D9ADCB', 'DA94A7', '000000'],
        ],
    },
};

export let filterPaths = [
    './filters/filter1.png',
    './filters/filter2.png',
    './filters/filter3.png',
    './filters/filter4.png',
    './filters/filter5.png',
    './filters/filter6.png',
    './filters/filter7.png',
    './filters/filter8.png',
];
