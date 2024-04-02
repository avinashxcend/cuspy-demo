export async function GET() {
    const res = await fetch('https://dummyjson.com/products/1' )
    const data = await res.json()
   
    return Response.json({ data })
  }