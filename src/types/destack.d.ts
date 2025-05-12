declare module "destack/build/server" {
  export function handleEditor(req: Request, res: Response): void;
  export const config: {
    runtime: "edge" | "nodejs";
  };
}

declare module "destack" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function ContentProvider(props: any): JSX.Element;
}
