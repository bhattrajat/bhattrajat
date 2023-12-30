import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import CustomSandpack from "@/components/blog/sandpack";
function CustomLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) {
  const href = props.href;

  if (href && href.startsWith("/")) {
    return <Link href={href}>{props.children}</Link>;
  }

  if (href && href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export const mdxComponents = {
  a: CustomLink,
  Sandpack: CustomSandpack,
};
