export async function load({ fetch }: any) {
  const response = await fetch('/easy-formula-international-school/all/report-card.ejs');
  const data = await response.text();

  return { template: data };
}
