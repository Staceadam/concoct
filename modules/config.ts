// get config file at base of repo
import path from 'path'
import fs from 'fs'

const SCHEMA_PATH = path.resolve('schema.potion')

const getSchema = () => {
    try {
        return fs.readFileSync(SCHEMA_PATH, 'utf8')
    } catch (error) {
        console.log(error)
    }
}

export const outputConfig = () => {
    const schema = getSchema()
    return schema
}
