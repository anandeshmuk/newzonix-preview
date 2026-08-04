import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { OrbitIcon } from "@/components/icons/Icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center pt-32">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand-soft text-electric-400">
            <OrbitIcon className="h-8 w-8" />
          </span>
          <h1 className="mt-8 font-display text-4xl font-semibold text-white">404</h1>
          <p className="mt-3 text-lg text-ink-soft">
            This page drifted out of orbit. Let’s get you back on course.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="gradient" arrow>
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
