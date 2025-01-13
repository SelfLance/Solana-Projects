import { ActionGetResponse, ACTIONS_CORS_HEADERS } from "@solana/actions"


export async function GET(request: Request) {
    const actionMetadata: ActionGetResponse = {
        icon: "https://images.app.goo.gl/m2eVdWBfS591hj6dA",
        title: "Vote to your Favorite Poll",
        description: "Vote between Cunchy and Smooth peanut butter",
        label: "Vote",
    }
    return Response.json(actionMetadata, { headers: ACTIONS_CORS_HEADERS })
}
