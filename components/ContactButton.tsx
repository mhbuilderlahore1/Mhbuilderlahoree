interface Props {
  title: string;
  link: string;
}

export default function ContactButton({
  title,
  link,
}: Props) {
  return (
    <a href={link} className="btn contact-btn">
      {title}
    </a>
  );
}
