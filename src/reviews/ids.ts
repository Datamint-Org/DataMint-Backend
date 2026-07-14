/** Monotonic id generation for newly created reviews. */
let counter = 0;

export function nextReviewId(): string {
  counter += 1;
  return `rv_${counter.toString(36).padStart(4, "0")}`;
}

export function resetIdCounter(): void {
  counter = 0;
}
