import { NextApiRequest, NextApiResponse } from 'next'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content } = req.body

  const bootstrap = process.env.CHARACTERIZE_PROMPT ?? ''

  const messages = [
    { role: 'system', content: bootstrap },
    { role: 'user', content: `Here is the input scenario: ${content}` },
  ]

  console.log('PROMPT:', messages)

  const payload = {
    model: 'gpt-3.5-turbo',
    messages,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 300,
    stream: false,
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const json = await response.json()
  console.log('OPENAPI:', json)

  const result = json?.choices?.[0]?.message?.content ?? '```ERROR```'

  res.status(200).json({ result })
}
