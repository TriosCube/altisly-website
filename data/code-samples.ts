// Hand-tokenised rather than shipping a highlighter: a syntax library would be
// a large dependency and a second theme to maintain for a handful of samples.
export type Tok = { t: string; c?: 'kw' | 'fn' | 'str' | 'num' | 'com' | 'typ' }

export type Sample = {
  domain: string
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
    domain: 'Finance',
    file: 'reconcile.rs',
    note: 'An unmatched line is an answer, not a failure.',
    lines: [
      [c('// Every statement line resolves, or it is named and kept.')],
      [k('pub fn '), f('reconcile'), p('(stmt: &['), y('Line'), p('], book: &'), y('Ledger'), p(') -> '), y('Report'), p(' {')],
      [p('    stmt.'), f('iter'), p('().'), f('map'), p('(|line| '), k('match '), p('book.'), f('find'), p('(line.reference) {')],
      [p('        '), y('Some'), p('(e) '), k('if '), p('e.amount == line.amount => '), y('Matched'), p('(e.id),')],
      [p('        '), y('Some'), p('(e) => '), y('Disputed'), p(' { by: line.amount - e.amount },')],
      [p('        '), y('None'), p(' => '), y('Unexplained'), p(' { since: line.value_date },')],
      [p('    }).'), f('collect'), p('()')],
      [p('}')],
    ],
  },
  {
    domain: 'Health',
    file: 'triage.ts',
    note: 'The assistant drafts. A clinician decides.',
    lines: [
      [c('// The model may summarise a note. It may never sign one.')],
      [k('export function '), f('draft'), p('(visit: '), y('Encounter'), p(') {')],
      [p('  '), k('const '), p('summary = assistant.'), f('summarise'), p('(visit.notes);')],
      [],
      [p('  '), k('return '), p('{')],
      [p('    summary,')],
      [p('    status: '), s("'awaiting_clinician'"), p(' '), k('as const'), p(',')],
      [p('    '), c('// no diagnosis field: the model does not get one')],
      [p('  };')],
      [p('}')],
    ],
  },
  {
    domain: 'Identity',
    file: 'verify.ts',
    note: 'Verification is staged against what the action is worth.',
    lines: [
      [c('// A password reset and a payout do not deserve the same friction.')],
      [k('export function '), f('required'), p('(action: '), y('Action'), p('): '), y('Step'), p('[] {')],
      [p('  '), k('if '), p('(action.value < '), n('50_000'), p(') '), k('return '), p('['), s("'device'"), p('];')],
      [p('  '), k('if '), p('(action.value < '), n('5_000_000'), p(') '), k('return '), p('['), s("'device'"), p(', '), s("'otp'"), p('];')],
      [],
      [p('  '), k('return '), p('['), s("'device'"), p(', '), s("'otp'"), p(', '), s("'liveness'"), p(', '), s("'maker_checker'"), p('];')],
      [p('}')],
    ],
  },
  {
    domain: 'Logistics',
    file: 'custody.py',
    note: 'Nobody hands off responsibility without a signature.',
    lines: [
      [c('# A parcel is never simply gone. Somebody is always holding it.')],
      [k('def '), f('hand_over'), p('(parcel, courier, signature):')],
      [p('    '), k('if '), p('signature '), k('is None'), p(':')],
      [p('        '), k('return '), y('Custody'), p('(holder=parcel.holder, state='), s("'still_ours'"), p(')')],
      [],
      [p('    '), k('return '), y('Custody'), p('(')],
      [p('        holder=courier.id,')],
      [p('        state='), s("'transferred'"), p(',')],
      [p('        proof=signature,')],
      [p('    )')],
    ],
  },
  {
    domain: 'Platform',
    file: 'tenancy.sql',
    note: 'Tenancy is structural, not a WHERE clause.',
    lines: [
      [c('-- A schema per tenant, so the filter cannot be left off.')],
      [k('CREATE SCHEMA '), p('tenant_'), p('${id}'), p(';')],
      [],
      [k('CREATE TABLE '), p('tenant_'), p('${id}'), p('.ledger_entry (')],
      [p('  id           '), y('uuid'), p('     '), k('PRIMARY KEY'), p(',')],
      [p('  posted_at    '), y('timestamptz'), p(' '), k('NOT NULL'), p(',')],
      [p('  amount       '), y('numeric'), p('(20,4) '), k('NOT NULL'), p(',')],
      [p('  '), k('CONSTRAINT'), p(' balanced '), k('CHECK'), p(' (amount <> '), n('0'), p(')')],
      [p(');')],
    ],
  },
]
