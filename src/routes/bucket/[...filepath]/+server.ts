import { error } from '@sveltejs/kit'
import { readFile } from 'fs/promises'
import type { RequestHandler } from './$types'

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