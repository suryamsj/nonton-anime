import { parseHTML } from "linkedom";

function extractPagination(element: Element) {
  const paginations = element.querySelectorAll('.pagin .page-numbers');

  let min = Infinity;
  let max = -Infinity;

  // Mengiterasi setiap elemen dalam `paginations` untuk mencari min dan max
  paginations.forEach(page => {
    const pageNumber = parseFloat(page.textContent?.trim() || '');
    if (!isNaN(pageNumber)) {
      if (pageNumber < min) min = pageNumber;
      if (pageNumber > max) max = pageNumber;
    }
  });

  // Jika tidak ada angka yang valid, atur min dan max ke 0
  if (min === Infinity) min = 0;
  if (max === -Infinity) max = 0;

  return { min, max };
}

export function parsePagination(html: string) {
  const { document } = parseHTML(html);
  const pagination = Array.from(
    document.querySelectorAll('.block_area.block_area_home .block_area-content.block_area-list.film_list.film_list-grid')
  ).map(item => extractPagination(item));

  return pagination;
}