function docsDetailPage({ params }: { params: { id: string } }) {
  return <div>docs: {params.id}</div>;
}

export default docsDetailPage;
