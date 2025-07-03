export async function load({ fetch }: any) {
  const response = await fetch('/sonate-academy/all/report-card.ejs');
  const data = await response.text();

  return { template: data };
}
