type CourseStructuredDataProps = {
  data: Record<string, unknown>;
};

function serializeStructuredData(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function CourseStructuredData({ data }: CourseStructuredDataProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(data) }}
      type="application/ld+json"
    />
  );
}
