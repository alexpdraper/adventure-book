const csv = require('csv');
const fs = require('fs');

const parser = csv.parse({
  delimiter: ';',
  columns: true,
});

const writeSpell = ({
  level,
  name,
  school,
  castTime,
  range,
  components,
  duration,
  description
}) => {
  const fileName = name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/-\(ritual\)/g, '')
    .replace(/'/g, '')
    .concat('.md');
  const parsedDescription = description
    .trim()
    .replace(/\*/g, '\\*')
    .replace(/^\(([^\)]+)\)/, 'Materials: *$1*\n\n')
    .replace(/<\/?b>/g, '**')
    .replace(/<\/?i>/g, '*')
    .replace(/•/gm, '-')
    .replace(/\|<br>\|/g, '|\n|')
    .replace(/\s*<br>\s*/g, '\n\n');

  let str = '';
  str += '---\n';
  str += `level: ${parseInt(level, 10)}\n`;
  str += `name: "${name.replace(/'s/g, '’s')}"\n`;
  str += `title: "${name.replace(/'s/g, '’s')}"\n`;
  str += `school: "${school}"\n`;
  str += `castTime: "${castTime}"\n`;
  str += `range: "${range}"\n`;
  str += `components: "${components}"\n`;
  str += `duration: "${duration}"\n`;
  str += '---\n\n';
  str += `${parsedDescription}\n`;

  const writeStream = fs.createWriteStream(`./_spells/${fileName}`, { encoding: 'utf-8' });
  writeStream.write(str);
  writeStream.end();
};

const transformer = csv.transform((data) => {
  writeSpell(data);
});

const file = 'spells';
fs.createReadStream(`./spell-data/${file}.csv`, { encoding: 'utf-8' })
  .pipe(parser)
  .pipe(transformer)
  ;
