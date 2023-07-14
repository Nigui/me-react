type ExperiencePageProps = { params: { id: string } };
export default function ExperiencePage({ params }: ExperiencePageProps) {
  return <h1>This is the experience {params.id}</h1>;
}
