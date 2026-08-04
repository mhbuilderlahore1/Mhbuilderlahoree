interface Props {
  target: string;
}

export default function ScrollButton({
  target,
}: Props) {
  return (
    <a href={target} className="btn scroll-btn">
      Scroll Down
    </a>
  );
}
