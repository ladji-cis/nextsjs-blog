---
title: 'When to use Static Generation v.s Server-Side Rendering'
date: '2020-01-02'
---

We recommand using **Static Generation** (with and without data) whenever possible your page can build once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, includiong:

- Marketing pages
- Blog pages
- E-Commerce product listings
- Hel and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answare is yes, then you choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequent updated data, and the content changes on every request.

In the case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.