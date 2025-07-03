export async function load({ fetch }: any) {
  const response = await fetch('/naibi-memorial-school/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
