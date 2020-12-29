import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
const Banner = () => {
    return (
        <Container fluid className="banner">
            <Image src="/imgs/mouse.png" alt="mouse" className="mouse-img" />
            <div className="imgc">
                <h1 className="imgc-text">WELCOME <br/> TO LOGITECH GAMING</h1>
                <p className="imgc-body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe consequuntur nemo eaque nam minus perspiciatis optio beatae harum veritatis, natus reiciendis quaerat dolorum nostrum non fugiat quos, maiores deserunt nisi. Modi ad in atque voluptas nostrum fugiat vero? Aliquid animi consequatur voluptates ad autem odio culpa quis perferendis quia voluptatem esse maiores dolorum maxime, eum ducimus itaque quisquam corporis, quos blanditiis nesciunt sapiente sint saepe tempora. Quos architecto recusandae in nulla! Corrupti adipisci, perferendis, voluptatem eveniet deserunt quia accusantium, nisi error quos veniam illum aut vitae necessitatibus? Perspiciatis magni nulla mollitia harum, nihil amet pariatur. Numquam, cupiditate? Quisquam, a mollitia!</p>
            </div>
        </Container>
    )
}

export default Banner