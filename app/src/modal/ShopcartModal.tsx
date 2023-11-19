import { Button, Content, DialogClose, DialogContent, DialogHeader, DialogOverlay, DialogTitle, FinalizarCompra, Price, ProductsInCart } from './ShopcartModalStyles'

import * as Dialog from '@radix-ui/react-dialog'

import cartSvg from '../assets/cart.svg'
import ShopcartCard from './components/ShopcartCard'
import { ProductType } from '../App'
import { useState } from 'react'

interface PropsQtd {
    qtd: number
    data: ProductType[]
    remover: (id: number) => void
}

export default function ShopcartModal({qtd, data, remover}: PropsQtd) {

    const [totalPrice, setTotalPrice] = useState(0)

    function adicionaPrecoDeProdutoRepetido(price: number) {
        setTotalPrice(totalPrice + price)
    }

    const total = data.reduce(function(total, produtoAtual) {
        return total + parseFloat(produtoAtual.price)
    }, 0)

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Button>
                        <img src={cartSvg} />
                        <span>{qtd}</span>
                    </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <DialogOverlay />
                    <DialogContent>
                        <Content>
                            <DialogHeader>
                                <DialogTitle>Carrinho de compras</DialogTitle>
                                <DialogClose>
                                    X
                                </DialogClose>
                            </DialogHeader>
                            <ProductsInCart>
                                {data && data.map((product) => {
                                    return <ShopcartCard 
                                            key={product.id} 
                                            id={product.id} 
                                            name={product.name} 
                                            photo={product.photo}
                                            price={product.price} 
                                            removerProduct={remover}
                                            adicionaPreco={adicionaPrecoDeProdutoRepetido}
                                        />
                                })}
                            </ProductsInCart>
                        </Content>
                        <Price>
                            <p>Total:</p>
                            <p>R$ {total + totalPrice}</p>
                        </Price>
                        <FinalizarCompra>Finalizar compra</FinalizarCompra>    
                    </DialogContent>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}
