export type Token = {
    token: string;
    logprob: number;
    top: { token: string; logprob: number; prob: number }[];
};

export type TokenProcessed = {
    token: string;
    logprob: number;
    prob: number;
    gini: number;
    opacity: { gini: number; prob: number };
    top: { token: string; logprob: number; prob: number }[];
};

export type Msg = { role: 'user'; text: string } | { role: 'assistant'; tokens: TokenProcessed[] };