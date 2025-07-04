export async function load({ fetch }:any) {
  const response = await fetch('/de-achievers/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
