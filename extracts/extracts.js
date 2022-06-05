// https://www.npmjs.com/package/utilmonkey

import { extract } from npm
import { connection } from npm

export function registry(){
connection = new connection()
extracted = extract.set('https://registry.npmjs.org/utilmonkey')
extracted.init().use('proxy').connection('https').git('https://github.com/cyberdev101/utilmonkey')
connection.close(1)
}