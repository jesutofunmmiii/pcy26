// Backend-less form submission stub.
//
// The Register and Volunteer forms call this on a valid submit. There is no
// backend yet, so it just logs the payload and resolves — wiring a real
// endpoint later is a one-file change here.
export async function submitForm(formName, data) {
  console.log(`[submitForm] ${formName}`, data);
  return Promise.resolve({ ok: true });
}
