import { Link as InternalLink } from "react-router-dom";

interface ILink {
  to: string;
  children: React.ReactNode;
}

export default function Link({ to, children }: ILink) {
  return <InternalLink to={to}>{children}</InternalLink>;
}
