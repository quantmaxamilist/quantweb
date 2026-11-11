const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

export async function submitToWeb3Forms(
  fields: Record<string, string>
): Promise<boolean> {
  // Web3Forms access keys are public by design.
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '299043d6-7680-42f6-9cef-c9d9133c6090'
  if (!accessKey) return false

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: accessKey, ...fields }),
    })

    if (!response.ok) return false

    const result = await response.json()
    return result.success === true
  } catch {
    return false
  }
}
