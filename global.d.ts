declare module "shiki-transformer-copy-button" {
  export function addCopyButton(): void;
}

declare module "react-syntax-highlighter" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Prism: any;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism" {
  export const atomDark: Record<string, React.CSSProperties>;
}
