const ProgArchivesClient = require('.');
const test = require('ava');

test('start', t => {
  t.pass();
});

test('albumInfo#1', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('king crimson - in the court');
  t.is(albumInfo.fullAlbumName, 'King Crimson - In The Court Of The Crimson King');
});

test('albumInfo#2', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('genesis - selling england');
  t.is(albumInfo.fullAlbumName, 'Genesis - Selling England By The Pound');
});

test('albumInfo#3', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('pink floyd - dark side');
  t.is(albumInfo.fullAlbumName, 'Pink Floyd - Dark Side Of The Moon');
});

test('albumInfo#4', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('van der graaf - h to he');
  t.is(albumInfo.fullAlbumName, 'Van Der Graaf Generator - H To He, Who Am The Only One');
});

test('albumInfo#5', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('genesis - lamb lies down');
  t.is(albumInfo.fullAlbumName, 'Genesis - The Lamb Lies Down On Broadway');
});

test('albumInfo#6', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('dream theater - metropolis part 2');
  t.is(albumInfo.fullAlbumName, 'Dream Theater - Metropolis Part 2 - Scenes From A Memory');
});

test('albumInfo#7', async t => {
  const albumInfo = await ProgArchivesClient.getAlbumInfo('caravan - if i could do it');
  t.is(
    albumInfo.fullAlbumName,
    "Caravan - If I Could Do It All Over Again, I'd Do It All Over You",
  );
});
