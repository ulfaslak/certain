import type { Token, TokenProcessed } from './types';

export function inverseGini(probs: { token: string; prob: number }[]): number {
  const items = probs.slice().sort((a, b) => b.prob - a.prob).slice(0, 5);
  const sum = items.reduce((s, x) => s + (x.prob || 0), 0) || 1;
  const norm = items.map((x) => (x.prob || 0) / sum);
  const invGini = norm.reduce((s, p) => s + p * p, 0);
  return Math.max(0, Math.min(1, invGini));
}

export function geometricMean(values: number[], eps: number = 1e-6): number {
  if (!values || values.length === 0) return 0;
  if (values.some((v) => !(v > 0))) return 0;
  const sumLog = values.reduce((acc, v) => acc + Math.log(v + eps), 0);
  return Math.exp(sumLog / values.length);
}

export function processTokens(raw: Token[]): TokenProcessed[] {
  const out: TokenProcessed[] = [];
  for (let i = 0; i < raw.length; i++) {
    const { token, logprob, top } = raw[i];
    const prob = Number.isFinite(logprob) ? Math.exp(logprob) : 0;
    const gini = inverseGini(top);
    let opacityProb = prob;
    let opacityGini = gini;
    if (
      i > 0 &&
      token.length > 1 &&
      !out[out.length - 1].token.endsWith(' ') &&
      !out[out.length - 1].token.endsWith('\n') &&
      !out[out.length - 1].token.endsWith('*') &&
      !out[out.length - 1].token.endsWith('-') &&
      !out[out.length - 1].token.endsWith('.') &&
      !out[out.length - 1].token.endsWith('`') &&
      !out[out.length - 1].token.endsWith('"') &&
      !token.startsWith(' ') &&
      !token.startsWith('.')
    ) {
      opacityProb = out[out.length - 1].opacity.prob;
      opacityGini = out[out.length - 1].opacity.gini;
    }
    out.push({ token, logprob, prob, gini, opacity: { prob: opacityProb, gini: opacityGini }, top });
  }
  return out;
}


