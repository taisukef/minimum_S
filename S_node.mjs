import S from './S.mjs'

import assert from 'assert'
const a = assert.strict.strictEqual

a(S.eval([S.PLUS, 3, 3]), 6)
a(S.eval([S.MINUS, 10, 1, 2, 3]), 4)
a(S.eval([S.MUL, 6, 7]), 42)
a(S.eval([S.MUL, 3, [S.PLUS, 1, 2]]), 9)
a(S.eval([S.IF, 1, 'true', 'false']), 'true')
