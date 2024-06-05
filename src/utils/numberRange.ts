export default function numberRange(start: number = 0, stop: number, step: number = 1) {
    return Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);
}