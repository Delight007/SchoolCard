export async function load({ fetch }: any) {
  const response = await fetch('/EMIRATE-CLASSIC-ACADEMY-LTD/third-term.ejs');
  const data = await response.text();

  return { template: data };
}
