import test from 'ava';

import { encodeBase64 } from './base64';
import { decodeBase64 } from './base64';

test('encodeBase64', (t) => {
    t.is(encodeBase64('teste'), 'dGVzdGU=');
});

test('decodeBase64', (t) => {
    const encodedValue = 'dGVzdGU=';
    t.is(decodeBase64(encodedValue), 'teste');
});