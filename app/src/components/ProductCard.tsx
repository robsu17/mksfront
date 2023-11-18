import { CardButton, CardContainer, Description, NameProduct, ProductContents, ProductImgContainer } from './ProductCardStyles'

import shopcart from '../assets/shop.svg'
import { ProductType } from '../App'

import { useState } from 'react'

interface CardProps {
    id: number
    src: string
    name: string
    price: string
    description: string
    adicionar: (data: ProductType) => void
}

export default function ProductCard({ id, name, price, src, description, adicionar }: CardProps) {
    const [selected, setSelected] = useState(false)


    function handleAdicionar() {
        adicionar({
            id: id,
            name: name,
            description: description,
            price: price,
            photo: src
        } as ProductType)
        setSelected(true)
    }
    
    return (
        <CardContainer>
            <ProductContents>
                <ProductImgContainer>
                    <img src={src} alt={name} />
                </ProductImgContainer>
                <NameProduct>
                    <span>{name}</span>
                    <div>R${price}</div>
                </NameProduct>
                <Description>
                    <p>{description}</p>
                </Description>
            </ProductContents>
            <CardButton 
                onClick={handleAdicionar} $primary={selected}
            >
                {!selected && <img src={shopcart} alt="shop" />}
                {selected ? "Adicionado ao carrinho" : "Comprar"}
            </CardButton>
        </CardContainer>
    )
}