import { createdGroceryItem, listGroceryItems } from "@/lib/server/db-actions";

export async function GET() {
    try {
        const items = await listGroceryItems()
        return Response.json({ items})
    } catch (error) {
        const message = error instanceof Error ? error.message : "Gagal mengambil item"
        return Response.json({ error: message}, {status: 500})
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, category, quantity, priority} = body

        if (!name || !category || !priority) {
            return Response.json({ error: "Mohon isi semua Kolom yang wajib di isi"}, { status: 400})
        }

        const item = await createdGroceryItem({ name, category, quantity, priority})

        return Response.json({ item}, {status: 201})
    } catch (error) {
        const message = error instanceof Error ? error.message : "Gagal membuat item"
        return Response.json({ error: message}, {status: 500})
    }
}