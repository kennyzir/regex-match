// ClawHub Local Skill - runs entirely in your agent, no API key required
// Regex Match & Extract - Apply regex patterns to text, return matches with groups

interface Match {
  match: string;
  index: number;
  groups: Record<string, string> | null;
  captures: string[];
}

function applyRegex(text: string, pattern: string, flags: string = 'g'): Match[] {
  if (!flags.includes('g')) flags += 'g';
  const re = new RegExp(pattern, flags);
  const matches: Match[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    matches.push({ match: m[0], index: m.index, groups: m.groups ? { ...m.groups } : null, captures: m.slice(1) });
    if (matches.length >= 1000) break;
  }
  return matches;
}

export async function run(input: { text: string; pattern?: string; patterns?: Array<string | { pattern: string; flags?: string }>; flags?: string }) {
  if (!input.text || typeof input.text !== 'string') throw new Error('Missing required field: text');
  if (!input.pattern && !input.patterns) throw new Error('Missing required field: pattern or patterns');
  if (input.text.length > 500000) throw new Error('Text too long (max 500KB)');

  const startTime = Date.now();

  if (input.patterns && Array.isArray(input.patterns)) {
    const results: Record<string, Match[]> = {};
    for (const p of input.patterns.slice(0, 20)) {
      const pat = typeof p === 'string' ? p : p.pattern;
      const fl = typeof p === 'string' ? (input.flags || 'g') : (p.flags || input.flags || 'g');
      try { results[pat] = applyRegex(input.text, pat, fl); } catch { results[pat] = []; }
    }
    const totalMatches = Object.values(results).reduce((s, m) => s + m.length, 0);
    return {
      results, total_matches: totalMatches, pattern_count: Object.keys(results).length,
      _meta: { skill: 'regex-match', latency_ms: Date.now() - startTime, text_length: input.text.length },
    };
  }

  try { new RegExp(input.pattern!); } catch (e: any) { throw new Error(`Invalid regex pattern: ${e.message}`); }

  const matches = applyRegex(input.text, input.pattern!, input.flags || 'g');
  return {
    matches, total_matches: matches.length, pattern: input.pattern, flags: input.flags || 'g',
    _meta: { skill: 'regex-match', latency_ms: Date.now() - startTime, text_length: input.text.length },
  };
}

export default run;
