import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
import S from './S.mjs'

const a = assertEquals

a(S.eval([S.PLUS, 3, 3]), 6)
a(S.eval([S.MINUS, 10, 1, 2, 3]), 4)
a(S.eval([S.MUL, 6, 7]), 42)
a(S.eval([S.MUL, 3, [S.PLUS, 1, 2]]), 9)
a(S.eval([S.IF, 1, 'true', 'false']), 'true')
