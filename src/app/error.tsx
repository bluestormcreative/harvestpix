"use client";

import { Button } from "react-bootstrap";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
