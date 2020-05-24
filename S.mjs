const S = {}

S.eval = a => {
  if (!Array.isArray(a)) { return a }
  const first = a.shift()
  return typeof first === 'function' ? first(a) : first
}
S.PLUS = a => a.reduce((a, b) => S.eval(a) + S.eval(b))
S.MINUS = a => a.reduce((a, b) => S.eval(a) - S.eval(b))
S.MUL = a => a.reduce((a, b) => S.eval(a) * S.eval(b))
S.DIV = a => a.reduce((a, b) => S.eval(a) / S.eavl(b))
S.IF = a => a[0] ? S.eval(a[1]) : S.eval(a[2])

export default S

if (import.meta.main) {
  console.log('minimum lisp like S in JavaScript')
  console.log('S.eval([S.PLUS, 3, 3])')
}
