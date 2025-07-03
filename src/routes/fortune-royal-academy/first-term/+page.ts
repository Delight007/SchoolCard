export async function load({ fetch }: any) {
  const response = await fetch('/new-prime-academy/jss/new-first-term.ejs');
  const data = await response.text();

  return { template: data };
}
