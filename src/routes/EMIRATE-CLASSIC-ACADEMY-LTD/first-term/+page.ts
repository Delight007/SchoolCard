export async function load({ fetch }: any) {
  const response = await fetch('/EMIRATE-CLASSIC-ACADEMY-LTD/all/report-card.ejs');
  const data = await response.text();

  return { template: data };
}
