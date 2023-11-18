import { ButtonClose, Container } from './ShopcartCardStyles'

interface ShopcartCardProps {
    id: number
    name: string
    photo: string
    price: string
    removerProduct: (id: number) => void
}

export default function ShopcartCard({ id, name, photo, price, removerProduct }: ShopcartCardProps) {

    function handleRemove() {
        removerProduct(id)
    }

    return (
        <Container>
            <ButtonClose onClick={handleRemove}>X</ButtonClose>
            <div>
                <img src={photo} alt={name} />
                <p>{name}</p>
            </div>
            <p>R$ {price}</p>
        </Container>
    )
}