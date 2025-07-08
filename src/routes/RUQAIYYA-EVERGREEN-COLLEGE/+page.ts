export async function load({ fetch }: any) {
  const response = await fetch('/RUQAIYYA-EVERGREEN-COLLEGE/all/report-card.ejs');
  const data = await response.text();

  return { template: data };
}
