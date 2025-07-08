export async function load({ fetch }:any) {
  const response = await fetch('/light-of-life/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
