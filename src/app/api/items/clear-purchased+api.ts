import { clearPurchasedItems } from "@/lib/server/db-actions";

export async function POST() {
    try {
        await clearPurchasedItems()
        return Response.json({ ok: true})
    } catch (error) {
        const message = error instanceof Error ? error.message : "Gagal untuk membersihkan item yang berhasil"
        return Response.json({ error: message}, {status: 500})
    }
}