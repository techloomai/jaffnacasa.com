import { BarLoader } from "@/components/bar-loader";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-content-center bg-primary-dark px-4 py-24">
      <BarLoader />
    </div>
  );
}

