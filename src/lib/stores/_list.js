// @index(['./**/*.svelte', './templ/*.js'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)

// @endindex
// @index(['./**/*.svelte'], (f, _, e) => `${e.isFirst ? '/* \n import { \n' : ''} ${_.pascalCase(f.name)}${e.isLast ? '\n } from "lib/_liblist"; \n*/' : ','}`)

// @endindex
// @index(['../data/api/**/*.js', './static/**/*.js'], f => `import ${f.name} from '${f.path}';`)
import fetchDb from '../data/api/fetchDb';
import fetchJsonEditor from '../data/api/fetchJsonEditor';
import sleep from '../data/api/sleep';
import supabase from '../data/api/supabase';
// @endindex