import { redirect } from 'next/navigation';

export default async function Projects({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const upper = id.toUpperCase();

  if (upper === 'V1') redirect('/');
  if (['V2', 'V3', 'V4', 'V5', 'V6'].includes(upper)) redirect(`/${upper}`);

  redirect('/');
}
