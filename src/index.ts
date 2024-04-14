import { readFile, writeFile } from 'fs/promises';
import { getFooter } from './footer';
const TEMPLATE_PATH = 'README.template.md';

const readmeContent: {[ket: string]: Function} = {
  footer: getFooter,
};

async function genernateReadMe() {
  const getComment = (comment: keyof typeof readmeContent) => `<!-- ${comment} -->`; 
  let template = await readFile(TEMPLATE_PATH, { encoding: 'utf-8' });

  for (const key in readmeContent) {
    const comment = getComment(key);
    const content = await readmeContent[key]();
    template = template.replace(comment, content);
  }

  await writeFile('README.md', template, { encoding: 'utf-8' });
}

genernateReadMe();
