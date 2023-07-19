export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // artifical delay to test loading
  return <div>Hi there</div>;
}
