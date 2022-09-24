## Quick Installation Guide

# Things to add

- Create a `.env` file in the config folder and add the following as
  `key = value`
  - PORT = 5000 (can be a port of your choosing)
  - DB_STRING = `your mongo connection string`

```
npm install
npm start
```

Go to [http://127.0.0.1:5000](http://127.0.0.1:5000)

## Editing CSS/Tailwind/DaisyUI

Styling is being done via DaisyUI at the moment, and any major changes require a
rebuild using the following:

```
npm run build-css
```

## Documentation

Work in Progress

## Contributing

Feel free to join in! Whether its fixing bugs, improving documentation, or
simply spreading the word! Please see the
[Contributing Guidelines](/CONTRIBUTING.md). If you require any assistance
please don't hesitate to reach out to a maintainer!

## License

This project is licensed under the terms of the [MIT license](/LICENSE)
