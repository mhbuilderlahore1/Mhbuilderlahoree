type Props = {
  target: string;
};

export default function ScrollButton({
  target,
}: Props) {
  return (
    <a href={target}>
      Scroll Down
    </a>
  );
}
