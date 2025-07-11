export async function load({ fetch }: any) {
  const response = await fetch('/sonate-academy/all/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
