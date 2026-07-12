// Form submission — posts to the serverless function at /api/submit, which
// fans out to HubSpot, Google Sheets and Resend. Parses and returns the JSON
// response ({ ok, results }); the caller branches on `ok`. A network failure
// rejects (fetch throws / JSON parse fails), so callers can show an error state.
export async function submitForm(formType, data) {
  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, data }),
  });
  return res.json();
}
