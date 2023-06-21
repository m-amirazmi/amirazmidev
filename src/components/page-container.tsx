import { Props } from "@/utils/types";

export default function PageContainer({ children }: Props) {
  return (
    <div className="my-8 flex flex-col gap-4 text-zinc-700">{children}</div>
  );
}
