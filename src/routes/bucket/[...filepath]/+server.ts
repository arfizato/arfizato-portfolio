import { error } from '@sveltejs/kit'
import { readFile } from 'fs/promises'
import type { RequestHandler } from './$types'

/**
 * Only use this strategy when expecting to have users upload
 * images dynamically.
 * 
 * This is typically used for server environments like nodejs.
 * 
 * On top of the usual `vite build` script, this strategy requires adding
 * the custom folder inside the root of build/dist directory. That storage
 * folder we put inside will be used for production. For development we will
 * use the one made on the root of the project. To illustrate this:
 * 
 * awesome-project
 * ├─ build
 * │  ├─ storage // generate this emtpty folder every time we build, users will have their uploaded content here
 * ├─ src
 * ├─ storage // this one is used for development
 */
export const GET = (async ({ params, route }) => {
    try {
        const path = route.id
            .replace('/bucket', 'bucket')
            .replace('[...filepath]', params.filepath)
        const imageBuffer = await readFile(path)

        return new Response(imageBuffer, {
            headers: {
                "Cache-Control": "max-age=604800, stale-while-revalidate=86400"
            }
        })
    } catch (e) {
        throw error(404, "Resource not found.")
    }
}) satisfies RequestHandler