type StatsCardProps = {
  title: string;
  value: number;
};

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "15px",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}
