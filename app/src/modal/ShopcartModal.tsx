import { Button, Content, DialogClose, DialogContent, DialogHeader, DialogOverlay, DialogTitle, FinalizarCompra, Price, ProductsInCart } from './ShopcartModalStyles'

import * as Dialog from '@radix-ui/react-dialog'

import cartSvg from '../assets/cart.svg'
import ShopcartCard from './components/ShopcartCard'
import { ProductType } from '../App'
import { useState } from 'react'
import { priceFormatter } from '../utils/formatter'

interface PropsQtd {
    qtd: number
    data: ProductType[]
    remover: (id: number) => void
}

export default function ShopcartModal({qtd, data, remover}: PropsQtd) {

    let totalValue = data.reduce(function(total, produtoAtual) {
        return total + parseFloat(produtoAtual.price)
    }, 0)

    const [totalPrice, setTotalPrice] = useState(0)

    let total = totalValue + totalPrice
    
    function adicionaPrecoDeProdutoRepetido(price: number) {
        setTotalPrice(totalPrice + price)
    }

    function removePrecoDeProdutoRepetido(price: number) {
        setTotalPrice(totalPrice - price)
    }

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
                                {!data.length && <p className='emptyCart'>Nenhum produto adicionado</p>}
                                {data && data.map((product) => {
                                    return <ShopcartCard 
                                            key={product.id} 
                                            id={product.id} 
                                            name={product.name} 
                                            photo={product.photo}
                                            price={product.price} 
                                            removerProduct={remover}
                                            adicionaPreco={adicionaPrecoDeProdutoRepetido}
                                            removePreco={removePrecoDeProdutoRepetido}
                                        />
                                })}
                            </ProductsInCart>
                        </Content>
                        <Price>
                            <p>Total:</p>
                            <p>{priceFormatter.format(total)}</p>
                        </Price>
                        <FinalizarCompra>Finalizar compra</FinalizarCompra>    
                    </DialogContent>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}
