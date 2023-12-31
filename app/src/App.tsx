import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard"
import { Navbar, Container, Contents, Footer } from "./styles/styles"
import { api } from "./service/api"
import Loading from "./components/Loading"

import { motion } from 'framer-motion'
import ShopcartModal from "./modal/ShopcartModal"

export interface ProductType {
  id: number,
  name: string,
  price: string,
  photo: string
  description: string
}

function App() {
  const [produtos, setProdutos] = useState<ProductType[] | null>(null)
  const [produtosAdicionados, setProdutosAdicionados] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  function handleProductAdd(data: ProductType) {
    setProdutosAdicionados([...produtosAdicionados, data]);
  }

  function handleProductRemove(id: number) {
    const newListProduts = produtosAdicionados.filter(produto => produto.id !== id)
    setProdutosAdicionados(newListProduts);
  }

  async function getProducts() {
    api.get('').then((response) => {
      setIsLoading(false)
      setProdutos(response.data.products)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Navbar>
          <div>
              <h1>MKS</h1>
              <p>Sistemas</p>
          </div>
          <ShopcartModal 
            qtd={produtosAdicionados.length} 
            data={produtosAdicionados} 
            remover={handleProductRemove}
          />
      </Navbar>
      <Container>
          <Contents>
            {isLoading && <Loading />}
            {produtos && produtos.map(produto => {
              return (
                <motion.div 
                  key={produto.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <ProductCard
                    key={produto.id}
                    id={produto.id}  
                    adicionar={handleProductAdd}
                    name={produto.name}
                    price={produto.price}
                    src={produto.photo}
                    description={produto.description}
                  />
                </motion.div>
              )
            })}
          </Contents>
      </Container>
      <Footer>
        <p>MKS sistemas © Todos os direitos reservados - Desenvolvido por <a href="https://www.linkedin.com/in/robson-lima-ba5bb31a8" target="_blank">Robson Wendel</a></p>
      </Footer>
    </>
  )
}

export default App
