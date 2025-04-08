interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: Readonly<PageHeaderProps>) {
  return (
    <>
      <div className="flex flex-col mt-5 items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize ">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
          {title == "Experience" && (
            <p className="-mt-2 text-left text-sm text-muted-foreground">
             Note: Only public and showcase-ready projects are listed. Work under NDA
              or still in development is excluded.
            </p>
          )}
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
}
