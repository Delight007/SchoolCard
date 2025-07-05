export async function load({ fetch }: any) {
  const response = await fetch('/jiwo-academy/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
