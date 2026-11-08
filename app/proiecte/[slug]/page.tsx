import Image from "next/image";
import { notFound } from "next/navigation";
import { StudioDetailPage } from "@/components/pages/StudioDetailPage";
import { pageMetadata, siteName } from "@/lib/seo";
import { projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function getProject(params: ProjectPageProps["params"]) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProject(params);
  return pageMetadata(
    `${project.seoTitle} | ${siteName}`,
    project.description,
    `/proiecte/${project.slug}`,
    { src: project.image, alt: project.alt },
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params);

  return (
    <StudioDetailPage title={project.seoTitle} intro={project.description} path={`/proiecte/${project.slug}`}>
      <section className="detail-section" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Galeria proiectului</h2>
        <div className="detail-gallery">
          {project.images.map((image) => (
            <figure key={image.src}>
              <div className="detail-gallery-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 44px), (max-width: 1540px) 44vw, 665px"
                />
              </div>
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <nav className="detail-links" aria-label="Continuă să explorezi">
        <a className="detail-link" href="/#proiecte">Vezi toate proiectele IOLA</a>
        <a className="detail-link" href="/servicii">Servicii de arhitectură și design interior</a>
      </nav>
    </StudioDetailPage>
  );
}
