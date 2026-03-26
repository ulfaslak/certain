import type { Msg, Token } from '../types';

export type CompleteArgs = {
  apiKey: string;
  model: string;
  messages: Msg[];
  top_logprobs?: number;
  temperature?: number;
};

export async function completeChat(args: CompleteArgs): Promise<{ rawTokens: Token[] }>{
  const { apiKey, model, messages, top_logprobs = 5, temperature = 0.5 } = args;
  const body = {
    model,
    messages: messages.map((m) =>
      m.role === 'user'
        ? { role: 'user', content: m.text }
        : { role: 'assistant', content: m.tokens.map((t) => t.token).join('') }
    ),
    logprobs: true,
    top_logprobs,
    temperature
  } as any;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error(`OpenAI request failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  const lp = data.choices?.[0]?.logprobs?.content ?? [];
  const rawTokens: Token[] = lp.map((t: any) => ({
    token: t.token,
    logprob: t.logprob,
    top: (t.top_logprobs ?? []).map((alt: any) => ({ token: alt.token, logprob: alt.logprob, prob: Math.exp(alt.logprob ?? Number.NEGATIVE_INFINITY) }))
  }));
  return { rawTokens };
}


