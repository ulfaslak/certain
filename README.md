# Certain

A chat interface that visualizes how certain a language model is about each token it generates. Tokens the model is less sure about appear more transparent, giving you an intuitive sense of where the model is confident and where it's guessing.

Uses the OpenAI API with `logprobs` enabled. Bring your own API key.

## How it works

Each response is streamed with token-level log-probabilities. Two uncertainty metrics are available:

- **Probability** — the model's probability for the chosen token
- **Gini coefficient** — how spread out the probability mass is across the top 5 alternatives

Token opacity reflects the chosen metric: confident tokens are fully opaque, uncertain ones fade out. Hover over any token to see the top 5 alternatives and their probabilities.

## Supported models

gpt-4o, gpt-4o-mini, gpt-4.1, gpt-4.1-mini, gpt-4, gpt-4-turbo, gpt-3.5-turbo

## Development

```sh
bun install
bun run dev
```

## Building

```sh
bun run build
```
