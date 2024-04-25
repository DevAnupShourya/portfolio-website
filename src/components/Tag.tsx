import React from "react";

type Props = {
  text: string;
};

export default function Tag(props: Props) {
  return <span className="px-2 py-1 inline mx-2 text-xs tracking-tighter leading-tight bg-bg-highlight lowercase rounded-md border border-text-secondary">{props.text}</span>;
}
