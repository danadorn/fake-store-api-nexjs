

import { Modal } from "../../modal"

export default async function PhotoMaodalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <Modal>
            hello from modal {id}
        </Modal>
        
    )
}