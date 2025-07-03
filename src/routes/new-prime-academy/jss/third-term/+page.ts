export async function load({ fetch }:any) {
  const response = await fetch('/new-prime-academy/jss/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
