type Props = {
  title: string;
  total: number;
};

export default function Card({ title, total }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h1>{total}</h1>
    </div>
  );
}
