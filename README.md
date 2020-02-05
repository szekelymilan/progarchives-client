# [![progarchives-client](static/banner.png)](https://github.com/szekelymilan/progarchives-client)

> 🎼 Fetch data easily from [ProgArchives.com](https://www.progarchives.com) - using this npm package.

[![CircleCI Build Status](https://badgen.net/circleci/github/szekelymilan/progarchives-client)](https://circleci.com/gh/szekelymilan/progarchives-client)
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/green)](https://github.com/szekelymilan/progarchives-client/pulls)
[![Latest Release](https://badgen.net/github/release/szekelymilan/progarchives-client)](https://github.com/szekelymilan/progarchives-client/releases/latest)
[![MIT License](https://badgen.net/badge/license/MIT/blue)](https://github.com/szekelymilan/progarchives-client/blob/master/LICENSE)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [API](#API)
- [Example](#example)
- [License](#license)

## Description

Unfortunately, [ProgArchives.com](https://www.progarchives.com) does not provide an API for developers.

However, with this npm package, you can easily fetch data and use it in your own program. 😁

## Features

- 🔎 Name correction
- 💾 Information about an album
- ✅ Tested
- ⛏ Maintained

## Installation

#### npm

```
$ npm i --save progarchives-client
```

#### yarn

```
$ yarn add progarchives-client
```

## API

### getAlbumInfo(albumName)

**Note:** This function is an `async` function.

Returns information about an album - including artist name, album name, average rating, number of ratings and distribution of ratings.

#### albumName

Type: `string`

**Note:** You do not need to enter the name correctly, the search engine will try to correct it.

## Example

```js
const ProgArchivesClient = require('progarchives-client');

(async () => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('King Crimson - In The Court');
  console.log(albumInfo);

  // {
  //   artistName: 'King Crimson',
  //   albumName: 'In The Court Of The Crimson King',
  //   fullAlbumName: 'King Crimson - In The Court Of The Crimson King',
  //   avgRating: '4.63',
  //   ratings: 4133,
  //   distribution: [ '78%', '16%', '4%', '1%', '0%' ]
  // }
})();
```

## License

MIT © [Milan Szekely](https://github.com/szekelymilan)
