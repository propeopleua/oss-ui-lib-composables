export function scrollTo(top: number): void {
  window.scrollTo({
    top: top - 200 + window.scrollY,
    behavior: 'smooth',
  });
}

export default scrollTo;