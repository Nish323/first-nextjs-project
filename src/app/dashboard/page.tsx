async function getDashboardData() {
  const res = await fetch("https://api.example.com/dashboard");
  return res.json();
}

export default async function Dashboard() {
  const data = await getDashboardData();
  return <DashboardComponent data={data} />;
}