const expect = require('chai').expect;

const testCases = [{
  input: {
    map: [
      "LLLLLLLLWW",
      "LLLLLLLWWW",
      "WWWLLLLLWW"
    ],
    coordicate: [0, 9]
  },
  output: {
    map: [
      "LLLLLLLLOO",
      "LLLLLLLOOO",
      "WWWLLLLLOO"
    ]
  }
}, {
  input: {
    map: [
      "WWLWLWWWLL",
      "LWLLLWLWLL",
      "LWWWWWLWWW"
    ],
    coordicate: [0, 0]
  },
  output: {
    map: [
      "OOLWLOOOLL",
      "LOLLLOLOLL",
      "LOOOOOLOOO"
    ]
  }
}, {
  input: {
    map: [
      "WWLWLWWWLL",
      "LWLLLWLWLL",
      "LWWWWWLWWW"
    ],
    coordicate: [-1, -1]
  },
  output: {
    map: [
      "WWLWLWWWLL",
      "LWLLLWLWLL",
      "LWWWWWLWWW"
    ]
  }
}];

const o = require('./index');

function assertSameOceanMap(a, b) {
  var i = 0;
  for (i = 0; i < a.length; i++) {
    expect(b).to.eql(a);
  }
}

function testCaseGenerator(testCase) {
  return function() {
    context(`input ${JSON.stringify(testCase.input.map)}, coordicate: ${JSON.stringify(testCase.input.coordicate)}`, () => {
      it(`returns output as ${JSON.stringify(testCase.output)}`, () => {
        o.findOcean(testCase.input.map, testCase.input.coordicate[0], testCase.input.coordicate[1]);
        assertSameOceanMap(testCase.input.map, testCase.output.map);
      });
    });
  }
}

describe('@findOcean', () => {
  testCases.forEach((testCase) => {
    testCaseGenerator(testCase)();
  });
});