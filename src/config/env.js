import env from 'dotenv'
env.config()
import envar from 'env-var'
export const envs = {
    PORT : envar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH : envar.get('PUBLIC_PATH').default('public').asString()
}