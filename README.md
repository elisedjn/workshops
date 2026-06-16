# WaterLili Workshops

Static multilingual website for creative workshops in Ericeira, Santa Cruz, and at people's homes.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- GitHub Pages

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

The default build assumes a GitHub Pages project URL:

```txt
https://<username>.github.io/<repository-name>/
```

The workflow sets:

```txt
SITE=https://<username>.github.io
BASE_PATH=/<repository-name>
```

For a custom domain, change `SITE` to the domain and set `BASE_PATH=/`.

## Cover Images

Blog posts and workshops can include a cover image in frontmatter:

```yaml
image: /images/my-cover.jpg
```

Place static images in `public/images/`. The leading `/` is important because Astro will add the GitHub Pages base path during rendering.

Workshops can also separate venue and address:

```yaml
place: "Community Atelier"
address: |
  Rua Example 12
  2655-000 Ericeira
```

Both values are displayed together under the same Place block.

Workshop date and time can be separated the same way:

```yaml
date: "Saturday 20 July"
time: "10:00-12:00"
```

Both values are displayed together under the Date & Time block.

Workshop prices can include a second detail line:

```yaml
price: "25€"
priceDetails: "Materials included"
```

Workshop duration can also include a second detail line:

```yaml
duration: "2 hours"
durationDetails: "All levels"
```

Workshop booking links can include a prefilled message:

```yaml
bookingUrl: "https://wa.me/351000000000"
bookingMessage: "Hello, I would like to book the watercolor workshop."
```

The rendered link becomes:

```txt
https://wa.me/351000000000?text=Hello%2C%20I%20would%20like%20to%20book%20the%20watercolor%20workshop.
```
