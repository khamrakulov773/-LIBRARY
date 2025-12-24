# Библиотека для форматирования дат

Библиотека предоставляет функции для форматирования дат в различных форматах: российском (`ДД/ММ/ГГГГ ЧЧ:ММ`) и американском (`ММ-ДД-ГГГГ ЧЧ:ММ`).

## Установка

Для использования библиотеки не требуется установка. Вы можете подключить её напрямую через CDN:

```html
<script type="module">
  import {
    formatDateToRU,
    formatDateToUS,
  } from "https://cdn.jsdelivr.net/gh/alexeirybak/JS-course@main/lib/formatDate/formatDate.js";

  // Пример использования
  const date = new Date();
  console.log(formatDateToRU(date)); // ДД/ММ/ГГГГ ЧЧ:ММ
  console.log(formatDateToUS(date)); // ММ-ДД-ГГГГ ЧЧ:ММ
</script>
