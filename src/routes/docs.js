import { Router } from 'express'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import swaggerUi from 'swagger-ui-express'
import { parse } from 'yaml'


const router = Router()

console.log();

const swaggerYaml = readFileSync(resolve('openapi-spec.yaml'), 'utf8')
const swaggerDocument = parse(swaggerYaml)


router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router