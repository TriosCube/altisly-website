// Hand-tokenised rather than shipping a highlighter. A syntax library would be
// a large dependency and a second theme to maintain for four short samples.
export type Tok = { t: string; c?: 'kw' | 'fn' | 'str' | 'num' | 'com' | 'typ' | 'op' }

export type Sample = {
  lang: string
  file: string
  note: string
  lines: Tok[][]
}

const k = (t: string): Tok => ({ t, c: 'kw' })
const f = (t: string): Tok => ({ t, c: 'fn' })
const s = (t: string): Tok => ({ t, c: 'str' })
const n = (t: string): Tok => ({ t, c: 'num' })
const c = (t: string): Tok => ({ t, c: 'com' })
const y = (t: string): Tok => ({ t, c: 'typ' })
const p = (t: string): Tok => ({ t })

export const samples: Sample[] = [
  {
    lang: 'Rust',
    file: 'settlement.rs',
    note: 'A payment either settles or it does not.',
    lines: [
      [c('// One transaction. No half-settled state to reconcile later.')],
      [k('pub async fn '), f('settle'), p('(tx: '), y('Transfer'), p(') -> '), y('Result'), p('<'), y('Settled'), p('> {')],
      [p('    '), k('let '), p('guard = ledger.'), f('lock'), p('(tx.corridor).'), k('await'), p('?;')],
      [],
      [p('    '), k('if '), p('guard.'), f('exposure'), p('() + tx.amount > guard.limit {')],
      [p('        '), k('return '), y('Err'), p('('), y('Breach'), p('::'), y('Limit'), p(');')],
      [p('    }')],
      [],
      [p('    ledger.'), f('post'), p('(tx).'), k('await'), p('?.'), f('confirm'), p('()')],
      [p('}')],
    ],
  },
  {
    lang: 'TypeScript',
    file: 'approval.ts',
    note: 'The person who prepares it cannot approve it.',
    lines: [
      [c('// Separation of duties, enforced in the type, not the review.')],
      [k('export function '), f('approve'), p('(run: '), y('PaymentRun'), p(', by: '), y('UserId'), p(') {')],
      [p('  '), k('if '), p('(run.preparedBy === by) {')],
      [p('    '), k('throw new '), y('SelfApproval'), p('(run.id, by);')],
      [p('  }')],
      [],
      [p('  '), k('return '), p('{ ...run, approvedBy: by, at: '), y('Date'), p('.'), f('now'), p('() };')],
      [p('}')],
    ],
  },
  {
    lang: 'SQL',
    file: 'exposure.sql',
    note: 'Tenancy is structural, not a WHERE clause.',
    lines: [
      [c('-- Each tenant owns a schema, so the filter cannot be forgotten.')],
      [k('SELECT'), p(' corridor, '), f('sum'), p('(amount) '), k('AS'), p(' exposure')],
      [k('FROM'), p(' tenant_'), p('${id}'), p('.settlement_log')],
      [k('WHERE'), p(' status '), k('IN'), p(' ('), s("'posted'"), p(', '), s("'in_flight'"), p(')')],
      [p('  '), k('AND'), p(' value_date <= '), f('current_date'), p(' + '), n('2')],
      [k('GROUP BY'), p(' corridor')],
      [k('HAVING'), p(' '), f('sum'), p('(amount) > '), n('0'), p(';')],
    ],
  },
  {
    lang: 'Python',
    file: 'reconcile.py',
    note: 'What did not match, and why.',
    lines: [
      [c('# An unmatched line is an answer, not a failure.')],
      [k('def '), f('reconcile'), p('(statement, ledger):')],
      [p('    unmatched = []')],
      [],
      [p('    '), k('for '), p('line '), k('in '), p('statement:')],
      [p('        entry = ledger.'), f('find'), p('(line.reference)')],
      [p('        '), k('if '), p('entry '), k('is None or '), p('entry.amount != line.amount:')],
      [p('            unmatched.'), f('append'), p('(('), p('line, '), f('reason'), p('(line, entry)))')],
      [],
      [p('    '), k('return '), p('unmatched')],
    ],
  },
]
