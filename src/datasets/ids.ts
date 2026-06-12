/** Monotonic id generation for newly minted datasets. */
let counter = 0;

export function nextDatasetId(): string {
  counter += 1;
  return `ds_${counter.toString(36).padStart(4, "0")}`;
}
