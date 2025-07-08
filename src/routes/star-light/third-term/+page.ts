export async function load({ fetch }:any) {
  const response = await fetch('/star-light/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
