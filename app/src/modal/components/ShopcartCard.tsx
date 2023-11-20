import { useState } from 'react'
import { ButtonClose, Container, Quantity } from './ShopcartCardStyles'
import { priceFormatter } from '../../utils/formatter'

interface ShopcartCardProps {
    id: number
    name: string
    photo: string
    price: string
    removerProduct: (id: number) => void
    adicionaPreco: (price: number) => void
    removePreco: (price: number) => void
}

export default function ShopcartCard({ id, name, photo, price, removerProduct, adicionaPreco, removePreco }: ShopcartCardProps) {

    const [contador, setContador] = useState(1)

    let preco = 0
    function handleRemove() {
        const precoRemovido = parseFloat(price) * (contador - 1)
        removePreco(precoRemovido)
        removerProduct(id)
    } 

    const handleAdd = () => {
        setContador(contador + 1)
        preco = preco + parseFloat(price) 
        adicionaPreco(preco)
    }

    const handleRem = () => {
        if (contador > 1) {
            setContador(contador - 1)
            preco = preco - parseFloat(price) 
            adicionaPreco(preco)
        }
    }

    return (
        <Container>
            <ButtonClose onClick={handleRemove}>x</ButtonClose>
            <div>
                <img src={photo} alt={name} />
                <p>{name}</p>
            </div>
            <Quantity>
                <button className='one' onClick={handleAdd}>+</button>
                <p>{contador}</p>
                <button className='two' onClick={handleRem}>-</button>
            </Quantity>
            <div className='price'>
                <p>{priceFormatter.format(parseFloat(price))}</p>
            </div>
        </Container>
    )
}