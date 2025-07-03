export async function load({ fetch }:any) {
  const response = await fetch('/fortune-royal-academy/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
