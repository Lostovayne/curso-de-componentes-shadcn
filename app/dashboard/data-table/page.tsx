import { payments } from "@/data/payments.data";

async function fetchData() {
  return payments;
}

export default async function Page() {
  const data = await fetchData();

  return <div>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  </div>;
}
