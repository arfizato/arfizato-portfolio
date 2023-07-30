import fs from 'fs'
export async function GET({ url }){
  var name = url.searchParams.get('file') ?? ''
  const data = await fs.promises.readFile(`./bucket/${name}`)
  return new Response(await data, {headers: {'Cache-Control': 'max-age=604800, stale-while-revalidate=86400'}})
}